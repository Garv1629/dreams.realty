$workspace = "e:\dream reality"
$errFile = Join-Path $workspace "chrome_err.txt"
$outFile = Join-Path $workspace "chrome_out.txt"
$logFile = Join-Path $workspace "capture_ps_log.txt"

"Started capture at $(Get-Date)" | Out-File -FilePath $logFile -Encoding utf8

$artifactDir = "C:\Users\GARV\.gemini\antigravity-ide\brain\dc4ec441-7523-47b7-b4db-dc16df022115"
$profileDir = "C:\Users\GARV\.gemini\antigravity-ide\brain\dc4ec441-7523-47b7-b4db-dc16df022115\scratch\chrome_user"
if (-not (Test-Path $profileDir)) {
    New-Item -ItemType Directory -Force -Path $profileDir | Out-Null
}

$chromeExe = "C:\Program Files\Google\Chrome\Application\chrome.exe"
"Chrome exe: $chromeExe (exists: $(Test-Path $chromeExe))" | Out-File -FilePath $logFile -Append -Encoding utf8

$shots = @(
    @{ Name = "screenshot_1_top.png"; Url = "http://localhost:3000/#hero-section" },
    @{ Name = "screenshot_2_after_hero.png"; Url = "http://localhost:3000/#featured-properties-section" },
    @{ Name = "screenshot_3_middle.png"; Url = "http://localhost:3000/#property-discovery-section" },
    @{ Name = "screenshot_4_footer.png"; Url = "http://localhost:3000/#footer-section" }
)

foreach ($shot in $shots) {
    $outPath = Join-Path $artifactDir $shot.Name
    "Trying $($shot.Name) to $outPath..." | Out-File -FilePath $logFile -Append -Encoding utf8

    $argStr = "--headless=new --disable-gpu --no-sandbox --user-data-dir=`"$profileDir`" --window-size=1440,900 --screenshot=`"$outPath`" $($shot.Url)"
    
    $p = Start-Process -FilePath $chromeExe -ArgumentList $argStr -RedirectStandardError $errFile -RedirectStandardOutput $outFile -Wait -PassThru
    
    $exists = Test-Path $outPath
    "Done $($shot.Name). Exit code: $($p.ExitCode), exists: $exists" | Out-File -FilePath $logFile -Append -Encoding utf8
}

"Completed at $(Get-Date)" | Out-File -FilePath $logFile -Append -Encoding utf8
