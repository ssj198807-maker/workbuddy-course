import { defineConfig } from 'vitepress'

// 配置：以宋三继名义的 WorkBuddy 实战教学体系
// 风格：仿照 WorkBuddy 蓝皮书（workbuddy.homes/bluebook）结构
export default defineConfig({
  // 站点基本信息
  title: 'WorkBuddy 实战教学体系',
  titleTemplate: ':title · 宋三继',
  description: '把 WorkBuddy 蓝皮书 27 章重构为可对客户/学员讲、可自学、可复用的系列课程 —— 由宋三继整理',

  lang: 'zh-CN',
  cleanUrls: true,
  ignoreDeadLinks: true,

  // 顶部导航（仿蓝皮书：5 项简洁）
  themeConfig: {
    siteTitle: 'WorkBuddy 教学',

    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/' },
      { text: '教学样板', link: '/教学样板/' },
      { text: '部署到 GitHub Pages', link: '/deploy' }
    ],

    // 侧边栏：全部章节按"篇→章"全展开（蓝皮书风格）
    sidebar: {
      '/第一篇 使用手册：先把 WorkBuddy 用起来/': [
        {
          text: '第一篇 · 使用手册',
          items: [
            { text: '本篇导读', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/' },
            { text: '第 1 章 · 初识 WorkBuddy', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%201%20章%20初识%20WorkBuddy' },
            { text: '第 2 章 · 下载、安装、登录与更新', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%202%20章%20下载、安装、登录与更新' },
            { text: '第 3 章 · 主界面、任务与工作区', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%203%20章%20主界面、任务与工作区' },
            { text: '第 4 章 · 快速完成第一个任务', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%204%20章%20快速完成第一个%20WorkBuddy%20任务' },
            { text: '第 5 章 · 加载一个真正用得上的 Skill', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%205%20章%20加载一个真正用得上的%20Skill' },
            { text: '第 6 章 · 专家和专家团', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%206%20章%20专家和专家团' },
            { text: '第 7 章 · 使用连接器', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%207%20章%20使用连接器' },
            { text: '第 8 章 · 接入小程序与 IM 助理', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%208%20章%20接入小程序与%20IM%20助理' },
            { text: '第 9 章 · 接入外部 API', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%209%20章%20接入外部%20API' },
            { text: '第 10 章 · 自动化任务', link: '/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%2010%20章%20自动化任务' }
          ]
        },
        {
          text: '第二篇 · 案例篇',
          items: [
            { text: '本篇导读', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/' },
            { text: '第 11 章 · 办公三件套', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2011%20章%20办公三件套：Word、Excel、PPT' },
            { text: '第 12 章 · 整理桌面文件', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2012%20章%20整理桌面文件这些小事' },
            { text: '第 13 章 · 远程控制电脑', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2013%20章%20远程控制你的电脑' },
            { text: '第 14 章 · 生活助手', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2014%20章%20生活助手的价值' },
            { text: '第 15 章 · 资讯整合', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2015%20章%20资讯整合：把信息流变成每日通知' },
            { text: '第 16 章 · 知识管理', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2016%20章%20收藏不是知识管理' },
            { text: '第 17 章 · 会议跟进', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2017%20章%20会议结束不是终点' },
            { text: '第 18 章 · 投资分析', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2018%20章%20把投资分析变成你的日常' },
            { text: '⭐ 第 19 章 · AI 视频团队', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2019%20章%20一句话召唤%20AI%20视频团队%20★★★%20本篇重点' },
            { text: '第 20 章 · 自媒体闭环', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2020%20章%20自媒体不只是靠努力' },
            { text: '第 21 章 · GEO 专家', link: '/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2021%20章%20WorkBuddy%20做%20GEO%20专家' }
          ]
        },
        {
          text: '第三篇 · 进阶篇',
          items: [
            { text: '本篇导读', link: '/第三篇%20进阶篇：把案例变成自己的工作系统/' },
            { text: '第 22 章 · Skill 蒸馏', link: '/第三篇%20进阶篇：把案例变成自己的工作系统/第%2022%20章%20打造%20Skill：将书和视频蒸馏为可执行%20Skill' },
            { text: '第 23 章 · 用法补充', link: '/第三篇%20进阶篇：把案例变成自己的工作系统/第%2023%20章%20其他用法补充：WorkBuddy%20实操案例集' },
            { text: '第 24 章 · 多 Agent 系统设计', link: '/第三篇%20进阶篇：把案例变成自己的工作系统/第%2024%20章%20多%20Agent%20系统设计%20★★★' },
            { text: '第 25 章 · 自动化可靠性', link: '/第三篇%20进阶篇：把案例变成自己的工作系统/第%2025%20章%20自动化工作流的可靠性' }
          ]
        },
        {
          text: '第四篇 · 岗位与行业',
          items: [
            { text: '本篇导读', link: '/第四篇%20岗位与行业落地/' },
            { text: '第 26 章 · 岗位路线图', link: '/第四篇%20岗位与行业落地/第%2026%20章%20岗位路线图：不同岗位如何把%20WorkBuddy%20用深' },
            { text: '第 27 章 · 行业路线图', link: '/第四篇%20岗位与行业落地/第%2027%20章%20行业路线图：从通用能力到行业工作流' }
          ]
        },
        {
          text: '附录',
          items: [
            { text: '附录导读', link: '/附录/' },
            { text: '附录 A · 常用指令模板', link: '/附录/附录%20A%20常用指令模板' },
            { text: '附录 B · 场景速查表', link: '/附录/附录%20B%20场景速查表' },
            { text: '附录 C · 讲师必备清单', link: '/附录/附录%20C%20讲师必备清单' }
          ]
        }
      ],
      '/教学样板/': [
        {
          text: '教学样板',
          items: [
            { text: '⭐ 第 19 章 · AI 视频团队（完整教学）', link: '/教学样板/第%2019%20章%20一句话召唤%20AI%20视频团队（样板）' },
            { text: '第 11 章 · 办公三件套', link: '/教学样板/第%2011%20章%20办公三件套' },
            { text: '第 15 章 · 资讯整合', link: '/教学样板/第%2015%20章%20资讯整合' },
            { text: '第 17 章 · 会议跟进', link: '/教学样板/第%2017%20章%20会议跟进' },
            { text: '第 22 章 · Skill 蒸馏', link: '/教学样板/第%2022%20章%20Skill%20蒸馏' },
            { text: '第 24 章 · 多 Agent 系统设计', link: '/教学样板/第%2024%20章%20多%20Agent%20系统设计' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ssj198807-maker/workbuddy-course' }
    ],

    // 底部信息（以宋三继名义）
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

  // 主题色：保留宋三继的 #1F497D 蓝
  head: [
    ['meta', { name: 'author', content: '宋三继 (Song Sanji)' }],
    ['meta', { name: 'theme-color', content: '#1F497D' }],
    ['meta', { name: 'keywords', content: 'WorkBuddy, AI 落地, 多 Agent, AI 教学, 宋三继, 吴桐荟' }],
    ['meta', { property: 'og:title', content: 'WorkBuddy 实战教学体系 · 宋三继' }],
    ['meta', { property: 'og:description', content: '把 WorkBuddy 蓝皮书 27 章重构为可对客户/学员讲、可自学、可复用的系列课程' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ]
})
