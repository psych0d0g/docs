"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4911,8401],{9365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540),o=n(53);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,l),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(8168),o=n(6540),i=n(53),l=n(3104),r=n(6347),s=n(7485),c=n(1682),u=n(9466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,r]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),y=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{y&&r(y)}),[y]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var y=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==r&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.A)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return o.createElement("div",{className:(0,i.A)("tabs-container",b.tabList)},o.createElement(f,(0,a.A)({},e,t)),o.createElement(w,(0,a.A)({},e,t)))}function N(e){const t=(0,y.A)();return o.createElement(v,(0,a.A)({key:String(t)},e))}},1202:(e,t,n)=>{n.d(t,{A:()=>L});var a=n(8168),o=n(6540),i=n(2303),l=n(53),r=n(6058),s=n(7559),c=n(4291);const u={codeBlockContainer:"codeBlockContainer_APcc"};function p(e){let{as:t,...n}=e;const i=(0,r.A)(),p=(0,c.M$)(i);return o.createElement(t,(0,a.A)({},n,{style:p,className:(0,l.A)(n.className,u.codeBlockContainer,s.G.common.codeBlock)}))}const d={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function m(e){let{children:t,className:n}=e;return o.createElement(p,{as:"pre",tabIndex:0,className:(0,l.A)(d.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:d.codeBlockLines},t))}var h=n(6342),g=n(6591),y=n(8382);const b={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var f=n(6025);function w(e){let{line:t,classNames:n,showLineNumbers:i,getLineProps:r,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=r({line:t,className:(0,l.A)(n,i&&b.codeLine)}),u=t.map(((e,t)=>o.createElement("span",(0,a.A)({key:t},s({token:e,key:t})))));return o.createElement("span",c,i?o.createElement(o.Fragment,null,o.createElement("span",{className:b.codeLineNumber}),o.createElement("span",{className:b.codeLineContent},u)):u,o.createElement("br",null))}var v=n(6861),N=n(1312),k=n(1473),T=n(4115);const A={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function I(e){let{code:t,className:n}=e;const[a,i]=(0,o.useState)(!1),r=(0,o.useRef)(void 0),s=(0,o.useCallback)((()=>{(0,v.A)(t),i(!0),r.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),o.createElement("button",{type:"button","aria-label":a?(0,N.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,N.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,N.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)("clean-btn",n,A.copyButton,a&&A.copyButtonCopied),onClick:s},o.createElement("span",{className:A.copyButtonIcons,"aria-hidden":"true"},o.createElement(k.A,{className:A.copyButtonIcon}),o.createElement(T.A,{className:A.copyButtonSuccessIcon})))}var E=n(5048);const C={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function z(e){let{className:t,onClick:n,isEnabled:a}=e;const i=(0,N.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,l.A)("clean-btn",t,a&&C.wordWrapButtonEnabled),"aria-label":i,title:i},o.createElement(E.A,{className:C.wordWrapButtonIcon,"aria-hidden":"true"}))}function B(e){let{children:t,className:n="",metastring:i,title:s,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:b,magicComments:v}}=(0,h.p)(),N=m??(0,c.Op)(n)??b,k=(0,r.A)(),T=(0,g.f)(),A=(0,c.wt)(i)||s,{lineClassNames:E,code:C}=(0,c.Li)(t,{metastring:i,language:N,magicComments:v}),B=(0,f.A)("/",{absolute:!0}).slice(0,-1),L=C.replaceAll("${ABSOLUTE_URL}",B),S=u??(0,c._u)(i);return o.createElement(p,{as:"div",className:(0,l.A)(n,N&&!n.includes(`language-${N}`)&&`language-${N}`)},A&&o.createElement("div",{className:d.codeBlockTitle},A),o.createElement("div",{className:d.codeBlockContent},o.createElement(y.Ay,(0,a.A)({},y.Gs,{theme:k,code:L,language:N??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:i}=e;return o.createElement("pre",{tabIndex:0,ref:T.codeBlockRef,className:(0,l.A)(t,d.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,l.A)(d.codeBlockLines,S&&d.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(w,{key:t,line:e,getLineProps:a,getTokenProps:i,classNames:E[t],showLineNumbers:S})))))})),o.createElement("div",{className:d.buttonGroup},(T.isEnabled||T.isCodeScrollable)&&o.createElement(z,{className:d.codeButton,onClick:()=>T.toggle(),isEnabled:T.isEnabled}),o.createElement(I,{className:d.codeButton,code:L}))))}function L(e){let{children:t,...n}=e;const l=(0,i.A)(),r=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof r?B:m;return o.createElement(s,(0,a.A)({key:String(l)},n),r)}},7202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(8168),o=(n(6540),n(5680));n(1202),n(1470),n(9365);const i={sidebar_position:3,title:"Istio AuthorizationPolicy automation",image:"/img/quick-tutorials/k8s-istio-authorization-policies/social.png"},l=void 0,r={unversionedId:"features/istio/tutorials/k8s-istio-authorization-policies",id:"features/istio/tutorials/k8s-istio-authorization-policies",title:"Istio AuthorizationPolicy automation",description:"Otterize automates mTLS-based, HTTP-level pod-to-pod access control with Istio authorization (authZ) policies, within your Kubernetes cluster.",source:"@site/docs/features/istio/tutorials/k8s-istio-authorization-policies.mdx",sourceDirName:"features/istio/tutorials",slug:"/features/istio/tutorials/k8s-istio-authorization-policies",permalink:"/features/istio/tutorials/k8s-istio-authorization-policies",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/istio/tutorials/k8s-istio-authorization-policies.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Istio AuthorizationPolicy automation",image:"/img/quick-tutorials/k8s-istio-authorization-policies/social.png"},sidebar:"docSidebar",previous:{title:"Istio HTTP-level access mapping",permalink:"/features/istio/tutorials/k8s-istio-watcher"},next:{title:"Reference",permalink:"/features/istio/reference"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Deploy Otterize",id:"1-deploy-otterize",level:3},{value:"2. Install and configure Istio",id:"2-install-and-configure-istio",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Deploy the two clients and the server",id:"deploy-the-two-clients-and-the-server",level:3},{value:"Apply intents",id:"apply-intents",level:3},{value:"See it in action",id:"see-it-in-action",level:3},{value:"What did we accomplish?",id:"what-did-we-accomplish",level:3},{value:"What&#39;s next",id:"whats-next",level:3},{value:"Teardown",id:"teardown",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.yg)(p,(0,a.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Otterize automates mTLS-based, HTTP-level pod-to-pod access control with Istio authorization (authZ) policies, within your Kubernetes cluster."),(0,o.yg)("p",null,"Implementing this kind of access control with Istio is complicated. For example, authorization policies select servers by label, and clients by service account, so both of those need to be created or updated."),(0,o.yg)("p",null,"To help you avoid manually managing complicated authorization policies per server, Otterize implements ",(0,o.yg)("strong",{parentName:"p"},"intent-based access control")," (IBAC).\nYou just declare what calls the client pods intend to make,\nand everything is automatically wired together so only intended calls are allowed."),(0,o.yg)("p",null,"In this tutorial, we will:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Deploy an Istio demo application with two client pods and one server pod."),(0,o.yg)("li",{parentName:"ul"},"Declare that the first client intends to call the server with a specific HTTP path and method."),(0,o.yg)("li",{parentName:"ul"},"See that an Istio authorization policy was autogenerated to allow just that, and to block the (undeclared) calls from the other client.")),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"Already have Otterize deployed with Istio configured on your cluster? Skip to the ",(0,o.yg)("a",{parentName:"p",href:"#tutorial"},"tutorial"),"."),(0,o.yg)("h3",{id:"1-deploy-otterize"},"1. Deploy Otterize"),(0,o.yg)("p",null,"If you do not have a cluster, we will need to prepare one with ",(0,o.yg)("a",{parentName:"p",href:"/overview/installation#create-a-cluster-with-support-for-network-policies"},"network policy support")),(0,o.yg)("p",null,"To deploy Otterize, head over to ",(0,o.yg)("a",{parentName:"p",href:"https://app.otterize.com"},"Otterize Cloud")," and associate a Kubernetes cluster on the ",(0,o.yg)("a",{parentName:"p",href:"https://app.otterize.com/integrations"},"Integrations page"),", and follow the instructions. If you already have a Kubernetes cluster connected, skip this step."),(0,o.yg)("h3",{id:"2-install-and-configure-istio"},"2. Install and configure Istio"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Install Istio in the cluster via Helm"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"helm repo add istio https://istio-release.storage.googleapis.com/charts\nhelm repo update\nhelm install istio-base istio/base -n istio-system --create-namespace\nhelm install istiod istio/istiod -n istio-system --wait\n"))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Add HTTP methods and request paths to Istio exported metrics"),(0,o.yg)("p",null,"Apply this configuration in the ",(0,o.yg)("inlineCode",{parentName:"p"},"istio-system")," namespace, propagating it to all namespaces covered by the mesh."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/network-mapper/istio-telemetry-enablement.yaml -n istio-system\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: telemetry.istio.io/v1alpha1\nkind: Telemetry\nmetadata:\n  name: mesh-default\n  namespace: istio-system\nspec:\n  accessLogging:\n    - providers:\n        - name: envoy\n  metrics:\n    - providers:\n        - name: prometheus\n      overrides:\n        - tagOverrides:\n            request_method:\n              value: request.method\n            request_path:\n              value: request.path\n"))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"HTTP request paths and methods aren't exported in Envoy's connection metrics by default, but we do want to capture those\ndetails when creating the network map. That way we not only have better visibility of the calling patterns,\ne.g. in the access graph, but we can also use that information to automatically generate fine-grained intents and\nenforce them with Istio authorization policies.")),(0,o.yg)("h2",{id:"tutorial"},"Tutorial"),(0,o.yg)("h3",{id:"deploy-the-two-clients-and-the-server"},"Deploy the two clients and the server"),(0,o.yg)("p",null,"Deploy a simple example consisting of ",(0,o.yg)("inlineCode",{parentName:"p"},"client")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"other-client")," calling ",(0,o.yg)("inlineCode",{parentName:"p"},"nginx")," over HTTP:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-istio -f ${ABSOLUTE_URL}/code-examples/istio-authorization-policies/all.yaml\n")),(0,o.yg)("h3",{id:"apply-intents"},"Apply intents"),(0,o.yg)("p",null,"We will now declare that the ",(0,o.yg)("strong",{parentName:"p"},"client")," intends to call the ",(0,o.yg)("strong",{parentName:"p"},"server")," at a particular HTTP path using a specific HTTP method."),(0,o.yg)("p",null,"When the intents YAML is applied, creating a custom resource of type ",(0,o.yg)("inlineCode",{parentName:"p"},"ClientIntents"),",\nOtterize will add an Istio authorization policy to allow the intended call\n(",(0,o.yg)("strong",{parentName:"p"},"client")," ","\u2192"," ",(0,o.yg)("strong",{parentName:"p"},"server")," with the declared path and method) and block all unintended calls (e.g., ",(0,o.yg)("strong",{parentName:"p"},"client-other")," ","\u2192"," ",(0,o.yg)("strong",{parentName:"p"},"server"),")."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"You can click on the services or the lines connecting them to see which ClientIntents you need to apply to make the connection go green!")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Here is the ",(0,o.yg)("inlineCode",{parentName:"li"},"intents.yaml")," declaration of the client, which we will apply below:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-istio\nspec:\n  service:\n    name: client\n  calls:\n    - name: nginx\n      type: http\n      HTTPResources:\n        - path: /client-path\n          methods: [ GET ]\n")),(0,o.yg)("p",null,"To apply it, use:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-istio -f ${ABSOLUTE_URL}/code-examples/istio-authorization-policies/intents.yaml\n")),(0,o.yg)("h3",{id:"see-it-in-action"},"See it in action"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Optional: check deployment status"),"Check that the client and server pods were deployed",(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-istio\n")),(0,o.yg)("p",null,"You should see"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"NAME                           READY   STATUS    RESTARTS   AGE\nclient-68b775f766-749r4         2/2     Running   0          32s\nnginx-c646898-2lq7l             2/2     Running   0          32s\nother-client-74cc54f7b5-9rctd   2/2     Running   0          32s\n"))),(0,o.yg)("p",null,"monitor both client attempts to call the server with additional terminal windows,\nso we can see the effects of our changes in real time."),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Open a new terminal window ","[client]")," and tail the client log:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --tail 1 -n otterize-tutorial-istio deploy/client\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expected output"),(0,o.yg)("p",null,"At this point the client should be able to communicate with the server:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Calling server...\nHTTP/1.1 200 OK\n...\nhello from /client-path\n"))),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Open another terminal window ","[client-other]")," and tail the other-client log:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --tail 1 -n otterize-tutorial-istio deploy/other-client\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expected output"),(0,o.yg)("p",null,"At this point the client should be able to communicate with the server:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Calling server...\nHTTP/1.1 200 OK\n...\nhello from /other-client-path\n"))),(0,o.yg)("p",null,"Keep an eye on the logs being tailed in the ",(0,o.yg)("strong",{parentName:"p"},"[other-client]")," terminal window,\nand apply this ",(0,o.yg)("inlineCode",{parentName:"p"},"intents.yaml")," file in your ",(0,o.yg)("strong",{parentName:"p"},"main terminal window")," using:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/istio-authorization-policies/intents.yaml\n")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Client intents are the cornerstone of ",(0,o.yg)("a",{parentName:"p",href:"/overview/intent-based-access-control"},"intent-based access control (IBAC)"),".")),(0,o.yg)("p",null,"as expected since it didn't declare its intents:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"Calling server...\nHTTP/1.1 200 OK\n...\nhello from /other-client-path  # <- before applying the intents file\n# highlight-start\nCalling server...              # <- after applying the intents file\ncurl timed out\nTerminated\n# highlight-end\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"And in the ",(0,o.yg)("strong",{parentName:"li"},"[client]")," terminal you should see that calls go through, as expected since they were declared:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"Calling server...\nHTTP/1.1 200 OK\n...\nhello from /client-path\n")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"You should also see that a new Istio authorization policy was created:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get authorizationpolicies.security.istio.io -n otterize-tutorial-istio\n")),(0,o.yg)("p",null,"This should return:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"NAME                                                                AGE\nauthorization-policy-to-nginx-from-client.otterize-tutorial-istio   6s\n")),(0,o.yg)("p",null,"If you've attached Otterize OSS to Otterize Cloud, go back to see the ",(0,o.yg)("a",{parentName:"p",href:"https://app.otterize.com"},"access graph in your browser"),":"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Access graph",src:n(7506).A,width:"1194",height:"550"})),(0,o.yg)("p",null,"And upon clicking the green arrow:\n",(0,o.yg)("img",{alt:"Access graph",src:n(3890).A,width:"1640",height:"1058"})),(0,o.yg)("p",null,"It's now clear what happened:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The server is now protected, and is also blocking some of its clients."),(0,o.yg)("li",{parentName:"ol"},"Calls from ",(0,o.yg)("strong",{parentName:"li"},"[client]")," ","\u2192"," ",(0,o.yg)("strong",{parentName:"li"},"[nginx]")," are declared and therefore allowed (green arrow)."),(0,o.yg)("li",{parentName:"ol"},"Calls from ",(0,o.yg)("strong",{parentName:"li"},"[client-other]")," ","\u2192"," ",(0,o.yg)("strong",{parentName:"li"},"[nginx]")," are not declared and therefore blocked (red arrow). Click on the arrow to see what to do about it.")),(0,o.yg)("admonition",{title:"Done!",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Otterize did its job of both protecting the server ",(0,o.yg)("em",{parentName:"p"},"and")," allowing intended access.")),(0,o.yg)("h3",{id:"what-did-we-accomplish"},"What did we accomplish?"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Controlling access through Istio authorization policies no longer means touching authorization policies at all.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The server is now protected, and can be accessed only by clients which declared their intents, authenticated via mTLS connection with specific certificates.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Clients simply declare what they need to access with their intents files.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The next ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl apply")," ensures that authorization policies automatically reflect the most recent intended pod-to-pod access."))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see what happened behind the scenes"),(0,o.yg)("p",null,"Otterize generated a specific Istio authorization policy on the ingress of the pod of the server, allowing the server to\nbe accessed by the pod of the client, based on that client's declared intent. Otterize uses labels to define the authorization policy and associate it\nwith a server in a namespace, and uses service accounts to identify clients, as Istio requires. This happens as follows:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The server's pod is given a label ",(0,o.yg)("inlineCode",{parentName:"li"},"intents.otterize.com/server")," whose value uniquely represents that server.\nThe Istio authorization policy stipulates that it applies to the ingress of server pods with this label."),(0,o.yg)("li",{parentName:"ol"},"The client's service account is looked up through its pod, and used in the policy.\nThe authorization policy stipulates that only services with this service account can access the server.\nIn the event that the service account is shared by multiple services, an Event is placed on the ",(0,o.yg)("inlineCode",{parentName:"li"},"ClientIntent")," to warn about this, which is also picked up as a warning in Otterize Cloud, if connected.")),(0,o.yg)("p",null,"Otterize saved us from doing all this work: by simply declaring the client's intents in ",(0,o.yg)("inlineCode",{parentName:"p"},"intents.yaml"),",\nall the appropriate configuration was managed automatically behind the scenes."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/reference/configuration/intents-operator#istio-authorizationpolicy"},"Learn more about Istio authorization policies and Otterize"),".")),(0,o.yg)("admonition",{title:"Bonus tutorial",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Try to create an intents file yourself for ",(0,o.yg)("strong",{parentName:"p"},"client-other"),", and apply it to allow this other client to call the server.")),(0,o.yg)("h3",{id:"whats-next"},"What's next"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Get started with the ",(0,o.yg)("a",{parentName:"li",href:"/features/istio/tutorials/k8s-istio-watcher"},"Otterize network mapper for Istio")," to help you bootstrap intents files with HTTP resources\nfor use in ",(0,o.yg)("a",{parentName:"li",href:"/overview/intent-based-access-control"},"intent-based access control (IBAC)"),".")),(0,o.yg)("h2",{id:"teardown"},"Teardown"),(0,o.yg)("p",null,"To remove Istio and the deployed examples run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"helm uninstall istio-base -n istio-system\nkubectl delete namespace otterize-tutorial-istio\n")))}d.isMDXComponent=!0},3890:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/protected-edge-ef642c654e3f2bf46da53556e59bfeb9.png"},7506:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/protected-d21698ff0bd06b6f6d07da1c777ddba7.png"}}]);