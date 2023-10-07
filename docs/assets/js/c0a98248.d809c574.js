"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[6919],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(o),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||l;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2655:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const l={slug:"/ADR005",title:"ADR005 Logging",tags:["ADR"]},a=void 0,i={unversionedId:"ADR/ADR005",id:"ADR/ADR005",title:"ADR005 Logging",description:"TITLE: ADR 005 - Logging",source:"@site/docs/ADR/ADR005.md",sourceDirName:"ADR",slug:"/ADR005",permalink:"/syncPowershellProfile/docs/ADR005",draft:!1,tags:[{label:"ADR",permalink:"/syncPowershellProfile/docs/tags/adr"}],version:"current",frontMatter:{slug:"/ADR005",title:"ADR005 Logging",tags:["ADR"]},sidebar:"tutorialSidebar",previous:{title:"ADR004 Database",permalink:"/syncPowershellProfile/docs/ADR004"},next:{title:"UseCase",permalink:"/syncPowershellProfile/docs/category/usecase"}},s={},u=[{value:"TITLE: ADR 005 - Logging",id:"title-adr-005---logging",level:2},{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers  optional ",id:"decision-drivers--optional-",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Positive Consequences  optional ",id:"positive-consequences--optional-",level:3},{value:"Negative Consequences",id:"negative-consequences",level:3},{value:"Pros and Cons of the Options  optional ",id:"pros-and-cons-of-the-options--optional-",level:2},{value:"Serilog",id:"serilog",level:3},{value:"NLOG",id:"nlog",level:3},{value:"Links",id:"links",level:2},{value:"ADR based on",id:"adr-based-on",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"title-adr-005---logging"},"TITLE: ADR 005 - Logging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: accepted"),(0,r.kt)("li",{parentName:"ul"},"Deciders: Andrei Ignat"),(0,r.kt)("li",{parentName:"ul"},"Date: 2023-10-07")),(0,r.kt)("p",null,"Technical Story: Must add some logging library in order to debug problems"),(0,r.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,r.kt)("p",null,"Every time there is a problem, logging could solve the problems by having more details about what is wrong"),(0,r.kt)("p",null,"So I MUST add logging"),(0,r.kt)("h2",{id:"decision-drivers--optional-"},"Decision Drivers "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Making one library for logging is not so complicated , however ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the exporters to other systems are cumbersome and difficult"),(0,r.kt)("li",{parentName:"ul"},"also threading is a problem when writing to a file"))),(0,r.kt)("li",{parentName:"ul"},"There are already production battle tested libraries that performs the work well.")),(0,r.kt)("h2",{id:"considered-options"},"Considered Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NLog , ",(0,r.kt)("a",{parentName:"li",href:"https://nlog-project.org/"},"https://nlog-project.org/")),(0,r.kt)("li",{parentName:"ul"},"Serilog , ",(0,r.kt)("a",{parentName:"li",href:"https://serilog.net/"},"https://serilog.net/")),(0,r.kt)("li",{parentName:"ul"},"Others ( log4net )")),(0,r.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,r.kt)("p",null,"Choosing ",(0,r.kt)("em",{parentName:"p"},"NLog")," because it is simpler to configure from a text file"),(0,r.kt)("h3",{id:"positive-consequences--optional-"},"Positive Consequences "),(0,r.kt)("p",null,"Devops should be happy - the logging file for production could be also put into SourceControl without problems."),(0,r.kt)("h3",{id:"negative-consequences"},"Negative Consequences"),(0,r.kt)("p",null,"Do not support yet SAMNE logging for a class. Could be alleviated by having DebuggerDisplayAttribute for the class and logging the function"),(0,r.kt)("h2",{id:"pros-and-cons-of-the-options--optional-"},"Pros and Cons of the Options "),(0,r.kt)("h3",{id:"serilog"},"Serilog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Good, because Widely adopted"),(0,r.kt)("li",{parentName:"ul"},"Good, because A lot of documentation"),(0,r.kt)("li",{parentName:"ul"},"Good, because Great community"),(0,r.kt)("li",{parentName:"ul"},"Bad, because A bit harder to learn when coming from log4net")),(0,r.kt)("h3",{id:"nlog"},"NLOG"),(0,r.kt)("p",null,"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Good, because A lot of documentation"),(0,r.kt)("li",{parentName:"ul"},"Good, because Having been around a long time, there are lots of blog posts"),(0,r.kt)("li",{parentName:"ul"},"Good, because Easy to get started when coming from other logging frameworks"),(0,r.kt)("li",{parentName:"ul"},"Bad, because Structured logging is still a bit behind Serilog"),(0,r.kt)("li",{parentName:"ul"},"Bad, because C#-based API is harder to use than Serilog's fluent API")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copied arguments from ",(0,r.kt)("a",{parentName:"li",href:"https://blog.elmah.io/serilog-vs-nlog"},"Elmah")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nlog-project.org/"},"NLOG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://serilog.net/"},"Serilog"))),(0,r.kt)("h2",{id:"adr-based-on"},"ADR based on"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/templates/decision-record-template-by-jeff-tyree-and-art-akerman/index.md"},"https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/templates/decision-record-template-by-jeff-tyree-and-art-akerman/index.md")))}d.isMDXComponent=!0}}]);