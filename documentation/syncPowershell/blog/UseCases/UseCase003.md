
## Use case 3:  User can see data


```mermaid
sequenceDiagram
    actor User
    participant SPA
    User->>SPA: /u/username/
    SPA-->>WebAPI: Give me the PC's for usernames 
    Note over SPA,WebAPI: and and $PROFILE.CurrentUserCurrentHost 
    WebAPI-->>BusinessLogic: PC's for usernames 
    BusinessLogic->>WebAPI: PC's for usernames 
    WebAPI->>SPA: PC's for usernames 
    Note over WebAPI,SPA: and and $PROFILE.CurrentUserCurrentHost     
    SPA-->>User: You can copy / download / run  for each PC +$PROFILE.CurrentUserCurrentHost 
```

