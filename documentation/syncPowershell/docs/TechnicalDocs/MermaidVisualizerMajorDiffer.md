
# Number of packages that differ in major version : 4


## 1 Microsoft.Extensions.Logging.Abstractions

```mermaid
graph TB
subgraph packages
    Microsoft.Extensions.Logging.Abstractions

end
subgraph projects
syncPowershellObjects(((syncPowershellObjects)))
SyncPowershellTests(((SyncPowershellTests)))
syncPowershellWebAPI(((syncPowershellWebAPI)))
    subgraph versions
7.0.1>7.0.1]
6.0.0>6.0.0]
    end
Microsoft.Extensions.Logging.Abstractions-->7.0.1
7.0.1-->syncPowershellObjects
7.0.1-->SyncPowershellTests
Microsoft.Extensions.Logging.Abstractions-->6.0.0
6.0.0-->syncPowershellWebAPI

    end
```

## 2 System.Collections.Immutable

```mermaid
graph TB
subgraph packages
    System.Collections.Immutable

end
subgraph projects
SyncPowershellTests(((SyncPowershellTests)))
syncPowershellObjects(((syncPowershellObjects)))
syncPowershellWebAPI(((syncPowershellWebAPI)))
    subgraph versions
7.0.0>7.0.0]
6.0.0>6.0.0]
    end
System.Collections.Immutable-->7.0.0
7.0.0-->SyncPowershellTests
7.0.0-->syncPowershellObjects
System.Collections.Immutable-->6.0.0
6.0.0-->syncPowershellWebAPI

    end
```

## 3 System.Reflection.Metadata

```mermaid
graph TB
subgraph packages
    System.Reflection.Metadata

end
subgraph projects
SyncPowershellTests(((SyncPowershellTests)))
syncPowershellObjects(((syncPowershellObjects)))
syncPowershellWebAPI(((syncPowershellWebAPI)))
    subgraph versions
7.0.0>7.0.0]
6.0.1>6.0.1]
    end
System.Reflection.Metadata-->7.0.0
7.0.0-->SyncPowershellTests
7.0.0-->syncPowershellObjects
System.Reflection.Metadata-->6.0.1
6.0.1-->syncPowershellWebAPI

    end
```

## 4 System.Text.Encodings.Web

```mermaid
graph TB
subgraph packages
    System.Text.Encodings.Web

end
subgraph projects
SyncPowershellTests(((SyncPowershellTests)))
syncPowershellObjects(((syncPowershellObjects)))
syncPowershellInterfaces(((syncPowershellInterfaces)))
syncPowershellWebAPI(((syncPowershellWebAPI)))
    subgraph versions
7.0.0>7.0.0]
4.5.0>4.5.0]
    end
System.Text.Encodings.Web-->7.0.0
7.0.0-->SyncPowershellTests
7.0.0-->syncPowershellObjects
7.0.0-->syncPowershellInterfaces
System.Text.Encodings.Web-->4.5.0
4.5.0-->syncPowershellWebAPI

    end
```
<small>Generated  by https://www.nuget.org/packages/netpackageanalyzerconsole , version 7.2023.908.2126</small>
