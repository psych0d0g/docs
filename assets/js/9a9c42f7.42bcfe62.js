"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),c=n,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:1,title:"Helm chart"},i=void 0,o={unversionedId:"reference/configuration/credentials-operator/helm-chart",id:"reference/configuration/credentials-operator/helm-chart",title:"Helm chart",description:"You can use the credentials operator's Helm chart to deploy the credentials operator on its own, and configure a SPIRE server for it to work with according to the parameters value.",source:"@site/docs/reference/configuration/credentials-operator/helm-chart.mdx",sourceDirName:"reference/configuration/credentials-operator",slug:"/reference/configuration/credentials-operator/helm-chart",permalink:"/reference/configuration/credentials-operator/helm-chart",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/reference/configuration/credentials-operator/helm-chart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Helm chart"},sidebar:"docSidebar",previous:{title:"Credentials operator",permalink:"/reference/configuration/credentials-operator/"},next:{title:"Network mapper",permalink:"/reference/configuration/network-mapper/"}},d={},p=[{value:"Global parameters",id:"global-parameters",level:2},{value:"cert-manager parameters",id:"cert-manager-parameters",level:2},{value:"Operator parameters",id:"operator-parameters",level:2},{value:"Cloud parameters",id:"cloud-parameters",level:2},{value:"SPIRE parameters",id:"spire-parameters",level:2},{value:"Common parameters",id:"common-parameters",level:2},{value:"AWS integration parameters",id:"aws-integration-parameters",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/credentials-operator"},"credentials operator's Helm chart")," to deploy the credentials operator on its own, and configure a SPIRE server for it to work with according to the parameters value.\nBut it is recommended to deploy the operator as part of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/otterize-kubernetes"},"Otterize OSS Helm chart"),", which comes with a SPIRE server and the intents operator, rather than managing it independently."),(0,n.kt)("p",null,"If you would like to deploy it on its own, add the Otterize Helm chart repository and configure the operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  helm repo add otterize https://helm.otterize.com\n  helm repo update\n  helm install otterize-credentials-operator otterize/credentials-operator -n otterize-system --create-namespace\n")),(0,n.kt)("h1",{id:"parameters"},"Parameters"),(0,n.kt)("h2",{id:"global-parameters"},"Global parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.certificateProvider")),(0,n.kt)("td",{parentName:"tr",align:null},"What provider should be used to generate certificates - ",(0,n.kt)("inlineCode",{parentName:"td"},'"spire"'),", ",(0,n.kt)("inlineCode",{parentName:"td"},'"otterize-cloud"')," or ",(0,n.kt)("inlineCode",{parentName:"td"},'"cert-manager"')),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"spire"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.spire.serverServiceName")),(0,n.kt)("td",{parentName:"tr",align:null},"If deployed with SPIRE, this key specifies SPIRE-server's service name. You should use either this ",(0,n.kt)("strong",{parentName:"td"},"OR")," ",(0,n.kt)("inlineCode",{parentName:"td"},"spire.serverAddress")," (not both)."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.allowGetAllResources")),(0,n.kt)("td",{parentName:"tr",align:null},"If defined overrides"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.commonAnnotations")),(0,n.kt)("td",{parentName:"tr",align:null},"Annotations to add to all deployed objects"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.commonLabels")),(0,n.kt)("td",{parentName:"tr",align:null},"Labels to add to all deployed objects"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.podAnnotations")),(0,n.kt)("td",{parentName:"tr",align:null},"Annotations to add to all deployed pods"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.podLabels")),(0,n.kt)("td",{parentName:"tr",align:null},"Labels to add to all deployed pods"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.serviceNameOverrideAnnotationName")),(0,n.kt)("td",{parentName:"tr",align:null},"Which annotation to use (in the ",(0,n.kt)("a",{parentName:"td",href:"/reference/service-identities#kubernetes-service-identity-resolution"},"service name resolution algorithm"),") for setting a pod's service name, if not the default. Use this if you already have annotations on your pods that provide the correct service name."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"intents.otterize.com/service-name"))))),(0,n.kt)("h2",{id:"cert-manager-parameters"},"cert-manager parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"certManager.issuerName")),(0,n.kt)("td",{parentName:"tr",align:null},"The cert-manager Issuer (or ClusterIssuer if ",(0,n.kt)("inlineCode",{parentName:"td"},"useClusterIssuer")," is set) to be used for certificate generation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"certManager.useClusterIssuer")),(0,n.kt)("td",{parentName:"tr",align:null},"Use ClusterIssuer. If false, looks for a namespace-scoped Issuer."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"certManager.autoApprove")),(0,n.kt)("td",{parentName:"tr",align:null},"Makes the credentials-operator auto-approve its CertificateRequests. Use when the cert-manager default auto-approver is disabled."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))))),(0,n.kt)("h2",{id:"operator-parameters"},"Operator parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"operator.image.repository")),(0,n.kt)("td",{parentName:"tr",align:null},"Operator image repository."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"otterize"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"operator.image.image")),(0,n.kt)("td",{parentName:"tr",align:null},"Operator image."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"credentials-operator"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"operator.image.tag")),(0,n.kt)("td",{parentName:"tr",align:null},"Operator image tag."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"latest"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"operator.pullPolicy")),(0,n.kt)("td",{parentName:"tr",align:null},"Operator pull policy."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))))),(0,n.kt)("h2",{id:"cloud-parameters"},"Cloud parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.clientId")),(0,n.kt)("td",{parentName:"tr",align:null},"Client ID for connecting to Otterize Cloud."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.clientSecret")),(0,n.kt)("td",{parentName:"tr",align:null},"Client secret for connecting to Otterize Cloud."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.secretKeyRef.secretName")),(0,n.kt)("td",{parentName:"tr",align:null},"If specified, the name of a pre-created Kubernetes Secret to be used instead of creating a secret with the value of clientSecret."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.secretKeyRef.secretKey")),(0,n.kt)("td",{parentName:"tr",align:null},"If specified, the key for the clientSecret in a pre-created Kubernetes Secret to be used instead of creating a secret with the value of clientSecret."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.apiAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"Overrides Otterize Cloud default API address."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.apiExtraCAPEMSecret")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of a secret containing a single ",(0,n.kt)("inlineCode",{parentName:"td"},"CA.pem")," file for an extra root CA used to connect to Otterize Cloud. The secret should be placed in the same namespace as the Otterize deployment."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.aws.enabled")),(0,n.kt)("td",{parentName:"tr",align:null},"Enable or disable AWS integration"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.aws.eksClusterNameOverride")),(0,n.kt)("td",{parentName:"tr",align:null},"EKS cluster name (overrides auto-detection)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))))),(0,n.kt)("h2",{id:"spire-parameters"},"SPIRE parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"spire.serverAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the SPIRE-server's address. You should use either this OR ",(0,n.kt)("inlineCode",{parentName:"td"},"global.spire.serverServiceName")," (not both)."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"spire.socketsPath")),(0,n.kt)("td",{parentName:"tr",align:null},"SPIRE sockets path. The operator will expect to find agent.sock in the host-mounted folder"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"/run/spire/sockets"'))))),(0,n.kt)("h2",{id:"common-parameters"},"Common parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"allowGetAllResources")),(0,n.kt)("td",{parentName:"tr",align:null},"Gives get, list and watch permission to watch on all resources. This is used to resolve service names when pods have owners that are custom resources. When disabled, a limited set of permissions is used that only allows access to built-in Kubernetes resources that deploy Pods and Pods themselves - Deployments, StatefulSets, DaemonSets, ReplicaSets and Services. Resolving may not be able to complete if the owning resource is not one of those."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"resources")),(0,n.kt)("td",{parentName:"tr",align:null},"Resources of the container"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,n.kt)("h2",{id:"aws-integration-parameters"},"AWS integration parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"aws.roleARN")),(0,n.kt)("td",{parentName:"tr",align:null},"ARN of the AWS role the operator will use to access AWS."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))))))}u.isMDXComponent=!0}}]);