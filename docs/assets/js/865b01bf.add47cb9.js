"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[5793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={},o=void 0,i={unversionedId:"UseCases/UseCase001",id:"UseCases/UseCase001",title:"UseCase001",description:"Use Case 1 : No Authentication , upload",source:"@site/docs/UseCases/UseCase001.md",sourceDirName:"UseCases",slug:"/UseCases/UseCase001",permalink:"/syncPowershellProfile/docs/UseCases/UseCase001",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UseCase",permalink:"/syncPowershellProfile/docs/category/usecase"},next:{title:"UseCase002",permalink:"/syncPowershellProfile/docs/UseCases/UseCase002"}},l={},c=[{value:"Use Case 1 : No Authentication , upload",id:"use-case-1--no-authentication--upload",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"use-case-1--no-authentication--upload"},"Use Case 1 : No Authentication , upload"),(0,a.kt)("p",null,"From his PC the user will have a powershell to send  $PROFILE.CurrentUserCurrentHost and current user name  ","[Environment]","::UserName and PC name ","[Environment]","::MachineName to the site ( see Use Case 3)   . The username and all data  will be deleted after 30 days . The powershell should be of max 4 MB size."),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    actor User\n    User->>WebAPI: Send Info via powershell\n    Note over User,WebAPI: Send UserName,MachineName, $PROFILE.CurrentUserCurrentHost text . Max 4 MB\n    WebAPI--\x3e>BusinessLogic: Save / overwrite data\n    BusinessLogic->>WebAPI: Here is the link to the page where you can see data\n    WebAPI->>User: Here is the link to the page where you can see data\n    "}))}d.isMDXComponent=!0}}]);