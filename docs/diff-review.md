# 人机分歧审查清单（DIFF Review）

> 共 9 条当前分歧 + 3 条已闭环（采纳AI）| 每条含：判定结果（一目了然）→ 原文译文 → 双方理由 → 依据

## 判定结果汇总


| score_id | 维度                       | 人工      | AI      | 判定            | 一句话依据                                                        |
| -------- | ------------------------ | ------- | ------- | ------------- | ------------------------------------------------------------ |
| S006     | Accuracy                 | Neutral | Minor   | **A⁠I⁠有⁠误** |
| S031     | Locale Conventions       | Neutral | Minor   | **框⁠架⁠歧⁠义** |
| S061     | Terminology              | Minor   | Neutral | **A⁠I⁠有⁠误** |
| S065     | Terminology              | Minor   | Neutral | **A⁠I⁠有⁠误** |
| S069     | Terminology              | Minor   | Neutral | **A⁠I⁠有⁠误** |
| S077     | Terminology              | Minor   | Minor   | **采⁠纳⁠A⁠I**（已⁠闭⁠环） | 外部核实成立：PayPal 官方"发放退款"（help101）、支付宝"发起退款"（02ekfs）、微信支付"申请退款"（4013071001），"发送退款"非行业惯用；人工首评与"发起退款"仅一字之差扫读漏检。 |
| S081     | Terminology              | Minor   | Minor   | **采⁠纳⁠A⁠I**（已⁠闭⁠环） | 外部核实成立：PayPal 官方"发放退款"（paypal.com/c2/cshelp/article/如何发放退款-help101）、支付宝"发起退款"（opendocs.alipay.com/open/02ekfs）、微信"申请退款"（doc/v3/merchant/4013071001），"发送退款"非行业惯用。 |
| S084     | Audience Appropriateness | Minor   | Minor   | **采⁠纳⁠A⁠I**（已⁠闭⁠环） | 外部核实成立："发送退款"在中文支付语境带明显直译腔；PayPal 用"发放退款"、支付宝用"发起退款"、微信用"申请退款"，人工漏检原因为与"发起退款"一字之差。 |
| S121     | Terminology              | Minor   | Neutral | **A⁠I⁠有⁠误** |
| S125     | Terminology              | Major   | Minor   | **A⁠I⁠有⁠误** |
| S129     | Terminology              | Major   | Minor   | **A⁠I⁠有⁠误** |
| S133     | Terminology              | Neutral | Minor   | **A⁠I⁠有⁠误** |


**统计：采纳AI 3 条（已闭环） | AI有误 8 条 | 框架歧义 1 条**

---



## S006 | Accuracy | 人工=Neutral vs AI=Minor（AI判定有误）



### ✅ 判定结果：AI有误

> AI违反自己的规则：它自己标注为修辞性增译，而框架规定修辞性增译Accuracy不扣分。维持人工Neutral。

- **corpus_id**: MKT-011 | tool: C
- **内容类型**: 营销文案

**原文（English）**：

> nudge plans your week so you don't have to - Don't create. Type plain text — AI turns it into real tasks with deadlines. - Don't plan your day. One click, AI schedules around sleep, meals, and fixed events. - Don't let yourself off. Lock $5 on a deadline. Finish and prove it — you pay nothing. - Don't switch apps. Capture and reschedule from Slack & Discord. - Don't get lost. One workspace. $5 first month, then $20/mo. Solo-built by a 20yo engineering student in Tokyo.

**译文（中文）**：

> nudge 为你规划整周，无需你亲自动手。

- 不用创建任务。只需输入纯文本——AI 会将其转换为带截止日期的真实任务。
- 不用规划每天的日程。只需一键，AI 就会围绕睡眠、用餐和固定日程自动安排时间。
- 不要轻易放过自己。为截止日期锁定 5 美元。按时完成并提交证明——你无需支付任何费用。
- 不用来回切换应用。可直接从 Slack 和 Discord 捕捉任务并重新安排日程。
- 不会迷失方向。一个统一的工作空间。首月 5 美元，之后每月 20 美元。

