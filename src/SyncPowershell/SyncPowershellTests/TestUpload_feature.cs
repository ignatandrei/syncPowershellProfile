
namespace SyncPowershellTests;
partial class TestUpload : FeatureFixture
{
    DataToBeSent? data;
    string? url;
    string userName = "Andrei";
    string pc = "TestPCAndrei";
    private async Task Given_NoPowershellProfile7_IsFound()
    {
        var en = Rock.Create<ISystem_Environment>();
        en.Methods().GetFolderPath(Arg.Any<Environment.SpecialFolder>()).Returns("");
        en.Properties().Getters().UserName().Returns(userName);
        en.Properties().Getters().MachineName().Returns(pc);

        var path = Rock.Create<ISystem_IO_Path>();
        path.Methods().Combine(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns("");
        var file = Rock.Create<ISystem_IO_File>();
        file.Methods().Exists(Arg.Any<string?>()).Returns(false);


        DataGatherer gatherer = new(en.Instance(), file.Instance(),path.Instance());
        data = await gatherer.GetData();
        en.Verify();
        path.Verify();
        file.Verify();
    }

    private async Task When_the_user_want_to_sent()
    {
        DataUpload dataUpload = new();
        dataUpload.data = data!;
        url=await dataUpload.Send();
    }

    private void Then_the_return_value_should_be_an_URL_Ending_In_UserName_And_PC(string UserName,string PC)
    {
        //Uri uri = new(url);
        var b= Uri.TryCreate(url,UriKind.Absolute, out var uri);
        Assert.True(b, $"uri {url} must be created");
        url.Should().Contain(UserName);
        url.Should().Contain(PC);
        url.Should().Contain($"{data.UserName}/{data.PC}");
        url.Should().EndWith($"{data.UserName}/{data.PC}");
    }

}
