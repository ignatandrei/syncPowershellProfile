"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[8123,7746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/ADR002",title:"ADR002 Architecture of application",tags:["ADR"]},l=void 0,i={unversionedId:"ADR/ADR002",id:"ADR/ADR002",title:"ADR002 Architecture of application",description:"TITLE: ADR 002 - Type of application",source:"@site/docs/ADR/ADR002.md",sourceDirName:"ADR",slug:"/ADR002",permalink:"/syncPowershellProfile/docs/ADR002",draft:!1,tags:[{label:"ADR",permalink:"/syncPowershellProfile/docs/tags/adr"}],version:"current",frontMatter:{slug:"/ADR002",title:"ADR002 Architecture of application",tags:["ADR"]},sidebar:"tutorialSidebar",previous:{title:"ADR001 Engine for documentation",permalink:"/syncPowershellProfile/docs/ADR001"},next:{title:"UseCase001",permalink:"/syncPowershellProfile/docs/UseCases/UseCase001"}},s={},c=[{value:"TITLE: ADR 002 - Type of application",id:"title-adr-002---type-of-application",level:2},{value:"Prologue (Summary)",id:"prologue-summary",level:2},{value:"Discussion (Context)",id:"discussion-context",level:2},{value:"Solution",id:"solution",level:2},{value:"Consequences",id:"consequences",level:2},{value:"ADR based on",id:"adr-based-on",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"title-adr-002---type-of-application"},"TITLE: ADR 002 - Type of application"),(0,o.kt)("h2",{id:"prologue-summary"},"Prologue (Summary)"),(0,o.kt)("p",null,"The app will be used the people that are powershell users and wants their profile shared."),(0,o.kt)("p",null,"In the context of "),(0,o.kt)("p",null,"Use Case 1 : No Authentication , upload "),(0,o.kt)("p",null,"and "),(0,o.kt)("p",null,"Use case 3:  User can see data for a user name"),(0,o.kt)("p",null,"the decision an WebSite. In order to achieve Use Case 1 from powershell, an WebAPI should be implemented."),(0,o.kt)("h2",{id:"discussion-context"},"Discussion (Context)"),(0,o.kt)("p",null,"From WebAPI we can decouple the GUI(SPA) from the WebAPI - and maybe modifying / trying different  GUIs ( Angular, React, MVC)"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"It is the common way those days to split the app in BackEnd and FrontEnd."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"We have the possibility to upgrade separately the BackEnd and FrontEnd."),(0,o.kt)("p",null,"However, it will be more difficult to debug the SPA."),(0,o.kt)("h3",{id:"adr-based-on"},"ADR based on"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/joelparkerhenderson/architecture-decision-record/tree/main/templates/decision-record-template-for-alexandrian-pattern"},"https://github.com/joelparkerhenderson/architecture-decision-record/tree/main/templates/decision-record-template-for-alexandrian-pattern")))}d.isMDXComponent=!0},8213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(7678);const l={},i="General Architecture",s={permalink:"/syncPowershellProfile/blog/2023/08/23/index",source:"@site/blog/2023-08-23/index.md",title:"General Architecture",description:"I want to have a simple application , without fuss. It will be an WebAPI Application, a Database and a SPA app.",date:"2023-08-23T00:00:00.000Z",formattedDate:"August 23, 2023",tags:[],readingTime:.285,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Use Cases as mermaid",permalink:"/syncPowershellProfile/blog/2023/08/24/index"},nextItem:{title:"Use Cases",permalink:"/syncPowershellProfile/blog/2023/08/22/index"}},c={authorsImageUrls:[]},p=[],u={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I want to have a simple application , without fuss. It will be an WebAPI Application, a Database and a SPA app."),(0,o.kt)("p",null,"Modifications :\nAdded also use case 4, the list of users\nAdded also max dimension for files\nRefactored useCases to their folder"),(0,o.kt)("p",null,"Here it comes the ADR :"),(0,o.kt)(a.default,{mdxType:"ADR002"}))}f.isMDXComponent=!0}}]);