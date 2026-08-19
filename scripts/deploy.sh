#!/bin/bash
# 一键部署 WorkBuddy 教学站点到 GitHub Pages
# 用法：./scripts/deploy.sh <github-username> [repo-name]

set -e

GITHUB_USER="${1:-ssj198807-maker}"
REPO_NAME="${2:-workbuddy-course}"
REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "🚀 部署 WorkBuddy 教学站点"
echo "   用户名: $GITHUB_USER"
echo "   仓库: $REPO_NAME"
echo "   URL: $REPO_URL"
echo ""

# 1. 检查是否已是 git 仓库
if [ ! -d ".git" ]; then
  echo "📁 初始化 git 仓库..."
  git init
  git add .
  git commit -m "feat: 初始化 WorkBuddy 教学站点"
  git branch -M main
  git remote add origin "$REPO_URL"
  echo "✅ git 初始化完成"
else
  echo "📁 git 仓库已存在"
  # 检查 remote
  if ! git remote get-url origin > /dev/null 2>&1; then
    git remote add origin "$REPO_URL"
  fi
  git add .
  if ! git diff --cached --quiet; then
    git commit -m "docs: 更新内容 $(date '+%Y-%m-%d %H:%M')"
  fi
fi

# 2. 推送
echo "📤 推送到 $REPO_URL ..."
git push -u origin main 2>&1 || git push origin main 2>&1

echo ""
echo "✅ 部署完成！"
echo ""
echo "📍 下一步："
echo "   1. 打开 https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
echo "   2. Source 选 'GitHub Actions'"
echo "   3. 等待 1-2 分钟"
echo "   4. 访问 https://${GITHUB_USER}.github.io/${REPO_NAME}/"
