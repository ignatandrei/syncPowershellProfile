# Added CPM and ProjProperties

One of the problem with NuGet are version .One of the problems with version is that ,in the same sln, inadvertently add 2 NuGets with different versions.

<!--truncate-->

The solution is CPM and ProjProperties. 

For CPM please read https://learn.microsoft.com/en-us/nuget/consume-packages/Central-Package-Management 

For ProjProperties please read https://learn.microsoft.com/en-us/visualstudio/msbuild/customize-by-directory?view=vs-2022

In practice I have added near the sln a file named Directory.Packages.props with the following content
```xml
<Project>
  <PropertyGroup>
    <ManagePackageVersionsCentrally>true</ManagePackageVersionsCentrally>
  </PropertyGroup>
  <ItemGroup>
    <PackageVersion Include="Microsoft.Extensions.Logging.Abstractions" Version="7.0.1" />
    <PackageVersion Include="RSCG_Static" Version="2023.8.23.2100" />
    <PackageVersion Include="Refit" Version="7.0.0" />
    <PackageVersion Include="RSCG_Decorator" Version="7.2023.930.2116" />
    <PackageVersion Include="RSCG_DecoratorCommon" Version="7.2023.930.2116" />
    <PackageVersion Include="Divergic.Logging.Xunit" Version="4.2.0" />
    <PackageVersion Include="FluentAssertions" Version="6.12.0" />
    <PackageVersion Include="LightBDD.XUnit2" Version="3.7.0" />
    <PackageVersion Include="Microsoft.NET.Test.Sdk" Version="17.8.0" />
    <PackageVersion Include="NLog.Extensions.Logging" Version="5.3.5" />
    <PackageVersion Include="xunit" Version="2.6.1" />
    <PackageVersion Include="Rocks" Version="7.2.0" />
    <PackageVersion Include="xunit.runner.visualstudio" Version="2.5.3">
    </PackageVersion>
    <PackageVersion Include="coverlet.collector" Version="6.0.0">
    </PackageVersion>
    <PackageVersion Include="Asp.Versioning.Mvc.ApiExplorer" Version="7.1.0" />
    <PackageVersion Include="Asp.Versioning.Mvc" Version="7.1.0" />
    <PackageVersion Include="NLog" Version="5.2.5" />
    <PackageVersion Include="NLog.Web.AspNetCore" Version="5.3.5" />
    <PackageVersion Include="Swashbuckle.AspNetCore" Version="6.5.0" />
    <PackageVersion Include="AMSWebAPI" Version="2023.5.21.1551" />
    <PackageVersion Include="AMS_Base" Version="2023.5.21.1551" />
    <PackageVersion Include="RSCG_AMS" Version="2023.5.21.1551" />
    <PackageVersion Include="Microsoft.AspNetCore.OpenApi" Version="7.0.13" />
    <PackageVersion Include="NetCore2Blockly" Version="7.2023.427.2025" />
    <PackageVersion Include="NetCore7ShortLinks" Version="7.2023.506.10" />
    <PackageVersion Include="NetCoreUsefullEndpoints" Version="7.2023.916.1715" />
    <PackageVersion Include="RSCG_WebAPIExports" Version="2023.8.16.1958" OutputItemType="Analyzer" ReferenceOutputAssembly="true" />
    <PackageVersion Include="RSCG_TimeBombComment" Version="2023.10.21.806" />
  </ItemGroup>
</Project>
```

and remove all version references from packages in all projects

See 

![Version differences](/img/diffVersion.png)


Also , for passing all projects from net7.0 to anything one can use Directory.Build.props

```xml
<Project>
    <PropertyGroup>
        <TargetFramework>net7.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>
    <PropertyGroup>
        <EmitCompilerGeneratedFiles>true</EmitCompilerGeneratedFiles>
        <CompilerGeneratedFilesOutputPath>$(BaseIntermediateOutputPath)\GX</CompilerGeneratedFilesOutputPath>
    </PropertyGroup>

</Project>
```

And now the projects can be like this


![Target differences](/img/diffTarget.png)
