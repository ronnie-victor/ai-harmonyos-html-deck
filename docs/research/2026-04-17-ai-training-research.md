# AI 培训研究底稿

- 日期：2026-04-17
- 本地截图 OCR 原文：`D:\workspace\HarmnonyOS\output\research\2026-04-17-xiaohongshu-ocr-raw.md`
- 截图来源：`C:\Users\100360543\Downloads\20260416-215910`
- 说明：小红书截图只作为观点和表达线索，不作为事实锚点；事实部分以官方资料为准。

## 一、从 79 张截图里提炼出来的高频共识

### 1. `AGENTS.md` 应该是导航，不应该是百科全书

- 多张截图都在反复强调同一件事：`AGENTS.md` 的价值不在“把所有规则都塞进去”，而在“告诉模型应该去哪里找真正的内容”。
- 更合理的结构是：
  - `AGENTS.md` 只保留总纲、项目约束、关键入口、危险操作、常用命令。
  - 详细设计、评审规范、架构说明、计划文档分别进入 `docs/` 下的专题文件。
- 这组观点和我们要讲的“导航式 agents.md”高度一致。

### 2. 复杂任务要先计划，再执行

- 截图里高频出现的使用规范是：
  - 任务要说清 `目标 + 上下文 + 约束 + 验收标准`
  - 复杂任务先 `plan`
  - 改完要 `review`
  - 权限要从严到松
- 这非常适合放进“工程方法”模块，因为它已经不是 prompt 技巧，而是稳定的协作流程。

### 3. Skills 不应该做成“大而全”

- 截图里能归纳出一套比较稳定的 skill 设计原则：
  - 一个 skill 对应一个 job
  - 输入输出要清楚
  - 触发描述要贴近用户真实说法
  - 不要一开始就试图覆盖所有 edge case
  - 先本地迭代，成熟后再共享
- 这部分非常适合做成一页“怎么从 0 到 1 写 skill”的通俗页。

### 4. MCP、Skill、CLI、Memory 经常被混着讲，但它们不是一回事

- 截图中最有价值的不是具体定义，而是“边界意识”：
  - MCP 更像连接外部工具和系统的协议层
  - Skill 更像复用型工作流封装
  - CLI 更像最通用的执行面
  - Memory 更像跨轮次沉淀下来的长期经验
- 其中“CLI 比 MCP 更彻底”这种说法，更适合在 PPT 里表达成：
  - 这是我在工程实践中的偏好判断，不是协议层面的替代关系。

### 5. 真正拉开差距的是闭环，不是会不会答题

- 截图里有很多不同说法，但落到一起就是一件事：
  - 没有 build、test、review、回归，模型并不知道自己到底做对没有。
- 这组内容非常适合作为我们前几页的核心价值判断，也和 HarmonyOS 项目案例天然衔接。

### 6. Harness 的核心不是“多一个新名词”，而是“把约束、反馈、验证和修复机制接起来”

- 截图里关于 harness 的高频表达包括：
  - 让系统自己跑、自己纠、自己维护
  - 把失败变成可复用的约束、文档和工具
  - 用 linter、hooks、CI、failure log、doc-gardening 去减少重复犯错
- 这部分最适合在培训里讲成“工程能力放大器”，不要讲成纯概念。

## 二、官方资料确认后的事实锚点

### 1. OpenAI / Codex

- OpenAI 在 `How OpenAI uses Codex` 里明确建议：维护 `AGENTS.md`，给 Codex 跨 prompt 的持久上下文，并把 prompt 写得像 GitHub Issue 一样清晰，包含文件路径、组件名、差异和相关文档。
  - 来源：https://openai.com/business/guides-and-resources/how-openai-uses-codex/
- OpenAI 在 2026-02-11 发布的 `Harness engineering` 文章里，把 `AGENTS.md` 明确描述为“目录 / table of contents”，而不是大而全说明书，并强调仓库内结构化 `docs/` 才是系统事实源。
  - 来源：https://openai.com/index/harness-engineering/
