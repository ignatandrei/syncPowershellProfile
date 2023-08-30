## Use Case 2 : No Authentication , no profile file

The PC of the user does NOT Contain $PROFILE.CurrentUserCurrentHost .
From his PC the user will have a powershell and current user name  [Environment]::UserName and PC name [Environment]::MachineName to the site ( see Use Case 3)   . The username and all data  will be deleted after 30 days . The powershell should be of max 4 MB size.

```mermaid
sequenceDiagram
    actor User
    User->>WebAPI: Send Info via powershell 
    Note over User,WebAPI: Send UserName,MachineName, 
    WebAPI-->>BusinessLogic: Save / overwrite data
    BusinessLogic->>WebAPI: Here is the link to the page where you can Username and MachineName
    WebAPI->>User: Here is the link to the page where you can see data
    
```
