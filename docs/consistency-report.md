# 人机一致性报告（AI 评分 vs 人工参考标注）

> 公开数据：[`data/evaluation-results.csv`](../data/evaluation-results.csv) ｜ 总判断数：180 ｜ Pilot 数据冻结：2026-08
>
> 本文档为统计与分歧摘要层；完整原文、候选译文、人机评分理由与最终复核依据见：[完整分歧案例复核记录](./diff-review.md)

---

## 〇、指标解读

### Cohen's Kappa（排除运气后的一致性）

裸一致率（Po）会包含"瞎蒙也能蒙对"的成分：当大多数条目都是 Neutral 时，两个评分者闭着眼全选 Neutral 也能碰出很高的一致率。Kappa 将随机一致率（Pe）剔除：

> κ = (Po - Pe) / (1 - Pe)

| Kappa 区间  | 信度解读 | 对审校 Agent 意味着 |
| --------- | ------ | --------------- |
| 0.81-1.00 | 几乎完全一致 | 该维度可高度自动化（AI 评分 + 低抽检率） |
| 0.61-0.80 | 良好 | AI 评分可用，需人工抽检兜底 |
| 0.41-0.60 | 中等 | AI 初评 + 人工复核 |
| 0.21-0.40 | 弱 | AI 仅供参考，以人工为主 |
| 0.00-0.20 | 几乎无信度 | 框架定义需回炉，AI 不可用 |

**注意**：Kappa 对类别极度偏态（如 Neutral 占 90%+）的数据会"过度悲观"，即随机一致率被高估、Kappa 被压低。此时应参考 Gwet's AC1。

### Gwet's AC1（偏态修正版）

AC1 用不同的方式估计随机一致（假设评分者随机乱分而非按习惯选 Neutral），对偏态数据更鲁棒。**AC1 ≥ 0.80 即视为高度一致**。

---

## 一、逐维度一致性（180 次人机双评）

| 维度 | 条数 | 一致率 | Cohen's Kappa | Kappa 解读 | Gwet's AC1 | 非 Neutral（人工） | 说明 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Accuracy | 45 | 97.8% | 0.656 | 良好 | 0.977 | 1 | Neutral 占 98%，Kappa 受偏态压缩，以 AC1 为准 |
| Audience Appropriateness | 45 | 100.0% | 1.000 | 几乎完全一致 | 1.000 | 4 | Neutral 占 91%，Kappa 受偏态压缩，以 AC1 为准 |
| Locale Conventions | 45 | 97.8% | 0.897 | 几乎完全一致 | 0.976 | 5 | Neutral 占 89% |
| Terminology | 45 | 84.4% | 0.464 | 中等 | 0.828 | 9 | Neutral 占 80% |
| **合计** | 180 | **95.0%** | **0.734** | 良好 | **0.947** | 19 | 四维度合并 |

## 二、当前人机分歧摘要（9 条）

| score_id | 维度 | 人工 | AI | 分歧方向 | 核心分歧 |
| --- | --- | --- | --- | --- | --- |
| S006 | Accuracy | Neutral | Minor | AI 偏严 | AI 将营销句式的修辞性增译归入 Accuracy 命题偏移而扣分；框架规定修辞性增译不扣分 |
| S031 | Locale Conventions | Neutral | Minor | 框架歧义 | 中英混排空格不在 Locale 定义范围（数字/货币/日期/单位格式）内，AI 越界扣分 |
| S061 | Terminology | Minor | Neutral | AI 偏宽 | claim 规范译法判断缺少可靠外部依据（官方为"补偿申请"） |
| S065 | Terminology | Minor | Neutral | AI 偏宽 | claim 相关译法断言与 PayPal 简体官方文档不符 |
| S069 | Terminology | Minor | Neutral | AI 偏宽 | AI 声称官方将 claim 译为"索赔"，简体官方无此译法 |
| S121 | Terminology | Minor | Neutral | AI 偏宽 | "踢出"被断言为标准译法，缺中文协作产品界面依据（惯用"移出/移除"） |
| S125 | Terminology | Major | Minor | AI 偏宽 | 单字"踢"作按钮标签需停顿辨析，偏离程度被低估 |
| S129 | Terminology | Major | Minor | AI 偏宽 | 单字"踢"按钮标签强烈关联游戏娱乐场景，严重度被低估 |
| S133 | Terminology | Neutral | Minor | AI 偏严 | 以加密钱包"助记词"惯例质疑通用支付语境译法，断言超出本 UI 场景 |

> 本报告仅展示分歧摘要。完整原文、候选译文、人机评分理由及最终复核依据见：[完整分歧案例复核记录](./diff-review.md)

## 三、已闭环分歧：人工参考标注经外部证据修订（3 条）

> 改判原则：人工参考标注同样接受证据复核与修订；修订必须基于外部证据（产品官方文档/行业界面惯例），不迁就任一方判断。

| score_id | 维度 | 改判前人工 | AI | 改判后人工 | 修订依据 |
| --- | --- | --- | --- | --- | --- |
| S077 | Terminology | Neutral | Minor | **Minor** | 外部核实成立：PayPal 官方用"发放退款"、支付宝用"发起退款"、微信用"申请退款"，"发送退款"非行业惯用。人工漏检原因：与"发起退款"仅一字之差，首评扫读时误认为规范 |
| S081 | Terminology | Neutral | Minor | **Minor** | 外部核实成立：PayPal 官方"发放退款"（c2/cshelp/article/如何发放退款-help101）、支付宝"发起退款"（opendocs.alipay.com/open/02ekfs）、微信"申请退款"（pay.weixin.qq.com/doc/v3/merchant/4013071001） |
| S084 | Audience Appropriateness | Neutral | Minor | **Minor** | 外部核实成立："发送退款"在中文支付语境属非地道表达，带明显直译腔；三家平台官方用法同上 |

> 注：`data/evaluation-results.csv` 中上述三行的 `human_severity` 为最终人工参考标注（Minor）；原始人工首评（Neutral）的完整过程记录见 diff-review.md 对应案例。

## 四、校准期输出一致性检查记录（已归档）

Prompt 校准期间曾记录 2 条 notes 与 severity 字段矛盾（S070 Accuracy、S084 Audience Appropriateness），该问题由输出顺序补丁（先写 notes、再依据 notes 反填 severity）修复；S084 后经外部证据改判，不再构成矛盾。此处仅作历史归档，不计入当前分歧。
