# Use Cases

I want to describe the application in detail - so what's best than a use case ?
<!-- truncate -->

## Use Case 1 : No Authentication 


From his PC the user will have a powershell to send  $PROFILE.CurrentUserCurrentHost and current user name  [Environment]::UserName and PC name [Environment]::MachineName to the site . He can after this see in the page /userName/ the PC with a link to download the file and a powershell to  execute that will overwrite on his new PC the $PROFILE.CurrentUserCurrentHost  . The username and all data  will be deleted after 30 days 


## Use Case 2: Authenticated user .

Same with UseCase 1 , just the user is authenticated first with user name + pwd and his profile will remain. 