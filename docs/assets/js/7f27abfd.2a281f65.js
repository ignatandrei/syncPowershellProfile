"use strict";(self.webpackChunksync_powershell=self.webpackChunksync_powershell||[]).push([[8241],{9403:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/08/30/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/30/index","source":"@site/blog/2023-08-30/index.md","title":"Testing saving and retrieval","description":"Now for the tests that are sending and retrieving data, it is not enough to verify with mocks/stubs ( see https://martinfowler.com/articles/mocksArentStubs.html ) .","date":"2023-08-30T00:00:00.000Z","formattedDate":"August 30, 2023","tags":[],"readingTime":0.27,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"nextItem":{"title":"Analysis of the project","permalink":"/syncPowershellProfile/blog/2023/08/29/index"}},"content":"import ADR004 from \'../../docs/ADR/ADR004.md\'\\n\\n\\nNow for the tests that are sending and retrieving data, it is not enough to verify with mocks/stubs ( see https://martinfowler.com/articles/mocksArentStubs.html ) .\\n\\nThere must be some real objects that saves / retrieves data, otherwise it is just mocking the answer.\\n\\nSo now how to store data \\n\x3c!--truncate--\x3e\\n<ADR004 />"},{"id":"/2023/08/29/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/29/index","source":"@site/blog/2023-08-29/index.md","title":"Analysis of the project","description":"Before starting writing API, I want to generate data about what I have created - packages, reference , tests .","date":"2023-08-29T00:00:00.000Z","formattedDate":"August 29, 2023","tags":[],"readingTime":0.44,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Testing saving and retrieval","permalink":"/syncPowershellProfile/blog/2023/08/30/index"},"nextItem":{"title":"Code Coverage","permalink":"/syncPowershellProfile/blog/2023/08/28/index"}},"content":"Before starting writing API, I want to generate data about what I have created - packages, reference , tests .\\n\\nFor tests, I have copied the PlainTextReportFormatter from https://github.com/LightBDD/LightBDD/blob/c07341ea8dc90d5c2dae74650d9bdad848978100/src/LightBDD.Framework/Reporting/Formatters/PlainTextReportFormatter.cs#L19\\n\\nand \\n1. modified a bit ( put # in front of Summary , Scenario , Feature, )\\n2. Commented new TextTableRenderer , TextTreeRenderer.Render for later use\\n\\nAnd voila!\\n\\nFor analyzing the project I use https://github.com/ignatandrei/PackageAnalyzer .\\n\\nThis will export the package references, the relations between packages, the packages with differences in the major ...\\n\\nThe result is here:\\n\\nhttps://ignatandrei.github.io/syncPowershellProfile/docs/category/technical-docs"},{"id":"/2023/08/28/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/28/index","source":"@site/blog/2023-08-28/index.md","title":"Code Coverage","description":"This is another decision - how much code coverage should be and how to obtain it.","date":"2023-08-28T00:00:00.000Z","formattedDate":"August 28, 2023","tags":[],"readingTime":0.83,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Analysis of the project","permalink":"/syncPowershellProfile/blog/2023/08/29/index"},"nextItem":{"title":"Continuing tests - no data","permalink":"/syncPowershellProfile/blog/2023/08/27/index"}},"content":"This is another decision - how much code coverage should be and how to obtain it.\\n\\n\\nFor Code Coverage, I have worked until now with\\n\\nhttps://github.com/danielpalme/ReportGenerator\\n\\nthat works with XPlat Code Coverage\\n\\nhttps://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-code-coverage?tabs=windows\\n\\n\\n\\n\\n\\nBut now I have seen a tool that does it all:\\n\\nhttps://www.jetbrains.com/help/dotcover/Running_Coverage_Analysis_from_the_Command_LIne.html\\n\\n\\nThe xml for configuring is dotnetcover.xml\\n```xml\\n<CoverageParams>\\n  <ReportType>HTML</ReportType>\\n\\n  <Filters>\\n    <ExcludeFilters>\\n      <FilterEntry>\\n        <ModuleMask>*Tests*</ModuleMask>\\n      </FilterEntry>\\n      <FilterEntry>\\n        <ClassMask>*clsSystem*</ClassMask>\\n      </FilterEntry>\\n      <FilterEntry>\\n        <ClassMask>*recSystem*</ClassMask>\\n      </FilterEntry>\\n      <FilterEntry>\\n        <ClassMask>*StaticToInterface*</ClassMask>\\n      </FilterEntry>\\n      <FilterEntry>\\n        <ClassMask>*TestPlatform*</ClassMask>\\n\\n      </FilterEntry>\\n      <FilterEntry>\\n        <ClassMask>*Refit.Implementation*</ClassMask>\\n\\n      </FilterEntry>\\n    </ExcludeFilters>\\n  </Filters>\\n \\n</CoverageParams>\\n```\\n\\nAnd for code coverage, should be at least 80%. \\n\\nAlso, install this .net tools:\\n```json\\n{\\n  \\"version\\": 1,\\n  \\"isRoot\\": true,\\n  \\"tools\\": {\\n    \\"jetbrains.dotcover.globaltool\\": {\\n      \\"version\\": \\"2023.2.1\\",\\n      \\"commands\\": [\\n        \\"dotnet-dotcover\\"\\n      ]\\n    },\\n    \\"run-script\\": {\\n      \\"version\\": \\"0.5.0\\",\\n      \\"commands\\": [\\n        \\"r\\"\\n      ]\\n    },\\n    \\"powershell\\": {\\n      \\"version\\": \\"7.3.6\\",\\n      \\"commands\\": [\\n        \\"pwsh\\"\\n      ]\\n    }\\n  }\\n}\\n```\\n\\nAnd to run this is the global.json\\n```json\\n{\\n  \\"scripts\\": {\\n    \\"build\\": \\"dotnet build --configuration Release\\",\\n    \\"test\\": \\"dotnet dotnet-dotcover test --dcXml=dotnetcover.xml\\",\\n    \\"ci\\": \\"dotnet r build && dotnet r test\\"\\n  }\\n}\\n```\\n\\nAlso, need saving this"},{"id":"/2023/08/27/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/27/index","source":"@site/blog/2023-08-27/index.md","title":"Continuing tests - no data","description":"Since the powershell file profile can exists or not , we need a new UseCase","date":"2023-08-27T00:00:00.000Z","formattedDate":"August 27, 2023","tags":[],"readingTime":1.14,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"prevItem":{"title":"Code Coverage","permalink":"/syncPowershellProfile/blog/2023/08/28/index"},"nextItem":{"title":"Documentation","permalink":"/syncPowershellProfile/blog/2023/08/26/index"}},"content":"import UseCase002 from \'../../docs/UseCases/UseCase002.md\'\\n\\n\\nSince the powershell file profile can exists or not , we need a new UseCase\\n\\nFirst , rename use cases from 003 to 030 - to let space for others.\\n\\nSo a new \\n\\n\x3c!--truncate--\x3e\\n<UseCase002 />\\n\\n\\nSo how to test when the original code is like\\n\\n```csharp\\nvar powershell7Profile =Environment.GetFolderPath( Environment.SpecialFolder.MyDocuments );\\npowershell7Profile = Path.Combine(powershell7Profile, \\"WindowsPowerShell\\", \\"Microsoft.PowerShell_profile.ps1\\");\\nDataToBeSent dataToBeSent = new ();\\ndataToBeSent.UserName=Environment.UserName;\\ndataToBeSent.PC = Environment.MachineName;\\nif (File.Exists(powershell7Profile))\\n{\\n    dataToBeSent.Powershell = await File.ReadAllTextAsync(powershell7Profile);\\n    dataToBeSent.PowershellNumber = 7;\\n}\\nreturn dataToBeSent;\\n```\\n\\n?\\n\\nSimple - replace the static Environment with an interface using https://www.nuget.org/packages/RSCG_Static/  -  this is the code:\\n\\n```csharp\\nprivate readonly ISystem_Environment environment;\\nprivate readonly ISystem_IO_File file;\\nprivate readonly ISystem_IO_Path path;\\n\\npublic DataGatherer(ISystem_Environment environment, ISystem_IO_File file, ISystem_IO_Path path)\\n{\\n    this.environment = environment;\\n    this.file = file;\\n    this.path = path;\\n}\\npublic async Task<DataToBeSent> GetData()\\n{\\n    var powershell7Profile =environment.GetFolderPath( Environment.SpecialFolder.MyDocuments );\\n    powershell7Profile = path.Combine(powershell7Profile, \\"WindowsPowerShell\\", \\"Microsoft.PowerShell_profile.ps1\\");\\n    DataToBeSent dataToBeSent = new ();\\n    dataToBeSent.UserName=Environment.UserName;\\n    dataToBeSent.PC = Environment.MachineName;\\n    if (file.Exists(powershell7Profile))\\n    {\\n        dataToBeSent.Powershell = await file.ReadAllTextAsync(powershell7Profile, CancellationToken.None);\\n        dataToBeSent.PowershellNumber = 7;\\n    }\\n    return dataToBeSent;\\n}\\n```\\n\\n\\nAlso, for generating Mocks fast, I will use [Rocks](https://github.com/JasonBock/Rocks/)\\n\\n```csharp\\n\\nvar en = Rock.Create<ISystem_Environment>();\\nen.Methods().GetFolderPath(Arg.Any<Environment.SpecialFolder>()).Returns(\\"\\");\\nen.Properties().Getters().UserName().Returns(userName);\\nen.Properties().Getters().MachineName().Returns(pc);\\n\\nvar path = Rock.Create<ISystem_IO_Path>();\\npath.Methods().Combine(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns(\\"\\");\\nvar file = Rock.Create<ISystem_IO_File>();\\nfile.Methods().Exists(Arg.Any<string?>()).Returns(false);\\n\\nDataGatherer gatherer = new(en.Instance(), file.Instance(),path.Instance());\\n```\\n\\nAnd the BDD test looks like this:\\n```csharp\\nawait Runner            \\n    .AddAsyncSteps(\\n    _ =>Given_NoPowershellProfile7_IsFound(),\\n    _ => When_the_user_want_to_sent()\\n    )\\n    .AddSteps(\\n        _=>Then_the_return_value_should_be_an_URL_Ending_In_UserName_And_PC(userName,pc)\\n    ).RunAsync();\\n```"},{"id":"/2023/08/26/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/26/index","source":"@site/blog/2023-08-26/index.md","title":"Documentation","description":"I have started documentation about how to use, put the ADR and UseCases in their own folder, modified links, added about.","date":"2023-08-26T00:00:00.000Z","formattedDate":"August 26, 2023","tags":[],"readingTime":0.105,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Continuing tests - no data","permalink":"/syncPowershellProfile/blog/2023/08/27/index"},"nextItem":{"title":"Starting tests","permalink":"/syncPowershellProfile/blog/2023/08/25/index"}},"content":"I have started documentation about how to use, put the ADR and UseCases in their own folder, modified links, added about."},{"id":"/2023/08/25/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/25/index","source":"@site/blog/2023-08-25/index.md","title":"Starting tests","description":"For starting tests there is a plethora of frameworks. What we want is to","date":"2023-08-25T00:00:00.000Z","formattedDate":"August 25, 2023","tags":[],"readingTime":0.18,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"prevItem":{"title":"Documentation","permalink":"/syncPowershellProfile/blog/2023/08/26/index"},"nextItem":{"title":"Use Cases as mermaid","permalink":"/syncPowershellProfile/blog/2023/08/24/index"}},"content":"import ADR003 from \'../../docs/ADR/ADR003.md\'\\n\\n\\nFor starting tests there is a plethora of frameworks. What we want is to \\n\\n\x3c!--truncate--\x3e\\n1. Make it fast\\n2. See the results in a good form\\n\\n\\nSo we start \\n\\n<ADR003 />"},{"id":"/2023/08/24/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/24/index","source":"@site/blog/2023-08-24/index.md","title":"Use Cases as mermaid","description":"Modified use cases to see the interaction as mermaid.","date":"2023-08-24T00:00:00.000Z","formattedDate":"August 24, 2023","tags":[],"readingTime":0.14,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"prevItem":{"title":"Starting tests","permalink":"/syncPowershellProfile/blog/2023/08/25/index"},"nextItem":{"title":"General Architecture","permalink":"/syncPowershellProfile/blog/2023/08/23/index"}},"content":"import UseCase001 from \'../../docs/UseCases/UseCase001.md\'\\nimport UseCase030 from \'../../docs/UseCases/UseCase030.md\'\\nimport UseCase040 from \'../../docs/UseCases/UseCase040.md\'\\n\\n\\nModified use cases to see the interaction as mermaid.\\n\\n\x3c!--truncate--\x3e\\n<UseCase001 />\\n\\n<UseCase030 />\\n\\n<UseCase040 />"},{"id":"/2023/08/23/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/23/index","source":"@site/blog/2023-08-23/index.md","title":"General Architecture","description":"I want to have a simple application , without fuss. It will be an WebAPI Application, a Database and a SPA app.","date":"2023-08-23T00:00:00.000Z","formattedDate":"August 23, 2023","tags":[],"readingTime":0.285,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"prevItem":{"title":"Use Cases as mermaid","permalink":"/syncPowershellProfile/blog/2023/08/24/index"},"nextItem":{"title":"Use Cases","permalink":"/syncPowershellProfile/blog/2023/08/22/index"}},"content":"import ADR002 from \'../../docs/ADR/ADR002.md\'\\n\\n\\nI want to have a simple application , without fuss. It will be an WebAPI Application, a Database and a SPA app.\\n\\nModifications :\\n    Added also use case 4, the list of users\\n    Added also max dimension for files\\n    Refactored useCases to their folder\\n\\nHere it comes the ADR :\\n\\n\x3c!--truncate--\x3e\\n\\n<ADR002 />"},{"id":"/2023/08/22/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/22/index","source":"@site/blog/2023-08-22/index.md","title":"Use Cases","description":"I want to describe the application in detail - so what\'s best than a use case ?","date":"2023-08-22T00:00:00.000Z","formattedDate":"August 22, 2023","tags":[],"readingTime":0.845,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"prevItem":{"title":"General Architecture","permalink":"/syncPowershellProfile/blog/2023/08/23/index"},"nextItem":{"title":"Work on documentation","permalink":"/syncPowershellProfile/blog/2023/08/21/index"}},"content":"I want to describe the application in detail - so what\'s best than a use case ?\\n\x3c!-- truncate --\x3e\\n\\n## Use Case 1 : No Authentication , upload\\n\\n\\nFrom his PC the user will have a powershell to send  $PROFILE.CurrentUserCurrentHost and current user name  [Environment]::UserName and PC name [Environment]::MachineName to the site ( see Use Case 3)   . The username and all data  will be deleted after 30 days . The powershell should be of max 4 MB size.\\n\\n\\n## Use Case 20: Authenticated user .\\n\\nSame with UseCase 1 , just the user is authenticated first with user name + pwd and his profile will remain. \\n\\n\\n## Use case 30:  User can see data for a user name\\n\\nUser can  the page /userName/ the PC(s) with a link to download the file and a powershell to  execute that will overwrite on his new PC the $PROFILE.CurrentUserCurrentHost\\n\\n## Use case 40:  User can all user names\\n\\nUser can  the page /u and find the list of all users."},{"id":"/2023/08/21/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/21/index","source":"@site/blog/2023-08-21/index.md","title":"Work on documentation","description":"To have automatically documentation , I have created","date":"2023-08-21T00:00:00.000Z","formattedDate":"August 21, 2023","tags":[],"readingTime":0.37,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"prevItem":{"title":"Use Cases","permalink":"/syncPowershellProfile/blog/2023/08/22/index"},"nextItem":{"title":"Documentation","permalink":"/syncPowershellProfile/blog/2023/08/20/index"}},"content":"To have automatically documentation , I have created\\n\\n\x3c!--truncate--\x3e\\n##  Basic Code Build when push \\n\\nWhen pushing, docusaurus is build and pushed to /docs => https://ignatandrei.github.io/syncPowershellProfile/blog . Do not forget Settings => Actions => Workflow permission => read / write \\n\\nSee build.yml from https://github.com/ignatandrei/syncPowershellProfile/releases/tag/vDocumentation \\n\\n\\n## Added docusaurus blog\\n\\nModified some settings such as facebook reference in the files that point to github.\\n\\nAdded ADR folder for architecture decision records.\\n\\n## Link to code\\n\\nhttps://github.com/ignatandrei/syncPowershellProfile/releases/tag/vDocumentation"},{"id":"/2023/08/20/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/20/index","source":"@site/blog/2023-08-20/index.md","title":"Documentation","description":"I want the project start with documentation - too many times I wrote the code without documentation.","date":"2023-08-20T00:00:00.000Z","formattedDate":"August 20, 2023","tags":[],"readingTime":0.19,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"prevItem":{"title":"Work on documentation","permalink":"/syncPowershellProfile/blog/2023/08/21/index"},"nextItem":{"title":"Start project","permalink":"/syncPowershellProfile/blog/2023/08/19/index"}},"content":"import ADR001 from \'../../docs/ADR/ADR001.md\'\\n\\n\\nI want the project start with documentation - too many times I wrote the code without documentation.\\n\\nSo I am ready for the first decision - what documentation engine to use.\\n\x3c!--truncate--\x3e\\n<ADR001 />"},{"id":"/2023/08/19/index","metadata":{"permalink":"/syncPowershellProfile/blog/2023/08/19/index","source":"@site/blog/2023-08-19/index.md","title":"Start project","description":"Because I am moving from PC to PC and I use powershell ( ok , windows terminal ) I decide to have the $profile synchronized easy","date":"2023-08-19T00:00:00.000Z","formattedDate":"August 19, 2023","tags":[],"readingTime":1.385,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"prevItem":{"title":"Documentation","permalink":"/syncPowershellProfile/blog/2023/08/20/index"},"nextItem":{"title":"Welcome","permalink":"/syncPowershellProfile/blog/welcome"}},"content":"Because I am moving from PC to PC and I use powershell ( ok , windows terminal ) I decide to have the $profile synchronized easy \\nWhat I need is :\\n\\n\x3c!--truncate--\x3e\\n\\n1. Must upload $profile from local to a site easy  ( preferably powershell code )\\n2. Must download $profile from site to local easy ( preferably powershell code )\\n3. I can inspire from others profile - and improve mine\\n\\n-----\\n\\nNow let\'s start an investigation to see \\n1. if someone else have been doing this work\\n2. where a profile is located  \\n\\nFor 1 , apparently more people have started - e.g. https://github.com/tobyscales/ps-gitprofile , https://xkln.net/blog/securely-synchronizing-powershell-profiles-across-multiple-computers/  , https://compiledexperience.com/blog/posts/powershell-profile - but I cannot find an easy solution to store and retrieve profiles.\\n\\nFor 2 , oh - there are many $profile . Let\'s  read the documentation \\nhttps://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles\\n\\nFor powershell 5\\n```\\nPS C:\\\\Users\\\\ignat> $PSVersionTable. PSVersion\\n\\nMajor  Minor  Build  Revision\\n-----  -----  -----  --------\\n5      1      19041  3031\\n\\n\\nPS C:\\\\Users\\\\ignat> $PROFILE | Select-Object *\\n\\n\\nAllUsersAllHosts       : C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\profile.ps1\\nAllUsersCurrentHost    : C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\Microsoft.PowerShell_profile.ps1\\nCurrentUserAllHosts    : C:\\\\Users\\\\ignat\\\\Documents\\\\WindowsPowerShell\\\\profile.ps1\\nCurrentUserCurrentHost : C:\\\\Users\\\\ignat\\\\Documents\\\\WindowsPowerShell\\\\Microsoft.PowerShell_profile.ps1\\nLength                 : 75\\n```\\n\\n\\nFor powershell 7\\n```\\nPS C:\\\\Users\\\\ignat> $PSVersionTable. PSVersion\\n\\nMajor  Minor  Patch  PreReleaseLabel BuildLabel\\n-----  -----  -----  --------------- ----------\\n7      3      6\\n\\nPS C:\\\\Users\\\\ignat> $PROFILE | Select-Object *\\n\\nAllUsersAllHosts       : C:\\\\Program Files\\\\WindowsApps\\\\Microsoft.PowerShell_7.3.6.0_x64__8wekyb3d8bbwe\\\\profile.ps1\\nAllUsersCurrentHost    : C:\\\\Program Files\\\\WindowsApps\\\\Microsoft.PowerShell_7.3.6.0_x64__8wekyb3d8bbwe\\\\Microsoft.PowerSh\\n                         ell_profile.ps1\\nCurrentUserAllHosts    : C:\\\\Users\\\\ignat\\\\Documents\\\\PowerShell\\\\profile.ps1\\nCurrentUserCurrentHost : C:\\\\Users\\\\ignat\\\\Documents\\\\PowerShell\\\\Microsoft.PowerShell_profile.ps1\\nLength                 : 68\\n\\n\\nPS C:\\\\Users\\\\ignat>\\n\\n```\\n\\nFor Powershell ISE\\n```\\nPS C:\\\\Users\\\\ignat> $PSVersionTable. PSVersion\\n$PROFILE | Select-Object *\\n\\nMajor  Minor  Build  Revision\\n-----  -----  -----  --------\\n5      1      19041  3031    \\n\\nAllUsersAllHosts       : C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\profile.ps1\\nAllUsersCurrentHost    : C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\Microsoft.PowerShellISE_profile.ps1\\nCurrentUserAllHosts    : C:\\\\Users\\\\ignat\\\\Documents\\\\WindowsPowerShell\\\\profile.ps1\\nCurrentUserCurrentHost : C:\\\\Users\\\\ignat\\\\Documents\\\\WindowsPowerShell\\\\Microsoft.PowerShellISE_profile.ps1\\nLength                 : 78\\n\\n```\\n\\nSo I am ready to start the application ."},{"id":"welcome","metadata":{"permalink":"/syncPowershellProfile/blog/welcome","source":"@site/blog/1970-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"1970-08-26T00:00:00.000Z","formattedDate":"August 26, 1970","tags":[{"label":"facebook","permalink":"/syncPowershellProfile/blog/tags/facebook"},{"label":"hello","permalink":"/syncPowershellProfile/blog/tags/hello"},{"label":"docusaurus","permalink":"/syncPowershellProfile/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"Start project","permalink":"/syncPowershellProfile/blog/2023/08/19/index"},"nextItem":{"title":"MDX Blog Post","permalink":"/syncPowershellProfile/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/syncPowershellProfile/blog/mdx-blog-post","source":"@site/blog/1970-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"1970-08-01T00:00:00.000Z","formattedDate":"August 1, 1970","tags":[{"label":"docusaurus","permalink":"/syncPowershellProfile/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/syncPowershellProfile/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/syncPowershellProfile/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/syncPowershellProfile/blog/long-blog-post","source":"@site/blog/1970-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"1970-05-29T00:00:00.000Z","formattedDate":"May 29, 1970","tags":[{"label":"hello","permalink":"/syncPowershellProfile/blog/tags/hello"},{"label":"docusaurus","permalink":"/syncPowershellProfile/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/syncPowershellProfile/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/syncPowershellProfile/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/syncPowershellProfile/blog/first-blog-post","source":"@site/blog/1970-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"1970-05-28T00:00:00.000Z","formattedDate":"May 28, 1970","tags":[{"label":"hola","permalink":"/syncPowershellProfile/blog/tags/hola"},{"label":"docusaurus","permalink":"/syncPowershellProfile/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/syncPowershellProfile/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);