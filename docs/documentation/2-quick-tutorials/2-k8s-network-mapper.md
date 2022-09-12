---
sidebar_position: 2
title: Map your cluster
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you
through installing Otterize, mapping traffic and tracking changes.

## Install Network Mapper

```bash
git clone git@github.com:otterize/network-mapper.git
cd network-mapper
helm upgrade --install --create-namespace -n otterize mapper helm/ -f helm/values.yaml
cd src/cli/cmd/
go build -o otterize .
sudo cp ./otterize /usr/local/bin/
```

:::danger
Decide if we show mapped traffic by namespace or not. If not, then the explanation about pod identities will confuse
users as the output ignores namespace.
:::

## How to

### Show mapped traffic

{@include: ../_common/network-mapper/intents-list-export.md}

:::info
See the [Network Mapper documentation](/documentation/network-mapper/intro) for more details about the CLI.
:::

### Change traffic -> Sniff&Diff

One of the benefits for using the network mapper is the ability to track changes over time for communication within your
cluster.

1. Let's save the current state of traffic from the cluster into a file we will compare against later
   ```shell
   otterize intents list > intents-original.txt
   ```


2. And now we can add traffic to the cluster and see how the Network Mapper tracks it. You can do that by deploying our
   example
   which consists of two pods: client and server, communicating over HTTP. Deploy example:
   ```shell
   kubectl apply -n otterize-tutorial-mapper -f https://docs.otterize.com/code-examples/network-mapper/all.yaml
   ```
3. Check that the `client` and server `pods` were deployed
   ```bash
   kubectl get pods -n otterize-tutorial-mapper
   ```
   You should see
   ```
   NAME                      READY   STATUS    RESTARTS   AGE
   client-756f7677f8-d6qdq   1/1     Running   0          45s
   server-6698c58cbc-ssxvx   1/1     Running   0          45s
   ```
4. Export the updated observed intents.
   ```shell
   otterize intents list
   ```
   You will now see the client and server pods communication in addition
   to the previously observed traffic.
   ```shell
   # highlight-start
   client calls:
     - server
   # highlight-end
   
   checkoutservice calls:
     - orderservice
   
   orderservice calls:
     - kafka
   ```
5. We can also compare both output to see the difference. We'll start by saving the updated state to a file with
   ```bash
   otterize intents list > intents-updated.txt
   ```
6. And compare the original file with the updated file using
   ```bash
   diff --color=always -y intents-original.txt intents-updated.txt;echo
   ```
   You should see a result looking like
   ```bash
                                         > client calls:
                                         >   - server
                                         >
   checkoutservice calls:                  checkoutservice calls:
     - orderservice                          - orderservice

   orderservice calls:                     orderservice calls:
     - kafka                                 - kafka
      ```

## What's next

<!-- [Intents Operator](/documentation/intents-operator): -->
Now that we observed cluster intents we can use them with the Intents Operator.

- Configure [network policies](/documentation/getting-started/network-policies)
- Configure secure access for Kafka

### Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-mapper
helm uninstall -n otterize mapper
```