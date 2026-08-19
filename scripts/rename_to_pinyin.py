#!/usr/bin/env python3
"""把中文文件名改成拼音/英文"""
import shutil
from pathlib import Path

DOCS = Path("/Users/apple/Desktop/三哥-LLMWiki/workbuddy-course-site/docs")

# 文件名映射
RENAME = {
    "outline/01-使用手册.md": "outline/01-handbook.md",
    "outline/02-案例篇.md": "outline/02-cases.md",
    "outline/03-进阶篇.md": "outline/03-advanced.md",
    "outline/04-岗位行业.md": "outline/04-roles.md",
    "outline/05-附录.md": "outline/05-appendix.md",
    "outline/index.md": "outline/index.md",  # 保持
    "teaching/11-办公三件套.md": "teaching/11-office.md",
    "teaching/15-资讯整合.md": "teaching/15-news.md",
    "teaching/17-会议跟进.md": "teaching/17-meeting.md",
    "teaching/19-AI视频团队.md": "teaching/19-video-team.md",
    "teaching/22-Skill蒸馏.md": "teaching/22-skill-distill.md",
    "teaching/24-多Agent系统设计.md": "teaching/24-multi-agent.md",
}

# 链接路径映射
LINK_REPLACE = {
    "/outline/01-使用手册": "/outline/01-handbook",
    "/outline/02-案例篇": "/outline/02-cases",
    "/outline/03-进阶篇": "/outline/03-advanced",
    "/outline/04-岗位行业": "/outline/04-roles",
    "/outline/05-附录": "/outline/05-appendix",
    "/teaching/11-办公三件套": "/teaching/11-office",
    "/teaching/15-资讯整合": "/teaching/15-news",
    "/teaching/17-会议跟进": "/teaching/17-meeting",
    "/teaching/19-AI视频团队": "/teaching/19-video-team",
    "/teaching/22-Skill蒸馏": "/teaching/22-skill-distill",
    "/teaching/24-多Agent系统设计": "/teaching/24-multi-agent",
}

# 1. 重命名文件
for old, new in RENAME.items():
    old_path = DOCS / old
    new_path = DOCS / new
    if old_path.exists() and old_path != new_path:
        if new_path.exists():
            new_path.unlink()
        shutil.move(str(old_path), str(new_path))
        print(f"📝 {old} → {new}")

# 2. 改所有文件里的链接
for md in DOCS.rglob("*.md"):
    text = md.read_text(encoding="utf-8")
    new_text = text
    for old, new in LINK_REPLACE.items():
        new_text = new_text.replace(old, new)
    if new_text != text:
        md.write_text(new_text, encoding="utf-8")
        print(f"🔗 更新链接: {md.relative_to(DOCS)}")

print("\n✅ 完成")