- 同一篇文章还强调了三个对培训特别有价值的点：
  - 要让 UI、日志、指标、追踪对 agent 可读
  - 要让 agent 在 worktree、浏览器、观测栈里自己验证
  - 当 agent 失败时，不是“再试一次”，而是补能力、补约束、补反馈

### 2. Anthropic / Claude Code

- Claude Code 官方文档确认了四类关键能力：
  - `CLAUDE.md` / memory 用于跨会话持续记忆项目信息
    - 来源：https://code.claude.com/docs/en/memory
  - `settings.json` 可配置权限、额外目录、环境变量，并能用 `permissions.deny` 隐藏敏感文件
    - 来源：https://code.claude.com/docs/en/settings
  - subagents 可以把特定任务委托给独立上下文窗口处理，减少主上下文污染
    - 来源：https://code.claude.com/docs/en/sub-agents
  - hooks 可以在工具调用前后、子 agent 启停时执行自定义命令，用来加 guardrails
    - 来源：https://code.claude.com/docs/en/hooks
- Anthropic 近期公开材料也在持续把 `Agent Skills`、`MCP`、subagents、hooks 作为一套生产化模式来讲。
  - 来源：https://www.anthropic.com/webinars/claude-code-advanced-patterns
  - 来源：https://www.anthropic.com/webinars/agent-skills-transform-claude-from-assistant-to-specialized-agent

### 3. MCP 官方定义

- MCP 官方规范确认：
  - MCP 是开放协议，用于把 LLM 应用连接到外部数据源和工具
  - 它采用 host-client-server 架构
  - 它不仅是“调工具”，还明确涉及会话、能力协商、安全边界、日志、错误处理等工程问题
- 这意味着 MCP 更适合被讲成“标准化接入层”，而不是“万能技能包”。
  - 来源：https://modelcontextprotocol.io/specification/
  - 来源：https://modelcontextprotocol.io/specification/2024-11-05/architecture/index

### 4. Cursor 官方信息

- Cursor 官方文档把 `Rules` 讲得很清楚：
  - 它们是持久、可复用、可作用域化的系统级指令
  - `AGENTS.md` 只是更简单的替代形式
  - 更复杂的团队化约束适合落在 `.cursor/rules`
  - 官方最佳实践之一就是把规则拆小、可组合、少而清晰
  - 来源：https://docs.cursor.com/en/context
- Cursor 的 `Background Agents` 说明了它的强项和风险边界：
  - 优势是异步远程执行、可联网、可装包、可自动跑终端命令
  - 风险是数据保留与 prompt injection 带来的外传风险
  - 来源：https://docs.cursor.com/en/background-agents
- Cursor `Memories` 说明它有自动记忆机制，会从对话中提取并生成项目级记忆，但需要用户控制和确认。
  - 来源：https://docs.cursor.com/en/context/memories

### 5. Gemini 官方信息

- Gemini API 官方文档确认它在工具调用层很强：
  - 支持函数调用
  - 支持并行函数调用
  - 支持组合式 / 顺序式函数调用
  - 来源：https://ai.google.dev/gemini-api/docs/function-calling
- Gemini 官方还持续强调长上下文和多模态能力：
  - 长上下文页面明确把 1M+ token 作为开发范式变化来讲
  - 模型页显示 Gemini 系列覆盖低延迟推理、音频、图像生成和编辑等多种形态
  - 来源：https://ai.google.dev/gemini-api/docs/long-context
  - 来源：https://ai.google.dev/gemini-api/docs/models

### 6. Trae 官方信息

- Trae 官网和博客能确认几件事：
  - 它在往 AI-first IDE、multi-agent collaboration、memory、tool orchestration 方向持续推进
  - `SOLO` 明确主打从 plan 到 execute 到 review 的连续工作流
  - 2025 年的官方文章持续在强调 context、rules、agent 架构和多智能体协作
  - 来源：https://www.trae.ai/solo
  - 来源：https://www.trae.ai/blog