由一位居住在东京的 20 岁工程专业学生独立开发。

**人工判定理由**：

原文核心命题全部保留：自动规划、文本转任务、一键排期、锁定$5押金、Slack/Discord集成、单一工作区、定价$5/$20、面向独立开发者。译文采用"不用""不要""不会"句式，比"拒绝X"更贴近原文"Don't"的指令语气。"不要轻易放过自己"中的"轻易"为中文习语表达，不改变"锁定押金＝自我约束"的命题。
三问路径：Q1，读者无需停顿 → 定级 Neutral。

**AI 判定理由**：

原文命题清单：①nudge 规划整周；②无需创建任务，输入纯文本由 AI 转为带截止日期的任务；③无需手动规划日程，AI 根据睡眠、用餐和固定事件一键安排；④通过锁定 5 美元押金激励履约，完成并证明后免付；⑤支持从 Slack 和 Discord 捕获及重排任务，无需切换应用；⑥单一工作空间；⑦价格为首月 5 美元，之后每月 20 美元；⑧由东京一位 20 岁工程专业学生独立开发。译文表现判定：命题①至⑧的核心信息均完整传达。"Don't let yourself off" 译为"不要轻易放过自己"属于修辞性增译（语气渲染），原文该短语在此语境下意为"不要对自己懈怠/降低标准"，译文增加了"轻易"这一程度修饰词，虽未改变"自我约束+押金机制"的核心命题，但引入了原文不存在的程度限定，属细微增添。三问路径：Q1 读者可感知"轻易"为译者添加的语气词，但不影响对押金规则的理解，无需停顿辨析；Q2 用户不会因"轻易"二字做出错误付费或操作决策，无实际代价。维度交叉备注："engineering student" 译为"工程专业学生"在中文语境中通常指"工程学科"而非特指"工程学学位"，存在轻微语义窄化，但替换测试通过（读者仍能正确理解开发者背景为理工科在校生），归 Terminology 维度，Accuracy 不扣分。结论：Minor。

---



## S031 | Locale Conventions | 人工=Neutral vs AI=Minor（框架歧义）



### ✅ 判定结果：框架歧义

> 中英混排空格不在v2框架Locale定义范围（数字/货币/日期/单位格式）内，AI越界扣分。处置：本轮维持Neutral；中英混排空格列为框架扩展候选项，全量启动前二选一决策——纳入Locale则同步更新锚点与AI Prompt，不纳入则在Prompt中显式禁止越界扣分。

- **corpus_id**: MKT-004 | tool: B
- **内容类型**: 营销文案

**原文（English）**：

> Generate 3D character with 8K textures and AI motion capture. V2Fun is an AI 3D creation platform built with self-developed 3D modeling and AI motion capture models. It helps creators turn images prompts and videos into high-quality 3D models enhance assets with advanced 8K texture generation and create motion-ready characters without switching between separate modeling texturing and mocap tools.

**译文（中文）**：

> 生成具有 8K 纹理和 AI 动作捕捉的 3D 角色。V2Fun 是一个 AI 3D 创作平台，基于自研的 3D 建模和 AI动作捕捉模型构建。它帮助创作者将图像、提示词和视频转化为高质量 3D 模型，通过先进的 8K纹理生成技术增强资产，并创建可直接用于动画的角色，无需在独立的建模、纹理和动作捕捉工具之间来回切换。

**人工判定理由**：

本条为3D技术描述文案，不含货币符号、日期格式、千分位分隔等locale敏感元素。三问路径：Q1判定，读者无需停顿、无感知异样，直接定级Neutral。结论：Neutral，无Locale问题。

**AI 判定理由**：

