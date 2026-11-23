# 慧教智研 · AI 自习室 / 互动课堂 / 互动白板 制作（DSH 技能包）

> AI 老师边画边讲 · AI 同学随时讨论 · 学生边学边做，复习、笔记、讨论、书架全配齐。

这是一个 **DSH 组合包（bundle）+ 技能包**：装上之后，模型在做"AI 自习室 / 互动课堂 / 互动白板"时
会自动按这套方法干活——不是写一段文案，而是产出**能双击上课的单文件 HTML** 与**可编辑的课时 JSON**。

## 装什么

| 组件 | 说明 |
|---|---|
| `cordis.patch.yml` | 插入一行技能提供者 `hjzy-ai-studyroom` |
| `lib/index.js` | 注册技能（正文在 `assets/skill.md`） |
| `assets/` | 方法正文、课时模板、检查点写法、版式对照、引擎接口 |

## 怎么装

**方式一：插件中心/市场安装（推荐）**

```
pnpm add hjzy-ai-studyroom-dsh
# 或在 DSH 插件管理里安装：hjzy-ai-studyroom-dsh@1.2.1
```

**方式二：本地目录安装**

```
# 在 DSH 插件管理里选"本地路径"，指向本包解压后的目录
```

**方式三：只装技能（不用组合包）**

把 `assets/skill.md` 连同 `assets/templates`、`assets/references` 放到
`<DSH_HOME>/profiles/<profile>/skills/hjzy-ai-studyroom/`，并把 `skill.md` 改名为 `SKILL.md`。

## 装完怎么用

直接说："用 AI 自习室讲清'为什么利率下降时债券价格上升'，12 分钟，带一个检查点。"

模型会按 `SKILL.md` 的流程产出：课时脚本（语义块 + 版式）→ 排版 → 播放 → 自检清单。

## 许可

教学与教研使用许可，见 `LICENSE`。二次分发请保留作者与来源。
