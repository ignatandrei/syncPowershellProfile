"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[6685],{3905:(e,n,t)=>{t.d(n,{Zo:()=>y,kt:()=>b});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=s.createContext({}),i=function(e){var n=s.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},y=function(e){var n=i(e.components);return s.createElement(a.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),m=i(t),u=r,b=m["".concat(a,".").concat(u)]||m[u]||p[u]||o;return t?s.createElement(b,l(l({ref:n},y),{},{components:t})):s.createElement(b,l({ref:n},y))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=t(7462),r=(t(7294),t(3905));const o={},l="Number of packages that differ in major version : 4",c={unversionedId:"TechnicalDocs/MermaidVisualizerMajorDiffer",id:"TechnicalDocs/MermaidVisualizerMajorDiffer",title:"Number of packages that differ in major version : 4",description:"1 Microsoft.Extensions.Logging.Abstractions",source:"@site/docs/TechnicalDocs/MermaidVisualizerMajorDiffer.md",sourceDirName:"TechnicalDocs",slug:"/TechnicalDocs/MermaidVisualizerMajorDiffer",permalink:"/help/docs/TechnicalDocs/MermaidVisualizerMajorDiffer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Number of packages:157",permalink:"/help/docs/TechnicalDocs/DisplayAllVersions"},next:{title:"Project relations",permalink:"/help/docs/TechnicalDocs/ProjectRelation"}},a={},i=[{value:"1 Microsoft.Extensions.Logging.Abstractions",id:"1-microsoftextensionsloggingabstractions",level:2},{value:"2 System.Collections.Immutable",id:"2-systemcollectionsimmutable",level:2},{value:"3 System.Reflection.Metadata",id:"3-systemreflectionmetadata",level:2},{value:"4 System.Text.Encodings.Web",id:"4-systemtextencodingsweb",level:2}],y={toc:i},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,s.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"number-of-packages-that-differ-in-major-version--4"},"Number of packages that differ in major version : 4"),(0,r.kt)("h2",{id:"1-microsoftextensionsloggingabstractions"},"1 Microsoft.Extensions.Logging.Abstractions"),(0,r.kt)("mermaid",{value:"graph TB\nsubgraph packages\n    Microsoft.Extensions.Logging.Abstractions\n\nend\nsubgraph projects\nsyncPowershellObjects(((syncPowershellObjects)))\nSyncPowershellTests(((SyncPowershellTests)))\nsyncPowershellWebAPI(((syncPowershellWebAPI)))\n    subgraph versions\n7.0.1>7.0.1]\n6.0.0>6.0.0]\n    end\nMicrosoft.Extensions.Logging.Abstractions--\x3e7.0.1\n7.0.1--\x3esyncPowershellObjects\n7.0.1--\x3eSyncPowershellTests\nMicrosoft.Extensions.Logging.Abstractions--\x3e6.0.0\n6.0.0--\x3esyncPowershellWebAPI\n\n    end"}),(0,r.kt)("h2",{id:"2-systemcollectionsimmutable"},"2 System.Collections.Immutable"),(0,r.kt)("mermaid",{value:"graph TB\nsubgraph packages\n    System.Collections.Immutable\n\nend\nsubgraph projects\nSyncPowershellTests(((SyncPowershellTests)))\nsyncPowershellObjects(((syncPowershellObjects)))\nsyncPowershellWebAPI(((syncPowershellWebAPI)))\n    subgraph versions\n7.0.0>7.0.0]\n6.0.0>6.0.0]\n    end\nSystem.Collections.Immutable--\x3e7.0.0\n7.0.0--\x3eSyncPowershellTests\n7.0.0--\x3esyncPowershellObjects\nSystem.Collections.Immutable--\x3e6.0.0\n6.0.0--\x3esyncPowershellWebAPI\n\n    end"}),(0,r.kt)("h2",{id:"3-systemreflectionmetadata"},"3 System.Reflection.Metadata"),(0,r.kt)("mermaid",{value:"graph TB\nsubgraph packages\n    System.Reflection.Metadata\n\nend\nsubgraph projects\nSyncPowershellTests(((SyncPowershellTests)))\nsyncPowershellObjects(((syncPowershellObjects)))\nsyncPowershellWebAPI(((syncPowershellWebAPI)))\n    subgraph versions\n7.0.0>7.0.0]\n6.0.1>6.0.1]\n    end\nSystem.Reflection.Metadata--\x3e7.0.0\n7.0.0--\x3eSyncPowershellTests\n7.0.0--\x3esyncPowershellObjects\nSystem.Reflection.Metadata--\x3e6.0.1\n6.0.1--\x3esyncPowershellWebAPI\n\n    end"}),(0,r.kt)("h2",{id:"4-systemtextencodingsweb"},"4 System.Text.Encodings.Web"),(0,r.kt)("mermaid",{value:"graph TB\nsubgraph packages\n    System.Text.Encodings.Web\n\nend\nsubgraph projects\nSyncPowershellTests(((SyncPowershellTests)))\nsyncPowershellObjects(((syncPowershellObjects)))\nsyncPowershellInterfaces(((syncPowershellInterfaces)))\nsyncPowershellWebAPI(((syncPowershellWebAPI)))\n    subgraph versions\n7.0.0>7.0.0]\n4.5.0>4.5.0]\n    end\nSystem.Text.Encodings.Web--\x3e7.0.0\n7.0.0--\x3eSyncPowershellTests\n7.0.0--\x3esyncPowershellObjects\n7.0.0--\x3esyncPowershellInterfaces\nSystem.Text.Encodings.Web--\x3e4.5.0\n4.5.0--\x3esyncPowershellWebAPI\n\n    end"}),(0,r.kt)("small",null,"Generated  by https://www.nuget.org/packages/netpackageanalyzerconsole , version 7.2023.908.2126"))}p.isMDXComponent=!0}}]);