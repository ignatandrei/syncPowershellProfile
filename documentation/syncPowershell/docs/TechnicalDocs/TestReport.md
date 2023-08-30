# Test Summary
	Test execution start time       : 2023-08-30 07:31:13 UTC
	Test execution end time         : 2023-08-30 07:31:17 UTC
	Test execution time             : 4s 087ms
	Test execution time (aggregated): 4s 080ms
	Number of features              : 1
	Number of scenarios             : 2
	Passed scenarios                : 2
	Bypassed scenarios              : 0
	Failed scenarios                : 0
	Ignored scenarios               : 0
	Number of steps                 : 6
	Passed steps                    : 6
	Bypassed steps                  : 0
	Failed steps                    : 0
	Ignored steps                   : 0
	Not Run steps                   : 0

## Feature: TestUpload [ADR001]
	In order to sync powershell profile
	As an anonymous
	I want to send my powershell profile

### 	Scenario: TestOnePC No Powershell [Ticket-1] - Passed (2s 024ms)
		Categories: TestOnePC
		Step 1: GIVEN NoPowershellProfile7 IsFound For UserName "Andrei" "TestPCAndrei" - Passed (<1ms)
		Step 2: WHEN the data is sent - Passed (2s 019ms)
		Step 3: THEN the return value should be an URL Ending In UserName "Andrei" "TestPCAndrei" - Passed (1ms)

### 	Scenario: TestOnePC Powershell7 Exists [Ticket-2] - Passed (2s 055ms)
		Categories: TestOnePC
		Step 1: GIVEN PowershellProfile7 IsFound For UserName "Andrei" "TestPCAndrei" - Passed (16ms)
		Step 2: WHEN the data is sent - Passed (2s 019ms)
		Step 3: THEN the return value should be an URL Ending In UserName "Andrei" "TestPCAndrei" With ID - Passed (1ms)
