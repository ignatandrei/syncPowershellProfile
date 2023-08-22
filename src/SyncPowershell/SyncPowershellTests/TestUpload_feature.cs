using syncPowershellObjects;

namespace SyncPowershellTests;
partial class TestUpload : FeatureFixture
{
    DataToBeSent? data;
    string? url;
    private async Task Given_the_info_about_default_powershell_profile()
    {
        DataGatherer gatherer = new();
        data = await gatherer.GetData();
    }

    private async Task When_the_user_want_to_sent()
    {
        DataUpload dataUpload = new();
        dataUpload.data = data!;
        url=await dataUpload.Send();
    }

    private void Then_the_return_value_should_be_an_URL()
    {
        //Uri uri = new(url);
        var b= Uri.TryCreate(url,UriKind.Absolute, out var uri);
        Assert.True(b, $"uri {url} must be created");
    }

}
