"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[8394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Analysis of the project",l={permalink:"/help/blog/2023/08/29/index",source:"@site/blog/2023-08-29/index.md",title:"Analysis of the project",description:"Before starting writing API, I want to generate data about what I have created - packages, reference , tests .",date:"2023-08-29T00:00:00.000Z",formattedDate:"August 29, 2023",tags:[],readingTime:.44,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Testing saving and retrieval",permalink:"/help/blog/2023/08/30/index"},nextItem:{title:"Code Coverage",permalink:"/help/blog/2023/08/28/index"}},c={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before starting writing API, I want to generate data about what I have created - packages, reference , tests ."),(0,a.kt)("p",null,"For tests, I have copied the PlainTextReportFormatter from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LightBDD/LightBDD/blob/c07341ea8dc90d5c2dae74650d9bdad848978100/src/LightBDD.Framework/Reporting/Formatters/PlainTextReportFormatter.cs#L19"},"https://github.com/LightBDD/LightBDD/blob/c07341ea8dc90d5c2dae74650d9bdad848978100/src/LightBDD.Framework/Reporting/Formatters/PlainTextReportFormatter.cs#L19")),(0,a.kt)("p",null,"and "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"modified a bit ( put # in front of Summary , Scenario , Feature, )"),(0,a.kt)("li",{parentName:"ol"},"Commented new TextTableRenderer , TextTreeRenderer.Render for later use")),(0,a.kt)("p",null,"And voila!"),(0,a.kt)("p",null,"For analyzing the project I use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ignatandrei/PackageAnalyzer"},"https://github.com/ignatandrei/PackageAnalyzer")," ."),(0,a.kt)("p",null,"This will export the package references, the relations between packages, the packages with differences in the major ..."),(0,a.kt)("p",null,"The result is here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ignatandrei.github.io/syncPowershellProfile/docs/category/technical-docs"},"https://ignatandrei.github.io/syncPowershellProfile/docs/category/technical-docs")))}d.isMDXComponent=!0}}]);