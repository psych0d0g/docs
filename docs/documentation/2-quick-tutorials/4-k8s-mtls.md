---
sidebar_position: 4
title: Deploy mTLS between pods
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# mTLS

This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.
We will:

- Install Otterize
- Learn how to annotate pods for automatic credentials generation
- Deploy client and server pods communicating over HTTPS and provision credentials to them
- Inspect the credentials

:::note
You can skip this section if Otterize is already installed in your cluster.
:::
{@include: ../_common/install-otterize.md}

## Pod annotation  (explainer)

To generate credentials for a pod we simply need to update the deployment by annotating it.
The required steps are to

1. Annotate the pod - Otterize automatically identifies the `otterize/credentials-secret-name` annotation, generates
   mTLS credentials, and stores them as K8s secret named as the annotation value.
2. Mount the credentials stored as a K8s secret as a volume
3. Mount the volume into the container

```yaml
spec:
  template:
    metadata:
      ...
      annotations:
        # highlight-next-line
        otterize/credentials-secret-name: client-credentials-secret       # 1 Generate credentials
    spec:
      volumes:
        # highlight-start
        - name: otterize-credentials
          secret:
            secretName: client-credentials-secret                      # 2 Mount credentials as a volume
            # highlight-end
      containers:
        - name: client
        ...
        volumeMounts:
          # highlight-start
          - name: otterize-credentials
            mountPath: /var/otterize/credentials                      # 3 Mount volume into container 
            readOnly: true
            # highlight-end
```

:::info
Visit the [Behavior](/documentation/credential-operator/behavior) section to view all parameters available as pod
annotation for generating mTLS credentials.
:::

## Deploy tutorial

Our example consists of two pods: client and server communicating over HTTPS using credentials
provisioned by Otterize.
<details>
<summary>Code</summary>
<Tabs>
<TabItem value="client.js" label="client.js" default>

   ```js
   const fs = require('fs');
const https = require('https');

const options = {
    hostname: 'server.otterize-tutorial-mtls',
    port: 443,
    path: '/hello',
    method: 'GET',
    cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),
    key: fs.readFileSync('/var/otterize/credentials/key.pem'),
    ca: fs.readFileSync('/var/otterize/credentials/bundle.pem')
}

const req = https.request(
    options,
    res => {
        res.on('data', function (data) {
            console.log(data.toString())
        });
    }
);

req.end();
   ```

</TabItem>
<TabItem value="server.js" label="server.js" default>

   ```js
   const https = require(`https`);
const fs = require(`fs`);

const options = {
    key: fs.readFileSync('/var/otterize/credentials/key.pem'),
    cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),
    ca: fs.readFileSync('/var/otterize/credentials/bundle.pem'),
    requestCert: true
};

https.createServer(options, (req, res) => {
    console.log(req.method + " " + req.url);
    if (req.url === '/hello') {
        res.writeHead(200);
        res.end(`Hello world mTLS`);
    } else {
        res.end();
    }
}).listen(443);
   ```

</TabItem>
</Tabs>
</details>

1. Deploy the `client` and `server` using `kubectl`.
   ```bash
   kubectl apply -f https://docs.otterize.com/code-examples/mtls/all.yaml
   ```
2. Check that the `client` and server `pods` were deployed
   ```bash
   kubectl get pods -n otterize-tutorial-mtls
   ```
   You should see
   ```
   NAME                      READY   STATUS    RESTARTS   AGE
   client-5689997b5c-grlnt   1/1     Running   0          35s
   server-6698c58cbc-v9n9b   1/1     Running   0          34s
   ```
3. Confirm that the client can successfully call the server using HTTP over mTLS. The server will reply to the client
   with it's `own` certificate's `common name` and the `client`'s certificate `common name`.

   ```bash
   kubectl logs --tail 3 -n otterize-tutorial-mtls deploy/client
   ```

   You should see the following line

   ```shell
   mTLS hello world
   from: server.otterize-tutorial-mtls          # server's common name in the certificate
   to client: client.otterize-tutorial-mtls     # client's common name in the certificate
   ```
4. You can also follow the server's output log with
   ```bash
   kubectl logs --tail 1 -n otterize-tutorial-mtls deploy/server
   ```

   You should see the following line

   ```shell
   client.otterize-tutorial-mtls:  GET /hello
   ```

## Inspect credentials

We can use openssl to inspect the generated certificates. The certificates are stored as `K8s secrets` and are also
`mounted` into containers.

1. We will first retrieve them from one of the two options

   <Tabs>
     <TabItem value="secret-direct" label="K8s secret" default>
   To retrieve the credentials from the K8s secrets store use:

   ```shell
   kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.svid\.pem}' | base64 -d > svid.pem
   ```
   </TabItem>
   <TabItem value="secret-pod" label="K8s pod mount" default>
   To retrieve the credentials from the container mount use:

   ```shell
   kubectl exec -n otterize-tutorial-mtls -it deploy/client -- cat /var/otterize/credentials/svid.pem > svid.pem
   ```

   </TabItem>
   </Tabs>

2. And then inspect them with

   ```shell
   openssl x509 -in svid.pem -text | head -n 15
   ```
   You should see a similar output to
   ```x509
   Certificate:
       Data:
           Version: 3 (0x2)
           Serial Number:
               0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7
           Signature Algorithm: sha256WithRSAEncryption
           Issuer: C = US, O = SPIRE
           Validity
               Not Before: Aug 24 12:19:57 2022 GMT
               Not After : Sep 23 12:20:07 2022 GMT
   # highlight-next-line
           Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls       # the client's name
           Subject Public Key Info:
               Public Key Algorithm: id-ecPublicKey
                   Public-Key: (256 bit)
                   pub:
   ```

3. You can see that Otterize generated an x509 certificate using the pod's name [_client_] and namespace [_
   otterize-tutorial-mtls_].
   The certificate belongs to a chain of trust starting at the SPIRE server.

## What happened behind the scenes

1. We annotated the pods to let Otterize know it should generate mTLS credentials.
2. The Otterize SPIRE integration operator
    1. Created an entries for the annotated pods with the SPIRE server.
    2. Generated matching mTLS credentials using the SPIRE server.
    3. Stored the mTLS credentials into a K8s secrets.
3. The secrets were mounted (separately) into each pod's container.
4. The pods communicated with each other using HTTP of mutual TLS.

:::note
Otterize defaults to generating credentials with an expiry time of 1 month. For a custom expiry
time you can set the `spire-integration.otterize.com/cert-ttl` annotation for your pods. Read more at [Behavior](/documentation/components/behavior)
:::

## What's next

- Read about how to [integrate](/documentation/sdk-integration/credential-sdk-integration) mTLS into common SDKs and
  frameworks
- Enforce [secure Kafka access](/documentation/getting-started/kafka-mtls) with mTLS

## Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-mtls
```