## Use Case 1 : No Authentication , upload

From his PC the user will have a powershell to send  $PROFILE.CurrentUserCurrentHost and current user name  [Environment]::UserName and PC name [Environment]::MachineName to the site ( see Use Case 3)   . The username and all data  will be deleted after 30 days . The powershell should be of max 4 MB size.

```mermaid
sequenceDiagram
    actor User
    User->>WebAPI: Send Info via powershell
    Note over User,WebAPI: Send UserName,MachineName, $PROFILE.CurrentUserCurrentHost text . Max 4 MB
    WebAPI-->>BusinessLogic: Save / overwrite data
    BusinessLogic->>WebAPI: Here is the link to the page where you can see data
    WebAPI->>User: Here is the link to the page where you can see data
    
```
