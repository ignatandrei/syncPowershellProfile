# Code Coverage

This is another decision - how much code coverage should be and how to obtain it.


For Code Coverage, I have worked until now with

https://github.com/danielpalme/ReportGenerator

that works with XPlat Code Coverage

https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-code-coverage?tabs=windows





But now I have seen a tool that does it all:

https://www.jetbrains.com/help/dotcover/Running_Coverage_Analysis_from_the_Command_LIne.html


The xml for configuring is dotnetcover.xml
```xml
<CoverageParams>
  <ReportType>HTML</ReportType>

  <Filters>
    <ExcludeFilters>
      <FilterEntry>
        <ModuleMask>*Tests*</ModuleMask>
      </FilterEntry>
      <FilterEntry>
        <ClassMask>*clsSystem*</ClassMask>
      </FilterEntry>
      <FilterEntry>
        <ClassMask>*recSystem*</ClassMask>
      </FilterEntry>
      <FilterEntry>
        <ClassMask>*StaticToInterface*</ClassMask>
      </FilterEntry>
      <FilterEntry>
        <ClassMask>*TestPlatform*</ClassMask>

      </FilterEntry>
      <FilterEntry>
        <ClassMask>*Refit.Implementation*</ClassMask>

      </FilterEntry>
    </ExcludeFilters>
  </Filters>
 
</CoverageParams>
```

And for code coverage, should be at least 80%. 

Also, install this .net tools:
```json
{
  "version": 1,
  "isRoot": true,
  "tools": {
    "jetbrains.dotcover.globaltool": {
      "version": "2023.2.1",
      "commands": [
        "dotnet-dotcover"
      ]
    },
    "run-script": {
      "version": "0.5.0",
      "commands": [
        "r"
      ]
    },
    "powershell": {
      "version": "7.3.6",
      "commands": [
        "pwsh"
      ]
    }
  }
}
```

And to run this is the global.json
```json
{
  "scripts": {
    "build": "dotnet build --configuration Release",
    "test": "dotnet dotnet-dotcover test --dcXml=dotnetcover.xml",
    "ci": "dotnet r build && dotnet r test"
  }
}
```

Also, need saving this 