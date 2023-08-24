namespace syncPowershellObjects;

public partial class StaticToInterface
{
    public Type GenerateInterfaceFromEnvironment() => typeof(Environment);

    public Type GenerateInterfaceFromFile() => typeof(File);

    public Type GenerateInterfaceFromPath()=> typeof(Path);


}
