"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[9990,9347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=o.createContext({}),c=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(g.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(g,".").concat(d)]||p[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={slug:"/ADR001",title:"ADR001 Engine for documentation",tags:["ADR"]},i=void 0,l={unversionedId:"ADR/ADR001",id:"ADR/ADR001",title:"ADR001 Engine for documentation",description:"TITLE: ADR 001 - Engine for documentation",source:"@site/docs/ADR/ADR001.md",sourceDirName:"ADR",slug:"/ADR001",permalink:"/help/docs/ADR001",draft:!1,tags:[{label:"ADR",permalink:"/help/docs/tags/adr"}],version:"current",frontMatter:{slug:"/ADR001",title:"ADR001 Engine for documentation",tags:["ADR"]},sidebar:"tutorialSidebar",previous:{title:"ADR",permalink:"/help/docs/category/adr"},next:{title:"ADR002 Architecture of application",permalink:"/help/docs/ADR002"}},g={},c=[{value:"TITLE: ADR 001 - Engine for documentation",id:"title-adr-001---engine-for-documentation",level:2},{value:"Status : accepted",id:"status--accepted",level:3},{value:"Context",id:"context",level:3},{value:"Decision",id:"decision",level:3},{value:"Consequences",id:"consequences",level:3},{value:"ADR based on",id:"adr-based-on",level:3}],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"title-adr-001---engine-for-documentation"},"TITLE: ADR 001 - Engine for documentation"),(0,r.kt)("h3",{id:"status--accepted"},"Status : accepted"),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"Need to have a static documentation site with blog also ."),(0,r.kt)("p",null,"In those days there are many engines on the market. And I can built one ;-) ."),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs#comparison-with-other-tools"},"https://docusaurus.io/docs#comparison-with-other-tools")," . The only that seems to fit the bill are REACT based - I cannot afford learning VUE after Angular and React."),(0,r.kt)("p",null,"The problem with REACT is that he is going also to server side ... "),(0,r.kt)("h3",{id:"decision"},"Decision"),(0,r.kt)("p",null,"Docusaurus it is because "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Apparently is it the best on REACT"),(0,r.kt)("li",{parentName:"ol"},"I know REACT "),(0,r.kt)("li",{parentName:"ol"},"It has BLOG and Documentation")),(0,r.kt)("h3",{id:"consequences"},"Consequences"),(0,r.kt)("p",null,"The build process  will be somehow different."),(0,r.kt)("p",null,"Could be hard to transfer what I have written to another engine"),(0,r.kt)("h3",{id:"adr-based-on"},"ADR based on"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/joelparkerhenderson/architecture-decision-record/tree/main/locales/en/templates/decision-record-template-by-michael-nygard"},"https://github.com/joelparkerhenderson/architecture-decision-record/tree/main/locales/en/templates/decision-record-template-by-michael-nygard")))}u.isMDXComponent=!0},160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>s});var o=n(7462),r=(n(7294),n(3905)),a=n(850);const i={},l="Adding logging",g={permalink:"/help/blog/2023/10/12/index",source:"@site/blog/2023-10-12/index.md",title:"Adding logging",description:"Adding logging for a project should  be simple, right ?",date:"2023-10-12T00:00:00.000Z",formattedDate:"October 12, 2023",tags:[],readingTime:1.75,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Adding WebAPI",permalink:"/help/blog/2023/10/28/index"},nextItem:{title:"Refactoring",permalink:"/help/blog/2023/08/31/index"}},c={authorsImageUrls:[]},s=[{value:"Implementation",id:"implementation",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Adding logging for a project should  be simple, right ? "),(0,r.kt)("p",null,"After all, we have the ADR and we have ILogger from Microsoft and the NLOG Framework"),(0,r.kt)(a.default,{mdxType:"ADR001"}),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"First, add to the constructor of each class the Ilogger parameter."),(0,r.kt)("p",null,"Then , to automatically instrument each method of class with logging , I use ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/rscg_decorator"},"https://www.nuget.org/packages/rscg_decorator")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace syncPowershellObjects;\n\nstatic internal class GlobalLogging\n{\n    public static void LogData(this ILogger logger, MethodRecognizer recognizer ,Exception? ex=null,[CallerMemberName] string name = "")\n    {\n        //TB: 2024-01-01 add activity tracing\n        //TB: 2024-01-01 add named parameters for logging\n        if (logger == null) return;\n        if (ex != null)\n        {\n            logger.LogError($"{name} {recognizer.UniqueId}");\n            if (recognizer.ValueTypeParameters.Count > 0)\n                logger.LogError($"{recognizer.ValueTypeParametersString}");\n        }\n        else\n        {\n        \n            logger.LogInformation(ex, $"{name} {recognizer.UniqueId}");\n            if (recognizer.ValueTypeParameters.Count > 0)\n                logger.LogInformation(ex,$"{recognizer.ValueTypeParametersString}");\n        }\n\n    }\n}\n\n')),(0,r.kt)("p",null,"And in the class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"\npublic partial class ReceiveData_Decorator\n{\n}\n\npartial class ReceiveData : IDecoratorMethodV1\n{\n    public void EndMethod(MethodRecognizer recognizer)\n    {\n        logger.LogData(recognizer);\n    }\n\n    public void ExceptionMethod(Exception ex, MethodRecognizer recognizer)\n    {\n        logger.LogData(recognizer);\n    }\n\n    public void StartMethod(MethodRecognizer recognizer)\n    {\n        logger.LogData(recognizer);\n\n    }\n}\n")),(0,r.kt)("p",null,"The first problem is that many classes in NLOG and Microsoft Logging differs just by namespace ( ILogger, LogLevel ) . So you must be careful when write (global ) using namespaces"),(0,r.kt)("p",null,"Second, XUnit has his ITestOutputHelper too - so we have to integrate also this."),(0,r.kt)("p",null,"To combine multiple loggers, CompositeLogger class is necessary . And also, because BeginScope is IDisposable , also a CompositeDisposable is necessary . "),(0,r.kt)("p",null,"So this is the final code, that integrates OutputHelper as logger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'//Divergic.Logging.Xunit\nvar loggerOutput = outputHelper.BuildLoggerFor<TestUploadAndRetrieve>();\n//simple way\n//ILoggerFactory factory = LoggerFactory.Create(builder =>builder.AddNLog());\nNLog.LogFactory f = new NLog.LogFactory();\nNLog.SetupBuilderExtensions.LoadConfigurationFromFile(f.Setup(),"nlog.config");\nvar config = new NLog.Config.LoggingConfiguration(f);\n\nvar target = new XunitLoggerTarget(outputHelper);\nconfig.AddTarget("Xunit", target);\n\nconfig.LoggingRules.Add(new LoggingRule("*", NLog.LogLevel.Trace, target));\n\nILoggerFactory factory = LoggerFactory.Create(b => b.AddNLog(config));\nlogger = new CompositeLogger(factory.CreateLogger<TestUploadAndRetrieve>(), loggerOutput);\n\n')),(0,r.kt)("p",null,"Realise that could be simpler with a simple logger => so a simpler version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'NLog.LogFactory f = new NLog.LogFactory();\nvar config = new NLog.Config.LoggingConfiguration(f);\n\nvar target = new XunitLoggerTarget(outputHelper);\nconfig.AddTarget("Xunit", target);\n\nconfig.LoggingRules.Add(new LoggingRule("*", NLog.LogLevel.Trace, target));\n\nILoggerFactory factory = LoggerFactory.Create(b => b.AddNLog(config));\nlogger = factory.CreateLogger<TestUploadAndRetrieve>();\n\n')),(0,r.kt)("p",null,"Adding to console it is for another time"))}d.isMDXComponent=!0}}]);