# FancyAI Lab Website Guide

这是 `FancyAI Lab` 的 Jekyll 站点说明文档，主要用于帮助后续维护者快速找到每个版块对应的文件，并按分区自定义内容。

项目基于 Jekyll 构建，当前已经改造成实验室主页风格，包含以下主要页面：

- `Home`
- `Team`
- `Publication`
- `Topics`
- `Gallery`

---

## 1. 项目目录总览

最常用的几个目录如下：

- `_config.yml`：站点总配置
- `_data/menus.yml`：顶部导航和底部导航
- `_layouts/`：页面布局模板
- `_team/`：团队成员数据
- `_topics/`：研究方向数据
- `index.md`：首页正文文案
- `team.md`：团队页顶部介绍文案
- `topics.md`：研究方向总览页文案
- `publication.md`：Publication 页顶部简介与页面元信息
- `gallery.md`：团队合照/活动展示页内容
- `_includes/publication/`：Publication 分区内容
- `images/`：图片资源
- `_sass/`：页面样式和组件样式
- `assets/css/style.scss`：全站主样式入口
- `assets/js/scripts.js`：轮播等前端交互脚本

---

## 2. 本地运行方式

### 2.1 安装依赖

在项目根目录执行：

```bash
bundle install
```

### 2.2 本地预览

Windows 下如果 Ruby 不在环境变量里，可用：

