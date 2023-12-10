"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,u=p["".concat(s,".").concat(f)]||p[f]||c[f]||i;return r?n.createElement(u,a(a({ref:t},m),{},{components:r})):n.createElement(u,a({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const i={title:"Errors telemetry"},a=void 0,l={unversionedId:"otterize-oss/errors-telemetry",id:"otterize-oss/errors-telemetry",title:"Errors telemetry",description:"Otterize OSS components report anonymous errors telemetry that allows us to proactively identify and address issues. No personal or organizational identifying information is transmitted in these metrics: The information reported is limited to essential details necessary for effective issue resolution. You may opt out at any time through a single configuration flag.",source:"@site/docs/otterize-oss/errors-telemetry.mdx",sourceDirName:"otterize-oss",slug:"/otterize-oss/errors-telemetry",permalink:"/otterize-oss/errors-telemetry",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/otterize-oss/errors-telemetry.mdx",tags:[],version:"current",frontMatter:{title:"Errors telemetry"},sidebar:"docSidebar",previous:{title:"Otterize OSS",permalink:"/otterize-oss/"},next:{title:"Usage telemetry",permalink:"/otterize-oss/usage-telemetry"}},s={},d=[{value:"What information is collected?",id:"what-information-is-collected",level:2},{value:"Identifiers",id:"identifiers",level:3},{value:"Configuring whether to report errors information",id:"configuring-whether-to-report-errors-information",level:2}],m={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Otterize OSS components report anonymous errors telemetry that allows us to proactively identify and address issues. No personal or organizational identifying information is transmitted in these metrics: The information reported is limited to essential details necessary for effective issue resolution. You may opt out at any time through a single configuration flag."),(0,o.kt)("h2",{id:"what-information-is-collected"},"What information is collected?"),(0,o.kt)("p",null,"Each error event includes error type, relevant code lines from the stack trace, and metadata on the OSS component instance identifiers, detailed in the table below. The error reporting is implemented using Bugsnag error handling SDK. For a comprehensive understanding of the schema used for Bugsnag error reporting, please refer to the following link: ",(0,o.kt)("a",{parentName:"p",href:"https://bugsnagerrorreportingapi.docs.apiary.io/#reference/0/notify/send-error-reports"},"Bugsnag Error Reporting API"),"."),(0,o.kt)("h3",{id:"identifiers"},"Identifiers"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Identifier"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"componentType")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Which Otterize OSS component sent the event: one of ",(0,o.kt)("inlineCode",{parentName:"td"},"INTENTS_OPERATOR"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"CREDENTIALS_OPERATOR"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"NETWORK_MAPPER")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"CLI"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"componentInstanceId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A randomly-generated UUID identifying the installed instance of the component, to allow correlating its events.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"contextId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A hash (for anonymity) of an identifier of the context in which the component is installed. For example, for components running in a Kubernetes cluster, this is a hash of the UUID of the ",(0,o.kt)("inlineCode",{parentName:"td"},"kube-system")," namespace in the cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"version")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The version of the Otterize OSS component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cloudClientId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If connected to Otterize Cloud: the client id used to connect with Otterize Cloud, to allow correlating events with Cloud usage info.")))),(0,o.kt)("h2",{id:"configuring-whether-to-report-errors-information"},"Configuring whether to report errors information"),(0,o.kt)("p",null,"To configure whether to report errors information to the Otterize team, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"telemetry.errors")," flag in the installation/configuration of Otterize OSS. By default, telemetry is enabled."),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"disable")," only the sending of errors information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Via the Otterize OSS Helm chart: ",(0,o.kt)("inlineCode",{parentName:"li"},"--set global.telemetry.errors.enabled=false"),"."),(0,o.kt)("li",{parentName:"ul"},"Via an environment variable: ",(0,o.kt)("inlineCode",{parentName:"li"},"OTTERIZE_TELEMETRY_ERRORS_ENABLED=false"),"."),(0,o.kt)("li",{parentName:"ul"},"If running an operator directly: ",(0,o.kt)("inlineCode",{parentName:"li"},"telemetry-errors-enabled=false"),".")),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"disable")," sending any telemetry information, including both usage information and error information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Via the Otterize OSS Helm chart: ",(0,o.kt)("inlineCode",{parentName:"li"},"--set global.telemetry.enabled=false"),"."),(0,o.kt)("li",{parentName:"ul"},"Via an environment variable: ",(0,o.kt)("inlineCode",{parentName:"li"},"OTTERIZE_TELEMETRY_ENABLED=false"),"."),(0,o.kt)("li",{parentName:"ul"},"If running an operator directly: ",(0,o.kt)("inlineCode",{parentName:"li"},"telemetry-enabled=false"),".")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"telemetry")," flag is omitted or set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", telemetry will be enabled: errors information will be reported."))}c.isMDXComponent=!0}}]);