# Adding WebAPI

Adding WebAPI is not big deal. But what do you need , for a Good functionality ?
<!--truncate-->

I want to add first the packages that I have created 


```xml
<ItemGroup>
    <PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.0" />
	<PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="7.0.13" />
</ItemGroup>
<ItemGroup>
  <PackageReference Include="AMSWebAPI" Version="2023.5.21.1551" />
  <PackageReference Include="AMS_Base" Version="2023.5.21.1551" />
	<PackageReference Include="RSCG_AMS" Version="2023.5.21.1551" ReferenceOutputAssembly="false" OutputItemType="Analyzer" />
  <PackageReference Include="NetCore2Blockly" Version="7.2023.427.2025" />
  <PackageReference Include="NetCore7ShortLinks" Version="7.2023.506.10" />
  <PackageReference Include="NetCoreUsefullEndpoints" Version="7.2023.916.1715" />
  <PackageReference Include="RSCG_WebAPIExports" Version="2023.8.16.1958" OutputItemType="Analyzer" ReferenceOutputAssembly="true"/>
	<PackageReference Include="RSCG_TimeBombComment" Version="2023.10.21.806" />
</ItemGroup>
```

I have put first a global.cs
```csharp
global using AMSWebAPI;
global using NetCore2BlocklyNew;
global using NetCoreShortLinks;
global using UsefullExtensions;
global using WebApiExportToFile;
#region AMS
[assembly: AMS_Base.VersionReleased(Name = "FirstRelease", ISODateTime = "2023-10-28", recordData = AMS_Base.RecordData.Merges)]
#endregion
```
and the code is

```csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
#region export webapi
//WebApiExportToFile.Extensions.AddExport(builder.Services);
builder.Services.AddExport();
#endregion

#region links
builder.Services.AddShortUrl();
#endregion
#region usefull endpoints
builder.Services.AddSingleton<MiddlewareShutdown>();
#endregion
var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//WebApiExportToFile.Extensions.UseExport(app);
app.UseExport();
#region links
app.UseShortUrl();
#endregion
//app.UseHttpsRedirection();
#region usefull endpoints
app.MapUsefullAll();
app.MapHostedServices(app.Services.GetServices<IHostedService>().ToArray());
//app.MapUsefullConfiguration();
#endregion
//app.UseAuthorization();
#region blockly
app.UseBlocklyUI(app.Environment);
#endregion
app.MapControllers();
#region blockly
app.UseBlocklyAutomation();
#endregion

#region ams
app.UseAMS();
#endregion

#region links
app.MapShortUrlEndpoints();
#endregion
app.Run();

```

Adding those API the number of packages increased from 108 to 157 ( 45% increase! )

The purpose of packages:

UseBlocklyAutomation -  adding macro capabilities to API

AMS - versioning the project with latest git versions

UsefullEndpoints -  adding start date, verifying errors, others ...

WebAPIExports - adding xlsx export to any endpoint

ShortUrl - remembering what the url with html was requested successfully

TimeBombComment - TODO comments with an expiry date
