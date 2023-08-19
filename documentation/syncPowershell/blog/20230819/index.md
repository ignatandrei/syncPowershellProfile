# Start project

Because I am moving from PC to PC and I use powershell ( ok , windows terminal ) I decide to have the $profile synchronized easy 
What I need is :

<!--truncate-->

1. Must upload $profile from local to a site easy  ( preferably powershell code )
2. Must download $profile from site to local easy ( preferably powershell code )
3. I can inspire from others profile - and improve mine

-----

Now let's start an investigation to see 
1. if someone else have been doing this work
2. where a profile is located  

For 1 , apparently more people have started - e.g. https://github.com/tobyscales/ps-gitprofile , https://xkln.net/blog/securely-synchronizing-powershell-profiles-across-multiple-computers/  , https://compiledexperience.com/blog/posts/powershell-profile - but I cannot find an easy solution to store and retrieve profiles.

For 2 , oh - there are many $profile . Let's  read the documentation 
https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles

For powershell 5
```
PS C:\Users\ignat> $PSVersionTable. PSVersion

Major  Minor  Build  Revision
-----  -----  -----  --------
5      1      19041  3031


PS C:\Users\ignat> $PROFILE | Select-Object *


AllUsersAllHosts       : C:\Windows\System32\WindowsPowerShell\v1.0\profile.ps1
AllUsersCurrentHost    : C:\Windows\System32\WindowsPowerShell\v1.0\Microsoft.PowerShell_profile.ps1
CurrentUserAllHosts    : C:\Users\ignat\Documents\WindowsPowerShell\profile.ps1
CurrentUserCurrentHost : C:\Users\ignat\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
Length                 : 75
```


For powershell 7
```
PS C:\Users\ignat> $PSVersionTable. PSVersion

Major  Minor  Patch  PreReleaseLabel BuildLabel
-----  -----  -----  --------------- ----------
7      3      6

PS C:\Users\ignat> $PROFILE | Select-Object *

AllUsersAllHosts       : C:\Program Files\WindowsApps\Microsoft.PowerShell_7.3.6.0_x64__8wekyb3d8bbwe\profile.ps1
AllUsersCurrentHost    : C:\Program Files\WindowsApps\Microsoft.PowerShell_7.3.6.0_x64__8wekyb3d8bbwe\Microsoft.PowerSh
                         ell_profile.ps1
CurrentUserAllHosts    : C:\Users\ignat\Documents\PowerShell\profile.ps1
CurrentUserCurrentHost : C:\Users\ignat\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
Length                 : 68


PS C:\Users\ignat>

```

For Powershell ISE
```
PS C:\Users\ignat> $PSVersionTable. PSVersion
$PROFILE | Select-Object *

Major  Minor  Build  Revision
-----  -----  -----  --------
5      1      19041  3031    

AllUsersAllHosts       : C:\Windows\System32\WindowsPowerShell\v1.0\profile.ps1
AllUsersCurrentHost    : C:\Windows\System32\WindowsPowerShell\v1.0\Microsoft.PowerShellISE_profile.ps1
CurrentUserAllHosts    : C:\Users\ignat\Documents\WindowsPowerShell\profile.ps1
CurrentUserCurrentHost : C:\Users\ignat\Documents\WindowsPowerShell\Microsoft.PowerShellISE_profile.ps1
Length                 : 78

```

So I am ready to start the application .