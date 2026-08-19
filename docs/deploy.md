---
title: 部署到 GitHub Pages
description: 3 步上线 WorkBuddy 教学站点，永久免费
---

# 部署到 GitHub Pages

> 本教学站基于 [VitePress](https://vitepress.dev/) 构建，**纯静态**。
> 部署到 GitHub Pages 永久免费，自带 HTTPS、自定义域名支持。

---

## 前置条件

- 一个 GitHub 账号
- 本机已装 [Git](https://git-scm.com/)
- 本机已装 [Node.js](https://nodejs.org/) 18+

---

## 3 步上线

### Step 1: 在 GitHub 新建仓库

1. 打开 https://github.com/new
2. 仓库名建议：`workbuddy-course`
3. 选 **Public**（Public 才能用免费 Pages）
4. **不要**勾选 "Add a README file"
5. 点 "Create repository"
6. 记下仓库地址，比如 `https://github.com/ssj198807-maker/workbuddy-course`

### Step 2: 推送本地代码

在项目根目录执行：

```bash
# 初始化 git
cd workbuddy-course-site
git init
git add .
git commit -m "feat: 初始化 WorkBuddy 教学站点"

# 关联远程仓库（替换成你的仓库地址）
git remote add origin https://github.com/ssj198807-maker/workbuddy-course.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### Step 3: 配置 GitHub Pages

1. 打开仓库的 **Settings** → **Pages**
2. **Source** 选：**GitHub Actions**
3. 系统会提示创建一个 workflow 文件，或者你直接用下面的模板

#### 创建 workflow 文件

在仓库根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy VitePress site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build with VitePress
        run: pnpm run docs:build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

把这个文件 commit 上去：

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: 添加 GitHub Pages 部署 workflow"
git push
```

### 等待部署完成

- 推送后，GitHub Actions 会自动跑 build
- 1-2 分钟后，访问：`https://<你的用户名>.github.io/workbuddy-course/`
- 看到首页就成功了 🎉

---

## 自定义域名（可选）

### 步骤

1. 买一个域名（阿里云 / Cloudflare / Namecheap 都行）
2. 在域名 DNS 添加 CNAME 记录：
   ```
   CNAME  www  <你的用户名>.github.io
   ```
3. 在 GitHub 仓库 **Settings** → **Pages** → **Custom domain** 填你的域名
4. 勾选 **Enforce HTTPS**

### 多用户/多账号

如果是组织页面，URL 是 `https://<org>.github.io/workbuddy-course/`。

---

## 本地预览

### 开发模式（带热更新）

```bash
# 在项目根目录
cd workbuddy-course-site
npm run docs:dev
```

打开 http://localhost:5173 ，文件改了自动刷新。

### 生产构建（验证部署效果）

```bash
npm run docs:build    # 构建到 docs/.vitepress/dist
npm run docs:preview  # 本地预览构建产物
```

### 排错技巧

- **页面 404**：检查 `docs/.vitepress/config.mts` 里的 `srcDir` 和 `cleanUrls` 配置
- **样式错乱**：删掉 `docs/.vitepress/cache` 和 `node_modules/.vite`，重新 `npm run docs:dev`
- **链接失效**：VitePress 用的是相对路径，注意 `/` 开头是绝对路径

---

## 日常更新流程

```bash
# 1. 改完文件后
git add .
git commit -m "docs: 补充第 X 章内容"
git push

# 2. 1-2 分钟后，线上自动更新
```

---

## 进阶：定制主题

### 改主色

`docs/.vitepress/theme/index.ts`（需要创建）：

```ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme
}
```

`docs/.vitepress/theme/custom.css`：

```css
:root {
  --vp-c-brand-1: #1F497D;
  --vp-c-brand-2: #4FB8E6;
  --vp-c-brand-3: #E8F4FB;
}
```

### 加自定义组件

参考 [VitePress 官方文档](https://vitepress.dev/guide/custom-theme)。

---

## 故障排查

| 问题 | 解法 |
|---|---|
| GitHub Actions 失败 | 看 Actions 标签页的错误日志 |
| 页面 404 | 检查 Pages 设置里的 Source 是 GitHub Actions |
| 自定义域名不生效 | DNS 解析没生效（最长 24h） |
| 资源加载慢 | 考虑启用 Cloudflare CDN |

---

## 完成后你的站点长啥样

```
https://<你的用户名>.github.io/workbuddy-course/
```

- ✅ 首页有 hero + features
- ✅ 顶部导航 4 个入口
- ✅ 侧边栏按篇展开
- ✅ 自带搜索（Cmd+K）
- ✅ 暗色模式（右上角切换）
- ✅ 移动端适配
- ✅ SEO 友好（每页都有 title/description）
- ✅ 编辑链接直达 GitHub

---

## 联系

- 作者：宋三继
- 邮箱：`your-email@example.com`（占位，请替换为你的真实邮箱）
- 微信：`your-wechat`（占位）

> 如果你部署过程中遇到问题，可以开 [GitHub Issue](https://github.com/ssj198807-maker/workbuddy-course/issues)。
