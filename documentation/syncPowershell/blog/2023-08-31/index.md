
# Refactoring 

Now the project syncPowershellObjects is full of interfaces and classes. I need a refactoring - to, at least,separate interfaces from classes/implemented functionalities.

It is easy to create a new project and to add the interfaces ( with a new namespace). Somehow more difficult is to respect the rule : the interfaces must not have other the methods / properties that are not interfaces . This infers generating interfaces from classes ( VS is perfect!). 

So now is how it looks( generated with  https://www.nuget.org/packages/netpackageanalyzerconsole  )

```mermaid
---
title: Project Relations
---
flowchart TB    

SyncPowershellTests-->syncPowershellObjects

syncPowershellObjects-->syncPowershellInterfaces
```

And some major versions that differs already , even if all is targeting 7.0!


# Number of packages that differ in major version : 3


## 1 System.Collections.Immutable

```mermaid
---
title: System.Collections.Immutable
---
        flowchart TB
        subgraph packages
            System.Collections.Immutable

        end
        subgraph projects
SyncPowershellTests(((SyncPowershellTests)))
syncPowershellObjects(((syncPowershellObjects)))
    subgraph versions
7.0.0>7.0.0]
6.0.0>6.0.0]
    end
System.Collections.Immutable-->7.0.0
7.0.0-->SyncPowershellTests
System.Collections.Immutable-->6.0.0
6.0.0-->syncPowershellObjects

    end
```

## 2 System.Reflection.Metadata

```mermaid
---
title: System.Reflection.Metadata
---
        flowchart TB
        subgraph packages
            System.Reflection.Metadata

        end
        subgraph projects
SyncPowershellTests(((SyncPowershellTests)))
syncPowershellObjects(((syncPowershellObjects)))
    subgraph versions
7.0.0>7.0.0]
6.0.1>6.0.1]
    end
System.Reflection.Metadata-->7.0.0
7.0.0-->SyncPowershellTests
System.Reflection.Metadata-->6.0.1
6.0.1-->syncPowershellObjects

    end
```

## 3 System.Text.Encoding.CodePages

```mermaid
---
title: System.Text.Encoding.CodePages
---
        flowchart TB
        subgraph packages
            System.Text.Encoding.CodePages

        end
        subgraph projects
SyncPowershellTests(((SyncPowershellTests)))
syncPowershellObjects(((syncPowershellObjects)))
    subgraph versions
7.0.0>7.0.0]
6.0.0>6.0.0]
    end
System.Text.Encoding.CodePages-->7.0.0
7.0.0-->SyncPowershellTests
System.Text.Encoding.CodePages-->6.0.0
6.0.0-->syncPowershellObjects

    end
```



And here are the results of the tests:

## Feature: TestUploadAndRetrieve
	In order to sync powershell profile
	As an anonymous
	I want to send my powershell profile
	and retrieve data

### 	Scenario: TestOnePC No Powershell [UseCase002] - Passed (1s 071ms)
		Categories: TestOnePC
		Step 1: GIVEN NoPowershellProfile7 IsFound For UserName "Andrei" "TestPCAndrei" - Passed (18ms)
		Step 2: WHEN the data is sent - Passed (1s 018ms)
		Step 3: THEN the return value should be an URL Ending In UserName "Andrei" "TestPCAndrei" - Passed (2ms)

### 	Scenario: TestOnePC Powershell7 Exists [UseCase001] - Passed (1s 061ms)
		Categories: TestOnePC
		Step 1: GIVEN PowershellProfile7 IsFound For UserName "Andrei" "TestPCAndrei" [value: "text"] - Passed (2ms)
		Step 2: WHEN the data is sent - Passed (1s 048ms)
		Step 3: THEN the return value should be an URL Ending In UserName "Andrei" "TestPCAndrei" With ID - Passed (1ms)

### 	Scenario: TestOnePC Powershell7 Exists RetrieveData [UseCase003] - Passed (1s 031ms)
		Categories: TestOnePC
		Step 1: GIVEN PowershellProfile7 IsFound For UserName "Andrei" "TestPCAndrei" [value: "text"] - Passed (<1ms)
		Step 2: WHEN the data is sent - Passed (1s 012ms)
		Step 3: THEN the return value should be an URL Ending In UserName "Andrei" "TestPCAndrei" With ID - Passed (<1ms)
		Step 4: AND Can Retrieve Data [userName: "Andrei"] [pc: "TestPCAndrei"] [pwshNumber: "7"] [retValue: "text"] - Passed (5ms)

