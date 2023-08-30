"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[500],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=s,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:s,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},584:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const a={},o=void 0,c={unversionedId:"UseCases/UseCase030",id:"UseCases/UseCase030",title:"UseCase030",description:"Use case 30:  User can see data",source:"@site/docs/UseCases/UseCase030.md",sourceDirName:"UseCases",slug:"/UseCases/UseCase030",permalink:"/syncPowershellProfile/docs/UseCases/UseCase030",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UseCase002",permalink:"/syncPowershellProfile/docs/UseCases/UseCase002"},next:{title:"UseCase040",permalink:"/syncPowershellProfile/docs/UseCases/UseCase040"}},i={},l=[{value:"Use case 30:  User can see data",id:"use-case-30--user-can-see-data",level:2}],u={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,s.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"use-case-30--user-can-see-data"},"Use case 30:  User can see data"),(0,s.kt)("p",null,"User can  the page /userName/ the PC(s) with a link to download the file and a powershell to  execute that will overwrite on his new PC the $PROFILE.CurrentUserCurrentHost"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor User\n    participant SPA\n    User->>SPA: /u/username/\n    SPA--\x3e>WebAPI: Give me the PC's for usernames \n    Note over SPA,WebAPI: and and $PROFILE.CurrentUserCurrentHost \n    WebAPI--\x3e>BusinessLogic: PC's for usernames \n    BusinessLogic->>WebAPI: PC's for usernames \n    WebAPI->>SPA: PC's for usernames \n    Note over WebAPI,SPA: and and $PROFILE.CurrentUserCurrentHost     \n    SPA--\x3e>User: You can copy / download / run  for each PC +$PROFILE.CurrentUserCurrentHost "}))}f.isMDXComponent=!0}}]);