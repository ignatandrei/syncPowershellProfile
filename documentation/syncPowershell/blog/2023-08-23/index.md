# General Architecture 

I want to have a simple application , without fuss. It will be an WebAPI Application, a Database and a SPA app.

<!--truncate-->

```mermaid
sequenceDiagram
    actor User
    participant SPA
    User->>SPA: Send Info
    John-->>User: Great!
    John->>SPA: How about you?
    SPA-->>John: Jolly good!
```