```powershell
$env:Path = "C:\Ruby33-x64\bin;" + $env:Path; bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

启动后浏览器访问：

```text
http://127.0.0.1:4000
```

### 2.3 构建静态文件

```bash
bundle exec jekyll build
```

生成结果在：

```text
_site/
```

---

## 3. 站点基础信息如何修改

站点整体信息主要在 `_config.yml` 中配置。

你可以在这里修改：

- 站点名称
- logo 路径
- favicon 路径
- Topics 首页展示数量

当前重点字段：

- `title`：站点名称
- `logo.desktop`：桌面端大 logo
- `logo.mobile`：移动端 logo
- `logo.favicon`：浏览器标签页图标
- `home.featured_topics_limit`：首页展示多少个 topics

如果替换 logo：

1. 把新图片放到 `images/logo/`
2. 更新 `_config.yml` 中对应路径

---

## 4. 导航栏如何修改

导航栏在：

```text
_data/menus.yml
```

分为两部分：

- `main`：右上角主导航
- `footer`：底部导航

你可以修改每个条目的：

- `name`：显示名称
- `url`：页面链接
- `weight`：排序，数字越小越靠前

例如新增一个页面时：

1. 先创建对应页面文件
2. 再到 `_data/menus.yml` 中增加导航项

---

## 5. 首页 Home 如何修改

首页相关文件主要有两个：

- `index.md`：首页主文案
- `_layouts/home.html`：首页结构

### 5.1 修改首页主标题和简介

编辑：

```text
index.md
```

这里控制：

- 首页大标题
- 首页简介文字

### 5.2 修改首页轮播图

编辑：

```text
_layouts/home.html
```

在轮播区域中，每一张图都包含：

- `img src`：图片路径
- `alt`：图片说明
- `span`：小标题
- `strong`：大标题说明

如果要替换轮播图片：
<img width="1109" height="628" alt="image" src="https://github.com/user-attachments/assets/17fd0a8f-88a8-4070-9e94-66198e1fc5bd" />

1. 把图片放入 `images/`
2. 修改 `_layouts/home.html` 中轮播对应的 `src`

### 5.3 修改轮播自动播放和切换逻辑

编辑：

```text
assets/js/scripts.js
```

这里可以调整：

- 自动播放间隔
- 左右切换逻辑
- 圆点切换逻辑

### 5.4 修改首页 Research Areas 区块

Research Areas 的内容来源于：

```text
_topics/
```

首页会自动读取 `_topics/` 中的条目并展示前几个卡片。

每个 topic 文件都可以设置：

- `title`
- `short_name`
- `slug`
- `summary`
- `weight`

其中：

- `weight` 决定排序
- `summary` 会在首页和 topics 总览页显示

### 5.5 修改首页样式

首页样式在：

```text
_sass/pages/_page-home.scss
```

这里可以调：

- hero 区背景
- 轮播遮罩颜色和透明度
- topics 卡片样式
- 快速导航区样式

---

## 6. Team 页面如何修改

团队页相关文件：

- `team.md`：团队页顶部介绍文案
- `_layouts/teams.html`：团队页结构
- `_team/`：成员数据

### 6.1 修改 Team 页顶部介绍

编辑：

```text
team.md
```

可修改：

- 页面标题
- 页面简介

### 6.2 修改成员信息

每位成员对应 `_team/` 目录中的一个 Markdown 文件。

常用字段包括：

- `title`：姓名
- `image`：头像路径
- `jobtitle`：职位
- `personal_url`：个人主页链接
- `group`：成员分组
- `research_focus`：研究方向
- `summary`：简介
- `current_position`：毕业去向（适合 alumni）
- `weight`：排序

### 6.3 成员分组规则

当前 Team 页面分成三组，对应 `group` 字段：

- `leadership`
- `current-members`
- `graduated-alumni`

你只要把成员文件里的 `group` 改成这三个值之一，就会自动显示到对应板块。

### 6.4 修改 Team 页面布局

编辑：

```text
_layouts/teams.html
```

这里可以修改：

- 三个分区的标题
- 每个成员卡片的显示结构
- 是否显示研究方向/毕业去向

### 6.5 修改 Team 页面样式

编辑：

```text
_sass/pages/_page-teams.scss
```

可调整：

- 成员卡片背景
- 卡片圆角与阴影
- 字体颜色
- 三个分组的间距

---

## 7. Topics 页面如何修改

研究方向相关文件：

- `topics.md`：topics 总览页
- `_topics/`：每个 research area 的独立内容
- `_layouts/topic.html`：topic 子页面布局

### 7.1 修改 Topics 总览页说明

编辑：

```text
topics.md
```

这里控制：

- Topics 页顶部简介
- 四个 research areas 的总览展示方式

### 7.2 修改某个 research area

例如：

- `_topics/cv.md`
- `_topics/nlp.md`
- `_topics/multi-agent.md`
- `_topics/llm.md`

每个文件中可修改：

- 标题
- 简称
- 摘要
- 正文介绍
- 顺序

### 7.3 新增 research area

步骤如下：

1. 在 `_topics/` 下新增一个 `.md` 文件
2. 补充 front matter，例如 `title`、`short_name`、`slug`、`summary`、`weight`
3. 写正文内容
4. 首页和 topics 页会自动读取它

### 7.4 修改 Topics 页面样式

编辑：

```text
_sass/pages/_page-topics.scss
```

这里同时也包含了 gallery 和 publication 相关样式。

---

## 8. Publication 页面如何修改


相关文件如下：

- `publication.md`：页面基础信息与顶部简介
- `_layouts/publication.html`：Publication 页面专用布局
- `_includes/publication/publications.md`：论文与合作成果内容
- `_includes/publication/patents.md`：专利内容
- `_includes/publication/presentations.md`：报告与演讲内容
- `_sass/pages/_page-topics.scss`：Publication 页面样式
- `assets/js/scripts.js`：Publication 页面交互逻辑

### 8.1 修改 Publication 页面标题和顶部简介

编辑：

```text
publication.md
```

这里通常只保留：

- `title`
- `description`
- `permalink`
- 顶部简介正文

如果只是想改页面顶部那一小段说明文字，直接改这里即可。

### 8.2 修改论文列表

编辑：

```text
_includes/publication/publications.md
```

这里放的是：

- Selected Publications
- Tutorials
- More Research Collaboration Work

推荐继续用 Markdown 列表维护，每条论文可包含：

- 作者
- 标题
- 会议 / 期刊 / 年份
- `paper` / `code` / `poster` / `video` 等链接

### 8.3 修改专利列表

编辑：

```text
_includes/publication/patents.md
```

这里单独维护专利条目。适合写：

- 专利名称
- 专利号
- 中英文名称

### 8.4 修改报告 / 演讲列表

编辑：

```text
_includes/publication/presentations.md
```

这里建议按年份分组维护，例如：

- `## 2025`
- `## 2024`
- `## 2023`

