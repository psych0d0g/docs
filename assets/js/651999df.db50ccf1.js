"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:d,values:k,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[T,C]=(0,r.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:L}=(0,c.o5)();if(null!=f){const e=v[f];null!=e&&e!==T&&y.some((t=>t.value===e))&&C(e)}const z=e=>{const t=e.currentTarget,n=S.indexOf(t),a=y[n].value;a!==T&&(L(t),C(a),null!=f&&w(f,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:A,onFocus:z,onClick:z},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},9814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:3,title:"Deploy mTLS between pods and Kafka"},s=void 0,c={unversionedId:"quick-tutorials/kafka-mtls",id:"quick-tutorials/kafka-mtls",title:"Deploy mTLS between pods and Kafka",description:"This tutorial will walk you through applying intents and deploying mTLS certificates between a client and a Kafka cluster",source:"@site/docs/2-quick-tutorials/3-kafka-mtls.mdx",sourceDirName:"2-quick-tutorials",slug:"/quick-tutorials/kafka-mtls",permalink:"/quick-tutorials/kafka-mtls",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/2-quick-tutorials/3-kafka-mtls.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Deploy mTLS between pods and Kafka"},sidebar:"docSidebar",previous:{title:"Map your cluster",permalink:"/quick-tutorials/k8s-network-mapper"},next:{title:"Deploy mTLS between pods",permalink:"/quick-tutorials/k8s-mtls"}},p={},m=[{value:"Install Otterize",id:"install-otterize",level:2},{value:"Install Kafka",id:"install-kafka",level:2},{value:"Protect a Kafka topic",id:"protect-a-kafka-topic",level:2},{value:"Deploy clients",id:"deploy-clients",level:2},{value:"Apply intents",id:"apply-intents",level:2},{value:"What did we accomplish?",id:"what-did-we-accomplish",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial will walk you through applying intents and deploying mTLS certificates between a client and a Kafka cluster\nand configuring intents for one of its clients.\nWe will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Otterize"),(0,r.kt)("li",{parentName:"ul"},"Learn how to configure ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka"},"Bitnami's Kafka chart")," to use Otterize-provided mTLS credentials"),(0,r.kt)("li",{parentName:"ul"},"Deploy a Kafka cluster"),(0,r.kt)("li",{parentName:"ul"},"Learn how to annotate pods for automatic credentials generation"),(0,r.kt)("li",{parentName:"ul"},"Deploy a client connecting to Kafka with mTLS"),(0,r.kt)("li",{parentName:"ul"},"Apply intents to configure Kafka ACLs"),(0,r.kt)("li",{parentName:"ul"},"Inspect the credentials")),(0,r.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For this tutorial, we'll disable the network policy component, to focus on the Kafka ACL authorization mechanism.\nIf you already have Otterize installed, redeploy it as shown below. You can always re-enable the network policy component\nlater by deploying it as shown below but without the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," flag.")),(0,r.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install -n otterize-system --create-namespace \\\n--set intentsOperator.operator.enableNetworkPolicyCreation=false otterize otterize/otterize-kubernetes\n")),(0,r.kt)("p",null,"You can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,r.kt)("h2",{id:"install-kafka"},"Install Kafka"),(0,r.kt)("p",null,"We will deploy a Kafka cluster using bitnami's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka"},"chart"),"\nTo configure the chart to use the Otterize-provided credentials we need to configure it to use SSL\nand trust Otterize to configure ACLs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure Otterize as a super user to grant it access to configure ACLs"),(0,r.kt)("li",{parentName:"ol"},"Use SSL for its listeners"),(0,r.kt)("li",{parentName:"ol"},"Using pod annotations, tell the SPIRE integration operator how the credentials should be created"),(0,r.kt)("li",{parentName:"ol"},"Authenticate connecting clients using mTLS credentials provided as a K8s secret")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the Helm values.yaml used with the Bitnami chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Configure Otterize as a super user to grant it access to configure ACLs\nsuperUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator-controller-manager.otterize,O=SPIRE,C=US"\n# Use TLS for the Kafka listeners (Kafka calls them SSL)\nlisteners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nadvertisedListeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nlistenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"\n# Annotations for Otterize to generate credentials\npodAnnotations:\n  spire-integration.otterize.com/cert-type: jks\n  spire-integration.otterize.com/tls-secret-name: kafka-tls-secret\n  spire-integration.otterize.com/truststore-file-name: kafka.truststore.jks\n  spire-integration.otterize.com/keystore-file-name: kafka-keystore.jks\n  spire-integration.otterize.com/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"\n# Authenticate clients using mTLS\nauth:\n  clientProtocol: mtls\n  interBrokerProtocol: mtls\n  tls:\n    type: jks\n    existingSecrets:\n      - kafka-tls-secret\n    password: password\nauthorizerClassName: kafka.security.authorizer.AclAuthorizer\n# Allocate resources\nresources:\n  requests:\n    cpu: 50m\n    memory: 256Mi\n'))),(0,r.kt)("p",null,"The following command will deploy a Kafka cluster configured to use Otterize-provided mTLS credentials\nwith permissions for the intents operator to configure ACLs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install --create-namespace -n kafka \\\n  --version 14.x.x \\\n  -f https://docs.otterize.com/code-examples/kafka-mtls/helm/values.yaml kafka bitnami/kafka\n")),(0,r.kt)("p",null,"You can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n kafka -w"),"."),(0,r.kt)("h2",{id:"protect-a-kafka-topic"},"Protect a Kafka topic"),(0,r.kt)("p",null,"Let's protect a single kafka topic (",(0,r.kt)("inlineCode",{parentName:"p"},"mytopic"),") by applying a ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls/kafkaserverconfig.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the KafkaServerConfig"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kafkaserverconfig.yaml",label:"kafkaserverconfig.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha1\nkind: KafkaServerConfig\nmetadata:\n  name: kafkaserverconfig\n  namespace: kafka\nspec:\n  service:\n    name: kafka\n  addr: kafka.kafka:9092\n  tls:\n    certFile: /etc/otterize-spire/svid.pem\n    keyFile: /etc/otterize-spire/key.pem\n    rootCAFile: /etc/otterize-spire/bundle.pem\n  topics:\n    - topic: "mytopic"\n      pattern: literal\n      clientIdentityRequired: true\n      intentsRequired: true\n'))))),(0,r.kt)("p",null,"Upon applying the KafkaServerConfig, an ACL will be configured on Kafka to deny anonymous access to the topic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl logs -n kafka statefulset/kafka | grep "Processing Acl change" | grep mytopic | tail -n 1\n')),(0,r.kt)("p",null,"You should see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[2022-09-13 10:58:32,052] INFO Processing Acl change notification for ResourcePattern\n(resourceType=TOPIC, name=mytopic, patternType=LITERAL), versionedAcls :\nSet(User:ANONYMOUS has DENY permission for operations: ALL from hosts: *), zkVersion : 9\n(kafka.security.authorizer.AclAuthorizer)\n")),(0,r.kt)("h2",{id:"deploy-clients"},"Deploy clients"),(0,r.kt)("p",null,"To generate credentials for the pod we simply need to update the deployment by annotating it.\nThe required steps are to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Annotate the pod; Otterize automatically identifies the ",(0,r.kt)("inlineCode",{parentName:"li"},"otterize/credentials-secret-name")," annotation, generates\nmTLS credentials, and stores them as a K8s secret, where the name of the secret is specified by the annotation."),(0,r.kt)("li",{parentName:"ol"},"Mount the credentials stored as a K8s secret as a volume"),(0,r.kt)("li",{parentName:"ol"},"Mount the volume into the container")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see a detailed example for the configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n    template:\n        metadata:\n        ...\n        annotations:\n            # highlight-next-line\n            otterize/credentials-secret-name: client-credentials-secret       # 1 Generate credentials\n    spec:\n        volumes:\n        # highlight-start\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret                         # 2 Mount credentials as a volume\n        # highlight-end\n        containers:\n        - name: client\n        ...\n    volumeMounts:\n    # highlight-start\n      - name: otterize-credentials\n        mountPath: /var/otterize/credentials                          # 3 Mount volume into container\n        readOnly: true\n    # highlight-end\n"))),(0,r.kt)("p",null,"Our simple example consists of a single client pod and a Kafka broker."),(0,r.kt)("p",null,"We also apply a KafkaServerConfig to block access to a specific topic unless intents are set\nto allow access. At first, we expect the client to be blocked from accessing the specific topic.\nWe will follow up by applying an intent to allow access."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the Kubernetes YAMLs used in this example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\nname: otterize-tutorial-kafka-mtls\n"))),(0,r.kt)(o.Z,{value:"client-deployment.yaml",label:"client-deployment.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: myclient\nnamespace: otterize-tutorial-kafka-mtls\nspec:\nselector:\n matchLabels:\n   app: myclient\ntemplate:\n metadata:\n   labels:\n     app: myclient\n   annotations:\n     spire-integration.otterize.com/tls-secret-name: myclient-credentials-secret\n spec:\n   containers:\n     - name: myclient\n       image: golang\n       command: [ "/bin/sh", "-c", "--" ]\n       args: [ "while true; do cd /app; cp src/* .; go get main; go run .; sleep infinity; done" ]\n       volumeMounts:\n         - name: ephemeral\n           mountPath: /app\n         - mountPath: /app/src\n           name: myclient-go\n         - name: otterize-credentials\n           mountPath: /var/otterize/credentials\n           readOnly: true\n   volumes:\n     - name: myclient-go\n       configMap:\n         name: myclient-go\n     - name: otterize-credentials\n       secret:\n         secretName: myclient-credentials-secret\n     - name: ephemeral\n       emptyDir: { }\n'))),(0,r.kt)(o.Z,{value:"client-configmap.yaml",label:"client-configmap.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\nname: myclient-go\nnamespace: otterize-tutorial-kafka-mtls\ndata:\nmyclient.go: |\n package main\n \n import (\n "crypto/tls"\n "crypto/x509"\n "fmt"\n "github.com/Shopify/sarama"\n "github.com/sirupsen/logrus"\n "io/ioutil"\n "time"\n )\n \n const (\n kafkaAddr     = "kafka.kafka:9092"\n testTopicName = "mytopic"\n certFile      = "/var/otterize/credentials/svid.pem"\n keyFile       = "/var/otterize/credentials/key.pem"\n rootCAFile    = "/var/otterize/credentials/bundle.pem"\n )\n \n func getTLSConfig() (*tls.Config, error) {\n cert, err := tls.LoadX509KeyPair(certFile, keyFile)\n if err != nil {\n return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n }\n \n pool := x509.NewCertPool()\n rootCAPEM, err := ioutil.ReadFile(rootCAFile)\n if err != nil {\n return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n }\n pool.AppendCertsFromPEM(rootCAPEM)\n \n return &tls.Config{\n Certificates: []tls.Certificate{cert},\n RootCAs:      pool,\n }, nil\n }\n \n func loop_kafka() error {\n addrs := []string{kafkaAddr}\n \n config := sarama.NewConfig()\n fmt.Println("Loading mTLS certificates")\n config.Net.TLS.Enable = true\n tlsConfig, err := getTLSConfig()\n if err != nil {\n return err\n }\n config.Net.TLS.Config = tlsConfig\n fmt.Println("Connecting to Kafka")\n config.Net.DialTimeout = 5 * time.Second\n config.Net.ReadTimeout = 5 * time.Second\n config.Net.WriteTimeout = 5 * time.Second\n client, err := sarama.NewClient(addrs, config)\n if err != nil {\n return err\n }\n fmt.Println("Creating a producer and a consumer for -", testTopicName)\n config.Producer.Return.Successes = true\n config.Producer.Timeout = 5 * time.Second\n config.Consumer.MaxWaitTime = 5 * time.Second\n config.Producer.Return.Errors = true\n config.Consumer.Return.Errors = true\n producer, err := sarama.NewSyncProducerFromClient(client)\n if err != nil {\n return err\n }\n \n consumer, err := sarama.NewConsumerFromClient(client)\n if err != nil {\n return err\n }\n fmt.Println("Sending messages")\n for i := 1; i <= 5; i++ {\n msg := fmt.Sprintf("Message %d", i)\n _, _, err = producer.SendMessage(&sarama.ProducerMessage{\n Topic:     testTopicName,\n Partition: -1,\n Value:     sarama.StringEncoder(msg),\n })\n if err != nil {\n return err\n }\n fmt.Printf("Sent message - %s\\n", msg)\n time.Sleep(1 * time.Second)\n }\n \n partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)\n if err != nil {\n return err\n }\n \n for msg := range partConsumer.Messages() {\n fmt.Printf("Read message - %s\\n", msg.Value)\n }\n return nil\n }\n \n func main() {\n for {\n err := loop_kafka()\n logrus.WithError(err).Println()\n fmt.Println("Loop exited")\n time.Sleep(2 * time.Second)\n }\n }\n   \n\ngo.mod: |\n module main\n \n go 1.18\n \n require (\n github.com/Shopify/sarama v1.36.0\n github.com/sirupsen/logrus v1.9.0\n )\n \n require (\n github.com/davecgh/go-spew v1.1.1 // indirect\n github.com/eapache/go-resiliency v1.3.0 // indirect\n github.com/eapache/go-xerial-snappy v0.0.0-20180814174437-776d5712da21 // indirect\n github.com/eapache/queue v1.1.0 // indirect\n github.com/golang/snappy v0.0.4 // indirect\n github.com/hashicorp/errwrap v1.0.0 // indirect\n github.com/hashicorp/go-multierror v1.1.1 // indirect\n github.com/hashicorp/go-uuid v1.0.3 // indirect\n github.com/jcmturner/aescts/v2 v2.0.0 // indirect\n github.com/jcmturner/dnsutils/v2 v2.0.0 // indirect\n github.com/jcmturner/gofork v1.7.6 // indirect\n github.com/jcmturner/gokrb5/v8 v8.4.3 // indirect\n github.com/jcmturner/rpc/v2 v2.0.3 // indirect\n github.com/klauspost/compress v1.15.9 // indirect\n github.com/pierrec/lz4/v4 v4.1.15 // indirect\n github.com/rcrowley/go-metrics v0.0.0-20201227073835-cf1acfcdf475 // indirect\n golang.org/x/crypto v0.0.0-20220722155217-630584e8d5aa // indirect\n golang.org/x/net v0.0.0-20220809184613-07c6da5e1ced // indirect\n golang.org/x/sys v0.0.0-20220728004956-3c1f35247d10 // indirect\n )\n\n'))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy the client and the Kafka config using ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls/all.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional: check deployment status"),(0,r.kt)("p",null,"Check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," pod was deployed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-kafka-mtls\n")),(0,r.kt)("p",null,"You should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5d9d5c8d7b-7dlzb   1/1     Running   0          24s\n"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's monitor the client's attempts to access the Kafka topic with a second terminal window,\nso we can see the effects of our changes in real time."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open a second terminal window")," and tail the client log:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --tail 1 -n otterize-tutorial-kafka-mtls deploy/myclient\n")),(0,r.kt)("p",{parentName:"li"},"At this point the client should log an error saying it is not authorized to access the topic:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'Loading mTLS certificates\nConnecting to Kafka\nCreating a producer and a consumer for - mytopic\nSending messages\ntime="2022-09-13T10:41:07Z" level=info error="kafka server: The client is not authorized to access this topic"\nLoop exited\n')),(0,r.kt)("p",{parentName:"li"},"This is the expected outcome since we configured Kafka to require ACLs for access to this topic.\nOnce the client declares its intents, Otterize will add an ACL to Kafka to allow the intended calls.\nLet's see that now..."))),(0,r.kt)("h2",{id:"apply-intents"},"Apply intents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The client declares its intent to call the server with this ",(0,r.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\nname: myclient\nnamespace:  otterize-tutorial-kafka-mtls\nspec:\nservice:\n name: myclient\ncalls:\n - name: kafka\n   namespace: kafka\n   type: Kafka\n   topics:\n     - name: mytopic\n       operation: all\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Client intents are the cornerstone of ",(0,r.kt)("a",{parentName:"p",href:"https://otterize.com/ibac"},"intent-based access control"),".")),(0,r.kt)("p",{parentName:"li"},"   Keep an eye on the logs being tailed in the ",(0,r.kt)("strong",{parentName:"p"},"second terminal window"),"\nwhile you apply this ",(0,r.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file in your ",(0,r.kt)("strong",{parentName:"p"},"main terminal window")," using:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls/client-intents.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should quickly see in the ",(0,r.kt)("strong",{parentName:"p"},"second terminal")," that the client is now successfully producing and consuming messages"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Loading mTLS certificates\nConnecting to Kafka\nCreating a producer and a consumer for - mytopic\nSending messages\ntime="2022-09-13T10:41:07Z" level=info error="kafka server: The client is not authorized to access this topic"\nLoop exited                                   <- before applying the intents file\n# highlight-start\nLoading mTLS certificates                     <- after applying the intents file\nConnecting to Kafka\nCreating a producer and a consumer for - mytopic\nSending messages\nSent message - Message 1\nSent message - Message 2\nSent message - Message 3\nSent message - Message 4\nSent message - Message 5\nRead message - Message 1\nRead message - Message 2\nRead message - Message 3\nRead message - Message 4\nRead message - Message 5\n# highlight-end\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Observe that an ACL for this client was configured on the Kafka broker:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl logs -n kafka statefulset/kafka | grep "Processing Acl change" | grep mytopic | tail -n 1\n')),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[2022-09-13 10:44:52,803] INFO Processing Acl change notification for\nResourcePattern(resourceType=TOPIC, name=mytopic, patternType=LITERAL), \nversionedAcls : Set(User:ANONYMOUS has DENY permission for operations: \nALL from hosts: *, User:CN=myclient.otterize-tutorial-kafka-mtls,O=SPIRE,C=US has ALLOW permission\nfor operations: ALL from hosts: *), zkVersion : 6 (kafka.security.authorizer.AclAuthorizer)\n")))),(0,r.kt)("h2",{id:"what-did-we-accomplish"},"What did we accomplish?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Controlling Kafka access no longer means touching ACLs, issuing and managing and distributing certs, establishing trust,\netc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As we saw with pod-to-pod access, clients simply declare with their intents files the Kafka access they need,\nand define a place on their filesystem where they'll get the appropriate credentials (certs).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The next ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," ensures that all the appropriate certs are issued and distributed,\nand that Kafka ACLs are configured to reflect precisely the intended topic-level access."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see what happened behind the scenes"),(0,r.kt)("p",null,"We configured the Kafka helm chart to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the SSL protocol for its listeners"),(0,r.kt)("li",{parentName:"ol"},"Annotated its pod to let Otterize know it should generate mTLS credentials in the Java Key Store and Java Trust Store format and store them as a K8s secret."),(0,r.kt)("li",{parentName:"ol"},"We annotated the client pod to let Otterize know it should generate mTLS credentials in a PEM format."),(0,r.kt)("li",{parentName:"ol"},"Configured the Kafka broker to use the K8s secret for its credentials.")),(0,r.kt)("p",null,"The Otterize SPIRE integration operator:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Created an entry for the annotated client pod with the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Generated matching mTLS credentials using the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Stored the mTLS credentials into a K8s secrets."),(0,r.kt)("li",{parentName:"ol"},"The secret was mounted into the client pod's container."),(0,r.kt)("li",{parentName:"ol"},"Configured Kafka to only allow intended access to the specific topic."),(0,r.kt)("li",{parentName:"ol"},"The client pod connected and authenticated to Kafka using mTLS but couldn't access the topic."),(0,r.kt)("li",{parentName:"ol"},"We applied intents to allow the client to access the topic."),(0,r.kt)("li",{parentName:"ol"},"The client pod connected and authenticated to Kafka using mTLS but and accessed the topic successfully."))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read about how to gradually rollout ",(0,r.kt)("a",{parentName:"li",href:"/guides/ibac-for-k8s-kafka/"},"secure access for Kafka")," on your existing infrastructure.")),(0,r.kt)("h2",{id:"teardown"},"Teardown"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Take care to remove the intents before removing the KafkaServerConfig or the Kafka broker, as the operator will not know how to remove\nthe intents if you first make it forget about the Kafka broker or it can't access the broker.\nIf it's unable to remove the ACLs for the intents, the operator will prevent the intents from being deleted until\nit is able to do so.")),(0,r.kt)("p",null,"To remove the deployed resources run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# run this first:\nkubectl delete -f https://docs.otterize.com/code-examples/kafka-mtls/client-intents.yaml\n# then the rest:\nkubectl delete -f https://docs.otterize.com/code-examples/kafka-mtls/all.yaml\nkubectl delete -f https://docs.otterize.com/code-examples/kafka-mtls/kafkaserverconfig.yaml\nhelm uninstall kafka -n kafka\nhelm repo remove bitnami\n")))}d.isMDXComponent=!0}}]);