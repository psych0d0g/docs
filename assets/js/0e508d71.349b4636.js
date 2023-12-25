"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8635,7918],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(p(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},3155:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(7462),r=a(7294),o=a(2389),l=a(6010),s=a(6412),i=a(5281),c=a(7016);const u={codeBlockContainer:"codeBlockContainer_APcc"};function p(e){let{as:t,...a}=e;const o=(0,s.p)(),p=(0,c.QC)(o);return r.createElement(t,(0,n.Z)({},a,{style:p,className:(0,l.Z)(a.className,u.codeBlockContainer,i.k.common.codeBlock)}))}const m={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function d(e){let{children:t,className:a}=e;return r.createElement(p,{as:"pre",tabIndex:0,className:(0,l.Z)(m.codeBlockStandalone,"thin-scrollbar",a)},r.createElement("code",{className:m.codeBlockLines},t))}var h=a(6668),k=a(5448),g=a(3746);const b={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var f=a(4996);function v(e){let{line:t,classNames:a,showLineNumbers:o,getLineProps:s,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=s({line:t,className:(0,l.Z)(a,o&&b.codeLine)}),u=t.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},i({token:e,key:t})))));return r.createElement("span",c,o?r.createElement(r.Fragment,null,r.createElement("span",{className:b.codeLineNumber}),r.createElement("span",{className:b.codeLineContent},u)):u,r.createElement("br",null))}var y=a(195),w=a(5999),N=a(345),A=a(7666);const C={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function S(e){let{code:t,className:a}=e;const[n,o]=(0,r.useState)(!1),s=(0,r.useRef)(void 0),i=(0,r.useCallback)((()=>{(0,y.Z)(t),o(!0),s.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,w.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,w.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,w.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",a,C.copyButton,n&&C.copyButtonCopied),onClick:i},r.createElement("span",{className:C.copyButtonIcons,"aria-hidden":"true"},r.createElement(N.Z,{className:C.copyButtonIcon}),r.createElement(A.Z,{className:C.copyButtonSuccessIcon})))}var E=a(670);const I={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function B(e){let{className:t,onClick:a,isEnabled:n}=e;const o=(0,w.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:a,className:(0,l.Z)("clean-btn",t,n&&I.wordWrapButtonEnabled),"aria-label":o,title:o},r.createElement(E.Z,{className:I.wordWrapButtonIcon,"aria-hidden":"true"}))}function z(e){let{children:t,className:a="",metastring:o,title:i,showLineNumbers:u,language:d}=e;const{prism:{defaultLanguage:b,magicComments:y}}=(0,h.L)(),w=d??(0,c.Vo)(a)??b,N=(0,s.p)(),A=(0,k.F)(),C=(0,c.bc)(o)||i,{lineClassNames:E,code:I}=(0,c.nZ)(t,{metastring:o,language:w,magicComments:y}),z=(0,f.Z)("/",{absolute:!0}).slice(0,-1),T=I.replaceAll("${ABSOLUTE_URL}",z),D=u??(0,c.nt)(o);return r.createElement(p,{as:"div",className:(0,l.Z)(a,w&&!a.includes(`language-${w}`)&&`language-${w}`)},C&&r.createElement("div",{className:m.codeBlockTitle},C),r.createElement("div",{className:m.codeBlockContent},r.createElement(g.ZP,(0,n.Z)({},g.lG,{theme:N,code:T,language:w??"text"}),(e=>{let{className:t,tokens:a,getLineProps:n,getTokenProps:o}=e;return r.createElement("pre",{tabIndex:0,ref:A.codeBlockRef,className:(0,l.Z)(t,m.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.Z)(m.codeBlockLines,D&&m.codeBlockLinesWithNumbering)},a.map(((e,t)=>r.createElement(v,{key:t,line:e,getLineProps:n,getTokenProps:o,classNames:E[t],showLineNumbers:D})))))})),r.createElement("div",{className:m.buttonGroup},(A.isEnabled||A.isCodeScrollable)&&r.createElement(B,{className:m.codeButton,onClick:()=>A.toggle(),isEnabled:A.isEnabled}),r.createElement(S,{className:m.codeButton,code:T}))))}function T(e){let{children:t,...a}=e;const l=(0,o.Z)(),s=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof s?z:d;return r.createElement(i,(0,n.Z)({key:String(l)},a),s)}},896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));a(3155),a(4866),a(5162);const o={sidebar_position:2,title:"Automate AWS IAM for EKS",image:"/img/quick-tutorials/aws-iam-eks/social.png"},l=void 0,s={unversionedId:"quickstart/access-control/aws-iam-eks",id:"quickstart/access-control/aws-iam-eks",title:"Automate AWS IAM for EKS",description:"Otterize automates AWS IAM roles and policies for your AWS EKS workloads, all in Kubernetes.",source:"@site/docs/quickstart/access-control/aws-iam-eks.mdx",sourceDirName:"quickstart/access-control",slug:"/quickstart/access-control/aws-iam-eks",permalink:"/quickstart/access-control/aws-iam-eks",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quickstart/access-control/aws-iam-eks.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Automate AWS IAM for EKS",image:"/img/quick-tutorials/aws-iam-eks/social.png"},sidebar:"docSidebar",previous:{title:"Network policies on AWS EKS with the VPC CNI",permalink:"/quickstart/access-control/aws-eks-cni-mini"},next:{title:"Just-in-time PostgreSQL users & access",permalink:"/quickstart/access-control/postgresql"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Create an AWS EKS cluster",id:"1-create-an-aws-eks-cluster",level:4},{value:"2. Deploy Otterize for AWS IAM",id:"2-deploy-otterize-for-aws-iam",level:4},{value:"Tutorial",id:"tutorial",level:2},{value:"Create an S3 bucket for the server to use",id:"create-an-s3-bucket-for-the-server-to-use",level:3},{value:"Deploy the sample server and client",id:"deploy-the-sample-server-and-client",level:3},{value:"View logs for the server - access denied",id:"view-logs-for-the-server---access-denied",level:3},{value:"Label the server pod to create an AWS IAM role",id:"label-the-server-pod-to-create-an-aws-iam-role",level:3},{value:"An AWS IAM role was created",id:"an-aws-iam-role-was-created",level:4},{value:"The Kubernetes ServiceAccount was annotated with the role ARN",id:"the-kubernetes-serviceaccount-was-annotated-with-the-role-arn",level:4},{value:"Apply intents to create the necessary IAM policy",id:"apply-intents-to-create-the-necessary-iam-policy",level:3},{value:"The server can now upload files to S3!",id:"the-server-can-now-upload-files-to-s3",level:3},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Otterize automates AWS IAM roles and policies for your AWS EKS workloads, all in Kubernetes."),(0,r.kt)("p",null,"In this tutorial, we will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Optionally, spin up an EKS cluster."),(0,r.kt)("li",{parentName:"ul"},"Deploy a server pod that uploads files to S3, and a client pod that submits files to the server app."),(0,r.kt)("li",{parentName:"ul"},"Label the server pod, telling the credentials operator to link its Kubernetes ServiceAccount with an AWS IAM role created for it, such that AWS IRSA can recognize the pod."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"ClientIntents")," resource allowing the server pod to upload to S3, that tells the intents operator to update the previously-created role's policy."),(0,r.kt)("li",{parentName:"ul"},"See that the files have been uploaded successfully.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Already have Otterize deployed with the IAM integration configured on your cluster? ",(0,r.kt)("a",{parentName:"p",href:"#tutorial"},"Skip to the tutorial.")),(0,r.kt)("h4",{id:"1-create-an-aws-eks-cluster"},"1. Create an AWS EKS cluster"),(0,r.kt)("p",null,"Before you start, you'll need an AWS EKS cluster. Any cluster will do; there are no special requirements or setup."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How to set up an AWS EKS cluster using eksctl"),(0,r.kt)("p",null,"Save this ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-config.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\n\nmetadata:\n  name: otterize-iam-eks-tutorial\n  region: us-west-2\n  version: "1.27"\n\niam:\n  withOIDC: true\n\nvpc:\n  clusterEndpoints:\n    publicAccess: true\n    privateAccess: true\n\naddons:\n  - name: vpc-cni\n    version: 1.14.0\n    attachPolicyARNs: #optional\n    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy\n    configurationValues: |-\n      enableNetworkPolicy: "true"\n  - name: coredns\n  - name: kube-proxy\n\nmanagedNodeGroups:\n  - name: small-on-demand\n    amiFamily: AmazonLinux2\n    instanceTypes: [ "t3.large" ]\n    minSize: 0\n    desiredCapacity: 2\n    maxSize: 6\n    privateNetworking: true\n    disableIMDSv1: true\n    volumeSize: 100\n    volumeType: gp3\n    volumeEncrypted: true\n    tags:\n      team: "eks"\n')),(0,r.kt)("p",null,"Then run the following command to create your cluster. ",(0,r.kt)("a",{parentName:"p",href:"https://eksctl.io/installation/"},"Don't have eksctl? Install it now.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"eksctl create cluster -f cluster-config.yaml\n"))),(0,r.kt)("p",null,"Don't forget to configure your kubeconfig for your cluster. If using the example cluster above, use this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks update-kubeconfig --region us-west-2 --name otterize-iam-eks-tutorial\n")),(0,r.kt)("h4",{id:"2-deploy-otterize-for-aws-iam"},"2. Deploy Otterize for AWS IAM"),(0,r.kt)("p",null,"To deploy Otterize, head over to ",(0,r.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"Otterize Cloud")," and:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Kubernetes cluster on the ",(0,r.kt)("a",{parentName:"p",href:"https://app.otterize.com/clusters"},"Clusters page"),", and follow the instructions. ",(0,r.kt)("em",{parentName:"p"},"Make sure to enable enforcement mode for this tutorial.")," If you already have a Kubernetes cluster connected, skip this step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an AWS IAM integration on the ",(0,r.kt)("a",{parentName:"p",href:"https://app.otterize.com/integrations"},"Integrations page"),"."))),(0,r.kt)("p",null,"If you are using the cluster from the previous step, the cluster name is ",(0,r.kt)("inlineCode",{parentName:"p"},"otterize-iam-eks-tutorial")," and the region is ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west-2"),"."),(0,r.kt)("p",null,"Once the AWS integration is configured, you'll be presented with a dialog to launch a CloudFormation template to configure the IAM roles for the Otterize operators. This enables the operators to manage IAM for the pods in your cluster.\nThis setup is required once per-cluster, and configures AWS IRSA on your cluster, if it is not yet configured. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/otterize/setup/blob/main/aws-iam-operator-setup-template.yaml"},"This template can be found on GitHub as well"),"."),(0,r.kt)("p",null,"After CloudFormation has configured your cluster, click Next and you'll be presented with the configuration for deploying Otterize. Since you now have the AWS integration enabled, you need to redeploy Otterize with the credentials operator enabled, and with configuration telling the operators which AWS roles they will AssumeRole to in order to operate."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"See how to manually configure AWS IRSA on your cluster for Otterize"),(0,r.kt)("p",null,"You may also manually configure your cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html"},"Configure AWS IRSA on your cluster according to the official instructions from AWS."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create IAM roles for the intents operator and credentials operator."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Create two roles, named '","[your-cluster-name]","-otterize-intents-operator' and '","[your-cluster-name]","-otterize-credentials-operator'."),(0,r.kt)("li",{parentName:"ol"},"Each of them should have a trust relationship with the intents-operator and credentials-operator service accounts on your cluster, and federated with your OpenIDConnect provider for the cluster.\nHere's an example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n    {\n        "Effect": "Allow",\n        "Principal": {\n            "Federated": "arn:aws:iam::353146681200:oidc-provider/oidc.eks.us-west-2.amazonaws.com/id/C90DC306FCDDFFD362B58B0D28D844CB"\n        },\n        "Action": "sts:AssumeRoleWithWebIdentity",\n        "Condition": {\n            "StringEquals": {\n                "oidc.eks.us-west-2.amazonaws.com/id/C90DC306FCDDFFD362B58B0D28D844CB:sub": "system:serviceaccount:otterize-system:intents-operator-controller-manager"\n            }\n        }\n    }\n    ]\n}\n')))),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"C90DC306FCDDFFD362B58B0D28D844CB")," is your OpenIDConnect provider ID.\nFor the ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials-operator"),", substitute ",(0,r.kt)("inlineCode",{parentName:"p"},"system:serviceaccount:otterize-system:intents-operator-controller-manager")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"system:serviceaccount:otterize-system:credentials-operator-controller-manager"),"."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create IAM policies for these two roles.\nThey should grant access to all ",(0,r.kt)("inlineCode",{parentName:"li"},"iam")," permissions in the account, and a subset of ",(0,r.kt)("inlineCode",{parentName:"li"},"organizations")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ec2")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"eks")," permissions. Here's an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    Statement:\n        - Effect: Allow\n    Action:\n        - "iam:*"\n        - "organizations:DescribeAccount"\n        - "organizations:DescribeOrganization"\n        - "organizations:DescribeOrganizationalUnit"\n        - "organizations:DescribePolicy"\n        - "organizations:ListChildren"\n        - "organizations:ListParents"\n        - "organizations:ListPoliciesForTarget"\n        - "organizations:ListRoots"\n        - "organizations:ListPolicies"\n        - "organizations:ListTargetsForPolicy"\n        - "ec2:DescribeInstances"\n        - "eks:DescribeCluster"\n    Resource: "*"\n'))),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("h3",{id:"create-an-s3-bucket-for-the-server-to-use"},"Create an S3 bucket for the server to use"),(0,r.kt)("p",null,"First, we need to pick an S3 bucket name. Because S3 buckets are globally unique, we will save the bucket name in an environment variable for use later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export BUCKET_NAME=otterize-tutorial-bucket-`date +%s`\necho $BUCKET_NAME\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3api create-bucket --bucket $BUCKET_NAME --region us-west-2 --create-bucket-configuration LocationConstraint=us-west-2\n")),(0,r.kt)("h3",{id:"deploy-the-sample-server-and-client"},"Deploy the sample server and client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl create namespace otterize-tutorial-iam\nkubectl apply -n otterize-tutorial-iam -f ${ABSOLUTE_URL}/code-examples/aws-iam-eks/client-and-server.yaml\nkubectl patch deployment -n otterize-tutorial-iam server --type=\'json\' -p="[{\\"op\\": \\"replace\\", \\"path\\": \\"/spec/template/spec/containers/0/env\\", \\"value\\": [{\\"name\\": \\"BUCKET_NAME\\", \\"value\\": \\"$BUCKET_NAME\\"}]}]"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the deployment YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: server\n  template:\n    metadata:\n      labels:\n        app: server\n    spec:\n      serviceAccountName: server\n      containers:\n        - name: server\n          imagePullPolicy: Always\n          image: 'public.ecr.aws/e3b4k2v5/ekstutorial:server'\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: server\nspec:\n  type: ClusterIP\n  selector:\n    app: server\n  ports:\n    - name: http\n      port: 80\n      targetPort: 80\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: server\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: client\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: client\n  template:\n    metadata:\n      labels:\n        app: client\n    spec:\n      containers:\n        - name: client\n          imagePullPolicy: Always\n          image: 'public.ecr.aws/e3b4k2v5/ekstutorial:client'\n          ports:\n            - containerPort: 80\n\n"))),(0,r.kt)("h3",{id:"view-logs-for-the-server---access-denied"},"View logs for the server - access denied"),(0,r.kt)("p",null,"The server logs will show that it fails to upload files to the S3 bucket."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f -n otterize-tutorial-iam deploy/server\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2023/11/17 19:08:30 Couldn't upload file testfile.0.txt to otterize-tutorial-bucket-1700247949:testfile.0.txt.\nHere's why: operation error S3: PutObject, https response error StatusCode: 403, RequestID: W9ZBNWPDFEMTBBS5, HostID: gsOlyxAmcUqFiYKzB7IwBoPia/Z2TDHEoaJjXT/qAxdduD4H17XDoGu21Pb7zeMms/YeThv2mJk=,\n# highlight-next-line\napi error AccessDenied: Access Denied\n")),(0,r.kt)("h3",{id:"label-the-server-pod-to-create-an-aws-iam-role"},"Label the server pod to create an AWS IAM role"),(0,r.kt)("p",null,"Label the server ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod")," so that the Otterize credentials operator creates an AWS IAM role for it and binds its Kubernetes ServiceAccount to the newly created role."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  labels:\n    credentials-operator.otterize.com/create-aws-role: "true"\n')),(0,r.kt)("p",null,"To do this, we won't be labeling the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod")," directly, but instead patching the ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," we created earlier so that it updates the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch deployment -n otterize-tutorial-iam server -p \'{"spec": {"template":{"metadata":{"labels":{"credentials-operator.otterize.com/create-aws-role":"true"}}}} }\'\n')),(0,r.kt)("h4",{id:"an-aws-iam-role-was-created"},"An AWS IAM role was created"),(0,r.kt)("p",null,"Let's inspect the created role:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws iam list-roles --query 'Roles[?starts_with(RoleName, `otr-`) == `true`]'\n")),(0,r.kt)("p",null,"In the output, you should see that a role was created, with an ",(0,r.kt)("inlineCode",{parentName:"p"},"AssumeRolePolicyDocument")," that enables the server's ServiceAccount to AssumeRole."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "Path": "/",\n        "RoleName": "otr-otterize-tutorial-iam.server@otterize-iam-eks-tutoria-ef91a7",\n        "RoleId": "AROAVEOJOW5YM2CXSB4FJ",\n        "Arn": "arn:aws:iam::353146681200:role/otr-otterize-tutorial-iam.server@otterize-iam-eks-tutoria-ef91a7",\n        "CreateDate": "2023-11-21T12:03:42+00:00",\n        "AssumeRolePolicyDocument": {\n            "Version": "2012-10-17",\n            "Statement": [\n                {\n                    "Effect": "Allow",\n                    "Principal": {\n                        "Federated": "arn:aws:iam::353146681200:oidc-provider/oidc.eks.us-west-2.amazonaws.com/id/84E95D704D69DB40F4E4B6B6A6777CA3"\n                    },\n                    "Action": "sts:AssumeRoleWithWebIdentity",\n                    "Condition": {\n                        "StringEquals": {\n                            # highlight-next-line\n                            "oidc.eks.us-west-2.amazonaws.com/id/84E95D704D69DB40F4E4B6B6A6777CA3:aud": "sts.amazonaws.com",\n                            # highlight-next-line\n                            "oidc.eks.us-west-2.amazonaws.com/id/84E95D704D69DB40F4E4B6B6A6777CA3:sub": "system:serviceaccount:otterize-tutorial-iam:server"\n                        }\n                    }\n                }\n            ]\n        },\n    [...]\n}\n}\n')),(0,r.kt)("h4",{id:"the-kubernetes-serviceaccount-was-annotated-with-the-role-arn"},"The Kubernetes ServiceAccount was annotated with the role ARN"),(0,r.kt)("p",null,"The credentials operator automatically annotated the Kubernetes ServiceAccount for the server pod with the newly created role ARN."),(0,r.kt)("p",null,"Let's look at the service account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get serviceaccount -n otterize-tutorial-iam server -o yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  annotations:\n    # highlight-next-line\n    eks.amazonaws.com/role-arn:\n    # highlight-next-line\n      arn:aws:iam::353146681200:role/otr-otterize-tutorial-iam.server@otterize-iam-eks-tutoria-ef91a7\n  name: server\n  namespace: otterize-tutorial-iam\n")),(0,r.kt)("h3",{id:"apply-intents-to-create-the-necessary-iam-policy"},"Apply intents to create the necessary IAM policy"),(0,r.kt)("p",null,"By annotating the pod, we've created an IAM role. We now need to specify what we need to access, and the intents operator will create an IAM policy accordingly."),(0,r.kt)("p",null,"We will specify the following ClientIntents, granting the PutObject permission to the ",(0,r.kt)("inlineCode",{parentName:"p"},"otterize-tutorial-bucket")," S3 bucket."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: server\nspec:\n  service:\n    name: server\n  calls:\n    - name: arn:aws:s3:::otterize-tutorial-bucket-*/*\n      type: aws\n      awsActions:\n        - "s3:PutObject"\n')),(0,r.kt)("p",null,"To apply these intents, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-tutorial-iam -f ${ABSOLUTE_URL}/code-examples/aws-iam-eks/clientintents.yaml\n")),(0,r.kt)("h3",{id:"the-server-can-now-upload-files-to-s3"},"The server can now upload files to S3!"),(0,r.kt)("p",null,"Let's look at the server logs again to see that no more errors are being reported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f -n otterize-tutorial-iam deploy/server\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  # highlight-next-line\n  "status":200,\n  "host":"server",\n  "method":"POST",\n  "uri":"/upload"\n}\n')),(0,r.kt)("p",null,"Let's list the contents of the S3 bucket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3 ls $BUCKET_NAME\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2023-11-17 20:43:05         19 testfile.0.txt\n2023-11-17 20:42:35         19 testfile.1.txt\n2023-11-17 20:42:45         19 testfile.2.txt\n2023-11-17 20:42:55         19 testfile.3.txt\n")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Try out some of the other quick tutorials to learn about how to use ClientIntents to manage network policies, Istio policies, PostgreSQL access, and more. You can use a single ClientIntents resource to specify all the access required for a pod."),(0,r.kt)("h2",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed examples run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-iam\n")),(0,r.kt)("p",null,"To delete the cluster, if you created the one in this tutorial:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl delete cluster -f cluster-config.yaml\n")),(0,r.kt)("p",null,"To empty and delete the S3 bucket created for this tutorial:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3 rm s3://otterize-tutorial-bucket --recursive\naws s3 rb s3://otterize-tutorial-bucket\n")))}m.isMDXComponent=!0}}]);