每条内容可以包含：

- 演讲标题
- 场合 / 课程 / 讲座信息
- `pdf` / `demo` / `中文` / `En` 等链接

### 8.5 Publication 页面布局说明

布局文件在：

```text
_layouts/publication.html
```

这个文件负责：

- 页面标题显示
- 顶部简介显示
- 三个大分区卡片布局
- 快速跳转按钮
- 返回顶部按钮

如果你想调整页面结构，比如：

- 把 `Publications / Patents / Presentations` 顺序改掉
- 新增第四个分区
- 调整按钮位置

优先改这个 layout。

### 8.6 页面内快速跳转

现在 `Publication` 页面顶部有 3 个快速跳转入口：

- `Publications`
- `Patents`
- `Presentations`

它们对应 `_layouts/publication.html` 里的锚点链接，例如：

- `#publications`
- `#patents`
- `#presentations`

如果以后新增分区，要记得同时做两件事：

1. 在 layout 中给新分区增加 `id`
2. 在顶部跳转区增加对应链接

### 8.7 返回顶部按钮

当前 `Publication` 页面右下角有一个：

- `↑ Top`

相关文件：

- `_layouts/publication.html`：按钮本体
- `assets/js/scripts.js`：滚动显示逻辑
- `_sass/pages/_page-topics.scss`：按钮样式

如果你想调整它：

- 更早显示：改 `scripts.js` 里的滚动阈值
- 更大 / 更小：改 `_page-topics.scss`
- 改文字：改 `_layouts/publication.html`

### 8.8 Publication 页面样式

目前 Publication 页面样式也放在：

```text
_sass/pages/_page-topics.scss
```

当前主要样式块包括：

- `.publication-page-intro`
- `.publication-jump-nav`
- `.publication-jump-link`
- `.publication-section-card`
- `.publication-back-to-top`


### 8.9 维护建议

后续维护 Publication 页面时，推荐遵循以下规则：

1. 页面结构改 `_layouts/publication.html`
2. 内容改 `_includes/publication/*.md`
3. 样式改 `_sass/pages/_page-topics.scss`
4. 交互改 `assets/js/scripts.js`


---

## 9. Gallery 页面如何修改

文件位置：

- `gallery.md`：图片展示内容
- `_sass/pages/_page-topics.scss`：gallery 样式

### 9.1 替换 Gallery 图片

当前 gallery 使用的是占位图片。要替换时：

1. 先把真实团队合照或活动照片放入 `images/`
2. 修改 `gallery.md` 中各个 `img src`
3. 同时更新 `alt` 文本和下方说明文案

### 9.2 当前 Gallery 结构

现在页面包含：

- 顶部介绍文字
- 大图展示区
- 两张说明型特色图
- 下方瀑布流图片墙

### 9.3 如果想做成更真实的实验室相册

可以继续扩展为：

- 按年份分类
- 按活动分类
- 点击图片放大
- 使用更多不同尺寸图片

---

## 10. Logo、Favicon、图片资源如何管理

### 10.1 Logo

目录：

```text
images/logo/
```

当前约定：

- `1.png`：大 logo
- `2.png`：小 logo / favicon

### 10.2 其他图片

常用目录：

- `images/`：通用图片
- `images/team/`：成员头像
- `images/logo/`：logo 与 favicon

建议命名清晰一些，例如：

- `group-photo-2026.jpg`
- `seminar-visit-01.jpg`
- `prof-zhang.jpg`

---

## 11. 配色和样式如何修改

### 11.1 全站主色

编辑：

```text
assets/css/style.scss
```

