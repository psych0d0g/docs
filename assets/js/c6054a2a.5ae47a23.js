"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:m,values:f,groupId:h,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:T}=(0,s.U)(),[w,N]=(0,a.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=h){const e=C[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=S.indexOf(t),r=g[n].value;r!==w&&(P(t),N(r),null!=h&&T(h,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=S.indexOf(e.currentTarget)+1;n=null!=(r=S[t])?r:S[0];break}case"ArrowLeft":{var a;const t=S.indexOf(e.currentTarget)-1;n=null!=(a=S[t])?a:S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},v)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},7605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:8,title:"Service identities"},s=void 0,c={unversionedId:"documentation/service-identities/README",id:"documentation/service-identities/README",title:"Service identities",description:"All about service names, identities, labels, and credentials",source:"@site/docs/documentation/8-service-identities/README.mdx",sourceDirName:"documentation/8-service-identities",slug:"/documentation/service-identities/",permalink:"/documentation/service-identities/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/8-service-identities/README.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Service identities"},sidebar:"docSidebar",previous:{title:"Intents and intents files",permalink:"/documentation/intents-and-intents-files/"},next:{title:"FAQ",permalink:"/documentation/faq/"}},d={},u=[{value:"Pod identity resolution",id:"pod-identity-resolution",level:2},{value:"Rearrange the following:",id:"rearrange-the-following",level:2},{value:"mTLS credentials",id:"mtls-credentials",level:2},{value:"HTTP",id:"http",level:2},{value:"Client",id:"client",level:3},{value:"Server",id:"server",level:3},{value:"Kafka",id:"kafka",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All about service names, identities, labels, and credentials"),(0,a.kt)("h2",{id:"pod-identity-resolution"},"Pod identity resolution"),(0,a.kt)("p",null,"Client intents files use service names to refer to client and server services. How do Otterize operators decide what is\nthe name of the service that runs within the pod? The algorithm is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the pod has an ",(0,a.kt)("inlineCode",{parentName:"li"},"otterize/service-name")," label, its value is used as the service name. This allows developers and\nautomations to explicitly name services, if needed."),(0,a.kt)("li",{parentName:"ol"},"If there is no ",(0,a.kt)("inlineCode",{parentName:"li"},"otterize/service-name")," label, a recursive look up is performed for the Kubernetes resource owner of\nthe pod, until the root resource is reached, and its name is used as the service name. For example, if you have\na ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployment")," named ",(0,a.kt)("inlineCode",{parentName:"li"},"checkoutservice"),", which then creates and owns a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReplicaSet"),", which then creates and owns\na ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod"),", then the service name for that pod is ",(0,a.kt)("inlineCode",{parentName:"li"},"checkoutservice")," - same as the name of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployment"),'. This is\nintended to capture the likely-more-meaningful "human name" of the service.')),(0,a.kt)("p",null,"Pods are then labeled with values derived from service names. For example,\nthe service name is combined with the namespace of the pod and hashed to form the value of the label ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize/server"),".\nThis label is then used as a selector for network policies. Another\nlabel, ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize/access-server-<servicename>-<servicehash>"),", is applied to client pods which have declared their intent\nto access the server. This label is used as the selector to determine which client pods are allowed to access the server\npod."),(0,a.kt)("h2",{id:"rearrange-the-following"},"Rearrange the following:"),(0,a.kt)("h1",{id:"credential-sdk-integration"},"Credential SDK integration"),(0,a.kt)("h2",{id:"mtls-credentials"},"mTLS credentials"),(0,a.kt)("p",null,"To mount mTLS credentials please follow the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/quick-tutorials/mtls"},"tutorial"),"."),(0,a.kt)("h2",{id:"http"},"HTTP"),(0,a.kt)("h3",{id:"client"},"Client"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst https = require('https');\n\nconst options = {\n    hostname: 'server.otterize-tutorial-mtls/hello',\n    port: 443,\n    path: '/hello',\n    method: 'GET',\n    cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n    key: fs.readFileSync('/var/otterize/credentials/svid.key'),\n    ca: fs.readFileSync('/var/otterize/credentials/bundle.pem')\n}\n\nconst req = https.request(\n    options,\n    res => {\n        res.on('data', function (data) {\n            console.log(data)\n        });\n    }\n);\n\nreq.end();\n"))),(0,a.kt)(o.Z,{value:"go",label:"GO",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "io/ioutil"\n    "log"\n    "net/http"\n)\n\nfunc main() {\n    // Read the key pair to create certificate\n    cert, err := tls.LoadX509KeyPair("/var/otterize/credentials/svid.pem", "/var/otterize/credentials/key.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create a CA certificate pool and add bundle.pem to it\n    caCert, err := ioutil.ReadFile("/var/otterize/credentials/bundle.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n    caCertPool := x509.NewCertPool()\n    caCertPool.AppendCertsFromPEM(caCert)\n\n    // Create an HTTPS client and supply the created CA pool and certificate\n    client := &http.Client{\n        Transport: &http.Transport{\n            TLSClientConfig: &tls.Config{\n                RootCAs:      caCertPool,\n                Certificates: []tls.Certificate{cert},\n            },\n        },\n    }\n\n    r, err := client.Get("https://server.otterize-tutorial-mtls/hello")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Read the response body\n    defer r.Body.Close()\n    body, err := ioutil.ReadAll(r.Body)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Print the response body to stdout\n    fmt.Printf("%s\\n", body)\n}\n\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nresp = requests.get(\"https://server.otterize-tutorial-mtls/hello\",\n                    cert=('/var/otterize/credentials/svid.pem', '/var/otterize/credentials/key.pem'),\n                    verify=\"/var/otterize/credentials/bundle.pem\")\n"))),(0,a.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl  --cert /var/otterize/credentials/svid.pem \\\n      --key /var/otterize/credentials/key.pem \\\n      --cacert /var/otterize/credentials/bundle.pem https://server.otterize-tutorial-mtls/hello\n")))),(0,a.kt)("h3",{id:"server"},"Server"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const https = require(`https`);\nconst fs = require(`fs`);\n\nconst options = {\n    key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n    cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n    ca: fs.readFileSync('/var/otterize/credentials/bundle.pem'),\n    requestCert: true\n};\n\nhttps.createServer(\n    options,\n    (req, res) => {\n        const peerCert = req.connection.getPeerCertificate();\n        const ownCert = req.connection.getCertificate();\n        console.log(\"Received request:\");\n        console.log(peerCert.subject.CN + \":\\t\" + req.method + \" \" + req.url);\n        if (req.url === '/hello') {\n            res.writeHead(200);\n            res.end('mTLS hello world\\nfrom: ' + ownCert.subject.CN + '\\nto client: ' + peerCert.subject.CN);\n        } else {\n            res.end();\n        }\n    }).listen(443);\n"))),(0,a.kt)(o.Z,{value:"go",label:"GO",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "io"\n    "io/ioutil"\n    "log"\n    "net/http"\n)\n\nfunc helloHandler(w http.ResponseWriter, r *http.Request) {\n    // Write "Hello, world!" to the response body\n    io.WriteString(w, "Hello, world over mTLS!\\\\n")\n    fmt.Println("GET /hello mTLS")\n}\n\nfunc main() {\n    // Set up a /hello resource handler\n    http.HandleFunc("/hello", helloHandler)\n\n    // Create a CA certificate pool and add bundle.pem to it\n    caCert, err := ioutil.ReadFile("/var/otterize/credentials/bundle.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n    caCertPool := x509.NewCertPool()\n    caCertPool.AppendCertsFromPEM(caCert)\n\n    // Create the TLS Config with the CA pool and enable Client certificate validation\n    tlsConfig := &tls.Config{\n        ClientCAs:  caCertPool,\n        ClientAuth: tls.RequireAndVerifyClientCert,\n    }\n    tlsConfig.BuildNameToCertificate()\n\n    // Create a Server instance to listen on port 8443 with the TLS config\n    server := &http.Server{\n        Addr:      ":443",\n        TLSConfig: tlsConfig,\n    }\n\n    // Listen to HTTPS connections with the server certificate and wait\n    log.Fatal(server.ListenAndServeTLS("/var/otterize/credentials/svid.pem", "/var/otterize/credentials/key.pem"))\n}\n\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This config only supports server TLS and not mTLS.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask\n\napp = Flask(__name__)\n\n\n@app.route("/hello")\ndef hello():\n    return "Hello World!"\n\n\nif __name__ == "__main__":\n    app.run(port=443,\n            ssl_context=(\n                \'/var/otterize/credentials/svid.pem\',\n                \'/var/otterize/credentials/key.pem\'))\n\n')))),(0,a.kt)("h2",{id:"kafka"},"Kafka"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"const fs = require('fs')\nconst {Kafka} = require('kafkajs')\n\nconst kafka = new Kafka({\n    brokers: ['kafka.kafka:9092'],\n    ssl: {\n        rejectUnauthorized: false,\n        ca: [fs.readFileSync('/var/otterize/credentials/bundle.pem', 'utf-8')],\n        key: fs.readFileSync('/var/otterize/credentials/key.pem', 'utf-8'),\n        cert: fs.readFileSync('/var/otterize/credentials/svid.pem', 'utf-8')\n    },\n})\n\nconst consumer = kafka.consumer({groupId: 'test-group'})\n\nconsumer.connect().then(\n    consumer.subscribe({topic: 'mytopic', fromBeginning: true}).then(\n        consumer.run({\n            eachMessage: async ({\n                                    topic,\n                                    partition,\n                                    message\n                                }) => {\n                console.log({\n                    value: message.value.toString(),\n                })\n            },\n        })\n    )\n)\n"))),(0,a.kt)(o.Z,{value:"go",label:"GO",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "github.com/Shopify/sarama"\n    "github.com/sirupsen/logrus"\n    "io/ioutil"\n)\n\nconst (\n    kafkaAddr     = "kafka.kafka:9092"\n    testTopicName = "mytopic"\n    certFile      = "/var/otterize/credentials/svid.pem"\n    keyFile       = "/var/otterize/credentials/key.pem"\n    rootCAFile    = "/var/otterize/credentials/bundle.pem"\n)\n\nfunc getTLSConfig() (*tls.Config, error) {\n    cert, err := tls.LoadX509KeyPair(certFile, keyFile)\n    if err != nil {\n        return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n    }\n\n    pool := x509.NewCertPool()\n    rootCAPEM, err := ioutil.ReadFile(rootCAFile)\n    if err != nil {\n        return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n    }\n    pool.AppendCertsFromPEM(rootCAPEM)\n\n    return &tls.Config{\n        Certificates: []tls.Certificate{cert},\n        RootCAs:      pool,\n    }, nil\n}\n\nfunc main() {\n    addrs := []string{kafkaAddr}\n\n    config := sarama.NewConfig()\n\n    config.Net.TLS.Enable = true\n    tlsConfig, err := getTLSConfig()\n    if err != nil {\n        logrus.WithError(err).Panic()\n    }\n    config.Net.TLS.Config = tlsConfig\n\n    client, err := sarama.NewClient(addrs, config)\n    if err != nil {\n        logrus.WithError(err).Panic()\n    }\n\n    producer, err := NewSyncProducerFromClient(client)\n    if err != nil {\n        logrus.WithError(err).Panic()\n    }\n    consumer, err := sarama.NewConsumerFromClient(client)\n    if err != nil {\n        logrus.WithError(err).Panic()\n    }\n\n    partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)\n    if err != nil {\n        logrus.WithError(err).Panic()\n    }\n\n    for msg := range partConsumer.Messages() {\n        if msg.Key != nil {\n            fmt.Printf("%s\\t", string(msg.Key))\n        }\n        fmt.Println(string(msg.Value))\n    }\n\n}\n\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from kafka import KafkaConsumer\n\nssl_kwargs = dict(\n    security_protocol=\'SSL\',\n    ssl_cafile="/var/otterize/credentials/bundle.pem",\n    ssl_keyfile="/var/otterize/credentials/key.pem",\n    ssl_certfile="/var/otterize/credentials/svid.pem",\n)\n\nconsumer = KafkaConsumer(\n    "test",\n    bootstrap_servers=["kafka.kafka:9092"],\n    **ssl_kwargs)\n\nprint("Connected to kafka consumer")\nfor message in consumer:\n    print("Read Kafka message: " + str(message))\n\n'))),(0,a.kt)(o.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},"You can use Kafka's builtin kafka-console-consumer.sh script to connect to Kafka. The script requires the credentials to be generated in the JKS format.",(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kafka-console-consumer.sh \\\n   --bootstrap-server kafka.kafka:9092 \\\n   -topic mytopic \\\n   --consumer.config client.properties\n"))),(0,a.kt)(o.Z,{value:"client.properties",label:"client.properties",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"security.protocol=SSL\nssl.keystore.location=/var/otterize/credentials/kafka.keystore.jks\nssl.keystore.password=password\nssl.truststore.location=/var/otterize/credentials/kafka.truststore.jks\nssl.truststore.password=password\n")))))))}m.isMDXComponent=!0}}]);