### 7. CodeBuddy 官方信息

- CodeBuddy 官方文档的主线非常明确：
  - `PLAN`
  - `BUILD`
  - `PUBLISH`
- 它更像一个把产品规划、任务拆解、编码和发布串起来的工作台，而不是单纯聊天式编码助手。
  - 来源：https://docs.codebuddy.com/
  - 来源：https://docs.codebuddy.com/guides/planning-your-project/

### 8. 通义灵码官方信息

- 通义灵码官网和帮助文档确认：
  - 它已经不是纯补全插件，而是在往工程级变更、终端命令执行、MCP 工具使用、智能体方向扩展
  - 支持通过“扩展管理 / 自定义指令”沉淀团队级指令能力
- 这很适合放进“国内工具在追什么方向”的对比页。
  - 来源：https://lingma.aliyun.com/
  - 来源：https://help.aliyun.com/zh/lingma/user-guide/extensions-management

## 三、基于截图和官方资料合并后的工程判断

### 1. `AGENTS.md` 最佳实践

- 结论：应该短、稳、像导航，不该长、散、像百科。
- 更合适的讲法：
  - `AGENTS.md` 负责入口
  - `docs/` 负责事实
  - `plans/` 负责执行
  - `rules / skills / hooks` 负责把经验变成可执行约束

### 2. Skills 的本质

- 结论：skill 不是“更长的 prompt”，而是可复用的任务能力包。
- 更适合团队的写法：
  - 一个 skill 只解决一类任务
  - 包含适用场景、输入、输出、步骤、约束和验证方式
  - 成熟后共享，不成熟时不要过早平台化
- 在我的 skill repo 里，我现在主要用两种方法提升 skill 选路准确率：
  - 在每个 skill 的 frontmatter metadata 里打分类标签，并在 `agents.md` 里明确告诉 AI 有这些分类，让它第一次选择时先缩小范围。
  - 在 rules 里维护 skill 路由表，专门处理相似 skill，把区别、scope、典型触发词和不适用场景写清楚，辅助 AI 做判断。
- 这两种方法本质上分别解决两件事：
  - 先缩小搜索空间
  - 再区分相近选项

### 3. CLI、MCP、Harness 的关系

- 结论：
  - CLI 是最通用的执行面
  - MCP 是标准化接入层
  - Harness 是把上下文、约束、工具、验证、修复接起来的整体工程方式
- 这里“CLI 会不会取代 MCP”不适合讲成非此即彼。
- 更准确的讲法是：
  - 我在高自由度工程任务里越来越依赖 CLI
  - 但标准化接入外部系统时，MCP 仍然有很强价值
  - 两者可以同时存在在同一个 harness 里

### 4. 一个适合培训去讲的三代范式

- 这套分法更适合拿来讲方法论，不是严格的学术定义：
  - 第一代是 `Prompt Engineering`
  - 第二代是 `Context Engineering`
  - 第三代是 `Harness Engineering`
- 可以这样讲三者的递进关系：
  - `Prompt Engineering` 关注的是“怎么把话说清楚”
  - `Context Engineering` 关注的是“怎么把对的上下文、约束、知识和案例组织给 AI”
  - `Harness Engineering` 关注的是“怎么把 AI 放进一个可执行、可验证、可回退的工程系统里”
- 如果要浓缩成一句话，我更推荐这样讲：
  - `Harness Engineering` 不是再多写一点 prompt，而是把环境、工具、约束、反馈和验证一起工程化。
- 在分享里也可以把它概括为：
  - `Harness Engineering` 是当前最接近 AI 编程最终形态的一种工程范式。

### 5. Harness Engineering 可直接展开的核心流程

