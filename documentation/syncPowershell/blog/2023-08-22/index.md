# Use Cases

I want to describe the application in detail - so what's best than a use case ?
<!-- truncate -->

## Use Case 1 : No Authentication , upload


From his PC the user will have a powershell to send  $PROFILE.CurrentUserCurrentHost and current user name  [Environment]::UserName and PC name [Environment]::MachineName to the site ( see Use Case 3)   . The username and all data  will be deleted after 30 days . The powershell should be of max 4 MB size.


## Use Case 2: Authenticated user .

Same with UseCase 1 , just the user is authenticated first with user name + pwd and his profile will remain. 


## Use case 3:  User can see data for a user name

User can  the page /userName/ the PC(s) with a link to download the file and a powershell to  execute that will overwrite on his new PC the $PROFILE.CurrentUserCurrentHost

## Use case 4:  User can all user names

User can  the page /u and find the list of all users.