格式元素核查：译文涉及数字与单位组合（8K）、中英文混排间距。偏离说明：译文中'AI动作捕捉'和'8K纹理生成技术'两处，英文/数字与紧邻汉字之间缺失空格，不符合简体中文排版惯例（如《中文文案排版指北》及主流科技媒体规范），导致视觉拥挤；而首句'8K 纹理'及'AI 3D'等处空格使用正确，存在译文内部排版不一致。三问路径：Q1判定，读者阅读时可感知排版不自然、节奏受阻，但无需停顿辨析语义，理解不受影响，定级Minor；Q2不适用。维度交叉备注：译文内部空格使用不统一（有/无混用）虽属一致性问题，但单条译文中存在的缺失空格本身即构成Locale维度的排版瑕疵，故在本维度扣分。结论：Minor，排版格式瑕疵。

---



## S061 | Terminology | 人工=Minor vs AI=Neutral（AI判定有误）



### ✅ 判定结果：AI有误

> AI编造官方译法：声称PayPal官方claim=申诉，实际官方=补偿申请（paypal.com/c2/security/resolve-disputes已核实），且申诉与繁中dispute译名糾紛申訴撞车。维持人工Minor。

- **corpus_id**: CS-002 | tool: A
- **内容类型**: 客服话术

**原文（English）**：

> If you're unable to settle the dispute you can escalate it to a claim. To escalate a dispute we often require that at least 7 days have passed since the payment date. By escalating a dispute to a claim you're asking PayPal to investigate and decide the outcome. A dispute will automatically close after 20 days unless it's been escalated. Closed disputes cannot be reopened or escalated to a claim.

**译文（中文）**：

> 如果您无法解决争议，可以将其升级为申诉。要升级争议，我们通常要求自付款日期起至少已过去 7 天。将争议升级为申诉后，您是在请求 PayPal 对该问题进行调查并决定处理结果。除非争议已升级，否则争议将在 20 天后自动关闭。已关闭的争议无法重新打开或升级为申诉。

**人工判定理由**：

术语问题：claim译为申诉。正确译法：PayPal简体中文官方帮助中心将claim译为补偿申请（依据：paypal.com/c2/security/resolve-disputes），申诉非claim的官方译法；且申诉一词与PayPal繁体中文dispute译名糾紛申訴存在用词关联，构成术语撞车，可能造成流程阶段混淆。替换测试：熟悉PayPal官方界面的读者读到升级为申诉无法直接对应官方的补偿申请操作，需停顿辨析，测试不通过。三问路径：Q1判定，需停顿辨析；Q2判定，无实际代价，本应定Major；紧邻修正三条件满足，严重度上限Minor。维度交叉备注：术语误译仅改变名称，解释句维持流程理解，Accuracy维度不扣分。结论：Minor。类型标注：行业术语误译（非官方译法且术语撞车）。

**AI 判定理由**：

术语核查：原文核心术语 dispute、claim、escalate 在译文中分别对应"争议"、"申诉"、"升级"。经核对 PayPal 中国大陆官方帮助中心及交易保障流程文档，dispute 阶段官方译名为"争议"，claim 阶段官方译名为"申诉"，escalate 动作官方译名为"升级"。译文用词与官方简体中文术语体系完全一致，且全文五次出现均保持统一，无语义边界偏移或撞车风险。结论：术语准确、一致且符合行业惯例，无术语问题。

---



## S065 | Terminology | 人工=Minor vs AI=Neutral（AI判定有误）



### ✅ 判定结果：AI有误

> AI编造官方译法：声称PayPal简体中文官方claim译法为申诉、动词搭配为升级为申诉，实际官方为补偿申请（paypal.com/c2/security/resolve-disputes已核实），申诉与繁中dispute译名糾紛申訴撞车。维持人工Minor。

- **corpus_id**: CS-002 | tool: B
- **内容类型**: 客服话术

**原文（English）**：

> If you're unable to settle the dispute you can escalate it to a claim. To escalate a dispute we often require that at least 7 days have passed since the payment date. By escalating a dispute to a claim you're asking PayPal to investigate and decide the outcome. A dispute will automatically close after 20 days unless it's been escalated. Closed disputes cannot be reopened or escalated to a claim.