- 这一段更适合后面单独做成 1 到 2 页方法论页：
  1. 隔离沙箱
     - 让 Agent 在隔离环境里运行，出错也不会直接污染主系统。
     - OpenAI 官方文章里明确提到的是：Codex 在隔离的 worktree、容器化环境、sandbox 工具执行环境里工作，日志和指标也是临时隔离的。
     - 如果后面想保留“秒级启动的预热环境”这种说法，可以作为演讲表达，但正式页里先不要写死具体秒数，除非补到一手来源。
  2. 结构化文档
     - 不是塞给 AI 一大堆散乱文档，而是给它一个短的入口文件，再指向结构化文档目录。
     - OpenAI 在 2026-02-11 发布的 `Harness engineering` 文章里原话是：`Give Codex a map, not a 1,000-page instruction manual.`
     - 同一篇文章还明确写到：短 `AGENTS.md` 大约 100 行，主要作为 map，真正的知识库在结构化的 `docs/` 目录里。
  3. 自动化反馈闭环
     - 代码生成之后，立刻进入 linter、测试、回归、review 这一套反馈链。
     - 错误信息不要只给人看，而是要能自动回灌到 Agent 上下文里，让它继续自修。
     - 更适合在分享里讲成：先让 AI 自己修到达标，超过阈值再交还给人。
  4. 编码化约束
     - 不要靠人工逐步盯实现，而是把边界、分层、日志规范、命名规范、结构规则写进 linter、结构化测试和脚本里。
     - OpenAI 官方文章明确提到：他们用 custom linters 和 structural tests 机械地约束架构与质量。
     - 这部分很适合讲成一句话：约束不是减速器，而是乘数器。
  5. 工具集成
     - Agent 不能只会生成代码，还要能读仓库、跑命令、查日志、调工具、做验证。
     - OpenAI 在 `Unlocking the Codex harness` 里明确提到：Codex 会在 sandbox 环境里执行 shell/file 工具，并把 MCP servers 和 skills 接进 agent loop。
     - 如果后面想讲“连接近 500 个内部服务”，建议先把它保留为外部案例表达，不要在正式页里写死成官方事实，除非再补到一手出处。

### 6. 这一页适合怎么收束

- 可以收束成一句更稳的话：
  - AI 编码不是让模型多写几行代码，而是让它在一套工程系统里持续工作、持续自检、持续修复。
- 如果要再往前推一步，可以讲成：
  - 真正的目标不是“让 AI 帮我写”，而是“让 AI 能自己完成一段完整工程流程”。

### 7. 为什么 HarmonyOS 适合做压力测试

- 结论：这个题目能天然筛掉“会说不会做”的 AI。
- 适合展开的理由：
  - 公开资料相对少
  - ArkTS / HarmonyOS 约束更硬
  - 幻觉 API 很容易立刻暴露
  - 必须走编译、真机、回归，不能只看答案像不像

### 8. 我们这个分享最值得突出的真实价值

- 不是“AI 帮我写了很多代码”
- 而是：
  - 我们把 AI 接进了真实工程闭环
  - 在一个大模型天然不占优的生态里，把 5W+ 代码量项目真正做下来了
  - 这比单纯展示页面生成、Demo 演示更有说服力

## 四、下一步可直接进入 PPT 的内容块

### 可以直接写成页的主题

- `AGENTS.md 为什么必须是导航`
- `Skills 到底怎么写才不会越写越废`
- `CLI、MCP、Harness 各自负责哪一层`
- `为什么我把 HarmonyOS 当成 AI 工程能力的压力测试`
- `把失败变成资产：build / test / review / hooks / doc-gardening`
- `不同工具到底该怎么分工`
- `不同模型到底该怎么判断`

### 适合在后续页面里反复出现的关键词

- 导航式上下文
- 渐进式披露
- 工程闭环
- 可执行约束
- 反馈回路
- 真机验证
- 失败资产化

## 五、备注

- 上面关于 `CLI 更像主执行面`、`HarmonyOS 更能暴露幻觉问题` 这两类说法，属于“截图观点 + 我们项目实践 + 官方资料”综合后的工程判断，不是某一家官方文档的原话。
- 后续写 PPT 时，概念页用官方定义，方法页用工程判断，案例页用我们自己的第一手实践，这样结构最稳。
