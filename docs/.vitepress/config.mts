import { defineConfig } from 'vitepress'

// 完整配置：以三哥名义
export default defineConfig({
  // 站点基本信息
  title: 'WorkBuddy 实战教学体系',
  titleTemplate: ':title · 宋三继 AI 落地',
  description: '把 WorkBuddy 蓝皮书 27 章重构为可对客户/学员讲、可自学、可复用的系列课程 —— 由宋三继整理',

  lang: 'zh-CN',
  cleanUrls: true,

  // 死链检查已关（VitePress 1.5 在 build 阶段默认会失败）
  ignoreDeadLinks: true,

  // 顶部导航 + 主题
  themeConfig: {
    siteTitle: 'WorkBuddy 教学',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '课纲总览',
        items: [
          { text: '总览', link: '/outline/' },
          { text: '第一篇 · 使用手册', link: '/outline/01-handbook' },
          { text: '第二篇 · 案例篇', link: '/outline/02-cases' },
          { text: '第三篇 · 进阶篇', link: '/outline/03-advanced' },
          { text: '第四篇 · 岗位行业', link: '/outline/04-roles' },
          { text: '附录', link: '/outline/05-appendix' }
        ]
      },
      {
        text: '教学样板',
        items: [
          { text: '⭐ 第 19 章 · AI 视频团队（样板）', link: '/teaching/19-video-team' },
          { text: '第 11 章 · 办公三件套', link: '/teaching/11-office' },
          { text: '第 15 章 · 资讯整合', link: '/teaching/15-news' },
          { text: '第 17 章 · 会议跟进', link: '/teaching/17-meeting' },
          { text: '第 22 章 · Skill 蒸馏', link: '/teaching/22-skill-distill' },
          { text: '第 24 章 · 多 Agent 系统设计', link: '/teaching/24-multi-agent' }
        ]
      },
      { text: '部署到 GitHub', link: '/deploy' }
    ],

    sidebar: {
      '/outline/': [
        {
          text: '课纲总览',
          items: [
            { text: '总览', link: '/outline/' }
          ]
        },
        {
          text: '四篇课纲',
          items: [
            { text: '第一篇 · 使用手册', link: '/outline/01-handbook' },
            { text: '第二篇 · 案例篇（核心）', link: '/outline/02-cases' },
            { text: '第三篇 · 进阶篇', link: '/outline/03-advanced' },
            { text: '第四篇 · 岗位行业', link: '/outline/04-roles' },
            { text: '附录', link: '/outline/05-appendix' }
          ]
        }
      ],
      '/teaching/': [
        {
          text: '教学样板',
          items: [
            { text: '⭐ 第 19 章 · AI 视频团队', link: '/teaching/19-video-team' },
            { text: '第 11 章 · 办公三件套', link: '/teaching/11-office' },
            { text: '第 15 章 · 资讯整合', link: '/teaching/15-news' },
            { text: '第 17 章 · 会议跟进', link: '/teaching/17-meeting' },
            { text: '第 22 章 · Skill 蒸馏', link: '/teaching/22-skill-distill' },
            { text: '第 24 章 · 多 Agent 系统设计', link: '/teaching/24-multi-agent' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ssj198807-maker/workbuddy-course' }
    ],

    footer: {
      message: '宋三继（Song Sanji）· AI 落地陪跑顾问 · 吴桐荟数字文化苏州有限公司',
      copyright: `Copyright © 2026 宋三继 · 内容基于 WorkBuddy 实战蓝皮书整理`
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },

    editLink: {
      pattern: 'https://github.com/ssj198807-maker/workbuddy-course/edit/main/docs/:path',
      text: '在 GitHub 上改进此页'
    }
  },

  head: [
    ['meta', { name: 'author', content: '宋三继 (Song Sanji)' }],
    ['meta', { name: 'keywords', content: 'WorkBuddy, AI 落地, 多 Agent, AI 教学, 宋三继, 吴桐荟' }],
    ['meta', { property: 'og:title', content: 'WorkBuddy 实战教学体系 · 宋三继' }],
    ['meta', { property: 'og:description', content: '把 WorkBuddy 蓝皮书 27 章重构为可对客户/学员讲、可自学、可复用的系列课程' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ]
})
