"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),c=n(2466);const m="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n;const{lazy:l,block:u,defaultValue:d,values:h,groupId:f,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(t=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,s.U)(),[w,S]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:z}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&S(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),a=y[n].value;a!==w&&(z(t),S(a),null!=f&&T(f,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},k)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:P,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},2711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={sidebar_position:5,title:"Deploy mTLS between pods"},s=void 0,c={unversionedId:"quick-tutorials/k8s-mtls",id:"quick-tutorials/k8s-mtls",title:"Deploy mTLS between pods",description:"Otterize can automatically provision mTLS credentials by using the service identities implied by Kubernetes.",source:"@site/docs/quick-tutorials/k8s-mtls.mdx",sourceDirName:"quick-tutorials",slug:"/quick-tutorials/k8s-mtls",permalink:"/quick-tutorials/k8s-mtls",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quick-tutorials/k8s-mtls.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Deploy mTLS between pods"},sidebar:"docSidebar",previous:{title:"Automate secure Kafka access",permalink:"/quick-tutorials/k8s-kafka-mtls"},next:{title:"Shadow mode - network policies",permalink:"/realistic-example/shadow-mode-network-policies"}},m={},p=[{value:"Deploy the example",id:"deploy-the-example",level:2},{value:"Watch it in action",id:"watch-it-in-action",level:2},{value:"Inspect credentials",id:"inspect-credentials",level:2},{value:"Using Otterize Cloud",id:"using-otterize-cloud",level:3},{value:"Using CLI",id:"using-cli",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Otterize can automatically provision mTLS credentials by using the service identities implied by Kubernetes.\nThis tutorial will walk you through deploying mTLS certificates on a sample client-server deployment using the ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration/credentials-operator"},"Otterize Credentials operator"),", which works with a ",(0,r.kt)("a",{parentName:"p",href:"https://spiffe.io/docs/latest/spire-about/"},"SPIRE server")," to achieve this."),(0,r.kt)("p",null,"In this tutorial, we will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy client and server pods communicating over HTTP with mTLS."),(0,r.kt)("li",{parentName:"ul"},"See that mTLS credentials were autogenerated.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Install Otterize in your cluster"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can skip this section if Otterize is already installed in your cluster.")),(0,r.kt)("p",null,"   You'll need ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," installed on your machine to install Otterize as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace\n")),(0,r.kt)("p",null,"This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,r.kt)("p",null,"After all the pods are ready you should see the following (or similar) in your terminal when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                       READY  STATUS  RESTARTS AGE\ncredentials-operator-controller-manager-6c56fcfcfb-vg6m9   2/2    Running   0     9s\nintents-operator-controller-manager-65bb6d4b88-bp9pf       2/2    Running   0     9s\notterize-network-mapper-779fffd959-twjqd                   1/1    Running   0     9s\notterize-network-sniffer-65mjt                             1/1    Running   0     9s\notterize-spire-agent-lcbq2                                 1/1    Running   0     9s\notterize-spire-server-0                                    2/2    Running   0     9s\notterize-watcher-b9bf87bcd-276nt                           1/1    Running   0     9s\n"))),(0,r.kt)("h2",{id:"deploy-the-example"},"Deploy the example"),(0,r.kt)("p",null,'Our example consists of two pods, "client" and "server", communicating over HTTP with mTLS.\nOtterize makes mTLS easy, requiring just 3 simple changes to a client pod spec:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Generate credentials"),": add the ",(0,r.kt)("inlineCode",{parentName:"li"},"credentials-operator.otterize.com/tls-secret-name")," annotation, which tells the Otterize\nCredentials operator to generate mTLS credentials, and to store them in a Kubernetes secret\nwhose name is the value of this annotation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Expose credentials in a volume"),": add a volume containing this secret to the pod."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Mount the volume"),": mount the volume in every container in the pod.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see this structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  template:\n    metadata:\n      annotations:\n        # highlight-next-line\n        # 1. Generate credentials as a secret called "client-credentials-secret":\n        credentials-operator.otterize.com/tls-secret-name: client-credentials-secret\n        ...\n    spec:\n      volumes:\n        # highlight-start\n        # 2. Create a volume containing this secret:\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n        # highlight-end\n        ...\n      containers:\n        - name: client\n          ...\n          volumeMounts:\n            # highlight-start\n            # 3. Mount volume into container\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n            # highlight-end\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the complete YAML files of the example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: otterize-tutorial-kafka-mtls\n"))),(0,r.kt)(l.Z,{value:"client-deployment.yaml",label:"client-deployment.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myclient\n  namespace: otterize-tutorial-kafka-mtls\nspec:\n  selector:\n    matchLabels:\n      app: myclient\n  template:\n    metadata:\n      labels:\n        app: myclient\n      annotations:\n        credentials-operator.otterize.com/tls-secret-name: myclient-credentials-secret\n    spec:\n      containers:\n        - name: myclient\n          image: golang\n          command: [ "/bin/sh", "-c", "--" ]\n          args: [ "while true; do cd /app; cp src/* .; go get main; go run .; sleep infinity; done" ]\n          volumeMounts:\n            - name: ephemeral\n              mountPath: /app\n            - mountPath: /app/src\n              name: myclient-go\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n      volumes:\n        - name: myclient-go\n          configMap:\n            name: myclient-go\n        - name: otterize-credentials\n          secret:\n            secretName: myclient-credentials-secret\n        - name: ephemeral\n          emptyDir: { }\n'))),(0,r.kt)(l.Z,{value:"client-configmap.yaml",label:"client-configmap.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: myclient-go\n  namespace: otterize-tutorial-kafka-mtls\ndata:\n  myclient.go: |\n    package main\n    \n    import (\n        "crypto/tls"\n        "crypto/x509"\n        "fmt"\n        "github.com/Shopify/sarama"\n        "github.com/sirupsen/logrus"\n        "io/ioutil"\n        "time"\n    )\n    \n    const (\n        kafkaAddr = "kafka.kafka:9092"\n        testTopicName = "mytopic"\n        certFile = "/var/otterize/credentials/cert.pem"\n        keyFile = "/var/otterize/credentials/key.pem"\n        rootCAFile = "/var/otterize/credentials/ca.pem"\n    )\n    \n    func getTLSConfig()( * tls.Config, error) {\n        cert, err: = tls.LoadX509KeyPair(certFile, keyFile)\n        if err != nil {\n            return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n        }\n    \n        pool: = x509.NewCertPool()\n        rootCAPEM, err: = ioutil.ReadFile(rootCAFile)\n        if err != nil {\n            return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n        }\n        pool.AppendCertsFromPEM(rootCAPEM)\n    \n        return &tls.Config {\n            Certificates: [] tls.Certificate {\n                cert\n            },\n            RootCAs: pool,\n        }, nil\n    }\n    \n    func send_messages(producer sarama.SyncProducer) {\n        i: = 1\n        for {\n            msg: = fmt.Sprintf("Message %d [sent by client]", i)\n            _,\n            _,\n            err: = producer.SendMessage( & sarama.ProducerMessage {\n                Topic: testTopicName,\n                Partition: -1,\n                Value: sarama.StringEncoder(msg),\n            })\n            if err != nil {\n                return\n            }\n            fmt.Printf("Sent message - %s\\n", msg)\n            time.Sleep(2 * time.Second)\n            i++\n        }\n    }\n    \n    func loop_kafka() error {\n        addrs: = [] string {\n            kafkaAddr\n        }\n    \n            config: = sarama.NewConfig()\n        fmt.Println("Loading mTLS certificates")\n        config.Net.TLS.Enable = true\n        tlsConfig,\n        err: = getTLSConfig()\n        if err != nil {\n            return err\n        }\n        config.Net.TLS.Config = tlsConfig\n        fmt.Println("Connecting to Kafka")\n        config.Net.DialTimeout = 5 * time.Second\n        config.Net.ReadTimeout = 5 * time.Second\n        config.Net.WriteTimeout = 5 * time.Second\n        client,\n        err: = sarama.NewClient(addrs, config)\n        if err != nil {\n            return err\n        }\n        fmt.Println("Creating a producer and a consumer for -", testTopicName)\n        config.Producer.Return.Successes = true\n        config.Producer.Timeout = 5 * time.Second\n        config.Consumer.MaxWaitTime = 5 * time.Second\n        config.Producer.Return.Errors = true\n        config.Consumer.Return.Errors = true\n        producer,\n        err: = sarama.NewSyncProducerFromClient(client)\n        if err != nil {\n            return err\n        }\n    \n        consumer,\n        err: = sarama.NewConsumerFromClient(client)\n        if err != nil {\n            return err\n        }\n        fmt.Println("Sending messages")\n        go send_messages(producer)\n    \n        partConsumer,\n        err: = consumer.ConsumePartition(testTopicName, 0, 0)\n        if err != nil {\n            return err\n        }\n    \n        for msg: = range partConsumer.Messages() {\n            fmt.Printf("Read message - %s\\n", msg.Value)\n        }\n        return nil\n    }\n    \n    func main() {\n        for {\n            err: = loop_kafka()\n            logrus.WithError(err).Println()\n            fmt.Println("Loop exited")\n            time.Sleep(2 * time.Second)\n        }\n    }\n'))),(0,r.kt)(l.Z,{value:"client.js",label:"client.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst https = require('https');\n\nconst options = {\n    hostname: 'server.otterize-tutorial-mtls',\n    port: 443,\n    path: '/hello',\n    method: 'GET',\n    cert: fs.readFileSync('/var/otterize/credentials/cert.pem'),\n    key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n    ca: fs.readFileSync('/var/otterize/credentials/ca.pem')\n}\n\nconst req = https.request(\n    options,\n    res => {\n        res.on('data', function (data) {\n            console.log(data.toString())\n        });\n    }\n);\n\nreq.end();\n"))),(0,r.kt)(l.Z,{value:"server.js",label:"server.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const https = require(`https`);\nconst fs = require(`fs`);\n\nconst options = {\n  key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n  cert: fs.readFileSync('/var/otterize/credentials/cert.pem'),\n  ca: fs.readFileSync('/var/otterize/credentials/ca.pem'),\n  requestCert: true\n};\n\nhttps.createServer(\n    options,\n    (req, res) => {\n        const peerCert = req.connection.getPeerCertificate();\n        const ownCert = req.connection.getCertificate();\n        console.log(\"Received request:\");\n        console.log(peerCert.subject.CN + \":\\t\" + req.method + \" \" + req.url);\n        if (req.url === '/hello') {\n            res.writeHead(200);\n            res.end('mTLS hello world\\nfrom: ' + ownCert.subject.CN + '\\nto client: ' + peerCert.subject.CN);\n        } else {\n            res.end();\n        }\n    }).listen(443);\n"))))),(0,r.kt)("p",null,"Deploy the client and server using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/mtls/all.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional: check deployment status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mtls\n")),(0,r.kt)("p",null,"You should see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,r.kt)("h2",{id:"watch-it-in-action"},"Watch it in action"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the client can successfully call the server using HTTP with mTLS:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 3 -n otterize-tutorial-mtls deploy/client\n")),(0,r.kt)("p",{parentName:"li"},"The client makes requests and prints out the server's response; our example server will respond with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"common name")," of the server's certificate as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"common name")," of the client's certificate:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mTLS hello world\nfrom: server.otterize-tutorial-mtls          # server's common name in the certificate\nto client: client.otterize-tutorial-mtls     # client's common name in the certificate\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also confirm on the server side that it sees requests from this authenticated client:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 1 -n otterize-tutorial-mtls deploy/server\n")),(0,r.kt)("p",{parentName:"li"},"The example server logs the common name of every client that makes a request:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"client.otterize-tutorial-mtls:  GET /hello\n")))),(0,r.kt)("admonition",{title:"Certificate lifecycle management",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Otterize leverages SPIRE to manage certificate lifecycle management tasks such as rotation, revocation, etc."),(0,r.kt)("p",{parentName:"admonition"},"We recommend reloading credentials before each use, as Otterize makes sure\nthe mounted credentials are constantly refreshed and up to date.")),(0,r.kt)("h2",{id:"inspect-credentials"},"Inspect credentials"),(0,r.kt)("h3",{id:"using-otterize-cloud"},"Using Otterize Cloud"),(0,r.kt)("p",null,"Otterize Cloud can be used for visualizing your network and overlay certificate infromation"),(0,r.kt)("img",{src:"/img/quick-tutorials/mtls/creds.png",alt:"Discovered intents",width:"600"}),(0,r.kt)("h3",{id:"using-cli"},"Using CLI"),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl")," to inspect the generated credentials. The credentials are stored as a Kubernetes secret\nand are then mounted as a file into the container."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrieve the credentials from the Kubernetes secret:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.svid\\.pem}' | base64 -d > svid.pem\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inspect the credentials with ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -in svid.pem -text | head -n 15\n")),(0,r.kt)("p",{parentName:"li"},"You should see output similar to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-x509"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = US, O = SPIRE\n        Validity\n            Not Before: Aug 24 12:19:57 2022 GMT\n            Not After : Sep 23 12:20:07 2022 GMT\n# highlight-next-line\n        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls       # the client's name\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see that Otterize generated an X.509 keypair using the pod\'s name ("client")\nand namespace ("otterize-tutorial-mtls"): ',(0,r.kt)("inlineCode",{parentName:"p"},"client.otterize-tutorial-mtls"),".\nThe certificate belongs to a chain of trust rooted at the SPIRE server."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see what happened behind the scenes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We annotated the pods to let Otterize know it should generate mTLS credentials."),(0,r.kt)("li",{parentName:"ol"},"The Otterize Credentials operator:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Created entries in the SPIRE server for the annotated pods."),(0,r.kt)("li",{parentName:"ol"},"Generated matching mTLS credentials using the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Stored the mTLS credentials into Kubernetes secrets."))),(0,r.kt)("li",{parentName:"ol"},"The secrets were mounted (separately) into each pod's container."),(0,r.kt)("li",{parentName:"ol"},"The pods communicated with each other using mutual TLS-authenticated HTTPS."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Otterize defaults to generating credentials with an expiry time of 1 day. The certificates are\nautomatically refreshed before expiring, and therefore you must always read the credentials from file rather than caching them."),(0,r.kt)("p",{parentName:"admonition"},"To set a longer expiration time, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials-operator.otterize.com/cert-ttl")," annotation for your pods.\nFor more information, see ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration/credentials-operator"},"the documentation for the Credentials operator"))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to manage and ",(0,r.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-mtls"},"automatically provision mTLS")," credentials within a Kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},"Enforce ",(0,r.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-kafka-mtls"},"secure Kafka access")," with mTLS."),(0,r.kt)("li",{parentName:"ul"},"Learn more about how the ",(0,r.kt)("a",{parentName:"li",href:"/reference/configuration/credentials-operator"},"Otterize Credentials operator")," works.")),(0,r.kt)("h2",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed examples run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f https://docs.otterize.com/code-examples/mtls/all.yaml\n")))}d.isMDXComponent=!0}}]);