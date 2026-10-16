@echo off
set "NODE_DIR=C:\Users\30489\.workbuddy\binaries\node\versions\22.22.2-6"
set "PATH=%NODE_DIR%;%PATH%"
set "TMP=E:\代码成品\.tmp"
set "TEMP=E:\代码成品\.tmp"
cd /d "E:\代码成品\网站项目\个人作品集"
echo Opening site at http://localhost:4321/
npm run dev
pause