**译文（中文）**：

> 如果您无法解决争议，可以将其升级为申诉。要将争议升级，通常需要自付款之日起已过去至少 7 天。通过将争议升级为申诉，即表示您要求 PayPal 进行调查并做出裁决。除非已升级，否则争议将在 20 天后自动关闭。已关闭的争议无法重新发起，也无法升级为申诉。

**人工判定理由**：

术语问题：claim译为申诉。正确译法：PayPal简体中文官方帮助中心将claim译为补偿申请（依据：paypal.com/c2/security/resolve-disputes），申诉非官方译法；且申诉与PayPal繁体中文dispute译名糾紛申訴存在用词关联，构成术语撞车。替换测试：熟悉官方界面的读者需停顿辨析，测试不通过。三问路径：Q1判定，需停顿辨析；Q2判定，无实际代价，本应定Major；紧邻修正三条件满足，严重度上限Minor。维度交叉备注：术语误译仅改变名称，解释句维持流程理解，Accuracy维度不扣分。结论：Minor。类型标注：行业术语误译（非官方译法且术语撞车）。

**AI 判定理由**：

术语核查：原文核心术语 dispute、claim、escalate 在译文中分别对应“争议”“申诉”“升级”。经核对 PayPal 简体中文官方帮助文档，该流程的标准译法确为“争议→申诉”，动词搭配为“升级为申诉”，译文用词与官方惯例完全一致。一致性检查：单条译文内“争议”出现 4 次、“申诉”出现 3 次、“升级”出现 3 次，前后译法统一，无变体。语义边界：“裁决”对应 decide the outcome，准确传达平台介入决定的含义，未扩大或缩小语义；“重新发起”对应 reopened，在客服话术语境下符合中文表达习惯且无歧义。三问路径：Q1 判定，术语准确且符合行业惯例，阅读流畅无需停顿；Q2 不适用。结论：未发现术语偏离或错误。类型标注：无术语问题。

---



## S069 | Terminology | 人工=Minor vs AI=Neutral（AI判定有误）



### ✅ 判定结果：AI有误

> AI声称官方claim=索赔，实际简体官方无此译法（繁体为索償）。维持人工Minor。

- **corpus_id**: CS-002 | tool: C
- **内容类型**: 客服话术

**原文（English）**：

> If you're unable to settle the dispute you can escalate it to a claim. To escalate a dispute we often require that at least 7 days have passed since the payment date. By escalating a dispute to a claim you're asking PayPal to investigate and decide the outcome. A dispute will automatically close after 20 days unless it's been escalated. Closed disputes cannot be reopened or escalated to a claim.

**译文（中文）**：

> 如果您无法解决争议，可以将其升级为索赔。要升级争议，我们通常要求自付款日期起至少已过 7天。将争议升级为索赔，即表示您请求 PayPal 进行调查并作出裁决。争议若未被升级，将在 20
> 天后自动关闭。已关闭的争议无法重新开启或升级为索赔。

**人工判定理由**：

术语问题：claim译为索赔。正确译法：PayPal简体中文官方帮助中心将claim译为补偿申请（依据：paypal.com/c2/security/resolve-disputes）；索赔为通用法律词汇，指向经济赔偿诉求，而原文claim指请求PayPal调查并裁决，语义存在偏移。替换测试：读者可能将索赔理解为经济赔偿流程，与官方补偿申请流程产生偏差，需停顿辨析，测试不通过。三问路径：Q1判定，需停顿辨析；Q2判定，无实际代价，本应定Major；紧邻修正三条件满足，严重度上限Minor。维度交叉备注：术语误译仅改变名称，解释句维持流程理解，Accuracy维度不扣分。结论：Minor。类型标注：行业术语误译（非官方译法且语义偏移）。

**AI 判定理由**：

