# Analysis of the project

Before starting writing API, I want to generate data about what I have created - packages, reference , tests .

For tests, I have copied the PlainTextReportFormatter from https://github.com/LightBDD/LightBDD/blob/c07341ea8dc90d5c2dae74650d9bdad848978100/src/LightBDD.Framework/Reporting/Formatters/PlainTextReportFormatter.cs#L19

and 
1. modified a bit ( put # in front of Summary , Scenario , Feature, )
2. Commented new TextTableRenderer , TextTreeRenderer.Render for later use

And voila!

For analyzing the project I use https://github.com/ignatandrei/PackageAnalyzer .

This will export the package references, the relations between packages, the packages with differences in the major ...

The result is here:

https://ignatandrei.github.io/syncPowershellProfile/docs/category/technical-docs



