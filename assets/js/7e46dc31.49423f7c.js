"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||s;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:7,title:"IBAC: Intent-based access control"},o=void 0,i={unversionedId:"intent-based-access-control/README",id:"intent-based-access-control/README",title:"IBAC: Intent-based access control",description:"At Otterize, we believe service-to-service access control should become not only easy but actually transparent to service developers. We believe that access should not only be self-serve \u2014 that it should happen without needing to go through any extra steps beyond what developers are already doing. And we believe that access control enforcement should be completely decoupled from the functional development of the software: that as the organization improves its security and compliance posture, developers should not need to revisit their working code.",source:"@site/docs/intent-based-access-control/README.mdx",sourceDirName:"intent-based-access-control",slug:"/intent-based-access-control/",permalink:"/intent-based-access-control/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/intent-based-access-control/README.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"IBAC: Intent-based access control"},sidebar:"docSidebar",previous:{title:"Troubleshooting",permalink:"/troubleshooting/"},next:{title:"Shadow vs active enforcement",permalink:"/shadow-vs-active-enforcement/"}},c={},l=[{value:"Intent-based access control is:",id:"intent-based-access-control-is",level:3},{value:"Automating IBAC",id:"automating-ibac",level:3},{value:"IBAC and security",id:"ibac-and-security",level:3}],d={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At Otterize, we believe service-to-service access control should become not only ",(0,r.kt)("em",{parentName:"p"},"easy")," but actually ",(0,r.kt)("em",{parentName:"p"},"transparent")," to service developers. We believe that access should not only be self-serve \u2014 that it should happen without needing to go through any extra steps beyond what developers are already doing. And we believe that access control enforcement should be completely decoupled from the functional development of the software: that as the organization improves its security and compliance posture, developers should not need to revisit their working code."),(0,r.kt)("p",null,"These are the principles of ",(0,r.kt)("strong",{parentName:"p"},"intent-based access control (IBAC)"),", a modern, declarative approach to granting access automatically, responsibly, and scalably. ",(0,r.kt)("strong",{parentName:"p"},"The developer simply declares, in a ",(0,r.kt)("em",{parentName:"strong"},"client intents file")," alongside their code, what other services the code intends to call.")," If the code passes review, so does its intents file, and access is granted automatically to make those calls, regardless of the type of call, the target infrastructure and location, and the enforcement mechanism. Credentials for declared access are automatically managed and supplied to the developer for use in their code, if needed. Any undeclared access is automatically blocked."),(0,r.kt)("p",null,"Here is an example of the client intents file for the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkoutservice"),".\nIt declares that it will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"emailservice"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"orderservice"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ecomm-events")," Kafka service.\nIt also provides more granular information for some of the calls:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: checkoutservice\ncalls:\n  - name: emailservice\n    type: http\n  - name: orderservice\n    type: http\n    HTTPResources:\n      - path: /orders/*\n        methods: [ get, post ]\n  - name: ecomm-events\n    type: kafka\n    kafkaTopics:\n      - name: orders\n        operations: [ produce ]\n\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Intents file as a Kubernetes resource file"),(0,r.kt)("div",null,(0,r.kt)("p",null,"Here is the same intents file, now formatted as a Kubernetes custom resource file,\nso it can be applied directly via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: emailservice\n      type: http\n    - name: orderservice\n      type: http\n      HTTPResources:\n        - path: /orders/*\n          methods: [ get, post ]\n    - name: ecomm-events\n      type: kafka\n      kafkaTopics:\n        - name: orders\n          operations: [ produce ]\n\n")))),(0,r.kt)("p",null,"Intent-based access control realizes shift-left for access control. The necessary access is defined by the developer themselves declaring, when the code is created, what calls will be made. Nobody knows better than them what their code needs. And those declarations, living in source control as client intents files along with the code, stay in sync with the code \u2014 as opposed to access permissions that live elsewhere, e.g. on a server, where they\u2019re likely to get stale rapidly. Intents are approved along with the code: if it makes sense to approve the code that makes the calls, it should make sense to approve access to what\u2019s being called."),(0,r.kt)("img",{src:"/img/ibac-is-client-oriented.png"}),(0,r.kt)("p",null,"Developers might even think about IBAC as \u201cSSO for services\u201d: with just one intents file, they can securely access any target service, running on any technology, on any infrastructure and in any environment. And when new services, technologies and infrastructures are added, or new security or compliance requirements arise, developers don\u2019t have to change what they do at all."),(0,r.kt)("h3",{id:"intent-based-access-control-is"},"Intent-based access control is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Responsible"),": Intents files are managed with the code, go through the same approvals process, and can be augmented by rules before access is automatically granted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalable"),": The intents file of a service just declares the calls the service needs to make ",(0,r.kt)("strong",{parentName:"li"},"as a client of other services"),", because this is what the developer knows when building the service (rather than what will need to call their service). When the service changes, its intents file is updated. IBAC then uses the information in all the client intents files to derive the authorization rules on the server side, without the server team needing to constantly update access controls.")),(0,r.kt)("p",null,"Ideally, IBAC is also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),": Once client intents are known, server permissions are knowable and therefore automatable.")),(0,r.kt)("h3",{id:"automating-ibac"},"Automating IBAC"),(0,r.kt)("p",null,"Otterize automates IBAC by ",(0,r.kt)("strong",{parentName:"p"},"integrating with existing infrastructures and enforcement points")," (Kafka ACLs, K8s network policies, AWS security groups, API gateways, etc.) to configure their built-in enforcement mechanisms."),(0,r.kt)("p",null,"The result is the least possible overhead and friction:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"platform engineers can completely ",(0,r.kt)("strong",{parentName:"li"},"eliminate the access control friction")," for their devs, without needing to field access requests or roll their own automations for every new technology;"),(0,r.kt)("li",{parentName:"ul"},"developers get a ",(0,r.kt)("strong",{parentName:"li"},"standard way")," to acquire access to any service without knowing anything about security mechanisms and without changing anything about their current development processes;"),(0,r.kt)("li",{parentName:"ul"},"architects gain a ",(0,r.kt)("strong",{parentName:"li"},"unified, virtual access control layer")," without embedding any new technology layers in their stack;"),(0,r.kt)("li",{parentName:"ul"},"security and compliance benefit from a ",(0,r.kt)("strong",{parentName:"li"},"zero-trust network")," of services baked into the system design, fully visible, provable, dynamic, and controllable through automation rules.")),(0,r.kt)("p",null,"The collection of intents across the various environments form a ",(0,r.kt)("strong",{parentName:"p"},"semantic access graph")," that captures\nthe full intent of the code. Automation rules then act on that intent layer of the access graph, resulting in\nsome intents turning into access grants while other intents await approval or are rejected;\nthat overlay of intent states forms another ",(0,r.kt)("em",{parentName:"p"},"layer")," of the access graph: the ",(0,r.kt)("strong",{parentName:"p"},"target access layer"),".\nFinally, the target access state of each\nserver are compared with the actual state of the enforcement points available on that server: one server might only be\nprotected by Kubernetes network policies so it cannot control fine-grained access, only allow/deny to the caller;\nanother server might be a Kafka server with its built-in enforcement of operation-level ACLs on any topic.\nOtterize, as an IBAC platform, will configure the available enforcement points to reflect as closely as possible the\ndesired access state, but in any case the actual access state forms another layer of the access graph:\nthe ",(0,r.kt)("strong",{parentName:"p"},"enforced access layer"),"."),(0,r.kt)("img",{src:"/img/access-graph.png"}),(0,r.kt)("p",null,"To implement IBAC across heterogeneous environments, IBAC must also solve for the problem of heterogeneous service identities. (Intents-based access control incorporates identity-based access control.) Since IBAC does not require developers to know about identity mechanisms any more than about authorization mechanisms, there is the requirement to ",(0,r.kt)("strong",{parentName:"p"},"bridge the identity")," of the client service to identities recognized by the target service\u2019s infrastructures and enforcement mechanisms. Otterize builds in identity bridging mechanisms into all its integrations."),(0,r.kt)("h3",{id:"ibac-and-security"},"IBAC and security"),(0,r.kt)("p",null,"Security controls that don't get implemented don't help. By building service-to-service access\ncontrol concerns into the building of the software ","\u2014"," capturing the intent at design time,\n",(0,r.kt)("em",{parentName:"p"},"streamlining")," for developers the access to secured services, integrating access reviews into existing\ncode review processes, and automating access control configuration at deploy time ","\u2014"," IBAC drives adoption\nof security controls and a zero-trust architecture within the engineering team.\nIt perhaps goes without saying that if secure access is hard, there\u2019s a tendency to avoid it --\nso when secure access becomes easy, it's also more prevalent, leading to fewer security issues and compliance friction."),(0,r.kt)("p",null,"Intent-based access control doesn't fly in the face of organizational security policies,\nand it certainly doesn't replace them. IBAC aligns access controls with the needs of the organization.\nIt captures and makes explicit the ",(0,r.kt)("em",{parentName:"p"},"intents")," of developers and their the code,\nenables processes for acting on those intents to allow or deny access,\nand makes explicit the enforcement that's actually put in place.\nOne org might decide that it's best to automatically approve all intents once they undergo code review and apply\nthem to a staging environment so they can be tested, but require explicit secops approval on any new intent before\nit's applied to production. Another org might decide to require approvals only on some servers (i.e. intents targeted\nat those servers), and to track them by filing issues against the server teams' ticketing system.\nAnd a third org might decide to enforce access controls on certain servers in staging to make sure intents are declared,\nbut operate for some time in shadow mode in production until they get comfortable that the controls work right before\nenforcing them."))}h.isMDXComponent=!0}}]);