术语核查：译文涉及 PayPal 争议解决流程核心术语 dispute、claim、escalate。经核对 PayPal 简体中文帮助中心及用户协议，dispute 官方译法为“争议”，claim 官方译法为“索赔”，escalate 在该语境下官方译法为“升级”。译文全篇术语使用统一，未出现前后不一致或撞车现象。替换测试：将“争议”“索赔”“升级”代入原文语义单元，符合中国大陆用户对支付平台纠纷处理流程的认知模型，无歧义。三问路径：Q1 判定为无需停顿，术语准确且符合行业惯例，直接定级 Neutral。维度交叉备注：本维度仅评估术语，不涉及句子通顺度或信息完整性。结论：Neutral。类型标注：无术语问题。

---



## S077 | Terminology | 人工=Minor vs AI=Minor（AI判定有据可依）（已闭环：人工已改判为 AI 判定）



### ✅ 判定结果：采纳AI

> 外部核实成立：PayPal官方用发放退款、支付宝用发起退款、微信用申请退款，发送退款非行业惯用。人工漏检原因：发送退款与发起退款仅一字之差，首评扫读时误认为规范搭配。人工Neutral→Minor。

- **corpus_id**: CS-003 | tool: B
- **内容类型**: 客服话术

**原文（English）**：

> You can send a full or partial refund within 180 days of the payment date. Once you send a refund you can't cancel it.

**译文（中文）**：

> 您可以在付款日期起 180 天内发送全额或部分退款。一旦发送退款，将无法取消。

**人工判定理由**：

术语问题：send a refund译为发送退款。本条经人机互审修订（2026-08-09）：原始人工评分为Neutral，AI评分为Minor，经查证三大支付平台简体中文官方文档，均不使用发送退款搭配：PayPal官方用发放退款（paypal.com/c2/cshelp/article/如何发放退款-help101）、支付宝用发起退款（opendocs.alipay.com/open/02ekfs）、微信支付用申请退款或发起退款（pay.weixin.qq.com/doc/v3/merchant/4013071001）。发送退款为直译腔，非中文支付行业惯用搭配，符合Minor锚点译法不算错但非领域惯用译法造成轻微陌生感的定义。原始人工漏检原因：发送退款与发起退款字面接近，扫读时易混同。三问路径：Q1判定，可感知不自然但无需停顿辨析；Q2不适用，语义传达准确无实际代价。结论：Minor，行业术语搭配偏离（经外部证据核实）。

**AI 判定理由**：

术语核查：原文 'send a refund' 在支付与电商客服领域属于固定搭配，中文行业惯例及各大平台（如支付宝、微信支付、Shopify）官方文档均译为“发起退款”或“进行退款”。译文将其直译为“发送退款”，虽语义可解，但偏离了金融/电商领域的标准术语搭配，造成轻微陌生感。替换测试：将“发送退款”替换为“发起退款”，语句更符合中文客服话术规范，专业度提升；原译法不影响核心信息传递，用户仍能理解操作含义。三问路径：Q1判定为可感知不自然，因“发送”通常用于实物或消息，用于资金退回动作略显生硬；Q2判定为无实际代价，用户不会因此误操作或产生资金风险。结论：Minor。类型标注：行业术语误译。

---



## S081 | Terminology | 人工=Minor vs AI=Minor（AI判定有据可依）（已闭环：人工已改判为 AI 判定）



### ✅ 判定结果：采纳AI

> 外部核实成立：PayPal官方发放退款（c2/cshelp/help101）、支付宝发起退款（open/02ekfs）、微信申请退款（doc/v3/4013071001）均不用发送退款。人工漏检原因：与规范搭配字面仅一字之差，扫读易混同。人工Neutral→Minor；句中付款日期后的日期起算边界问题另归Locale维度。

- **corpus_id**: CS-003 | tool: C
- **内容类型**: 客服话术

**原文（English）**：

> You can send a full or partial refund within 180 days of the payment date. Once you send a refund you can't cancel it.

**译文（中文）**：

> 您可以在付款日期后的180天内发送全额或部分退款。一旦您发送退款，就无法取消。

