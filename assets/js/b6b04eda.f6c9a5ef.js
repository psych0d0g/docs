"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6362],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),i=a(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),i=a(7294),r=a(6010),o=a(2466),l=a(6550),s=a(1980),p=a(7392),c=a(12);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function m(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,p]=h({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??u;return d({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,r]),tabValues:r}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==l&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(b,(0,n.Z)({},e,t)),i.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return i.createElement(y,(0,n.Z)({key:String(t)},e))}},3105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),r=a(4866),o=a(5162);a(3875);const l={sidebar_position:2,title:"Istio HTTP-level access mapping",image:"/img/visualization/k8s-istio-watcher/social.png"},s=void 0,p={unversionedId:"features/istio/tutorials/k8s-istio-watcher",id:"features/istio/tutorials/k8s-istio-watcher",title:"Istio HTTP-level access mapping",description:"With its Istio watcher enabled, the network mapper allows you to map pod-to-pod Istio traffic within your K8s cluster.",source:"@site/docs/features/istio/tutorials/k8s-istio-watcher.mdx",sourceDirName:"features/istio/tutorials",slug:"/features/istio/tutorials/k8s-istio-watcher",permalink:"/features/istio/tutorials/k8s-istio-watcher",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/istio/tutorials/k8s-istio-watcher.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Istio HTTP-level access mapping",image:"/img/visualization/k8s-istio-watcher/social.png"},sidebar:"docSidebar",previous:{title:"Istio | Overview",permalink:"/features/istio/"},next:{title:"Istio AuthorizationPolicy automation",permalink:"/features/istio/tutorials/k8s-istio-authorization-policies"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Deploy Otterize",id:"1-deploy-otterize",level:3},{value:"2. Install and configure Istio",id:"2-install-and-configure-istio",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Deploy demo to simulate traffic",id:"deploy-demo-to-simulate-traffic",level:3},{value:"Map the cluster",id:"map-the-cluster",level:3},{value:"Extract and see the network map",id:"extract-and-see-the-network-map",level:3},{value:"Show the access graph in Otterize Cloud",id:"show-the-access-graph-in-otterize-cloud",level:3},{value:"What&#39;s next",id:"whats-next",level:3},{value:"Teardown",id:"teardown",level:2}],m={toc:u},d="wrapper";function h(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With its Istio watcher enabled, the network mapper allows you to map pod-to-pod Istio traffic within your K8s cluster."),(0,i.kt)("p",null,"In this tutorial, we will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the Istio service mesh in our cluster."),(0,i.kt)("li",{parentName:"ul"},"Deploy 2 clients calling a server (in this case, an nginx reverse-proxy) over HTTP using different paths."),(0,i.kt)("li",{parentName:"ul"},"Map their calls using the network mapper and its Istio watcher component.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Already have Otterize deployed with Istio configured on your cluster? Skip to the ",(0,i.kt)("a",{parentName:"p",href:"#tutorial"},"tutorial"),"."),(0,i.kt)("h3",{id:"1-deploy-otterize"},"1. Deploy Otterize"),(0,i.kt)("p",null,"To deploy Otterize, head over to ",(0,i.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"Otterize Cloud")," and associate a Kubernetes cluster on the ",(0,i.kt)("a",{parentName:"p",href:"https://app.otterize.com/clusters"},"Clusters page"),", and follow the instructions. If you already have a Kubernetes cluster connected, skip this step."),(0,i.kt)("h3",{id:"2-install-and-configure-istio"},"2. Install and configure Istio"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Install Istio in the cluster via Helm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add istio https://istio-release.storage.googleapis.com/charts\nhelm repo update\nhelm install istio-base istio/base -n istio-system --create-namespace\nhelm install istiod istio/istiod -n istio-system --wait\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Add HTTP methods and request paths to Istio exported metrics"),(0,i.kt)("p",null,"Apply this configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace, propagating it to all namespaces covered by the mesh."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/network-mapper/istio-telemetry-enablement.yaml -n istio-system\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: telemetry.istio.io/v1alpha1\nkind: Telemetry\nmetadata:\n  name: mesh-default\n  namespace: istio-system\nspec:\n  accessLogging:\n    - providers:\n        - name: envoy\n  metrics:\n    - providers:\n        - name: prometheus\n      overrides:\n        - tagOverrides:\n            request_method:\n              value: request.method\n            request_path:\n              value: request.path\n"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"HTTP request paths and methods aren't exported in Envoy's connection metrics by default, but we do want to capture those\ndetails when creating the network map. That way we not only have better visibility of the calling patterns,\ne.g. in the access graph, but we can also use that information to automatically generate fine-grained intents and\nenforce them with Istio authorization policies.")),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("h3",{id:"deploy-demo-to-simulate-traffic"},"Deploy demo to simulate traffic"),(0,i.kt)("p",null,"Let's create a namespace with istio enabled, and add services and traffic to the cluster and see how the network mapper builds the map.\nDeploy the following simple example ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"p"},"client"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"client2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx"),", communicating over HTTP:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace otterize-tutorial-istio-mapping\nkubectl label namespace otterize-tutorial-istio-mapping istio-injection=enabled\nkubectl apply -n otterize-tutorial-istio-mapping -f ${ABSOLUTE_URL}/code-examples/network-mapper/istio.yaml\n")),(0,i.kt)("h3",{id:"map-the-cluster"},"Map the cluster"),(0,i.kt)("p",null,"The Istio watcher component of the network mapper starts querying Envoy sidecars for HTTP connections and builds an\nin-memory network map as soon as it's installed. The Otterize CLI allows you to interact with the network mapper to\ngrab a snapshot of current mapped traffic, reset its state, and more."),(0,i.kt)("p",null,"For a complete list of the CLI capabilities read the ",(0,i.kt)("a",{parentName:"p",href:"/reference/cli/#network-mapper"},"CLI command reference"),"."),(0,i.kt)("h3",{id:"extract-and-see-the-network-map"},"Extract and see the network map"),(0,i.kt)("p",null,"You can get the network map by calling the CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," commands."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," output format can be ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," (Kubernetes client intents files) and ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),".\nThe following shows the CLI output filtered for the namespace (",(0,i.kt)("inlineCode",{parentName:"p"},"otterize-tutorial-istio-mapping"),") of the example above."),(0,i.kt)("p",null,"Note the HTTP-level details in the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," results. For example, the exported client intents YAML files contain specific path and method information for each intended call."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"image",label:"Image",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visualize the overall pod-to-pod network map built up so far, as an image. Note that this image is actually built from information from the network mapper's sniffer (based on DNS requests and open TCP connections), and does not require the Istio watcher (which only supplies fine-grained, HTTP-level information). To retrieve HTTP-level information, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," commands."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper visualize -n otterize-tutorial-istio-mapping -o otterize-tutorial-istio-map.png\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the simple example above, you should get an image file that looks like:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Otterize tutorial map",src:a(6004).Z,width:"949",height:"222"}))))),(0,i.kt)(o.Z,{value:"list",label:"List",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"List the pod-to-pod network map built up so far:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper list -n otterize-tutorial-istio-mapping\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the simple example above, you should see:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," client in namespace otterize-tutorial-istio-mapping calls:\n   - nginx in namespace otterize-tutorial-istio-mapping\n     - path /client-path, methods: [GET]\n client2 in namespace otterize-tutorial-istio-mapping calls:\n   - nginx in namespace otterize-tutorial-istio-mapping\n     - path /client2-path, methods: [POST]\n")),(0,i.kt)("p",{parentName:"li"},"Repeating lines showing calls to common services like ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"jaeger")," were omitted for simplicity.")))),(0,i.kt)(o.Z,{value:"intents",label:"Export as intents",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Export as YAML client intents (the default format) the pod-to-pod network map built up so far:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper export -n otterize-tutorial-istio-mapping\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the simple example above, you should see (concatenated into one YAML file):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\n   kind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-istio-mapping\nspec:\n  service:\n    name: client\n  calls:\n    - name: nginx\n      type: http\n      HTTPResources:\n         - path: /client-path\n           methods: [GET]\n---\napiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client2\n  namespace: otterize-tutorial-istio-mapping\nspec:\n  service:\n    name: client2\n  calls:\n    - name: nginx\n      type: http\n      HTTPResources:\n        - path: /client2-path\n          methods: [POST]\n"))))),(0,i.kt)(o.Z,{value:"json",label:"Export as JSON",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Export as JSON the pod-to-pod network map built up so far:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper export -n otterize-tutorial-istio-mapping --format json\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the simple example above, you should see:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha3",\n    "metadata": {\n      "name": "client",\n      "namespace": "otterize-tutorial-istio-mapping"\n    },\n    "spec": {\n      "service": {\n        "name": "client"\n      },\n      "calls": [\n        {\n          "name": "nginx",\n          "type": "http",\n          "HTTPResources": [\n            {\n              "path": "/client-path",\n              "methods": ["GET"]\n            }\n          ]\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha3",\n    "metadata": {\n      "name": "client2",\n      "namespace": "otterize-tutorial-istio-mapping"\n    },\n    "spec": {\n      "service": {\n        "name": "client2"\n      },\n      "calls": [\n        {\n          "name": "nginx",\n          "type": "http",\n          "HTTPResources": [\n            {\n              "path": "/client2-path",\n              "methods": ["POST"]\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')))))),(0,i.kt)("h3",{id:"show-the-access-graph-in-otterize-cloud"},"Show the access graph in Otterize Cloud"),(0,i.kt)("p",null,"If you've attached Otterize OSS to Otterize Cloud, you can now also see the ",(0,i.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"access graph in your browser"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Access graph",src:a(2550).Z,width:"2828",height:"1604"})),(0,i.kt)("p",null,"Note, for example, that the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," ","\u2192"," ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," arrow is yellow. Clicking on it shows:"),(0,i.kt)("img",{src:"/img/quick-tutorials/network-mapper/otterize-tutorial-access-graph-istio-edge-info.png",alt:"Access graph edge info"}),(0,i.kt)("p",null,"The access graph reveals several types of information and insights, such as:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Seeing the network map for different clusters, seeing the subset of the map for a given namespace, or even ","\u2014"," according to how you've mapped namespaces to environments ","\u2014"," seeing the subset of the map for a specific environment."),(0,i.kt)("li",{parentName:"ol"},"Revealing detailed HTTP-level information about the calls being made (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"/client-path"),"), as reported by the Istio watcher."),(0,i.kt)("li",{parentName:"ol"},"Filtering the map to include recently-seen traffic, since some date in the past. That way you can eliminate calls that are no longer relevant, without having to reset the network mapper and start building a new map."),(0,i.kt)("li",{parentName:"ol"},"Showing more specifics about access, if the intents operator is also connected: understand which services are protected or would be protected, and which client calls are being blocked or would be blocked. We'll see more of that in the Istio AuthorizationPolicy tutorial.")),(0,i.kt)("h3",{id:"whats-next"},"What's next"),(0,i.kt)("p",null,"The network mapper is a great way to bootstrap IBAC. It generates client intents files that reflect\nthe current topology of your services; those can then be used by each client team to grant them easy\nand ",(0,i.kt)("em",{parentName:"p"},"secure")," access to the services they need, and as their needs evolve, they need only evolve\nthe intents files. We'll see more of that below."),(0,i.kt)("p",null,"Where to go next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn how to roll out ",(0,i.kt)("a",{parentName:"li",href:"/quickstart/access-control/k8s-istio-authorization-policies"},"Istio authorization-policy-based access control")," using intents."),(0,i.kt)("li",{parentName:"ul"},"If you haven't already, see the ",(0,i.kt)("a",{parentName:"li",href:"/quickstart/access-control/k8s-network-policies"},"automate network policies tutorial"),"."),(0,i.kt)("li",{parentName:"ul"},"Or go to the next tutorial to ",(0,i.kt)("a",{parentName:"li",href:"/quickstart/access-control/k8s-kafka-mtls"},"automate secure access for Kafka"),".")),(0,i.kt)("h2",{id:"teardown"},"Teardown"),(0,i.kt)("p",null,"To remove Istio and the deployed examples run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall istio-base -n istio-system\nhelm uninstall istiod -n istio-system\nkubectl delete namespace otterize-tutorial-istio-mapping\n")))}h.isMDXComponent=!0},3875:()=>{},2550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/otterize-tutorial-access-graph-istio-2b521e6b9b1623bf1e65a2f290388162.png"},6004:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/otterize-tutorial-istio-map-cc275c4375ae10e509efc787bac52da5.png"}}]);