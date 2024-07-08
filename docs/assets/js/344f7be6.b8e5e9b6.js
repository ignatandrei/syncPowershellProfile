"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[8790],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>h});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(s),u=r,h=p["".concat(i,".").concat(u)]||p[u]||m[u]||a;return s?n.createElement(h,o(o({ref:t},d),{},{components:s})):n.createElement(h,o({ref:t},d))}));function h(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=s[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},1428:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=s(7462),r=(s(7294),s(3905));const a={},o="Refactoring",l={permalink:"/help/blog/2023/08/31/index",source:"@site/blog/2023-08-31/index.md",title:"Refactoring",description:"Now the project syncPowershellObjects is full of interfaces and classes. I need a refactoring - to, at least,separate interfaces from classes/implemented functionalities.",date:"2023-08-31T00:00:00.000Z",formattedDate:"August 31, 2023",tags:[],readingTime:2.11,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Adding logging",permalink:"/help/blog/2023/10/12/index"},nextItem:{title:"Testing saving and retrieval",permalink:"/help/blog/2023/08/30/index"}},i={authorsImageUrls:[]},c=[{value:"1 System.Collections.Immutable",id:"1-systemcollectionsimmutable",level:2},{value:"2 System.Reflection.Metadata",id:"2-systemreflectionmetadata",level:2},{value:"3 System.Text.Encoding.CodePages",id:"3-systemtextencodingcodepages",level:2},{value:"Feature: TestUploadAndRetrieve",id:"feature-testuploadandretrieve",level:2},{value:"Scenario: TestOnePC No Powershell UseCase002 - Passed (1s 071ms)",id:"scenario-testonepc-no-powershell-usecase002---passed-1s-071ms",level:3},{value:"Scenario: TestOnePC Powershell7 Exists UseCase001 - Passed (1s 061ms)",id:"scenario-testonepc-powershell7-exists-usecase001---passed-1s-061ms",level:3},{value:"Scenario: TestOnePC Powershell7 Exists RetrieveData UseCase003 - Passed (1s 031ms)",id:"scenario-testonepc-powershell7-exists-retrievedata-usecase003---passed-1s-031ms",level:3}],d={toc:c},p="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now the project syncPowershellObjects is full of interfaces and classes. I need a refactoring - to, at least,separate interfaces from classes/implemented functionalities."),(0,r.kt)("p",null,"It is easy to create a new project and to add the interfaces ( with a new namespace). Somehow more difficult is to respect the rule : the interfaces must not have other the methods / properties that are not interfaces . This infers generating interfaces from classes ( VS is perfect!). "),(0,r.kt)("p",null,"So now is how it looks( generated with  ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/netpackageanalyzerconsole"},"https://www.nuget.org/packages/netpackageanalyzerconsole"),"  )"),(0,r.kt)("mermaid",{value:"---\ntitle: Project Relations\n---\nflowchart TB    \n\nSyncPowershellTests--\x3esyncPowershellObjects\n\nsyncPowershellObjects--\x3esyncPowershellInterfaces"}),(0,r.kt)("p",null,"And some major versions that differs already , even if all is targeting 7.0!"),(0,r.kt)("h1",{id:"number-of-packages-that-differ-in-major-version--3"},"Number of packages that differ in major version : 3"),(0,r.kt)("h2",{id:"1-systemcollectionsimmutable"},"1 System.Collections.Immutable"),(0,r.kt)("mermaid",{value:"---\ntitle: System.Collections.Immutable\n---\n        flowchart TB\n        subgraph packages\n            System.Collections.Immutable\n\n        end\n        subgraph projects\nSyncPowershellTests(((SyncPowershellTests)))\nsyncPowershellObjects(((syncPowershellObjects)))\n    subgraph versions\n7.0.0>7.0.0]\n6.0.0>6.0.0]\n    end\nSystem.Collections.Immutable--\x3e7.0.0\n7.0.0--\x3eSyncPowershellTests\nSystem.Collections.Immutable--\x3e6.0.0\n6.0.0--\x3esyncPowershellObjects\n\n    end"}),(0,r.kt)("h2",{id:"2-systemreflectionmetadata"},"2 System.Reflection.Metadata"),(0,r.kt)("mermaid",{value:"---\ntitle: System.Reflection.Metadata\n---\n        flowchart TB\n        subgraph packages\n            System.Reflection.Metadata\n\n        end\n        subgraph projects\nSyncPowershellTests(((SyncPowershellTests)))\nsyncPowershellObjects(((syncPowershellObjects)))\n    subgraph versions\n7.0.0>7.0.0]\n6.0.1>6.0.1]\n    end\nSystem.Reflection.Metadata--\x3e7.0.0\n7.0.0--\x3eSyncPowershellTests\nSystem.Reflection.Metadata--\x3e6.0.1\n6.0.1--\x3esyncPowershellObjects\n\n    end"}),(0,r.kt)("h2",{id:"3-systemtextencodingcodepages"},"3 System.Text.Encoding.CodePages"),(0,r.kt)("mermaid",{value:"---\ntitle: System.Text.Encoding.CodePages\n---\n        flowchart TB\n        subgraph packages\n            System.Text.Encoding.CodePages\n\n        end\n        subgraph projects\nSyncPowershellTests(((SyncPowershellTests)))\nsyncPowershellObjects(((syncPowershellObjects)))\n    subgraph versions\n7.0.0>7.0.0]\n6.0.0>6.0.0]\n    end\nSystem.Text.Encoding.CodePages--\x3e7.0.0\n7.0.0--\x3eSyncPowershellTests\nSystem.Text.Encoding.CodePages--\x3e6.0.0\n6.0.0--\x3esyncPowershellObjects\n\n    end"}),(0,r.kt)("p",null,"And here are the results of the tests:"),(0,r.kt)("h2",{id:"feature-testuploadandretrieve"},"Feature: TestUploadAndRetrieve"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"In order to sync powershell profile\nAs an anonymous\nI want to send my powershell profile\nand retrieve data\n")),(0,r.kt)("h3",{id:"scenario-testonepc-no-powershell-usecase002---passed-1s-071ms"},"Scenario: TestOnePC No Powershell ","[UseCase002]"," - Passed (1s 071ms)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    Categories: TestOnePC\n    Step 1: GIVEN NoPowershellProfile7 IsFound For UserName "Andrei" "TestPCAndrei" - Passed (18ms)\n    Step 2: WHEN the data is sent - Passed (1s 018ms)\n    Step 3: THEN the return value should be an URL Ending In UserName "Andrei" "TestPCAndrei" - Passed (2ms)\n')),(0,r.kt)("h3",{id:"scenario-testonepc-powershell7-exists-usecase001---passed-1s-061ms"},"Scenario: TestOnePC Powershell7 Exists ","[UseCase001]"," - Passed (1s 061ms)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    Categories: TestOnePC\n    Step 1: GIVEN PowershellProfile7 IsFound For UserName "Andrei" "TestPCAndrei" [value: "text"] - Passed (2ms)\n    Step 2: WHEN the data is sent - Passed (1s 048ms)\n    Step 3: THEN the return value should be an URL Ending In UserName "Andrei" "TestPCAndrei" With ID - Passed (1ms)\n')),(0,r.kt)("h3",{id:"scenario-testonepc-powershell7-exists-retrievedata-usecase003---passed-1s-031ms"},"Scenario: TestOnePC Powershell7 Exists RetrieveData ","[UseCase003]"," - Passed (1s 031ms)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    Categories: TestOnePC\n    Step 1: GIVEN PowershellProfile7 IsFound For UserName "Andrei" "TestPCAndrei" [value: "text"] - Passed (<1ms)\n    Step 2: WHEN the data is sent - Passed (1s 012ms)\n    Step 3: THEN the return value should be an URL Ending In UserName "Andrei" "TestPCAndrei" With ID - Passed (<1ms)\n    Step 4: AND Can Retrieve Data [userName: "Andrei"] [pc: "TestPCAndrei"] [pwshNumber: "7"] [retValue: "text"] - Passed (5ms)\n')))}m.isMDXComponent=!0}}]);