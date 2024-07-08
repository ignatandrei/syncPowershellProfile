"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[9347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/ADR001",title:"ADR001 Engine for documentation",tags:["ADR"]},i=void 0,l={unversionedId:"ADR/ADR001",id:"ADR/ADR001",title:"ADR001 Engine for documentation",description:"TITLE: ADR 001 - Engine for documentation",source:"@site/docs/ADR/ADR001.md",sourceDirName:"ADR",slug:"/ADR001",permalink:"/help/docs/ADR001",draft:!1,tags:[{label:"ADR",permalink:"/help/docs/tags/adr"}],version:"current",frontMatter:{slug:"/ADR001",title:"ADR001 Engine for documentation",tags:["ADR"]},sidebar:"tutorialSidebar",previous:{title:"ADR",permalink:"/help/docs/category/adr"},next:{title:"ADR002 Architecture of application",permalink:"/help/docs/ADR002"}},c={},s=[{value:"TITLE: ADR 001 - Engine for documentation",id:"title-adr-001---engine-for-documentation",level:2},{value:"Status : accepted",id:"status--accepted",level:3},{value:"Context",id:"context",level:3},{value:"Decision",id:"decision",level:3},{value:"Consequences",id:"consequences",level:3},{value:"ADR based on",id:"adr-based-on",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"title-adr-001---engine-for-documentation"},"TITLE: ADR 001 - Engine for documentation"),(0,o.kt)("h3",{id:"status--accepted"},"Status : accepted"),(0,o.kt)("h3",{id:"context"},"Context"),(0,o.kt)("p",null,"Need to have a static documentation site with blog also ."),(0,o.kt)("p",null,"In those days there are many engines on the market. And I can built one ;-) ."),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs#comparison-with-other-tools"},"https://docusaurus.io/docs#comparison-with-other-tools")," . The only that seems to fit the bill are REACT based - I cannot afford learning VUE after Angular and React."),(0,o.kt)("p",null,"The problem with REACT is that he is going also to server side ... "),(0,o.kt)("h3",{id:"decision"},"Decision"),(0,o.kt)("p",null,"Docusaurus it is because "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Apparently is it the best on REACT"),(0,o.kt)("li",{parentName:"ol"},"I know REACT "),(0,o.kt)("li",{parentName:"ol"},"It has BLOG and Documentation")),(0,o.kt)("h3",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"The build process  will be somehow different."),(0,o.kt)("p",null,"Could be hard to transfer what I have written to another engine"),(0,o.kt)("h3",{id:"adr-based-on"},"ADR based on"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/joelparkerhenderson/architecture-decision-record/tree/main/locales/en/templates/decision-record-template-by-michael-nygard"},"https://github.com/joelparkerhenderson/architecture-decision-record/tree/main/locales/en/templates/decision-record-template-by-michael-nygard")))}d.isMDXComponent=!0}}]);