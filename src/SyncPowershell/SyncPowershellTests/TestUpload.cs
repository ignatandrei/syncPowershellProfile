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
    public void TestOnePC()
    {
        Runner.RunScenario(
            Given_the_info_about_default_powershell_profile, //scenario steps
            When_the_user_want_to_sent,
            Then_the_login_operation_should_be_successful
            );
    }
}