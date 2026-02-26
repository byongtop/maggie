@echo off
:: 设置字符集，防止中文乱码
chcp 65001 >nul
cls

echo ============================================
echo   ROSE IS ROSE - 自动部署脚本
echo ============================================

:: 1. 检查是否有文件变动
git status -s

:: 2. 确认是否继续
echo.
echo [1/3] 正在添加所有更改...
git add .

:: 3. 自动生成包含当前时间的提交信息
set commit_time=%date:~0,10% %time:~0,8%
set commit_msg="Update: Archive & Visual optimization (%commit_time%)"

echo [2/3] 正在提交更改: %commit_msg%
git commit -m %commit_msg%

:: 4. 推送到远程仓库
echo [3/3] 正在推送到 GitHub...
git push

echo.
echo ============================================
echo   ✨ 上传完成！项目已同步至远程仓库。
echo ============================================
pause