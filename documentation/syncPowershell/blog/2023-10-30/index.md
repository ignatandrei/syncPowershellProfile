import ADR006 from '../../docs/ADR/ADR006.md'

# Added deployment

After this ADR 

<!--truncate-->

***
<ADR006 />

***

It was just creating the WebApp on Azure and letting generate the Github Action.

Now the only thing that I need to do is to integrate the documentation on wwwroot.

I have an Github workflow that is building the documentation and the site and running the tests.

The other Github file is taking the output of the build and deploying it to Azure.

```yaml
# Docs for the Azure Web Apps Deploy action: https://github.com/Azure/webapps-deploy
# More GitHub Actions for Azure: https://github.com/Azure/actions

name: Build and deploy ASP.Net Core app to Azure Web App - syncPowershell

on:
  push:
    branches:
      - main
  workflow_dispatch:
  
jobs:
  mainBuild:
    uses: ./.github/workflows/build.yml 
  build:
    needs: [mainBuild]
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Set up .NET Core
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: 7.0.x
          include-prerelease: false

      # - name: Build with dotnet
      #   run: |
      #       cd src
      #       cd SyncPowershell
      #       dotnet build --configuration Release
      - name: Download artifact from build job
        uses: actions/download-artifact@v3
        with:
          name: docusaurusBuild
          path: src/SyncPowershell/syncPowershellWebAPI/wwwroot/help/

      - name: dotnet publish
        run: |
            cd src
            cd SyncPowershell
            cd syncPowershellWebAPI
            dotnet publish -c Release -o ${{env.DOTNET_ROOT}}/myapp

      - name: Upload artifact for deployment job
        uses: actions/upload-artifact@v3
        with:
          name: .net-app
          path: ${{env.DOTNET_ROOT}}/myapp
          retention-days: 1

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: 'Production'
      url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}

    steps:
      - name: Download artifact from build job
        uses: actions/download-artifact@v3
        with:
          name: .net-app

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@v2
        with:
          app-name: 'syncPowershell'
          slot-name: 'Production'
          publish-profile: ${{ secrets.AZUREAPPSERVICE_PUBLISHPROFILE_49083FF1076F49D1AE72DCB84FCB1E50 }}
          package: .

```
