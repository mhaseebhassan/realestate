$serverProcess = Start-Process -FilePath "node" -ArgumentList @("scripts/server.mjs") -PassThru
Start-Sleep -Seconds 2

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outDir = "C:\Users\muham\OneDrive\Desktop\dubai-luxury-broker\screenshots"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
}

$targets = @(
    @{ name = "home-desktop-1920.png"; url = "http://localhost:3333/"; w = 1920; h = 1080 },
    @{ name = "home-mobile-390.png"; url = "http://localhost:3333/"; w = 390; h = 844 },
    @{ name = "home-mobile-360.png"; url = "http://localhost:3333/"; w = 360; h = 780 },
    @{ name = "home-tablet-768.png"; url = "http://localhost:3333/"; w = 768; h = 1024 },
    @{ name = "properties-desktop-1920.png"; url = "http://localhost:3333/properties"; w = 1920; h = 1080 },
    @{ name = "properties-mobile-390.png"; url = "http://localhost:3333/properties"; w = 390; h = 844 },
    @{ name = "detail-desktop-1920.png"; url = "http://localhost:3333/properties/one-palm-beachfront-penthouse"; w = 1920; h = 1080 },
    @{ name = "detail-mobile-390.png"; url = "http://localhost:3333/properties/one-palm-beachfront-penthouse"; w = 390; h = 844 },
    @{ name = "offplan-desktop-1920.png"; url = "http://localhost:3333/off-plan"; w = 1920; h = 1080 },
    @{ name = "community-desktop-1920.png"; url = "http://localhost:3333/communities/palm-jumeirah"; w = 1920; h = 1080 },
    @{ name = "contact-desktop-1920.png"; url = "http://localhost:3333/contact"; w = 1920; h = 1080 }
)

foreach ($t in $targets) {
    $outFile = Join-Path $outDir $t.name
    Write-Host "Capturing $($t.name)..."
    Start-Process -FilePath $chrome -ArgumentList @(
        "--headless",
        "--screenshot=$outFile",
        "--window-size=$($t.w),$($t.h)",
        "--hide-scrollbars",
        $t.url
    ) -Wait
}

Stop-Process -Id $serverProcess.Id -Force
Write-Host "All screenshots captured successfully."
