namespace SyncPowershellTests;

[FeatureDescription(
@"In order to sync powershell profile
As an anonymous
I want to send my powershell profile")] //feature description
[Label("ADR001")]
public partial class TestUpload
{
    
    [Scenario]
    [Label("Ticket-1")]
    [ScenarioCategory("TestOnePC")]
    public async Task TestOnePC()
    {
        await Runner            
            .AddAsyncSteps(
            _ =>Given_NoPowershellProfile7_IsFound(),
            _ => When_the_user_want_to_sent()
            )
            .AddSteps(
                _=>Then_the_return_value_should_be_an_URL_Ending_In_UserName_And_PC(userName,pc)
            ).RunAsync();



    }
}