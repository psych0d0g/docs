"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[679],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),o=n(6010),i=n(2389),r=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:h,groupId:k,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=h?h:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,r.l)(w,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!w.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[C,T]=(0,l.useState)(y),z=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&w.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=z.indexOf(t),a=w[n].value;a!==C&&(I(t),T(a),null!=k&&N(k,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=z.indexOf(e.currentTarget)+1;n=null!=(a=z[t])?a:z[0];break}case"ArrowLeft":{var l;const t=z.indexOf(e.currentTarget)-1;n=null!=(l=z[t])?l:z[z.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},w.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>z.push(e),onKeyDown:A,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},3928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),o=(n(814),n(5488)),i=n(5162);const r={sidebar_position:2,title:"Visual tutorial: IBAC with network policies",sidebar_label:"IBAC with network policies"},s=void 0,c={unversionedId:"quick-visual-tutorials/visual-ibac-network-policies",id:"quick-visual-tutorials/visual-ibac-network-policies",title:"Visual tutorial: IBAC with network policies",description:"Otterize enables intent-based access control (IBAC).",source:"@site/docs/quick-visual-tutorials/visual-ibac-network-policies.mdx",sourceDirName:"quick-visual-tutorials",slug:"/quick-visual-tutorials/visual-ibac-network-policies",permalink:"/quick-visual-tutorials/visual-ibac-network-policies",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quick-visual-tutorials/visual-ibac-network-policies.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Visual tutorial: IBAC with network policies",sidebar_label:"IBAC with network policies"},sidebar:"docSidebar",previous:{title:"Kubernetes cluster mapping",permalink:"/quick-visual-tutorials/visual-k8s-cluster-mapping"},next:{title:"IBAC for Kafka in Kubernetes",permalink:"/quick-visual-tutorials/visual-ibac-kafka-k8s"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Seeing the access graph",id:"seeing-the-access-graph",level:2},{value:"Try out IBAC with shadow mode",id:"try-out-ibac-with-shadow-mode",level:2},{value:"Declare more intents",id:"declare-more-intents",level:3},{value:"Protect everything easily",id:"protect-everything-easily",level:3},{value:"Enable enforcement",id:"enable-enforcement",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],d={toc:u};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Otterize enables intent-based access control (IBAC).\nBuilding on the previous ",(0,l.kt)("a",{parentName:"p",href:"/quick-visual-tutorials/visual-k8s-cluster-mapping"},"Kubernetes cluster mapping tutorial"),", we'll actually roll out intent-based access control (IBAC) in the cluster using Kubernetes network policies to control access,\nfirst in shadow mode without enforcement, and then with enforcement on."),(0,l.kt)("p",null,"All the capabilities of IBAC are within Otterize OSS, while the access graph in Otterize Cloud will guide us visually in these steps."),(0,l.kt)("p",null,"In this tutorial, we will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start where the previous tutorial left off: with a demo based on the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"Google microservices demo"),"\n(a simple e-commerce application) deployed to a Kubernetes cluster, with Otterize OSS installed in the cluster and integrated with Otterize Cloud."),(0,l.kt)("li",{parentName:"ul"},"Use the access graph and shadow mode along with intents to see what would happen once enforcement is turned on."),(0,l.kt)("li",{parentName:"ul"},"Turn on enforcement and verify that what happened is what was expected.")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"The following steps are only needed if you haven't already run through the ",(0,l.kt)("a",{parentName:"p",href:"/quick-visual-tutorials/visual-k8s-cluster-mapping"},"Kubernetes cluster mapping tutorial"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Prepare a cluster"),(0,l.kt)("p",null,"Before you start, you'll need a Kubernetes cluster."),(0,l.kt)("p",null,"Below are instructions for setting up a Kubernetes cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,l.kt)(o.Z,{groupId:"cni",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"If you don't have the Minikube CLI, first ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install it"),". "),(0,l.kt)("p",null,"Then start your Minikube cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --network-plugin=cni\n")),(0,l.kt)("p",null,"Install Calico, in order to enforce network policies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.24.1/manifests/calico.yaml\n")),(0,l.kt)("p",null,"You need to install Calico because Minikube does not support network policy enforcement by default; Calico helps solve this issue.")),(0,l.kt)(i.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"To use the gcloud CLI for this tutorial, first ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the new cluster and ",(0,l.kt)("inlineCode",{parentName:"p"},"ZONE")," with your zone.)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,l.kt)("p",null,"Run the following command to enable the add-on:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)"),(0,l.kt)("p",null,"Then enable network policy enforcement on your cluster, re-creating your cluster's node pools with network policy enforcement enabled:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)")),(0,l.kt)(i.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,l.kt)(i.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Spin up an ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,l.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,l.kt)("li",{parentName:"ol"},"Install Calico for network policy enforcement, without replacing the CNI:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-crs.yaml\n"))),(0,l.kt)(i.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,l.kt)("p",null,"You can set up an AKS cluster using this ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,l.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You can choose whether you'd like to use this option or Calico when you create a cluster."),(0,l.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Deploy the demo set of services"),(0,l.kt)("p",null,"To deploy these into your cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace otterize-ecom-demo\nkubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/ecom-demo.yaml\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Create an Otterize Cloud account"),(0,l.kt)("p",null,"If you don't already have an account, browse to ",(0,l.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," to set one up."),(0,l.kt)("p",null,"If someone in your team has already created an org in Otterize Cloud, and invited you (using your email address), you may see an invitation to accept."),(0,l.kt)("p",null,"Otherwise, you'll create a new org, which you can later rename, and invite your teammates to join you there.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Install Otterize OSS"),(0,l.kt)("p",null,'If no Kubernetes clusters are connected to your account, click the "connect your cluster" button to:'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default."),(0,l.kt)("li",{parentName:"ol"},'Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide ',"\u2192",'" link and running the Helm commands shown there.')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"More details, if you're curious"),(0,l.kt)("p",null,"Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster."),(0,l.kt)("p",null,"The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.\nIf you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster ","\u2014"," you just won't have the visualization in Otterize Cloud."),(0,l.kt)("p",null,'The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will not create network policies to restrict pod-to-pod traffic, or create Kafka ACLs to control access to Kafka topics. Instead, it will report to Otterize Cloud what ',(0,l.kt)("strong",{parentName:"p"},"would")," happen if enforcement were to be enabled, guiding you to implement IBAC without blocking intended access."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: check that the demo was deployed..."),(0,l.kt)("p",null,"To see all the pods in the demo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-ecom-demo\n")),(0,l.kt)("p",null,"The pods should all be ready and running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                     READY   STATUS    RESTARTS      AGE\nadservice-65494cbb9d-5lrv6               1/1     Running   0             115s\ncartservice-6d84fc45bb-hdtwn             1/1     Running   0             115s\ncheckoutservice-5599486df-dvj9n          1/1     Running   3 (79s ago)   115s\ncurrencyservice-6d64686d74-lxb7x         1/1     Running   0             115s\nemailservice-7c6cbfbbd7-xjxlt            1/1     Running   0             115s\nfrontend-f9448d7d4-6dmnr                 1/1     Running   0             115s\nkafka-0                                  1/1     Running   2 (83s ago)   115s\nloadgenerator-7f6987f59-bchgm            1/1     Running   0             114s\norderservice-7ffdbf6df-wzzfd             1/1     Running   0             115s\notterize-ecom-demo-zookeeper-0           1/1     Running   0             115s\npaymentservice-86855d78db-zjjfn          1/1     Running   0             115s\nproductcatalogservice-5944c7f666-2rjc6   1/1     Running   0             115s\nrecommendationservice-6c8d848498-zm2rm   1/1     Running   0             114s\nredis-cart-6b79c5b497-xpms2              1/1     Running   0             115s\nshippingservice-85694cb9bd-v54xp         1/1     Running   0             114s\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: Browse the demo"),(0,l.kt)(o.Z,{groupId:"frontend-addr",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"k8s",label:"K8s",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n otterize-ecom-demo frontend-external | awk '{print $4}'\n")),(0,l.kt)("p",null,"The result should be similar to (if running on AWS EKS):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a11843075fd254f8099a986467098647-1889474685.us-east-1.elb.amazonaws.com\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the demo\'s behavior.\n(The URL might take some time to populate across DNS servers. Note that we are accessing an HTTP and not an HTTPS website.)')),(0,l.kt)(i.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl port-forward -n otterize-ecom-demo service/frontend-external 8080:80 &\n")),(0,l.kt)("p",null,"The demo is now accessible at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:8080\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the demo\'s behavior.')))),(0,l.kt)("h2",{id:"seeing-the-access-graph"},"Seeing the access graph"),(0,l.kt)("p",null,"In the Otterize Cloud UI, your ",(0,l.kt)("a",{parentName:"p",href:"https://app.otterize.com/clusters"},"cluster")," should now show all 3 Otterize OSS operators ","\u2014"," the intents operator, network mapper, and credentials operator ","\u2014"," as connected, with a green status."),(0,l.kt)("p",null,"And when you go back to the ",(0,l.kt)("a",{parentName:"p",href:"https://app.otterize.com/access-graph"},"access graph")," (and select your cluster from the dropdown, if needed), you should see the following map for the demo running in your cluster:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Access graph",src:n(714).Z,width:"1467",height:"693"})),(0,l.kt)("p",null,"Each service is shown as a node in the access graph, while the thick lines (edges) connecting the services show access between them, as detected by the network mapper."),(0,l.kt)("p",null,"If you haven't already run through the ",(0,l.kt)("a",{parentName:"p",href:"/quick-visual-tutorials/visual-k8s-cluster-mapping"},"Kubernetes cluster mapping tutorial"),", you might  browse just ",(0,l.kt)("a",{parentName:"p",href:"/quick-visual-tutorials/visual-k8s-cluster-mapping#visualizing-the-cluster-via-the-access-graph"},"the section about visualizing the cluster via the access graph as you see it now"),", before returning here."),(0,l.kt)("h2",{id:"try-out-ibac-with-shadow-mode"},"Try out IBAC with shadow mode"),(0,l.kt)("p",null,"Now let's start to roll out access controls, but remain in shadow mode: no actual enforcement of controls, yet."),(0,l.kt)("p",null,"We'll declare that the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," intends to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: frontend\nspec:\n  service:\n    name: frontend\n  calls:\n    - name: recommendationservice\n")),(0,l.kt)("p",null,"We expect this will provide secure access, allowing the intended access from the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," while protecting the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," from unintended access."),(0,l.kt)("p",null,"Apply this intents file with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/phase-1.yaml\n")),(0,l.kt)("p",null,"Look at the access graph again:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Access graph",src:n(5243).Z,width:"1465",height:"663"})),(0,l.kt)("p",null,"The thick green line from ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice"),", representing the discovered intent from the network mapper, no longer has an empty center, but rather a ",(0,l.kt)("strong",{parentName:"p"},"solid black center, representing the explicitly applied intent"),"."),(0,l.kt)("p",null,"Click on that ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," ","\u2192"," ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," line:"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/frontend-recommendation-applied.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We can see the ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend")," can call the ",(0,l.kt)("inlineCode",{parentName:"li"},"recommendationservice"),", and will be guaranteed access even once enforcement is turned on.")),(0,l.kt)("p",null,"Click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," itself:"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/recommendation-access-state.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We can see it's not protected now (we're in shadow mode, and there are no default-deny network policies in place)."),(0,l.kt)("li",{parentName:"ul"},"We can also see it would not block any clients once protection is enabled."),(0,l.kt)("li",{parentName:"ul"},"And there is no warning about it remaining unprotected once enforcement is turned on. All is ready for turning on enforcement and protecting this service from any unintended calls.")),(0,l.kt)("h3",{id:"declare-more-intents"},"Declare more intents"),(0,l.kt)("p",null,"Let\u2019s add another intent, this time from ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: recommendationservice\nspec:\n  service:\n    name: recommendationservice\n  calls:\n    - name: productcatalogservice\n")),(0,l.kt)("p",null,"Apply this intents file with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/phase-2.yaml\n")),(0,l.kt)("p",null,"Look at the access graph again:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Access graph",src:n(228).Z,width:"1469",height:"726"})),(0,l.kt)("p",null,"As before, the line from ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," ","\u2192"," ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice")," now has a solid black center, and no warnings. That's what we expected."),(0,l.kt)("p",null,"But two other lines, ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," ","\u2192"," ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"checkoutservice")," ","\u2192"," ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice"),", have turned orange. And the ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice")," lock icon has turned red. Why?"),(0,l.kt)("p",null,"Click on one of those orange lines:"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/frontend-productcatalog.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This access is not blocked ",(0,l.kt)("em",{parentName:"li"},"now")," ","\u2014"," because we're still in shadow mode (otherwise the line would have been red)."),(0,l.kt)("li",{parentName:"ul"},"But access ",(0,l.kt)("em",{parentName:"li"},"would be blocked")," once enforcement is turned on. To prevent that, we're told to declare and apply an intent for this call.")),(0,l.kt)("p",null,"Click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice"),":"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/productcatalog-woud-block.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We can see it's not protected now, as before."),(0,l.kt)("li",{parentName:"ul"},"But we can also see it ",(0,l.kt)("em",{parentName:"li"},"would")," block any clients once protection is enabled, which is why the lock is red."),(0,l.kt)("li",{parentName:"ul"},"And there is an explicit warning to apply the missing intents from all its clients before turning on enforcement.")),(0,l.kt)("p",null,"Let's add those intents for the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"checkoutservice"),"."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"frontend",label:"frontend",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: frontend\nspec:\n  service:\n    name: frontend\n  calls:\n    - name: recommendationservice\n    - name: productcatalogservice\n\n"))),(0,l.kt)(i.Z,{value:"checkout-service",label:"checkoutservice",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: productcatalogservice\n\n")))),(0,l.kt)("p",null,"Apply these intents files with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/phase-3.yaml\n")),(0,l.kt)("p",null,"Let's go back to the access graph:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Access graph",src:n(4736).Z,width:"1468",height:"697"})),(0,l.kt)("p",null,"All is well again: the ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice")," will be protected, and its 3 clients will still have access, after enforcement is turned on."),(0,l.kt)("admonition",{title:"We can see how to roll out IBAC gradually:",type:"tip"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Pick a service to protect."),(0,l.kt)("li",{parentName:"ol"},"Make sure all its clients declare and intents to call it."),(0,l.kt)("li",{parentName:"ol"},"When you're ready, turn on enforcement.")),(0,l.kt)("p",{parentName:"admonition"},"The access graph and shadow mode allow us to gain confidence by showing what would happen and highlighting any problems.")),(0,l.kt)("h3",{id:"protect-everything-easily"},"Protect everything easily"),(0,l.kt)("p",null,"Could we somehow automatically bootstrap this for the whole cluster and protect all services, without breaking any intended calls? Yes!"),(0,l.kt)("p",null,"The network mapper keeps track of all attempted calls, after all: those are the discovered intents. If you are confident that all of those calls are intended and appropriate, you can use that information to automatically generate intent declarations and apply them."),(0,l.kt)("p",null,"Let's use the Otterize CLI (",(0,l.kt)("a",{parentName:"p",href:"/installation#install-the-otterize-cli"},"installation")," and ",(0,l.kt)("a",{parentName:"p",href:"/reference/cli"},"reference")," to export all discovered intents as YAML declarations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"otterize network-mapper export -n otterize-ecom-demo --output-type dir --output intents\n")),(0,l.kt)("p",null,"You can apply them using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f intents\n")),(0,l.kt)("p",null,"Or, equivalently, just use the already-generated intents files included in this docs location:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/all.yaml\n")),(0,l.kt)("p",null,"Look at the access graph again:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Access graph",src:n(2431).Z,width:"1469",height:"671"})),(0,l.kt)("p",null,"The graph confirms that all (but two) services would be protected, and no intended calls would be blocked, once we apply protection."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"What about those last two?"),(0,l.kt)("p",null,"Note that the two leftmost services would not be protected. That's because they have no discovered clients, and hence did not get intents generated and applied for them."),(0,l.kt)("p",null,'They may not even be callable. But if they are callable but are not being called now, you may want to protect them (and all others) with a global default-deny network policy. Check the "Global default deny" checkbox at the top of the access graph to see what would happen in that case. Note this only informs Otterize that such a policy is in place; it does not put it in place, so you\'ll need to do it yourself.)')),(0,l.kt)("h2",{id:"enable-enforcement"},"Enable enforcement"),(0,l.kt)("p",null,"With the confidence we gained, let's enable enforcement (via network policies) by upgrading your Otterize installation to remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"intentsOperator.operator.enableEnforcement=false")," flag."),(0,l.kt)("p",null,"At the top of the access graph, click the ",(0,l.kt)("strong",{parentName:"p"},"Configure cluster")," button; or in the clusters page, clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Connection guide ","\u2192")," link for your cluster."),(0,l.kt)("p",null,"Then run the Helm commands shown there, and specifically follow the instructions to install Otterize ",(0,l.kt)("b",null,"with enforcement on")," (not in shadow mode). Namely, ",(0,l.kt)("b",null,"omit")," the following flag in the Helm command:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--set intentsOperator.operator.enableEnforcement=false")),(0,l.kt)("p",null,"Let's look at the access graph again:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Access graph",src:n(7547).Z,width:"1469",height:"730"})),(0,l.kt)("p",null,"Note that all (but two) of the lock icons are locked, indicating the services are protected. And all the locks and edges are green, indicating no call attempts (discovered by the network mapper) are being blocked."),(0,l.kt)("admonition",{title:"How would blocked access attempts look now?",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"From now on, if a client attempts a server call that wasn't covered by one of the applied intents, that would be discovered by the network mapper and show up as (new) discovered intents. Remember that the network mapper discovers attempted access, not just successful access. In this case, a red line would appear from that client to that server, and the lock on that server would turn red: calls from that client are being blocked."),(0,l.kt)("p",{parentName:"admonition"},"That may be because:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"The calls didn't happen when the network mapper was building its map from which the intents were bootstrapped, in which case you may choose to generate all the intents again, or or just create and apply the new ones manually."),(0,l.kt)("li",{parentName:"ul"},"Or... the client maliciously called this server, but is being blocked by the network policies. IBAC has saved the day!"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: see the generated network policies"),"Otterize automatically generated network policies according to your declared and applied intents.",(0,l.kt)("p",null,"To list all generated network policies run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"get netpol -n otterize-ecom-demo\n")),(0,l.kt)("p",null,"Let's inspect one of these network policies with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get netpol -n otterize-ecom-demo access-to-recommendationservice-from-otterize-ecom-demo -o yaml\n")),(0,l.kt)("p",null,"The result should be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: access-to-recommendationservice-from-otterize-ecom-demo\n  namespace: otterize-ecom-demo\n  ...\nspec:\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          intents.otterize.com/namespace-name: otterize-ecom-demo\n      podSelector:\n        matchLabels:\n          intents.otterize.com/access-recommendationservic-otterize-ecom-demo-850ad9: "true"\n  podSelector:\n    matchLabels:\n      intents.otterize.com/server: recommendationservic-otterize-ecom-demo-850ad9\n  policyTypes:\n  - Ingress\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: browse the demo to verify it still works"),(0,l.kt)("p",null,"You can play with the demo in your browser to see it still works as intended, while everything in it is protected against unintended and potentially malicious access."),(0,l.kt)(o.Z,{groupId:"frontend-addr",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"k8s",label:"K8s",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n otterize-ecom-demo frontend-external | awk '{print $4}'\n")),(0,l.kt)("p",null,"The result should be similar to (if running on AWS EKS):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a11843075fd254f8099a986467098647-1889474685.us-east-1.elb.amazonaws.com\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the demo\'s behavior.\n(The URL might take some time to populate across DNS servers. Note that we are accessing an HTTP and not an HTTPS website.)')),(0,l.kt)(i.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl port-forward -n otterize-ecom-demo service/frontend-external 8080:80 &\n")),(0,l.kt)("p",null,"The demo is now accessible at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:8080\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the demo\'s behavior.')))),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn how to ",(0,l.kt)("a",{parentName:"li",href:"/quick-visual-tutorials/visual-ibac-kafka-k8s"},"manage secure access for Kafka")," using the demo lab tutorial.")),(0,l.kt)("h2",{id:"teardown"},"Teardown"),(0,l.kt)("p",null,"To remove the deployed demo run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/all.yaml\nkubectl delete -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/ecom-demo.yaml\nkubectl delete namespace otterize-ecom-demo\n")))}m.isMDXComponent=!0},714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase-0-c52baed0812769632151410b5b83d4e6.png"},5243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase-1-087e5b05c7dc8aed407516841045352f.png"},228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase-2-f29d83d85f034a77b25e77a8b2382cfa.png"},4736:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase-3-183759ab88bfedec993795495eedcd07.png"},2431:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase-4-1d8eadae2281227dad7fd6d4ddf0e39f.png"},7547:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase-5-cea07946b7b46848876f99123c04d6dd.png"}}]);