最重要的变量有：

- `$primary`
- `$primary-dark`
- `$secondary`
- `$black`
- `$white-offset`
- `$steel`

这些变量会影响全站的大部分颜色。

### 11.2 顶部导航样式

编辑：

- `_sass/components/_header.scss`
- `_sass/components/_main-menu.scss`
- `_sass/components/_main-menu-mobile.scss`

### 11.3 按钮样式

编辑：

```text
_sass/components/_buttons.scss
```

### 11.4 页脚样式

编辑：

```text
_sass/components/_footer.scss
```

---

## 12. 页面布局文件说明

常用布局文件：

- `_layouts/default.html`：全站基础布局
- `_layouts/home.html`：首页布局
- `_layouts/teams.html`：团队页布局
- `_layouts/topic.html`：单个 topic 页面布局
- `_layouts/publication.html`：Publication 页面布局
- `_layouts/page.html`：普通页面布局

如果你想改页面结构，优先看对应 layout 文件；如果你只是想改文案，优先看 `.md` 页面文件。

---

## 13. 新增一个普通页面的方法

例如想新增一个 `News` 页面：

### 步骤 1：创建页面

新建 `news.md`

```markdown
---
title: News
layout: page
permalink: "/news/"
---

Here is the news content.
```

### 步骤 2：加入导航

修改 `_data/menus.yml`，新增：

```yml
- name: "News"
  url: "/news/"
  weight: 6
```

---

## 14. 常见修改入口速查

### 修改站点名称

- `_config.yml`

### 修改顶部导航

- `_data/menus.yml`

### 修改首页文案

- `index.md`

### 修改首页轮播图

- `_layouts/home.html`

### 修改团队成员

- `_team/*.md`

### 修改 research areas

- `_topics/*.md`

### 修改 topics 总览页

- `topics.md`

### 修改 publication 页面顶部简介

- `publication.md`

### 修改 publication 论文内容

- `_includes/publication/publications.md`

### 修改 publication 专利内容

- `_includes/publication/patents.md`

### 修改 publication 报告内容

- `_includes/publication/presentations.md`

### 修改 publication 布局与跳转按钮

- `_layouts/publication.html`
- `assets/js/scripts.js`

### 修改 gallery 页面

- `gallery.md`

### 修改 logo / favicon

- `images/logo/`
- `_config.yml`

### 修改全站配色

- `assets/css/style.scss`

---

## 15. 当前站点内容自定义建议

如果后续要正式上线，建议优先替换以下内容：

1. `Team` 页面中的占位成员信息
2. `Publication` 页面中的真实论文、专利和报告内容
3. `Gallery` 页面中的占位图片
4. 首页轮播图中的占位图片
5. Topics 页中的研究方向摘要和正文
6. 页脚和社交链接信息

---

## 16. 维护建议

- 图片尽量统一尺寸或统一裁切风格
- 成员头像建议统一长宽比
- topic 命名和 short name 尽量保持一致风格
- Publication 页面尽量继续按分区文件维护，不要把复杂 HTML 直接混进 Markdown 正文
- 每次改完重要内容后执行一次：

```bash
bundle exec jekyll build
```

- 如果浏览器样式没有变化，先尝试强制刷新：

```text
Ctrl + F5
```

---

## 17. 联系后续维护者时建议说明的内容

如果将来把项目交给其他同学维护，建议一并说明：

- Ruby 和 Jekyll 的本地运行方式
- logo、轮播图、gallery 图片存放位置
- `_team/` 与 `_topics/` 的数据组织规则
- Publication 页面已经拆成 layout + includes 结构
- 哪些页面还是占位内容

---

## 18. 当前项目适合的后续扩展

后面如果继续升级，可以考虑：

- 增加 `News` 页面
- 增加真实论文数据结构
- 为 Gallery 增加点击放大
- 为 Team 增加成员分类标签
- 为 Topics 增加更多图文内容
- 接入 Google Analytics 或其他统计工具

---