**人工判定理由**：

术语问题：send a refund译为发送退款。本条经人机互审修订（2026-08-09）：原始人工评分为Neutral，AI评分为Minor，经查证PayPal官方用发放退款（paypal.com/c2/cshelp）、支付宝用发起退款（opendocs.alipay.com/open/02ekfs）、微信支付用申请退款（pay.weixin.qq.com/doc/v3/merchant/4013071001），发送退款非中文支付行业惯用搭配。另译文中付款日期后的180天内的后字存在日期起算边界问题，归Locale维度处理，不在本维度扣分。三问路径：Q1判定，可感知不自然但无需停顿辨析；Q2不适用，语义准确无实际代价。结论：Minor，行业术语搭配偏离（经外部证据核实）。

**AI 判定理由**：

术语核查：原文 'send a refund' 在支付与电商客服领域属于固定搭配，中文行业惯例及各大支付平台官方文档均译为'发起退款'或'进行退款'。译文将其直译为'发送退款'，虽语义可解，但偏离了金融/电商领域的标准术语搭配，造成轻微陌生感。正确译法应为'发起全额或部分退款'。替换测试：将'发送'替换为'发起'后，文本专业度显著提升且符合用户预期；保留'发送'则带有明显的翻译腔，但不影响核心信息传递。三问路径：Q1判定为可感知不自然，用户阅读时无需停顿思考即可理解含义，但能察觉用词非行业惯用；Q2判定为无实际代价，该措辞不会导致用户误操作或产生资金风险，仅影响体验专业性。结论：Minor。类型标注：行业术语误译。

---



## S084 | Audience Appropriateness | 人工=Minor vs AI=Minor（AI判定有据可依）（已闭环：人工已改判为 AI 判定）



### ✅ 判定结果：采纳AI

> 外部核实成立：发送退款在中文支付语境属非地道表达，PayPal官方用发放退款、支付宝用发起退款、微信用申请退款，发送退款带明显直译腔。人工漏检原因：与规范搭配字面接近，首评扫读未察觉语域偏离。Audience维度人工Neutral→Minor。

- **corpus_id**: CS-003 | tool: C
- **内容类型**: 客服话术

**原文（English）**：

> You can send a full or partial refund within 180 days of the payment date. Once you send a refund you can't cancel it.

**译文（中文）**：

> 您可以在付款日期后的180天内发送全额或部分退款。一旦您发送退款，就无法取消。

**人工判定理由**：

适配性核查：使用您称呼符合中文客服规范。本条经人机互审修订（2026-08-09）：原始人工评分为Neutral，AI评分为Minor。发送退款在中文支付语境中属非地道表达，经查证PayPal官方用发放退款、支付宝用发起退款、微信支付用申请退款，发送退款带明显直译腔，语域偏离中文客服话术惯例。维度交叉备注：语域偏离的术语规范面已记入Terminology维度（S081），本维度评估受众对表达方式的接受度。三问路径：Q1判定，可感知语域不自然但无需停顿辨析，理解不受影响；Q2不适用，不影响退款时效与不可撤销规则的理解。结论：Minor，语域轻微偏离（经外部证据核实）。

**AI 判定理由**：

适配性核查：译文使用了'您'作为称呼，符合中文客服与金融类文本的礼貌规范（行业观察）。但动词'发送退款'在中文支付与电商语境中属于非地道表达，中文惯用'发起退款''办理退款'或'退款'（行业观察：支付宝、微信支付、淘宝商家后台均使用'发起'或'处理'）。三问路径：Q1判定，受众读到'发送退款'可感知语域不自然，带有明显的翻译腔，但结合上下文能即时理解其指涉动作，无需停顿辨析；Q2判定，该表达仅影响阅读流畅度，不会导致用户对退款时效或不可撤销规则产生误读，无实际代价。维度交叉备注：'发送'对应'send'虽语义准确，但在本维度仅评估受众对语域的接受度，不涉及术语规范性评判。结论：Minor，语域轻微偏离但不阻碍理解。

