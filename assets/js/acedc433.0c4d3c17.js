"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),o=n(6010),r=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:r,block:m,defaultValue:d,values:k,groupId:h,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:z}=(0,s.U)(),[v,C]=(0,l.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==v&&f.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==v&&(O(t),C(a),null!=h&&z(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var l;const t=T.indexOf(e.currentTarget)-1;n=null!=(l=T[t])?l:T[T.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:I,onClick:I},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":v===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},3343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),l=(n(7294),n(3905)),o=n(5488),r=n(5162);const i={sidebar_position:4,title:"Installation"},s=void 0,p={unversionedId:"installation/README",id:"installation/README",title:"Installation",description:"Install Otterize without Otterize Cloud (OSS only)",source:"@site/docs/installation/README.mdx",sourceDirName:"installation",slug:"/installation/",permalink:"/installation/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/installation/README.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Installation"},sidebar:"docSidebar",previous:{title:"IBAC for Kafka in Kubernetes",permalink:"/quick-visual-tutorials/visual-ibac-kafka-k8s"},next:{title:"IBAC: Intent-based access control",permalink:"/intent-based-access-control/"}},u={},c=[{value:"Install Otterize without Otterize Cloud (OSS only)",id:"install-otterize-without-otterize-cloud-oss-only",level:2},{value:"Upgrade Otterize",id:"upgrade-otterize",level:3},{value:"Connect Otterize OSS to Otterize Cloud, or install Otterize with Otterize Cloud",id:"connect-otterize-oss-to-otterize-cloud-or-install-otterize-with-otterize-cloud",level:2},{value:"Install just the Otterize network mapper",id:"install-just-the-otterize-network-mapper",level:2},{value:"Install the Otterize CLI",id:"install-the-otterize-cli",level:2},{value:"Uninstall Otterize",id:"uninstall-otterize",level:2},{value:"Before uninstalling",id:"before-uninstalling",level:3},{value:"Uninstallation",id:"uninstallation",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install-otterize-without-otterize-cloud-oss-only"},"Install Otterize without Otterize Cloud (OSS only)"),(0,l.kt)("p",null,"   You'll need ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," installed on your machine to install Otterize as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace\n")),(0,l.kt)("p",null,"This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,l.kt)("p",null,"After all the pods are ready you should see the following (or similar) in your terminal when you run ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                       READY  STATUS  RESTARTS AGE\ncredentials-operator-controller-manager-6c56fcfcfb-vg6m9   2/2    Running   0     9s\nintents-operator-controller-manager-65bb6d4b88-bp9pf       2/2    Running   0     9s\notterize-network-mapper-779fffd959-twjqd                   1/1    Running   0     9s\notterize-network-sniffer-65mjt                             1/1    Running   0     9s\notterize-spire-agent-lcbq2                                 1/1    Running   0     9s\notterize-spire-server-0                                    2/2    Running   0     9s\notterize-watcher-b9bf87bcd-276nt                           1/1    Running   0     9s\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"If you are installing Otterize for network policies, make sure your cluster supports network policies.",(0,l.kt)("br",null),"Expand to see how."),(0,l.kt)("p",null,"Before you start, you need to have a Kubernetes cluster with a ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies"),"."),(0,l.kt)("p",null,"Below are instructions for setting up a Kubernetes cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,l.kt)(o.Z,{groupId:"cni",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"If you don't have the Minikube CLI, first ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install it"),". "),(0,l.kt)("p",null,"Then start your Minikube cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --network-plugin=cni\n")),(0,l.kt)("p",null,"Install Calico, in order to enforce network policies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.24.1/manifests/calico.yaml\n")),(0,l.kt)("p",null,"You need to install Calico because Minikube does not support network policy enforcement by default; Calico helps solve this issue.")),(0,l.kt)(r.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"To use the gcloud CLI for this tutorial, first ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the new cluster and ",(0,l.kt)("inlineCode",{parentName:"p"},"ZONE")," with your zone.)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,l.kt)("p",null,"Run the following command to enable the add-on:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)"),(0,l.kt)("p",null,"Then enable network policy enforcement on your cluster, re-creating your cluster's node pools with network policy enforcement enabled:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)")),(0,l.kt)(r.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,l.kt)(r.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Spin up an ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,l.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,l.kt)("li",{parentName:"ol"},"Install Calico for network policy enforcement, without replacing the CNI:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-crs.yaml\n"))),(0,l.kt)(r.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,l.kt)("p",null,"You can set up an AKS cluster using this ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,l.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You can choose whether you'd like to use this option or Calico when you create a cluster."),(0,l.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,l.kt)("h3",{id:"upgrade-otterize"},"Upgrade Otterize"),(0,l.kt)("p",null,"Use Helm to upgrade to the latest version of Otterize:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm upgrade --install otterize otterize/otterize-kubernetes -n otterize-system\n")),(0,l.kt)("h2",{id:"connect-otterize-oss-to-otterize-cloud-or-install-otterize-with-otterize-cloud"},"Connect Otterize OSS to Otterize Cloud, or install Otterize with Otterize Cloud"),(0,l.kt)("p",null,"To connect Otterize OSS to Otterize Cloud you will need to ",(0,l.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"login"),", create a cluster, and follow the instructions."),(0,l.kt)("p",null,"In a nutshell, you need to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade")," the same Helm chart, but provide Otterize Cloud credentials. Upon creating a cluster, a guide will appear that walks you through doing this with the new credentials jut created."),(0,l.kt)("h2",{id:"install-just-the-otterize-network-mapper"},"Install just the Otterize network mapper"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install network-mapper otterize/network-mapper -n otterize-system --create-namespace\n")),(0,l.kt)("p",null,"You can add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready"),", or manually watch for all pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,l.kt)("h2",{id:"install-the-otterize-cli"},"Install the Otterize CLI"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/reference/cli"},"Otterize CLI")," is a command-line utility used to control and interact with the Otterize network mapper, manipulate local intents files, and interact with Otterize Cloud."),(0,l.kt)("p",null,"To install the CLI:"),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Brew",label:"Brew",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install otterize/otterize/otterize-cli\n"))),(0,l.kt)(r.Z,{value:"Apple Silicon",label:"Apple Silicon",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://get.otterize.com/otterize-cli/v0.1.20/otterize_macOS_arm64_notarized.zip\ntar xf otterize_macOS_arm64_notarized.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,l.kt)(r.Z,{value:"Intel 64-bit",label:"Intel 64-bit",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://get.otterize.com/otterize-cli/v0.1.20/otterize_macOS_x86_64_notarized.zip\ntar xf otterize_macOS_x86_64_notarized.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,l.kt)(r.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Scoop",label:"Scoop",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-PowerShell"},"scoop bucket add otterize-cli https://github.com/otterize/scoop-otterize-cli\nscoop update\nscoop install otterize-cli\n"))),(0,l.kt)(r.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-PowerShell"},"Invoke-WebRequest -Uri https://get.otterize.com/otterize-cli/v0.1.20/otterize_Windows_x86_64.zip -OutFile otterize_Windows_x86_64.zip\nExpand-Archive otterize_Windows_x86_64.zip -DestinationPath .\n# optionally move to PATH\n"))))),(0,l.kt)(r.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.otterize.com/otterize-cli/v0.1.20/otterize_Linux_x86_64.tar.gz\ntar xf otterize_Linux_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n")))))),(0,l.kt)("p",null,"More variants are available at the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/otterize/otterize-cli/releases"},"GitHub Releases page"),"."),(0,l.kt)("h2",{id:"uninstall-otterize"},"Uninstall Otterize"),(0,l.kt)("h3",{id:"before-uninstalling"},"Before uninstalling"),(0,l.kt)("p",null,"Before uninstalling Otterize, you should make sure to delete any resources created by users: ",(0,l.kt)("inlineCode",{parentName:"p"},"ClientIntents")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig"),"s."),(0,l.kt)("p",null,"When you remove these resources, the intents operator will clean up network policies and Kafka ACLs it created. If you remove the operator before doing so, it will not be able to clean up."),(0,l.kt)("p",null,"If, however, you want the network policies and ACLs to stay in place (because you're redeploying with different configuration, for example), don't remove them."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First check if any ",(0,l.kt)("inlineCode",{parentName:"li"},"ClientIntents")," exist: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl get clientintents --all-namespaces")),(0,l.kt)("li",{parentName:"ol"},"If so, remove them."),(0,l.kt)("li",{parentName:"ol"},"Check if any ",(0,l.kt)("inlineCode",{parentName:"li"},"KafkaServerConfig"),"s exist: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl get kafkaserverconfig --all-namespaces")),(0,l.kt)("li",{parentName:"ol"},"If so, remove them.")),(0,l.kt)("p",null,"It's important to remove ",(0,l.kt)("inlineCode",{parentName:"p"},"ClientIntents")," before removing ",(0,l.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig"),"s, as once you remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig")," for a Kafka cluster, the intents operator will no longer know how to connect to it and perform cleanup."),(0,l.kt)("h3",{id:"uninstallation"},"Uninstallation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall otterize -n otterize-system\n")))}d.isMDXComponent=!0}}]);