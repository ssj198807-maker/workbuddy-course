# WorkBuddy 实战教学体系

> **作者**：宋三继（Song Sanji）· AI 落地陪跑顾问
> **项目**：把 WorkBuddy 蓝皮书 27 章重构为可对客户/学员讲、可自学、可复用的系列课程
> **部署**：基于 VitePress 1.5 + GitHub Pages

---

## 📊 项目数据

- **文档数**：12 份（6 课纲 + 6 教学）
- **总字数**：约 7.5 万字
- **总课时**：22 小时
- **覆盖章节**：蓝皮书 27 章 + 2 附录全覆盖
- **教学样板**：1 份完整（21KB）+ 5 份简版
- **关联笔记**：基于一线 AI 落地陪跑经验沉淀

---

## 🚀 快速开始

### 本地预览

```bash
# 1. 安装依赖（需要 Node 18+）
npm install

# 2. 启动开发服务器（带热更新）
npm run docs:dev
# 打开 http://localhost:5173

# 3. 构建生产版本
npm run docs:build
# 产物在 docs/.vitepress/dist/

# 4. 本地预览生产版本
npm run docs:preview
```

### 项目结构

```
workbuddy-course-site/
├── docs/                              # 文档源文件
│   ├── index.md                       # 首页
│   ├── deploy.md                      # 部署说明
│   ├── outline/                       # 课纲
│   │   ├── index.md                   # 总览
│   │   ├── 01-handbook.md
│   │   ├── 02-cases.md
│   │   ├── 03-advanced.md
│   │   ├── 04-roles.md
│   │   └── 05-appendix.md
│   ├── teaching/                      # 教学文档
│   │   ├── 19-video-team.md           # ⭐ 样板章节
│   │   ├── 11-office.md
│   │   ├── 15-news.md
│   │   ├── 17-meeting.md
│   │   ├── 22-skill-distill.md
│   │   └── 24-multi-agent.md
│   ├── .vitepress/
│   │   └── config.mts                 # VitePress 配置（重要）
│   └── public/
│       └── logo.svg
├── .github/
│   └── workflows/
│       └── deploy.yml                 # 自动部署到 GitHub Pages
├── package.json
├── README.md                          # 你正在读
└── .gitignore
```

---

## 📦 部署到 GitHub Pages

### Step 1: 推送代码到 GitHub

```bash
# 初始化（首次推送）
git init
git add .
git commit -m "feat: 初始化 WorkBuddy 教学站点"
git branch -M main
git remote add origin https://github.com/ssj198807-maker/workbuddy-course.git
git push -u origin main
```

### Step 2: 配置 Pages

1. 打开 GitHub 仓库 → **Settings** → **Pages**
2. **Source** 选：**GitHub Actions**
3. 等待 Actions 跑完（约 1-2 分钟）
4. 访问：`https://ssj198807-maker.github.io/workbuddy-course/`

### Step 3: 每次更新

```bash
git add .
git commit -m "docs: 更新第 X 章"
git push
# 1-2 分钟后线上自动更新
```

---

## 🛠 自定义配置

### 改仓库地址

如果你的 GitHub 用户名不是 `ssj198807-maker`，全局替换：
- `package.json` - 仓库 URL
- `docs/.vitepress/config.mts` - `socialLinks` 和 `editLink.pattern`
- `README.md` - 部署说明
- `.github/workflows/deploy.yml` - 如果有自定义 URL

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

### 加新章节

```bash
# 1. 在 docs/teaching/ 或 docs/outline/ 新建 .md
# 2. 在 docs/.vitepress/config.mts 的 nav 和 sidebar 添加链接
# 3. 提交推送，1-2 分钟自动部署
```

---

## 🔗 外部资源

- [WorkBuddy 官网](https://workbuddy.homes)
- [WorkBuddy 蓝皮书原文](https://workbuddy.homes/bluebook/)
- [VitePress 官方文档](https://vitepress.dev/)
- [GitHub Pages 文档](https://docs.github.com/pages)

---

## 📝 维护说明

### 更新频率
- **小版本**：每 3 个月（修复错别字 / 补充案例）
- **大版本**：每 6 个月（重写章节 / 调整课时）
- **特别更新**：WorkBuddy 大版本发布时同步

### 升级原则
- ✅ **保持总览稳定**——课时/路径不轻易改
- ✅ **保持核心样板稳定**——第 19 章不轻易改
- ⚠️ **细节可调**——案例/演示/任务说明可随技术演进
- ❌ **不要轻易删章节**——核心样板保持稳定

---

## 📋 故障排查

| 问题 | 解法 |
|---|---|
| `npm install` 卡住 | 关闭代理：`env -u HTTP_PROXY npm install` |
| `npm run docs:dev` 找不到 config | 确认是 `vitepress dev docs`（带 docs 参数） |
| `npm run docs:build` 报死链 | 已在 config 里关 `ignoreDeadLinks: true` |
| GitHub Pages 404 | Settings → Pages → Source 选 GitHub Actions |
| 自定义域名不生效 | DNS 解析需要 24h，耐心等 |

---

## 📜 许可

本课程基于 [WorkBuddy 实战蓝皮书](https://workbuddy.homes/bluebook/) 整理，**以宋三继名义发布**。
内容仅供学习使用，引用请注明来源。

---

**作者**：宋三继（Song Sanji）
**公司**：吴桐荟数字文化苏州有限公司
**地区**：江苏苏州
**专业**：AI 落地陪跑顾问 / 工业清洗剂 19 年 / 知识库实践者
