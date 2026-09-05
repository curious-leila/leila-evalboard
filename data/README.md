# 公开评测数据

`evaluation-results.csv` 是用于公开复核核心评测结论的整理版数据。

## 数据口径

- **一行 = 一个「候选译文 × 质量维度」判断**，共 180 行；
- 94 条为语料池（营销文案 / 客服话术 / 界面文案三类，已完成构建、风险标注与来源记录）；
- 其中 **15 条进入 Pilot 试跑**：15 条语料 × 3 款模型（GPT-4o / Claude / Gemini）候选译文 = 45 份译文；
- 45 份译文 × 4 个质量维度 = **180 次人机双评**（人工 vs Qwen 独立评分）。

## 字段说明

| 字段 | 说明 |
| --- | --- |
| `score_id` | 判断编号（S001-S180） |
| `pilot_id` | 语料编号（PILOT-001 ~ PILOT-015） |
| `corpus_id` | 语料池编号（MKT / CS / UI 前缀） |
| `content_type` | 内容类型：营销文案 / 客服话术 / 界面文案 |
| `risk_level` | 译前标注的内容风险：High / Medium / Low |
| `tool_anon` | 候选译文匿名编号 A/B/C（每行随机对应真实模型，映射表不公开） |
| `dimension` | 质量维度：Terminology / Accuracy / Locale Conventions / Audience Appropriateness |
| `human_severity` | **最终人工参考标注**（部分经分歧复核与外部证据修订，见 `docs/consistency-report.md` 与 `docs/diff-review.md`） |
| `human_notes` | 人工完整判定理由（含三问路径与依据出处） |
| `ai_severity` | Qwen 评分结果 |
| `ai_notes` | Qwen 完整判定理由 |
| `correction_note` | 自动修正记录（本 Pilot 为 manual 模式，均为空） |
| `status` | ok / ok-but-inconsistent（校准期输出一致性标记，已归档） |

## 说明

1. `human_severity` 是当前方法下的参考标注，经过分歧复核与外部证据修订，**不应称为绝对 Ground Truth**；
2. 不包含 `source_text` / `translation_text`（复核核心统计不需要全文，减少原始内容再分发）；
3. 不包含 `ai_raw`（模型原始输出体）；
4. 不包含任何 API Key 或本机信息。

## 复算核对

| 指标 | 期望值 | 复算方式 |
| --- | --- | --- |
| 总行数 | 180 | 按行计数 |
| 整体直接一致率 | 95.0%（171/180） | `human_severity == ai_severity` 计数 |
| Terminology × High | 11/18（61%） | 按 `dimension × risk_level` 聚合 |
| Accuracy × High | 17/18（94%） | 同上 |
| Locale × Medium | 17/18（94%） | 同上 |
| 其余 9 格 | 18/18 或 9/9（100%） | 同上 |
