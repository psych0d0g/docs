"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[731],{5832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),i=n(3901),o=n(5488),r=n(5162);const s={sidebar_position:2},p="Deploy mTLS",c={unversionedId:"documentation/getting-started/tutorials/mtls",id:"documentation/getting-started/tutorials/mtls",title:"Deploy mTLS",description:"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.",source:"@site/docs/documentation/getting-started/tutorials/mtls.md",sourceDirName:"documentation/getting-started/tutorials",slug:"/documentation/getting-started/tutorials/mtls",permalink:"/documentation/getting-started/tutorials/mtls",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/getting-started/tutorials/mtls.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Quickstart",permalink:"/documentation/getting-started/quickstart"},next:{title:"Network Mapper",permalink:"/documentation/getting-started/tutorials/network-mapper"}},d={},m=[{value:"Install Otterize (enable mTLS)",id:"install-otterize-enable-mtls",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Sample deployment",id:"sample-deployment",level:3},{value:"Otterize pod identity resolution",id:"otterize-pod-identity-resolution",level:3},{value:"Configure deployments",id:"configure-deployments",level:3},{value:"Demo",id:"demo",level:2},{value:"Deploy sample project",id:"deploy-sample-project",level:3},{value:"Test client and server",id:"test-client-and-server",level:3},{value:"Teardown",id:"teardown",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Optional",id:"optional",level:2},{value:"Inspect the certificate",id:"inspect-the-certificate",level:3}],u={toc:m};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-mtls"},"Deploy mTLS"),(0,l.kt)("p",null,"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.\nWe will install Otterize, look at a sample deployment and learn how Otterize resolves pod identities.\nWe will follow by learning how to generate credentials and mount them to pods\nand wrap it all up by deploying a sample project to practice all concepts in this tutorial."),(0,l.kt)(i.Z,{toc:m,mdxType:"TOCInline"}),(0,l.kt)("h2",{id:"install-otterize-enable-mtls"},"Install Otterize (enable mTLS)"),(0,l.kt)("p",null,"Module"),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("h3",{id:"sample-deployment"},"Sample deployment"),(0,l.kt)("p",null,"We will use the following deployment as a base for the demo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: client\n  namespace: tutorial\nspec:\n  ...\n  template:\n    ...\n    spec:\n      containers:\n          - name: client\n            image: python\n")),(0,l.kt)("h3",{id:"otterize-pod-identity-resolution"},"Otterize pod identity resolution"),(0,l.kt)("p",null,"Otterize resolves pod identities automatically by using their ",(0,l.kt)("inlineCode",{parentName:"p"},"resource owner")," (e.g. deployment) ",(0,l.kt)("strong",{parentName:"p"},"name")," and ",(0,l.kt)("strong",{parentName:"p"},"\nnamespace"),"."),(0,l.kt)("p",null,"In this example the pod identity will be resolved to ",(0,l.kt)("inlineCode",{parentName:"p"},"client.tutorial"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"To read more about how Otterize resolves pod identities and how to manually control the process pleas read XXX.")),(0,l.kt)("h3",{id:"configure-deployments"},"Configure deployments"),(0,l.kt)("p",null,"To generate credentials for a pod we need to update the deployment by annotating it to generate and mount the\ncredentials."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    metadata:\n      ...\n      annotations:\n        # highlight-next-line\n        otterize/credentials-secret-name: client-credentials-secret\n    spec:\n      containers:\n        - name: client\n          ...\n          volumeMounts:\n            # highlight-start\n            - name: otterize-credentials\n              mountPath: /etc/otterize\n              readOnly: true\n            # highlight-end\n      volumes:\n        # highlight-start\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n        # highlight-end\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Complete YAML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="code-examples/getting-started/deploy-mtls/client.yaml"',title:'"code-examples/getting-started/deploy-mtls/client.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: client\n  namespace: tutorial\nspec:\n  selector:\n    matchLabels:\n      app: client\n  template:\n    metadata:\n      labels:\n        app: client\n      annotations:\n        otterize/credentials-secret-name: client-credentials-secret\n    spec:\n      containers:\n        - name: client\n          image: python\n          volumeMounts:\n            - name: otterize-credentials\n              mountPath: /etc/otterize\n              readOnly: true\n      volumes:\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can automate this by templating the process using helm, XXX, YYY. See XXXX.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Visit the ",(0,l.kt)("a",{parentName:"p",href:"/documentation/credential-operator/behavior"},"Behavior")," section to view all parameters available as pod\nannotation for generating mTLS credentials.")),(0,l.kt)("h2",{id:"demo"},"Demo"),(0,l.kt)("h3",{id:"deploy-sample-project"},"Deploy sample project"),(0,l.kt)("p",null,"Our sample project consists of a client and server pods pair communicating with HTTP over mTLS."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace otterize-tutorial-mtls && \\\nkubectl apply -n otterize-tutorial-mtls -f code-examples/getting-started/tutorials/deploy-mtls\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Output"',title:'"Output"'},"namespace/otterize-tutorial-mtls created\nconfigmap/client-py created\ndeployment.apps/client created\nservice/server created\nconfigmap/server-go created\ndeployment.apps/server created\n")),(0,l.kt)("h3",{id:"test-client-and-server"},"Test client and server"),(0,l.kt)("p",null,"The sample provides an HTTP GO server and Python client to showcase how the mTLS certificates can be used.\nYou can run them as follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="go run server.go" footer="g"',title:'"go',run:!0,'server.go"':!0,footer:'"g"'},"kubectl exec -n otterize-tutorial-mtls -it deploy/server -- go run /app/server.go\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Output"',title:'"Output"'},"Waiting for mTLS connections\nGET /hello mTLS\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="python client.py"',title:'"python','client.py"':!0},"kubectl exec -n otterize-tutorial-mtls -it deploy/client -- python /app/client.py\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Output"',title:'"Output"'},"Hello, world over mTLS!\n")),(0,l.kt)("h3",{id:"teardown"},"Teardown"),(0,l.kt)("p",null,"To remove the deployed resources run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-mtls\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Output"',title:'"Output"'},'namespace "otterize-tutorial-mtls" deleted\n')),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Read about how to integrate mTLS into common SDKs and frameworks"),(0,l.kt)("li",{parentName:"ul"},"Enforce secure Kafka access")),(0,l.kt)("h2",{id:"optional"},"Optional"),(0,l.kt)("details",null,(0,l.kt)("p",null,"Following are examples for how you can test the generated credentials"),(0,l.kt)("h3",{id:"inspect-the-certificate"},"Inspect the certificate"),(0,l.kt)("p",null,"We can use openssl to inspect the generated certificates. The certificates are stored as K8s secrets and are also\nmounted inside pods."),(0,l.kt)("p",null,"We will first retrieve them"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"secret-direct",label:"K8s secret",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.svid\\.pem}' | base64 -d > svid.pem\n"))),(0,l.kt)(r.Z,{value:"secret-pod",label:"K8s pod mount",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n otterize-tutorial-mtls -it deploy/client -- cat /etc/otterize/svid.pem > svid.pem\n")))),(0,l.kt)("p",null,"And now we can inspect them"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -in svid.pem -text | head -n 15\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-x509",metastring:'title="Output"',title:'"Output"'},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = US, O = SPIRE\n        Validity\n            Not Before: Aug 24 12:19:57 2022 GMT\n            Not After : Sep 23 12:20:07 2022 GMT\n        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n"))))}g.isMDXComponent=!0}}]);