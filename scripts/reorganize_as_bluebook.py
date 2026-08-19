#!/usr/bin/env python3
"""把课纲文件按章拆分成蓝皮书风格"""
import re
from pathlib import Path

ARCHIVE = Path("/Users/apple/Desktop/三哥-LLMWiki/workbuddy-course-site/_archive")
DOCS = Path("/Users/apple/Desktop/三哥-LLMWiki/workbuddy-course-site/docs")

# 篇 → 文件夹映射
PART_MAP = {
    "outline-old/01-handbook.md": ("第一篇 使用手册：先把 WorkBuddy 用起来", "outline-old/01-handbook.md", 1, 10),
    "outline-old/02-cases.md": ("第二篇 案例篇：从一项任务到一支 AI 团队", "outline-old/02-cases.md", 11, 21),
    "outline-old/03-advanced.md": ("第三篇 进阶篇：把案例变成自己的工作系统", "outline-old/03-advanced.md", 22, 25),
    "outline-old/04-roles.md": ("第四篇 岗位与行业落地", "outline-old/04-roles.md", 26, 27),
}

def split_chapters(content):
    """按 '## 第 N 章' 拆分成多段"""
    # 找到所有 ## 第 N 章 的位置
    pattern = re.compile(r'^## 第 (\d+) 章 · (.+)$', re.MULTILINE)
    matches = list(pattern.finditer(content))
    chapters = {}
    for i, m in enumerate(matches):
        num = int(m.group(1))
        title = m.group(2).strip()
        start = m.start()
        end = matches[i+1].start() if i+1 < len(matches) else len(content)
        chapter_content = content[start:end].rstrip()
        chapters[num] = (title, chapter_content)
    return chapters

def extract_intro(content):
    """提取本篇导读部分（## 第 N 章 之前的内容）"""
    # 找到第一个 "## 第 N 章" 的位置
    m = re.search(r'^## 第 \d+ 章', content, re.MULTILINE)
    if m:
        return content[:m.start()].rstrip()
    return content

# 处理每篇
for src_rel, (folder_name, src_file_rel, start_ch, end_ch) in PART_MAP.items():
    src_path = ARCHIVE / src_file_rel
    part_dir = DOCS / folder_name
    part_dir.mkdir(parents=True, exist_ok=True)

    content = src_path.read_text(encoding='utf-8')
    chapters = split_chapters(content)
    intro = extract_intro(content)

    # 写本篇导读
    intro_path = part_dir / "index.md"
    intro_path.write_text(intro, encoding='utf-8')
    print(f"✓ {folder_name}/index.md")

    # 写每章
    for num in range(start_ch, end_ch + 1):
        if num in chapters:
            title, ch_content = chapters[num]
            # 文件名格式：第 N 章 {title}.md
            fname = f"第 {num} 章 {title}.md"
            ch_path = part_dir / fname
            ch_path.write_text(ch_content, encoding='utf-8')
            print(f"  ✓ {fname}")
        else:
            print(f"  ✗ 第 {num} 章 不在 {src_file_rel}")

# 附录
print("\n附录...")
appendix_dir = DOCS / "附录"
appendix_dir.mkdir(exist_ok=True)
appendix_content = (ARCHIVE / "outline-old/05-appendix.md").read_text(encoding='utf-8')

# 拆附录：A 和 B
# 附录 A: 模板, 附录 B: 速查表
# 简单策略：按"## 附录 X" 分割
m = re.search(r'^## 附录 A', appendix_content, re.MULTILINE)
if m:
    intro = appendix_content[:m.start()].rstrip()
    rest = appendix_content[m.start():]
    # 找附录 B
    m2 = re.search(r'^## 附录 B', rest, re.MULTILINE)
    if m2:
        a_content = rest[:m2.start()].rstrip()
        b_content = rest[m2.start():].rstrip()
        # 找附录 C/D/E
        m3 = re.search(r'^## 附录 C', b_content, re.MULTILINE)
        if m3:
            b_only = b_content[:m3.start()].rstrip()
            rest_after_b = b_content[m3.start():]
            (appendix_dir / "index.md").write_text(intro, encoding='utf-8')
            (appendix_dir / "附录 A 常用指令模板.md").write_text(a_content, encoding='utf-8')
            (appendix_dir / "附录 B 场景速查表.md").write_text(b_only, encoding='utf-8')
            # 附录 C 讲师清单 + D FAQ + E 升级路径 合到"附录 C 讲师必备.md"
            (appendix_dir / "附录 C 讲师必备清单.md").write_text(rest_after_b, encoding='utf-8')
            print("  ✓ 附录 A/B/C/index.md")
        else:
            (appendix_dir / "index.md").write_text(intro, encoding='utf-8')
            (appendix_dir / "附录 A 常用指令模板.md").write_text(a_content, encoding='utf-8')
            (appendix_dir / "附录 B 场景速查表.md").write_text(b_content, encoding='utf-8')
            print("  ✓ 附录 A/B/index.md")
    else:
        (appendix_dir / "index.md").write_text(appendix_content, encoding='utf-8')
        print("  ✓ 附录 index.md")

# 教学样板
print("\n教学样板...")
teaching_dir = DOCS / "教学样板"
teaching_dir.mkdir(exist_ok=True)
teaching_map = {
    "teaching-old/11-office.md": "第 11 章 办公三件套.md",
    "teaching-old/15-news.md": "第 15 章 资讯整合.md",
    "teaching-old/17-meeting.md": "第 17 章 会议跟进.md",
    "teaching-old/19-video-team.md": "第 19 章 一句话召唤 AI 视频团队（样板）.md",
    "teaching-old/22-skill-distill.md": "第 22 章 Skill 蒸馏.md",
    "teaching-old/24-multi-agent.md": "第 24 章 多 Agent 系统设计.md",
}
for src_rel, dst_name in teaching_map.items():
    src = ARCHIVE / src_rel
    dst = teaching_dir / dst_name
    dst.write_text(src.read_text(encoding='utf-8'), encoding='utf-8')
    print(f"  ✓ {dst_name}")

# 首页 - 蓝皮书总览（用 outline/index.md 的内容）
print("\n首页...")
index_path = DOCS / "index.md"
index_content = (ARCHIVE / "outline-old/index.md").read_text(encoding='utf-8')
index_path.write_text(index_content, encoding='utf-8')
print(f"  ✓ index.md ({len(index_content)} 字节)")

# 部署说明
print("\n部署说明...")
deploy_path = DOCS / "deploy.md"
deploy_content = (ARCHIVE / "deploy-old.md").read_text(encoding='utf-8')
deploy_path.write_text(deploy_content, encoding='utf-8')
print(f"  ✓ deploy.md")

print("\n✅ 重组完成")
print(f"\n新文件结构：")
for p in sorted(DOCS.rglob("*.md")):
    rel = p.relative_to(DOCS)
    size = p.stat().st_size
    print(f"  {size:>6}  {rel}")