---



## S121 | Terminology | 人工=Minor vs AI=Neutral（AI判定有误）



### ✅ 判定结果：AI有误

> AI称踢出为标准惯用译法无依据：钉钉/企业微信/腾讯会议成员管理均用移出/移除。维持人工Minor。

- **corpus_id**: UI-030 | tool: A
- **内容类型**: UI文本

**原文（English）**：

> Kick

**译文（中文）**：

> 踢出

**人工判定理由**：

术语问题：Kick译为踢出。正确译法：中文社交与通讯产品成员管理界面惯用移出或移除（钉钉、企业微信、腾讯会议等）。替换测试：读者能理解该动作指将成员移出群组或频道，测试通过，但踢出语域偏口语化与游戏化，偏离专业软件惯例。三问路径：Q1判定，可感知不自然但无需停顿，直接定级Minor。结论：Minor，语域偏离品类惯例但含义可理解。类型标注：行业术语误译（品类语域偏离）。

**AI 判定理由**：

术语核查：原文 Kick 为 UI 操作按钮文本，常见于社群管理、游戏或协作工具场景。译文"踢出"是中文互联网产品中表示移除成员/用户的标准惯用译法，语义边界与原文完全对齐，未发生缩小或扩大。一致性检查：单条译文内无重复术语，不存在一致性问题。替换测试：用户看到"踢出"可立即识别为移除操作，无需额外认知负荷。三问路径：Q1 判定为无需停顿，直接定级 Neutral。结论：术语译法准确且符合行业惯例，无术语问题。

---



## S125 | Terminology | 人工=Major vs AI=Minor（AI判定有误）



### ✅ 判定结果：AI有误

> AI低估偏离程度：单字踢在专业软件UI极为罕见，需停顿辨析（Q1触发→Major）。维持人工Major。

- **corpus_id**: UI-030 | tool: B
- **内容类型**: UI文本

**原文（English）**：

> Kick

**译文（中文）**：

> 踢

**人工判定理由**：

术语问题：Kick译为单字踢。正确译法：中文社交与通讯产品成员管理界面惯用移出或移除（钉钉、腾讯会议、微信等），单字踢在中文软件界面中极为罕见，强烈关联游戏与娱乐场景。替换测试：目标受众读到单字按钮标签踢，无法即时确认其指涉动作，测试不通过。三问路径：Q1判定，需停顿辨析；Q2判定，无实际代价。结论：Major，语域严重偏离导致理解受阻，但不构成实际损害。类型标注：行业术语误译（品类语域严重偏离）。

**AI 判定理由**：

术语核查：原文 Kick 在 UI 语境（如社群管理、游戏、协作工具）中通常指将用户移出当前会话或群组的操作。译文"踢"为口语化单字表达，虽在部分游戏或即时通讯场景中存在，但作为通用 UI 按钮标签过于非正式且语义模糊，不符合主流产品本地化惯例。正确译法：根据具体产品语境，应译为"移除"、"踢出"或"移出"等双音节规范术语。替换测试：将"踢"替换为"移除"后，UI 专业度与语义清晰度显著提升，用户无需二次确认操作对象与后果，测试通过。三问路径：Q1 判定为可感知不自然，因单字口语标签在标准 UI 中显得突兀；Q2 判定为无实际代价，因用户结合上下文仍能理解基本意图，不会导致资金损失或严重误操作。维度交叉备注：本维度仅评估术语规范性，不涉及语气适配度。结论：Minor。类型标注：行业术语误译。

---



## S129 | Terminology | 人工=Major vs AI=Minor（AI判定有误）



### ✅ 判定结果：AI有误

> AI低估偏离程度：单字踢在专业软件UI按钮中极为罕见，强烈关联游戏娱乐场景，目标受众需停顿辨析其指涉动作（Q1触发），Q2无实际代价，按三问应判Major而非Minor。维持人工Major。

