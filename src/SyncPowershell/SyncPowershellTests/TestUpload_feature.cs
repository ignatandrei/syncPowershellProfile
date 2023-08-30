
namespace SyncPowershellTests;
partial class TestUpload : FeatureFixture
{
    DataToBeSent? data;
    string? url;
    string userName = "Andrei";
    string pc = "TestPCAndrei";
    private async Task Given_PowershellProfile7_IsFound_For_UserName_PC(string UserName,string PC)
    {
        var en = Rock.Create<ISystem_Environment>();
        en.Methods().GetFolderPath(Arg.Any<Environment.SpecialFolder>()).Returns("");
        en.Properties().Getters().UserName().Returns(UserName);
        en.Properties().Getters().MachineName().Returns(PC);

        var path = Rock.Create<ISystem_IO_Path>();
        path.Methods().Combine(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns("");
        var file = Rock.Create<ISystem_IO_File>();
        file.Methods().Exists(Arg.Any<string?>()).Returns(true);
        file.Methods()
            .ReadAllTextAsync(Arg.Any<string>(), CancellationToken.None)
            .Returns(Task.FromResult("text"));

        DataGatherer gatherer = new(en.Instance(), file.Instance(), path.Instance());
        data = await gatherer.GetData();
        data.Should().NotBeNull();
        en.Verify();
        path.Verify();
        file.Verify();
    }
    private async Task Given_NoPowershellProfile7_IsFound_For_UserName_PC(string UserName, string PC)
    {
        var en = Rock.Create<ISystem_Environment>();
        en.Methods().GetFolderPath(Arg.Any<Environment.SpecialFolder>()).Returns("");
        en.Properties().Getters().UserName().Returns(UserName);
        en.Properties().Getters().MachineName().Returns(PC);

        var path = Rock.Create<ISystem_IO_Path>();
        path.Methods().Combine(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns("");
        var file = Rock.Create<ISystem_IO_File>();
        file.Methods().Exists(Arg.Any<string?>()).Returns(false);


        DataGatherer gatherer = new(en.Instance(), file.Instance(),path.Instance());
        data = await gatherer.GetData();
        data.Should().NotBeNull();
        en.Verify();
        path.Verify();
        file.Verify();
    } 

    private async Task When_the_data_is_sent()
    {
        var api = Rock.Create<IPowershellAPI>();
        api.Methods().SendData(Arg.Any<DataToBeSent>())
            .Callback(a => new ReceiveData("https://azure.powershellsync.com").SaveData(a));
            ;
        DataUpload dataUpload = new(api.Instance());
        dataUpload.data = data!;
        url=await dataUpload.Send();
        api.Verify();

    }

    private void Then_the_return_value_should_be_an_URL_Ending_In_UserName_PC(string UserName,string PC)
    {
        var b= Uri.TryCreate(url,UriKind.Absolute, out var uri);
        b.Should().BeTrue($"uri {url} must be created");
        url.Should().NotBeNullOrWhiteSpace("must have an url");
        url.Should().Contain(UserName);
        url.Should().Contain(PC);
        url.Should().Contain($"{UserName}/{PC}");
        url.Should().EndWith($"{UserName}/{PC}");
    }
    private void Then_the_return_value_should_be_an_URL_Ending_In_UserName_PC_With_ID(string UserName, string PC)
    {
        var b = Uri.TryCreate(url, UriKind.Absolute, out var uri);
        b.Should().BeTrue($"uri {url} must be created");
        url.Should().NotBeNullOrWhiteSpace("must have an url");
        url.Should().Contain(UserName);
        url.Should().Contain(PC);
        url.Should().Contain($"{UserName}/{PC}");
        url.Should().Contain($"{UserName}/{PC}/{data!.PowershellNumber}");

    }
}
