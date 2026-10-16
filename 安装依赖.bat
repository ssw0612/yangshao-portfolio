@echo off
set "NODE_DIR=C:\Users\30489\.workbuddy\binaries\node\versions\22.22.2-6"
set "PATH=%NODE_DIR%;%PATH%"
set "npm_config_cache=E:\代码成品\.npm-cache"
set "TMP=E:\代码成品\.tmp"
set "TEMP=E:\代码成品\.tmp"
cd /d "E:\代码成品\网站项目\个人作品集"
npm install
if %errorlevel% neq 0 (
    echo Install failed. Copy error text above.
) else (
    echo Install OK. Run start-site.bat next.
)
pause
