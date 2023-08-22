namespace SyncPowershellTests;
partial class TestUpload : FeatureFixture
{
    DataToBeSent data;
    string url;
    private void Given_the_info_about_default_powershell_profile()
    {
        DataGatherer gatherer = new();
        data = gatherer.GetData();
    }

    private void When_the_user_want_to_sent()
    {
        DataUpload dataUpload = new();
        dataUpload.data = data;
        url=dataUpload.Send();
    }

    private void Then_the_return_value_should_be_an_URL()
    {
        //Uri uri = new(url);
        var b= Uri.TryCreate(url,UriKind.Absolute, out var uri);
        Assert.True(b, "uri must be created");
    }

}