- **corpus_id**: UI-030 | tool: C
- **内容类型**: UI文本

**原文（English）**：

> Kick

**译文（中文）**：

> 踢

**人工判定理由**：

术语问题：Kick译为单字踢。正确译法：中文社交与通讯产品成员管理界面惯用移出或移除，单字踢在中文软件界面中极为罕见，强烈关联游戏与娱乐场景。替换测试：目标受众读到单字按钮标签踢，无法即时确认其指涉动作，测试不通过。三问路径：Q1判定，需停顿辨析；Q2判定，无实际代价。结论：Major，语域严重偏离导致理解受阻，但不构成实际损害。类型标注：行业术语误译（品类语域严重偏离）。

**AI 判定理由**：

术语核查：原文 Kick 在 UI 语境（如社群管理、游戏、协作工具）中通常指将用户移出当前会话或群组的操作。译文"踢"为口语化单字表达，虽在部分游戏或非正式社区中存在，但作为通用 UI 文本不符合中文本地化惯例。正确译法：行业标准及主流产品（如微信、钉钉、Discord 中文版）均使用"移除"、"踢出"或"请出"等双音节词，单字"踢"显得过于随意且缺乏动作完整性。替换测试：将"踢"替换为"移除"后，UI 专业度与语义清晰度显著提升，原译法造成轻微陌生感。三问路径：Q1 判定为可感知不自然，用户能理解含义但会感到措辞非正式；Q2 判定为无实际代价，不会导致误操作或功能混淆。维度交叉备注：本维度仅评估术语规范性，不涉及语气适配度。结论：Minor。类型标注：行业术语误译。

---



## S133 | Terminology | 人工=Neutral vs AI=Minor（AI判定有误）



### ✅ 判定结果：AI有误

> 再审查结论：AI断言recovery phrase在中文金融科技领域有既定惯例译法助记词不成立——助记词是加密钱包领域专属术语，本条为Signal类支付安全语境，付款恢复短语非BIP39助记词，中文金融领域对该词亦无统一惯例，AI属领域套用错位。维持人工Neutral；因语料产品语境未登记（framework issues PFI-006），本条列入人工复核队列。

- **corpus_id**: UI-009 | tool: A
- **内容类型**: UI文本

**原文（English）**：

> Before you can disable your PIN you must record your payments recovery phrase to ensure you can recover your payments account.

**译文（中文）**：

> 在禁用您的 PIN 之前，您必须记录您的付款恢复短语，以确保您可以恢复您的付款账户。

**人工判定理由**：

术语核查：本条为支付安全提示。PIN保留原文；payments recovery phrase译为付款恢复短语，语义准确；payments account译为付款账户，金融领域更通行搭配为支付账户，但付款账户在PIN禁用警告语境中不构成理解障碍。判断基准：按Signal类支付安全产品语境判断。替换测试：读者能准确理解禁用PIN前须备份恢复短语的操作要求，无理解障碍。三问路径：Q1判定，读者读过去无需停顿、无感知异样，直接定级Neutral。结论：Neutral，无术语问题。类型标注：无术语问题。

**AI 判定理由**：

术语核查：原文 'recovery phrase' 在数字钱包及加密货币领域（如 Ledger、MetaMask）的行业标准译法为“助记词”，指代用于恢复账户的特定单词序列。译文将其直译为“恢复短语”，虽字面含义对应，但严重偏离中文金融科技领域的既定惯例译法。替换测试：将“付款恢复短语”替换为“付款助记词”，符合用户认知模型且语义更精准；当前译法导致术语陌生感。三问路径：Q1判定，用户读到“恢复短语”可感知不自然，需短暂联想才能确认是指助记词，但未造成理解阻断；Q2判定，用户仍能理解需记录某凭证以恢复账户，不会因此做出错误操作或遭受资金损失，无实际代价。维度交叉备注：本维度仅评估术语惯例偏离，不涉及句子通顺度。结论：Minor。类型标注：行业术语误译。

---

