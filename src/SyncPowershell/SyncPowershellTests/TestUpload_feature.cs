﻿
namespace SyncPowershellTests;
partial class TestUploadAndRetrieve : FeatureFixture
{
    DataToBeSent? data;
    string? url;
    string userName = "Andrei";
    string pc = "TestPCAndrei";
    private async Task Given_PowershellProfile7_IsFound_For_UserName_PC(string UserName,string PC,string value)
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
            .Returns(Task.FromResult(value));

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
        var saveData = Rock.Create<ISaveData>();
        saveData.Methods().SaveData(Arg.Any<IDataToBeSent>())
            .Callback(it=>Task.FromResult(true));

        var api = Rock.Create<IPowershellAPI>();
        api.Methods().SendData(Arg.Any<IDataToBeSent>())
            .Callback(a => new ReceiveData(saveData.Instance(),"https://azure.powershellsync.com").SaveData(a));
            ; 
        DataUpload dataUpload = new(api.Instance());
        dataUpload.data = data!;
        url=await dataUpload.Send();
        api.Verify();

    }
    private async Task Then_Can_Retrieve_Data(string userName, string pc, int pwshNumber,string retValue)
    {
        var retrieve=Rock.Create<IRetrieveData>();
        retrieve.Methods().RetrieveData(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<int>() )
            .Callback((u, pc, p) => Task.FromResult("text"));

        var api = Rock.Create<IPowershellAPI>();
        api.Methods().GetData(userName, pc, pwshNumber)
            .Callback((userName, pc, pwshNumber) => 
                    new RetrieveData(retrieve.Instance(), userName, pc).GetPwsh(pwshNumber));
        var data = await api.Instance().GetData(userName, pc, pwshNumber);
        data.Should().Be(retValue);
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
