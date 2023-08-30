cd src
cd syncPowershell
wt.exe new-tab -d . cmd /k "cd SyncPowershellTests  && dotnet watch test"; new-tab -d . cmd /k "SyncPowershell.sln"