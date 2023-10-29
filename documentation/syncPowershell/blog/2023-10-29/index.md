# Added versioning

It is difficult to find documentation about what packages to add for versioning WebAPI .


<!--truncate-->


For me , this was working

```xml
<ItemGroup>
<PackageReference Include="Asp.Versioning.Mvc.ApiExplorer" Version="7.1.0" />
<PackageReference Include="Asp.Versioning.Mvc" Version="7.1.0" />
</ItemGroup>	
```
and in Program.cs

```csharp
builder.Services.AddApiVersioning();
builder.Services.AddEndpointsApiExplorer();
```

and the controller
```csharp
[Route("api/[controller]/v{version:apiVersion}/[action]")]
[ApiController]
[ApiVersion(1.0)]
public class DataController : ControllerBase
```

The documentation is sparse here:

https://github.com/dotnet/aspnet-api-versioning/wiki/Existing-Services

https://github.com/dotnet/aspnet-api-versioning/wiki/New-Services-Quick-Start

https://github.com/dotnet/aspnet-api-versioning/wiki/Versioning-via-the-URL-Path