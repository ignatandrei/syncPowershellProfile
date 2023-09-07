namespace SyncPowershellTests;

[FeatureDescription(
@"In order to sync powershell profile
As an anonymous
I want to send my powershell profile
and retrieve data")] //feature description
public partial class TestUploadAndRetrieve
{
    
    [Scenario]
    [Label("UseCase002")]
    [ScenarioCategory("TestOnePC")]
    public async Task TestOnePC_No_Powershell()
    {
        await Runner            
            .AddAsyncSteps(
            _ => Given_NoPowershellProfile7_IsFound_For_UserName_PC(userName,pc),
            _ => When_the_data_is_sent()
            )
            .AddSteps(
                _=>Then_the_return_value_should_be_an_URL_Ending_In_UserName_PC(userName,pc)
            ).RunAsync();



    }
    [Scenario]
    [Label("UseCase001")]
    [ScenarioCategory("TestOnePC")]
    public async Task TestOnePC_Powershell7_Exists()
    {
        await Runner
            .AddAsyncSteps(
            _ => Given_PowershellProfile7_IsFound_For_UserName_PC(userName, pc,"text"),
            _ => When_the_data_is_sent()
            )
            .AddSteps(
                _ => Then_the_return_value_should_be_an_URL_Ending_In_UserName_PC_With_ID(userName, pc)
            ).RunAsync();



    }
    [Scenario]
    [Label("UseCase003")]
    [ScenarioCategory("TestOnePC")]
    public async Task TestOnePC_Powershell7_Exists_RetrieveData()
    {
        await Runner
            .AddAsyncSteps(
            _ => Given_PowershellProfile7_IsFound_For_UserName_PC(userName, pc,"text"),
            _ => When_the_data_is_sent()
            )
            .AddSteps(
                _ => Then_the_return_value_should_be_an_URL_Ending_In_UserName_PC_With_ID(userName, pc)
            )
            .AddAsyncSteps(
            _=> Then_Can_Retrieve_Data(userName,pc,7,"text")
            )
            .RunAsync();



    }

    
}