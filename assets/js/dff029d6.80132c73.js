"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var h=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},4720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_position:8,title:"Kubernetes mTLS"},s=void 0,c={unversionedId:"reference/mtls/README",id:"reference/mtls/README",title:"Kubernetes mTLS",description:"Otterize can automatically provision mTLS credentials using Kubernetes pod identities",source:"@site/docs/reference/mtls/README.mdx",sourceDirName:"reference/mtls",slug:"/reference/mtls/",permalink:"/reference/mtls/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/reference/mtls/README.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Kubernetes mTLS"},sidebar:"docSidebar",previous:{title:"Terminology",permalink:"/reference/terminology/"},next:{title:"Security",permalink:"/security/"}},u={},p=[{value:"Provisioning mTLS credentials",id:"provisioning-mtls-credentials",level:2},{value:"Using mTLS credentials",id:"using-mtls-credentials",level:2},{value:"HTTP",id:"http",level:3},{value:"Client",id:"client",level:4},{value:"Server",id:"server",level:4},{value:"Kafka",id:"kafka",level:3},{value:"Verify the generated mTLS credentials",id:"verify-the-generated-mtls-credentials",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Otterize can automatically provision mTLS credentials using Kubernetes pod identities\nand integrating with ",(0,a.kt)("a",{parentName:"p",href:"https://spiffe.io/docs/latest/spire-about/spire-concepts/"},"SPIFFE/SPIRE"),".\nHere we document how to generate mTLS credentials, how to consume them in a variety of languages,\nand how to verify them if needed."),(0,a.kt)("h2",{id:"provisioning-mtls-credentials"},"Provisioning mTLS credentials"),(0,a.kt)("p",null,"To provision mTLS credentials for a client pod with Otterize, make the following 3 simple changes to its Kubernetes spec:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Generate credentials"),": add the ",(0,a.kt)("inlineCode",{parentName:"li"},"credentials-operator.otterize.com/tls-secret-name")," annotation, which tells the Otterize\ncredentials operator to generate mTLS credentials, and to store them in a Kubernetes secret\nwhose name is the value of this annotation."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Expose credentials in a volume"),": add a volume containing this secret to the pod."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Mount the volume"),": mount the volume in every container in the pod.")),(0,a.kt)("p",null,"Here is the general structure for such a spec:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  template:\n    metadata:\n      annotations:\n        # highlight-next-line\n        # 1. Generate credentials as a secret called "client-credentials-secret":\n        credentials-operator.otterize.com/tls-secret-name: client-credentials-secret\n        ...\n    spec:\n      volumes:\n        # highlight-start\n        # 2. Create a volume containing this secret:\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n        # highlight-end\n        ...\n      containers:\n        - name: client\n          ...\n          volumeMounts:\n            # highlight-start\n            # 3. Mount volume into container\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n            # highlight-end\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For the complete list of annotation parameters please consult the\n",(0,a.kt)("a",{parentName:"p",href:"/reference/configuration/credentials-operator/"},"Otterize credentials operator documentation"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Certificates are automatically refreshed before expiring. We recommend loading certificates each time before using them, to avoid\nusing expired certificates.")),(0,a.kt)("h2",{id:"using-mtls-credentials"},"Using mTLS credentials"),(0,a.kt)("p",null,"The generated mTLS credentials can be used by services directly in their native programming languages via common SDKs.\nThe following examples showcase how to use the generated mTLS credentials for mTLS between:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP servers and their clients"),(0,a.kt)("li",{parentName:"ul"},"Kafka brokers and their clients")),(0,a.kt)("h3",{id:"http"},"HTTP"),(0,a.kt)("h4",{id:"client"},"Client"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst https = require('https');\n\nconst options = {\n    hostname: 'server.otterize-tutorial-mtls/hello',\n    port: 443,\n    path: '/hello',\n    method: 'GET',\n    cert: fs.readFileSync('/var/otterize/credentials/cert.pem'),\n    key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n    ca: fs.readFileSync('/var/otterize/credentials/ca.pem')\n}\n\nconst req = https.request(\n    options,\n    res => {\n        res.on('data', function (data) {\n            console.log(data)\n        });\n    }\n);\n\nreq.end();\n"))),(0,a.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "io/ioutil"\n    "log"\n    "net/http"\n)\n\nfunc main() {\n    // Read the key pair to create certificate\n    cert, err := tls.LoadX509KeyPair("/var/otterize/credentials/cert.pem", "/var/otterize/credentials/key.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create a CA certificate pool and add bundle.pem to it\n    caCert, err := ioutil.ReadFile("/var/otterize/credentials/ca.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n    caCertPool := x509.NewCertPool()\n    caCertPool.AppendCertsFromPEM(caCert)\n\n    // Create an HTTPS client and supply the created CA pool and certificate\n    client := &http.Client{\n        Transport: &http.Transport{\n            TLSClientConfig: &tls.Config{\n                RootCAs:      caCertPool,\n                Certificates: []tls.Certificate{cert},\n            },\n        },\n    }\n\n    r, err := client.Get("https://server.otterize-tutorial-mtls/hello")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Read the response body\n    defer r.Body.Close()\n    body, err := ioutil.ReadAll(r.Body)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Print the response body to stdout\n    fmt.Printf("%s\\n", body)\n}\n\n'))),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nresp = requests.get(\"https://server.otterize-tutorial-mtls/hello\",\n                    cert=('/var/otterize/credentials/cert.pem', '/var/otterize/credentials/key.pem'),\n                    verify=\"/var/otterize/credentials/ca.pem\")\n"))),(0,a.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl  --cert /var/otterize/credentials/cert.pem \\\n      --key /var/otterize/credentials/key.pem \\\n      --cacert /var/otterize/credentials/ca.pem https://server.otterize-tutorial-mtls/hello\n")))),(0,a.kt)("h4",{id:"server"},"Server"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const https = require(`https`);\nconst fs = require(`fs`);\n\nconst options = {\n    key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n    cert: fs.readFileSync('/var/otterize/credentials/cert.pem'),\n    ca: fs.readFileSync('/var/otterize/credentials/ca.pem'),\n    requestCert: true\n};\n\nhttps.createServer(\n    options,\n    (req, res) => {\n        const peerCert = req.connection.getPeerCertificate();\n        const ownCert = req.connection.getCertificate();\n        console.log(\"Received request:\");\n        console.log(peerCert.subject.CN + \":\\t\" + req.method + \" \" + req.url);\n        if (req.url === '/hello') {\n            res.writeHead(200);\n            res.end('mTLS hello world\\nfrom: ' + ownCert.subject.CN + '\\nto client: ' + peerCert.subject.CN);\n        } else {\n            res.end();\n        }\n    }).listen(443);\n"))),(0,a.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "io"\n    "io/ioutil"\n    "log"\n    "net/http"\n)\n\nfunc helloHandler(w http.ResponseWriter, r *http.Request) {\n    // Write "Hello, world!" to the response body\n    io.WriteString(w, "Hello, world over mTLS!\\\\n")\n    fmt.Println("GET /hello mTLS")\n}\n\nfunc main() {\n    // Set up a /hello resource handler\n    http.HandleFunc("/hello", helloHandler)\n\n    // Create a CA certificate pool and add bundle.pem to it\n    caCert, err := ioutil.ReadFile("/var/otterize/credentials/ca.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n    caCertPool := x509.NewCertPool()\n    caCertPool.AppendCertsFromPEM(caCert)\n\n    // Create the TLS Config with the CA pool and enable Client certificate validation\n    tlsConfig := &tls.Config{\n        ClientCAs:  caCertPool,\n        ClientAuth: tls.RequireAndVerifyClientCert,\n    }\n    tlsConfig.BuildNameToCertificate()\n\n    // Create a Server instance to listen on port 8443 with the TLS config\n    server := &http.Server{\n        Addr:      ":443",\n        TLSConfig: tlsConfig,\n    }\n\n    // Listen to HTTPS connections with the server certificate and wait\n    log.Fatal(server.ListenAndServeTLS("/var/otterize/credentials/cert.pem", "/var/otterize/credentials/key.pem"))\n}\n\n'))),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from flask import Flask\nimport ssl\n\napp = Flask(__name__)\n\n\n@app.route(\"/hello\")\ndef hello():\n    return \"Hello World!\"\n\n\nif __name__ == \"__main__\":\n    context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)\n    context.verify_mode = ssl.CERT_REQUIRED\n    context.load_verify_locations('/var/otterize/credentials/ca.pem')\n    context.load_cert_chain('/var/otterize/credentials/cert.pem', '/var/otterize/credentials/key.pem')\n    app.run(port=443, ssl_context=context)\n\n")))),(0,a.kt)("h3",{id:"kafka"},"Kafka"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"const fs = require('fs')\nconst {Kafka} = require('kafkajs')\n\nconst kafka = new Kafka({\n    brokers: ['kafka.kafka:9092'],\n    ssl: {\n        ca: [fs.readFileSync('/var/otterize/credentials/ca.pem', 'utf-8')],\n        key: fs.readFileSync('/var/otterize/credentials/key.pem', 'utf-8'),\n        cert: fs.readFileSync('/var/otterize/credentials/cert.pem', 'utf-8')\n    },\n})\n\nconst consumer = kafka.consumer({groupId: 'test-group'})\n\nconsumer.connect().then(\n    consumer.subscribe({topic: 'mytopic', fromBeginning: true}).then(\n        consumer.run({\n            eachMessage: async ({\n                                    topic,\n                                    partition,\n                                    message\n                                }) => {\n                console.log({\n                    value: message.value.toString(),\n                })\n            },\n        })\n    )\n)\n"))),(0,a.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "github.com/Shopify/sarama"\n    "github.com/sirupsen/logrus"\n    "io/ioutil"\n    "time"\n)\n\nconst (\n    kafkaAddr     = "kafka.kafka:9092"\n    testTopicName = "mytopic"\n    certFile      = "/var/otterize/credentials/cert.pem"\n    keyFile       = "/var/otterize/credentials/key.pem"\n    rootCAFile    = "/var/otterize/credentials/ca.pem"\n)\n\nfunc getTLSConfig() (*tls.Config, error) {\n    cert, err := tls.LoadX509KeyPair(certFile, keyFile)\n    if err != nil {\n        return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n    }\n\n    pool := x509.NewCertPool()\n    rootCAPEM, err := ioutil.ReadFile(rootCAFile)\n    if err != nil {\n        return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n    }\n    pool.AppendCertsFromPEM(rootCAPEM)\n\n    return &tls.Config{\n        Certificates: []tls.Certificate{cert},\n        RootCAs:      pool,\n    }, nil\n}\n\nfunc send_messages(producer sarama.SyncProducer) {\n    i := 1\n    for {\n        msg := fmt.Sprintf("Message %d [sent by client]", i)\n        _, _, err := producer.SendMessage(&sarama.ProducerMessage{\n            Topic:     testTopicName,\n            Partition: -1,\n            Value:     sarama.StringEncoder(msg),\n        })\n        if err != nil {\n            return\n        }\n        fmt.Printf("Sent message - %s\\n", msg)\n        time.Sleep(1 * time.Second)\n        i++\n    }\n}\n\nfunc loop_kafka() error {\n    addrs := []string{kafkaAddr}\n\n    config := sarama.NewConfig()\n    fmt.Println("Loading mTLS certificates")\n    config.Net.TLS.Enable = true\n    tlsConfig, err := getTLSConfig()\n    if err != nil {\n        return err\n    }\n    config.Net.TLS.Config = tlsConfig\n    fmt.Println("Connecting to Kafka")\n    config.Net.DialTimeout = 5 * time.Second\n    config.Net.ReadTimeout = 5 * time.Second\n    config.Net.WriteTimeout = 5 * time.Second\n    client, err := sarama.NewClient(addrs, config)\n    if err != nil {\n        return err\n    }\n    fmt.Println("Creating a producer and a consumer for -", testTopicName)\n    config.Producer.Return.Successes = true\n    config.Producer.Timeout = 5 * time.Second\n    config.Consumer.MaxWaitTime = 5 * time.Second\n    config.Producer.Return.Errors = true\n    config.Consumer.Return.Errors = true\n    producer, err := sarama.NewSyncProducerFromClient(client)\n    if err != nil {\n        return err\n    }\n\n    consumer, err := sarama.NewConsumerFromClient(client)\n    if err != nil {\n        return err\n    }\n    fmt.Println("Sending messages")\n    go send_messages(producer)\n\n    partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)\n    if err != nil {\n        return err\n    }\n\n    for msg := range partConsumer.Messages() {\n        fmt.Printf("Read message - %s\\n", msg.Value)\n    }\n    return nil\n}\n\nfunc main() {\n    for {\n        err := loop_kafka()\n        logrus.WithError(err).Println()\n        fmt.Println("Loop exited")\n        time.Sleep(2 * time.Second)\n    }\n}\n\n'))),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from kafka import KafkaConsumer\n\nssl_kwargs = dict(\n    security_protocol=\'SSL\',\n    ssl_cafile="/var/otterize/credentials/ca.pem",\n    ssl_keyfile="/var/otterize/credentials/key.pem",\n    ssl_certfile="/var/otterize/credentials/cert.pem",\n)\n\nconsumer = KafkaConsumer(\n    "test",\n    bootstrap_servers=["kafka.kafka:9092"],\n    **ssl_kwargs)\n\nprint("Connected to kafka consumer")\nfor message in consumer:\n    print("Read Kafka message: " + str(message))\n\n'))),(0,a.kt)(i.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},"You can use Kafka's builtin kafka-console-consumer.sh script to connect to Kafka. The script requires the credentials to be generated in the JKS format.",(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kafka-console-consumer.sh \\\n   --bootstrap-server kafka.kafka:9092 \\\n   -topic mytopic \\\n   --consumer.config client.properties\n"))),(0,a.kt)(i.Z,{value:"client.properties",label:"client.properties",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"security.protocol=SSL\nssl.keystore.location=/var/otterize/credentials/kafka.keystore.jks\nssl.keystore.password=password\nssl.truststore.location=/var/otterize/credentials/kafka.truststore.jks\nssl.truststore.password=password\n")))))),(0,a.kt)("h2",{id:"verify-the-generated-mtls-credentials"},"Verify the generated mTLS credentials"),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl")," to inspect the generated certificates that were stored as Kubernetes secrets\nand mounted as volumes into pod containers."),(0,a.kt)("p",null,"To retrieve the credentials directly from the Kubernetes secrets store, fetch them via ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get secret"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.cert\\.pem}' | base64 -d > svid.pem\n")),(0,a.kt)("p",null,"Alternatively, retrieve the credentials from the container's mounted volume, e.g. by executing a shell command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n otterize-tutorial-mtls -it deploy/client -- cat /var/otterize/credentials/cert.pem > svid.pem\n")),(0,a.kt)("p",null,"The retrieved credentials can be inspected with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -in svid.pem -text | head -n 15\n")),(0,a.kt)("p",null,"You should see a similar output to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-x509"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = US, O = SPIRE\n        Validity\n            Not Before: Aug 24 12:19:57 2022 GMT\n            Not After : Sep 23 12:20:07 2022 GMT\n        # highlight-next-line\n        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls       # the client's name\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n")),(0,a.kt)("p",null,'You can see that Otterize generated an X.509 keypair using the pod\'s name ("client")\nand namespace ("otterize-tutorial-mtls"): ',(0,a.kt)("inlineCode",{parentName:"p"},"client.otterize-tutorial-mtls"),".\nThe certificate belongs to a chain of trust rooted at the SPIRE server."),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure secure access between pods and Kafka running within the same Kubernetes cluster with this ",(0,a.kt)("a",{parentName:"li",href:"/quickstart/access-control/k8s-kafka-mtls"},"guide"),"."),(0,a.kt)("li",{parentName:"ul"},"Read more about the ",(0,a.kt)("a",{parentName:"li",href:"/reference/configuration/credentials-operator/"},"Otterize credentials operator"))))}f.isMDXComponent=!0}}]);