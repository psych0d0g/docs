"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>w});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,w=p["".concat(l,".").concat(d)]||p[d]||m[d]||n;return r?a.createElement(w,o(o({ref:t},u),{},{components:r})):a.createElement(w,o({ref:t},u))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},700:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294);function i(e){let{items:t,colSize:r}=e,i="lg:tw-grid-cols-2 tw-gap-4 xs:tw-grid-cols-1 ";return"lg"===r?i="lg:tw-grid-cols-4 tw-gap-2 xs:tw-grid-cols-2":"md"===r&&(i="lg:tw-grid-cols-3 tw-gap-2 xs:tw-grid-cols-1 md:tw-grid-cols-2"),a.createElement("div",{className:`tw-grid ${i}`},t.map((e=>a.createElement("div",{key:e.title,className:"tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border tw-border-solid tw-border-primary-500 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2 hover:tw-border-primary-600 hover:tw-shadow-md"},e.icon&&a.createElement("div",{className:"tw-flex-shrink-0"},a.createElement("img",{width:"40px",className:"tw-max-h-10 tw-max-w-10",src:e.icon,alt:""})),a.createElement("div",{className:"tw-min-w-0 tw-flex-1"},a.createElement("a",{href:e.url,className:"focus:tw-outline-none hover:tw-no-underline"},a.createElement("span",{className:"tw-absolute tw-inset-0","aria-hidden":"true"}),a.createElement("div",{className:"tw-text-md tw-font-medium tw-text-gray-900 tw-break-keep"},e.title),e.description&&a.createElement("div",{className:"tw-text-sm tw-text-gray-500"},e.description)))))))}},4155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>w,frontMatter:()=>o,metadata:()=>l,toc:()=>u,tutorials:()=>p});var a=r(7462),i=(r(7294),r(3905)),n=r(700);const o={sidebar_position:1,title:"AWS IAM | Overview",hide_table_of_contents:!0,hide_title:!0},s=void 0,l={unversionedId:"features/aws-iam/index",id:"features/aws-iam/index",title:"AWS IAM | Overview",description:"Otterize can create just-in-time AWS IAM roles and policies for your workloads running on EKS Kubernetes clusters, greatly simplifying the lifecycle of managing IAM roles and policies.",source:"@site/docs/features/aws-iam/index.mdx",sourceDirName:"features/aws-iam",slug:"/features/aws-iam/",permalink:"/features/aws-iam/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/aws-iam/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AWS IAM | Overview",hide_table_of_contents:!0,hide_title:!0},sidebar:"docSidebar",previous:{title:"Network Policies Deep Dive",permalink:"/features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive"},next:{title:"Automate AWS IAM for EKS",permalink:"/features/aws-iam/tutorials/aws-iam-eks"}},c={},u=[{value:"Tutorials",id:"tutorials",level:3},{value:"How does Otterize work with AWS IAM?",id:"how-does-otterize-work-with-aws-iam",level:3},{value:"Automatically generating ClientIntents for AWS IAM",id:"automatically-generating-clientintents-for-aws-iam",level:3}],p=[{title:"Automate AWS IAM for EKS",description:"Create just-in-time AWS IAM roles and policies that are kept in sync with your workloads",url:"aws-iam/tutorials/aws-iam-eks"}],m={toc:u,tutorials:p},d="wrapper";function w(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-iam"},"AWS IAM"),(0,i.kt)("p",null,"Otterize can create just-in-time AWS IAM roles and policies for your workloads running on EKS Kubernetes clusters, greatly simplifying the lifecycle of managing IAM roles and policies."),(0,i.kt)("h3",{id:"tutorials"},"Tutorials"),(0,i.kt)("p",null,"To learn how to use the Intents Operator and Credentials Operator to manage just-in-time AWS IAM access, check out the tutorial."),(0,i.kt)(n.Z,{items:p,colSize:"sm",mdxType:"DocsLinkCard"}),(0,i.kt)("h3",{id:"how-does-otterize-work-with-aws-iam"},"How does Otterize work with AWS IAM?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, the EKS cluster must have ",(0,i.kt)("a",{parentName:"li",href:"/overview/installation"},"Otterize installed"),"."),(0,i.kt)("li",{parentName:"ol"},"To have a role created for a pod, label the pod with ",(0,i.kt)("inlineCode",{parentName:"li"},'credentials-operator.otterize.com/create-aws-role: "true"')),(0,i.kt)("li",{parentName:"ol"},"The credentials operator will create a role and an ",(0,i.kt)("inlineCode",{parentName:"li"},"AssumeRolePolicy")," (trust relationship) bound to the pod's ServiceAccount. The ServiceAccount will be annotated automatically."),(0,i.kt)("li",{parentName:"ol"},"At this point, the pod is able to assume the role, but role does not have the ability to perform any actions. We will need to create a ClientIntents YAML for the access the service requires and apply it to our cluster. Below is an example of a ClientIntents file for accessing an S3 bucket. View the ",(0,i.kt)("a",{parentName:"li",href:"/features/aws-iam/reference"},"reference")," to learn more about the AWS IAM ClientIntents syntax."),(0,i.kt)("li",{parentName:"ol"},"Once the intent is applied, the intents operator will create a new policy, which will be attached to the service\u2019s role with the appropriate access."),(0,i.kt)("li",{parentName:"ol"},"Done!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: server\nspec:\n  service:\n    name: server\n  calls:\n    - name: arn:aws:s3:::example-bucket-*/*\n      type: aws\n      awsActions:\n        - "s3:PutObject"\n        - "s3:GetObject"\n')),(0,i.kt)("h3",{id:"automatically-generating-clientintents-for-aws-iam"},"Automatically generating ClientIntents for AWS IAM"),(0,i.kt)("p",null,"Figuring out which access you need for AWS can be a painful, trial and error process, and something you ",(0,i.kt)("em",{parentName:"p"},"must")," do if you're tightening production access."),(0,i.kt)("p",null,"Otterize is getting ready to release support for using existing traffic to generate least-privilege IAM policies. Keen to try this out as part of early access? Sign up to the ",(0,i.kt)("a",{parentName:"p",href:"https://otterize.com/EarlyAccessBetaProgram"},"Early Access Beta Program")," and we'll be in touch!"))}w.isMDXComponent=!0}}]);