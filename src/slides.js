import { asset } from './assets.js';

const overviewCards = [
  {
    title: '认知、技术关系、工程方法与项目案例四条主线',
    body: '覆盖概念边界、模型选择、工程方法与项目案例，建立对 AI 工程落地的整体认识。',
    tone: 'blue'
  },
  {
    title: '概念认知',
    body: 'LLM、Agent、Skill、MCP、CLI、Harness 分别是什么，各自解决什么问题。',
    tone: 'blue'
  },
  {
    title: '技术关系',
    body: '从 Prompt Engineering 到 Context Engineering，再到 Harness Engineering，理解控制点是怎么逐层深入的。',
    tone: 'teal'
  },
  {
    title: '工程方法',
    body: 'AGENTS.md、docs、rules、memory、skills 怎么拆，怎么协同，怎么让 AI 真正命中项目上下文。',
    tone: 'orange'
  },
  {
    title: '项目案例',
    body: '结合 Me2Robot HarmonyOS 应用，说明 build、device、screenshot、logs、regression 如何组成完整闭环。',
    tone: 'teal'
  }
];

const stackLayers = [
  {
    step: '01',
    title: 'LLM',
    meta: '理解 / 推理 / 生成',
    detail: '负责把需求和上下文转成代码、文档和解释。项目里适合起草实现、解释 API、补测试，但不能替代编译和真机事实。'
  },
  {
    step: '02',
    title: 'Agent',
    meta: '拆解 / 调度 / 执行',
    detail: '负责拆任务、选工具、读写文件、根据结果继续推进。项目里相当于把一次提问变成一轮可执行流程。'
  },
  {
    step: '03',
    title: 'Skills',
    meta: '高频流程复用',
    detail: '负责沉淀固定做法。项目里把规划、研究、HarmonyOS 构建、装包、截图、日志这类高频流程做成可重复调用的能力。'
  },
  {
    step: '04',
    title: 'MCP',
    meta: '标准化外部接入',
    detail: '负责把文档、服务和数据源以统一协议接进来。项目里更适合查资料、调接口、取平台数据，不直接替代本地执行。'
  },
  {
    step: '05',
    title: 'CLI',
    meta: '仓库 / 构建 / 设备执行',
    detail: '负责真正改仓库、跑 hvigor、装包、启动、拉日志、截图。项目里 build、hdc、hilog、screenCap 这一段都更适合走 CLI。'
  },
  {
    step: '06',
    title: 'Harness',
    meta: '验证 / 重试 / 回写闭环',
    detail: '负责把 AGENTS、docs、skills、CLI、验证和回写串起来。项目里只有进入 build、device、screenshot、logs、regression 才算完成。'
  }
];

const stackSupportCards = [
  {
    title: 'AGENTS.md 是入口地图',
    body: '只写范围、入口文件、关键命令、验证标准和相关 docs；控制在导航层，不写成长手册。',
    tone: 'blue'
  },
  {
    title: 'Skill metadata + Rules 路由',
    body: 'metadata 先按分类缩小 skill 范围，rules 再给相似 skill 做二次分流，写清 scope、差异和禁区。',
    tone: 'teal'
  },
  {
    title: 'CLI 是主执行面，MCP 是标准接入',
    body: '查外部文档和服务时优先 MCP；改仓库、编译、装包、日志、截图、回归时优先 CLI。',
    tone: 'orange'
  },
  {
    title: 'Harness 负责把结果收口',
    body: '把 build、install、launch、screenshot、hilog、regression 串成闭环，失败结果再回灌给 Agent 继续修。',
    tone: 'blue'
  }
];

const paradigmStages = [
  {
    step: '01',
    title: 'Prompt Engineering',
    meta: '指令设计',
    detail: '定义目标、约束、输出格式和示例，解决“我要它怎么回答”。适合单轮问答、文档生成和边界清晰的小任务；一旦依赖项目事实，仅靠提示词就不够了。',
    tone: 'blue'
  },
  {
    step: '02',
    title: 'Context Engineering',
    meta: '上下文设计',
    detail: '定义模型在动手前必须看到什么，包括 AGENTS.md、docs、rules、memory、文件路径、案例和 skill metadata。它解决信息命中与约束对齐，但不负责证明结果真的跑通。',
    tone: 'teal'
  },
  {
    step: '03',
    title: 'Harness Engineering',
    meta: '执行闭环设计',
    detail: '定义任务如何执行、如何验证、失败后如何重试和回写。把 build、test、device、logs、screenshot 和约束检查接入闭环，解决“看起来对”和“真的可交付”之间的差距。',
    tone: 'orange'
  }
];

const paradigmSignals = [
  'Prompt 关注“我要它怎么回答”。',
  'Context 关注“在回答之前，必须先让它看到什么”。',
  'Harness 关注“回答之后，怎么证明结果是真的”。'
];

const modelRows = [
  {
    model: 'GPT-5.4',
    sub: '代码主力 / Agent',
    fit: '编码执行、工具调用、复杂任务闭环',
    strengths: '支持 1M context，代码、工具链和执行闭环能力比较均衡。',
    limits: '适合做主执行面；要靠 context、cache 和 harness 才能稳定发挥。'
  },
  {
    model: 'Claude Opus 4.7',
    sub: '复杂编码 / 审查',
    fit: '复杂编码、Code Review、长链推理',
    strengths: '支持 1M context，重构、审查和高难任务处理更强。',
    limits: '性能强但成本更高，大任务要控范围、控 budget、控验证出口。'
  },
  {
    model: 'Gemini 3.1 Pro Preview',
    sub: '多模态 / 视觉',
    fit: '界面设计、多模态分析、长文整理',
    strengths: '支持 1,048,576 context，看图、看页面、看 PDF 和演示表达优势明显。',
    limits: '视觉强不等于工程强，进入项目后仍要走 CLI、MCP 和 Harness。'
  },
  {
    model: 'GLM 5.1',
    sub: '中文友好 / 本地化',
    fit: '中文需求、中文文档、国内资料',
    strengths: '中文表达和中文资料理解友好，适合沟通、整理和知识问答。',
    limits: '复杂工程闭环、跨工具执行和稳定重构不建议单独依赖。'
  },
  {
    model: 'MiniMax M2.7',
    sub: '中文内容 / 轻量分析',
    fit: '中文表达、内容生成、轻量分析',
    strengths: '中文自然度不错，适合初稿、总结和轻量内容生成。',
    limits: '复杂编码、Agent 工作流和工程收口不建议作为主力模型。'
  }
];

const modelSupportCards = [
  {
    title: '1M 上下文适合什么',
    points: [
      '长需求、接口文档、规则文档一起读',
      '日志、截图、回归结果放在同一次分析里',
      '先全局理解，再局部展开'
    ],
    tone: 'blue'
  },
  {
    title: '省 Token 的常用做法',
    points: [
      '先给 AGENTS.md 和 docs 地图，再按需展开文件',
      '固定约束放前面，变化内容放后面',
      '长日志先摘要，优先给路径、错误栈和 diff'
    ],
    tone: 'teal'
  },
  {
    title: '提高缓存命中',
    points: [
      '共享前缀保持稳定，不频繁改提示词开头',
      '高变化内容尽量放末尾',
      '复用同一套 rules、docs map 和验证步骤'
    ],
    tone: 'orange'
  }
];

const workflowSteps = [
  {
    step: '01',
    title: '写清 Goal 与业务背景',
    meta: 'goal / context',
    detail: '不要只写“统一异常提示”，还要写清为什么改、入口在哪、影响哪些场景。'
  },
  {
    step: '02',
    title: '补 Constraints 与 Non-goals',
    meta: 'constraints / non-goals',
    detail: '写清不能动通知触发时机、不能破坏已有映射、这次不扩到无关模块，避免 AI 越界。'
  },
  {
    step: '03',
    title: '直接给文件路径与入口',
    meta: 'files / refs',
    detail: '直接给 GlobalNoticePolicy.ets、GlobalNoticePolicy.test.ets、string.json 这些真实入口，不要只给抽象需求。'
  },
  {
    step: '04',
    title: '把 Done When 写成证据',
    meta: 'done when / verify',
    detail: '完成标准不能只写“功能正常”，而要写成 build、test、截图、日志这类可验证结果。'
  },
  {
    step: '05',
    title: 'AGENTS.md 只做导航',
    meta: 'agents / docs',
    detail: 'AGENTS.md 只写入口、关键命令和验收口径；专题事实拆到 docs，不把入口文件写成长手册。'
  },
  {
    step: '06',
    title: '小步修改，立即验证',
    meta: 'edit / verify',
    detail: '每轮只改最小闭环，马上编译和取证，不让问题一路带到设备和交付环节。'
  }
];

const workflowSkillCards = [
  {
    title: 'superpowers',
    meta: '起手判断',
    body: '先判断当前任务该不该调 skill、该不该先规划、该不该先查事实。',
    tone: 'blue'
  },
  {
    title: 'Context-task-planning',
    meta: '范围不清时',
    body: '跨模块、跨命令、跨设备的任务，先规划再修改。',
    tone: 'teal'
  },
  {
    title: 'Auto-research',
    meta: '事实不清时',
    body: 'API、平台规则、模型规格不确定时，先补一轮事实确认。',
    tone: 'orange'
  },
  {
    title: 'HarmonyOS 执行技能',
    meta: '工程闭环',
    body: '例如 harmony-hvigor-build、harmony-hdc-deploy-verify、verification-before-completion。',
    tone: 'teal'
  }
];

const docsCards = [
  {
    title: '全局目录放共性习惯',
    body: '例如通用工作方式、默认工具、长期偏好和跨项目复用的 rules / memory。',
    tone: 'blue'
  },
  {
    title: '项目目录放项目事实',
    body: '例如模块路径、关键命令、验证方式、项目特有 rules 和文档索引。',
    tone: 'teal'
  },
  {
    title: 'memory 只放长期稳定信息',
    body: '适合稳定坑点、默认命令和固定约束；不适合临时任务和一次性决策。',
    tone: 'orange'
  }
];

const workflowDocCards = [
  {
    title: 'AGENTS.md',
    body: '只写入口、关键命令和验收口径。',
    tone: 'blue'
  },
  {
    title: 'docs',
    body: '放项目事实、专题背景和验证细节。',
    tone: 'teal'
  },
  {
    title: 'memory',
    body: '只放长期稳定约束、默认命令和常见坑点。',
    tone: 'orange'
  }
];

const workflowKnowledgeCards = [
  {
    title: 'AGENTS.md',
    meta: '',
    intro: '只负责入口、命令和验收口径，让 Agent 先知道去哪里看、怎么做、做到什么算完成。',
    topics: ['范围', 'Read first', '命令', 'Done When'],
    paths: [
      { label: '全局', value: '~/.codex/AGENTS.md' },
      { label: '项目', value: '<repo>/AGENTS.md' }
    ],
    points: [
      '写范围、入口模块、先读文档、关键命令、Done When 和禁止事项。',
      'Read first 直接指向 PRD、项目结构、模块说明和 rules 路由。',
      '全局 AGENTS 适合放跨项目通用原则，作用接近 `CLAUDE.md`。',
      '项目 AGENTS 只写当前仓库入口，不复制详细业务背景。',
      '控制在短文档，读完就能开始执行，像地图而不是手册。'
    ],
    example: [
      '# <repo>/AGENTS.md',
      'Read first: docs/context/notice-flow.md',
      'Read first: docs/prd/me2robot-overview.md',
      'Read first: docs/architecture/project-structure.md',
      'Build: hvigor assembleHap',
      'Verify: hdc install -r <hap> -> screenCap',
      'Done when: build + screenshot + hilog ok'
    ].join('\n'),
    caution: '不要把模块细节、排障过程、临时讨论和长背景直接塞进 AGENTS.md。',
    tone: 'blue'
  },
  {
    title: 'docs',
    meta: '事实层',
    intro: '专门放项目事实和专题说明，AGENTS 只负责把 AI 导航到这些文档，不重复抄写内容。',
    topics: ['PRD', '结构', '模块', '验证'],
    paths: [
      { label: '全局', value: '~/.codex/docs/*' },
      { label: '项目', value: '<repo>/docs/prd | architecture | modules | verify' }
    ],
    points: [
      'PRD 写目标、场景、范围、非目标、交互约束和验收口径。',
      '项目结构文档写目录树、分层职责、模块边界和关键文件作用。',
      '模块文档写入口文件、调用链、依赖关系、状态流和常改文件。',
      'verify 写 build、install、launch、screenshot、hilog 和回归检查表。',
      '按主题拆文档，方便按需展开，不要堆成一篇长手册。'
    ],
    example: [
      'docs/',
      '  prd/me2robot-overview.md',
      '  architecture/project-structure.md',
      '  modules/global-notice-policy.md',
      '  architecture/error-handling.md',
      '  verify/device-checklist.md',
      '  references/hdc-command-notes.md'
    ].join('\n'),
    caution: '不要把会话废话、一次性讨论记录和零散结论直接堆进 docs。',
    tone: 'teal'
  },
  {
    title: 'memory',
    meta: '长期稳定层',
    intro: '只记录跨任务反复有效的偏好、坑点和默认动作，适合长期留存，不适合记当前任务。',
    topics: ['编码', '命令', '坑点', '偏好'],
    paths: [
      { label: '全局', value: '~/.codex/memory/*' },
      { label: '项目', value: '<repo>/.codex/memory/*' }
    ],
    points: [
      '写默认 UTF-8、PowerShell 读写中文显式指定 UTF-8 这类稳定约束。',
      '写默认 build/install/screenshot/hilog 命令和固定验证顺序。',
      '写仓库限制、固定坑点、工具链版本和环境差异这类长期有效信息。',
      '例如 Windows 中文乱码、路径空格、真机权限差异都适合沉淀。',
      '只有跨任务重复出现的信息，才值得沉淀到 memory。'
    ],
    example: [
      'encoding: UTF-8',
      'powershell_read: Get-Content -Encoding UTF8',
      'powershell_write: Set-Content -Encoding UTF8',
      'default_verify: build -> install -> launch -> screenCap -> hilog',
      'note: compile first, then device verify'
    ].join('\n'),
    caution: '不要把当前任务、临时结论、一次性 workaround 和短期决策写进 memory。',
    tone: 'orange'
  }
];

const skillsCards = [
  {
    title: 'metadata 做首轮过滤',
    body: '在 frontmatter 里标 category、scope、triggers、verify，让 AI 第一次选择时先缩小范围。',
    tone: 'blue'
  },
  {
    title: 'rules 做二层路由',
    body: '对相似 skill 列清区别、适用边界和禁区，减少 AI 在多个 skill 之间来回摇摆。',
    tone: 'teal'
  },
  {
    title: 'Plugin 是上层封装',
    body: '当 skill 需要连 scripts、hooks、MCP、assets 一起分发时，封成 plugin；它不是更强，而是更完整。',
    tone: 'orange'
  },
  {
    title: '优先沉淀高频闭环',
    points: [
      'superpowers',
      'Context-task-planning',
      'Auto-research',
      'harmony-hvigor-build / harmony-hdc-deploy-verify',
      'verification-before-completion'
    ],
    tone: 'blue'
  }
];

const failureAssetSteps = [
  {
    step: '01',
    title: '先收集证据',
    meta: 'task / diff / build / logs',
    detail: '把任务输入、代码改动、编译结果、截图和日志整理齐，再决定沉淀什么。'
  },
  {
    step: '02',
    title: '判断归档层级',
    meta: 'docs / rules / skills / memory',
    detail: '事实进 docs，路由进 rules，高频流程进 skills，长期稳定信息进 memory。'
  },
  {
    step: '03',
    title: '补 metadata 与路由',
    meta: 'frontmatter / routing',
    detail: '有了新 skill 或新案例后，要同步 frontmatter 和 rules 路由表。'
  },
  {
    step: '04',
    title: '回到团队仓库',
    meta: 'repo / install',
    detail: '把技能、规则和知识沉淀回团队仓库，下次才能被稳定复用。'
  }
];

const failureAssetCards = [
  { title: '回写 docs', body: '记录模块入口、命令链路、验证方式和排障结论。', tone: 'blue' },
  { title: '回写 rules', body: '记录相似 skill 的分流条件和必须经过的验证门槛。', tone: 'teal' },
  { title: '回写 skills', body: '命令链一旦稳定复用，就从临时步骤升级成 skill。', tone: 'orange' },
  { title: '回写 memory', body: '默认命令、稳定坑点和长期约束适合进 memory。', tone: 'blue' }
];

const executionRows = [
  {
    layer: 'CLI',
    purpose: '直接执行仓库和设备动作',
    examples: '改文件、跑 hvigor、装包、启动、截图、抓 hilog。',
    when: '只要目标是改仓库、编译、装包、运行、截图或抓日志，就优先用 CLI。'
  },
  {
    layer: 'MCP',
    purpose: '标准化接入外部能力',
    examples: '查官方文档、看网页、查 API、接平台服务。',
    when: '需要结构化访问外部信息时使用，不替代主执行面。'
  },
  {
    layer: 'Harness',
    purpose: '把输入、执行、验证和回写串成闭环',
    examples: 'AGENTS、rules、skills、CLI、MCP、build、device、retry、writeback。',
    when: '任务一旦跨计划、构建、设备和交付，就必须进入 Harness。'
  }
];

const executionCards = [
  {
    title: '失败时回灌什么',
    meta: 'feedback',
    points: [
      '编译错误、测试失败和命令返回码进入下一轮输入。',
      '截图差异、页面异常和 hilog 关键信息一起回灌。',
      '回灌的是证据本身，不是只保留一句“失败了”。'
    ],
    tone: 'blue'
  },
  {
    title: '成功后写回哪里',
    meta: 'writeback',
    points: [
      'docs 记录模块事实、命令链和验证方式。',
      'memory 记录长期稳定约束、默认命令和常见坑。',
      'rules 记录分流条件、禁区和验收门槛。',
      'skills 固化稳定复用、可独立验证的闭环。'
    ],
    tone: 'teal'
  },
  {
    title: '何时升级成 skill',
    meta: 'promotion',
    points: [
      '输入输出稳定、步骤固定、可独立验证。',
      '跨任务重复出现，且命令链已经收敛。',
      '需要复用时，从临时步骤升级成 skill。'
    ],
    tone: 'orange'
  },
  {
    title: '何时停止自动重试',
    meta: 'handoff',
    points: [
      '达到重试阈值后，停止继续自动推进。',
      '权限不足、设备不可用或关键事实冲突时立即交还给人。',
      '交接时必须带上错误、日志、截图和建议动作。'
    ],
    tone: 'blue'
  }
];

const harnessFlowSteps = [
  {
    step: '01',
    title: '接收标准任务输入',
    meta: 'goal / context / done when',
    detail: '先把 Goal、Context、Constraints、文件路径和 Done When 组装成标准输入，明确范围和验收口径。'
  },
  {
    step: '02',
    title: '装载项目上下文',
    meta: 'agents / docs / rules / memory',
    detail: '先读 AGENTS.md，再按需展开 docs、rules、memory 和现有测试，把任务放回真实工程上下文。'
  },
  {
    step: '03',
    title: '根据路由选择能力',
    meta: 'planning / research / build / device',
    detail: '根据 skill metadata、rules 和当前阶段，决定先规划、先 research，还是直接进入构建和真机验证。'
  },
  {
    step: '04',
    title: '执行并即时验证',
    meta: 'docs / tests / source / verify',
    detail: '按任务需要修改 docs、tests、source、resources，并立即执行 build、test、install、launch、screenshot、hilog。'
  },
  {
    step: '05',
    title: '失败回灌驱动下一轮',
    meta: 'build / test / screenshot / logs',
    detail: '把编译错误、测试失败、命令返回码、截图差异和日志异常注入下一轮上下文，继续修复直到结果收敛。'
  },
  {
    step: '06',
    title: '成功回写沉淀资产',
    meta: 'retry / docs / rules / memory',
    detail: '把稳定命令链、验证方式、路由条件和长期约束分别写回 docs、memory、rules、skills，供后续任务直接复用。'
  }
];

const harnessCards = [
  { title: '入口短，证据全', body: 'AGENTS 负责入口，docs 负责事实，验证结果负责证明任务真的完成。', tone: 'blue' },
  { title: '失败不是终点', body: 'build、截图、日志和回归结果都要回灌给下一轮，而不是停在“看起来像对”。', tone: 'teal' },
  { title: '回写才会越来越准', body: '没有 writeback，AI 每次都在重新认识项目；有 writeback，命中率会持续提升。', tone: 'orange' }
];

const closingSummaryCards = [
  {
    title: '任务输入',
    body: 'Goal、Context、Constraints、Files、Done When 必须写全，减少模型自行补全需求。'
  },
  {
    title: '文档分层',
    body: 'AGENTS.md 只做导航；docs 记录事实；memory 存长期稳定约束，不把三者写成一份长文。'
  },
  {
    title: '能力组织',
    body: 'metadata 先做分类筛选；rules 再做路由；高频稳定动作沉淀为 skill；复杂分发再升级为 plugin。'
  },
  {
    title: '工具边界',
    body: 'CLI 负责 build、install、launch、screenshot、hilog、regression；MCP 负责外部系统与服务接入。'
  },
  {
    title: 'Harness',
    body: '失败证据必须自动回灌下一轮；成功结论必须写回 docs、memory、rules、skills。'
  },
  {
    title: '团队沉淀',
    body: '先固化共用命令链、验收口径和模板，再沉淀到全局配置、共享 skill 仓库和插件。'
  }
];

const closingSummaryTags = ['Task Spec', 'Docs Map', 'Skill Routing', 'Harness Loop'];

const coverTags = ['workflow first', 'Docs as Map', 'Skill Routing', 'Harness loop'];

const workflowTaskCard = {
  title: '最小任务卡片示例',
  note: '这不是长 prompt，而是发给 Agent 的结构化任务单。',
  rows: [
    { label: 'Goal', value: '统一错误提示文案，并保持现有触发链路不变。' },
    { label: 'Files', value: 'src/core/notice-policy.ts / tests/notice-policy.test.ts / resources/i18n/zh-CN.json' },
    { label: 'Constraints', value: '不改触发时机，不扩到无关模块。' },
    { label: 'Done When', value: 'build / test 通过，截图与日志符合预期。' },
    { label: 'Refs', value: 'AGENTS.md + docs/context + docs/verify' }
  ]
};

const workflowTaskSnippet = workflowTaskCard.rows
  .map((row) => `${row.label}:\n- ${row.value}`)
  .join('\n');

const agentsSnippet = [
  '# Me2Robot / AGENTS.md',
  '',
  '- Scope: entry/ 下的 HarmonyOS 主工程',
  '- Read first:',
  '  - docs/context/global-notice.md',
  '  - docs/architecture/notice-flow.md',
  '  - .codex/rules/skill-routing.md',
  '- Build: hvigor assembleHap',
  '- Device: hdc install -r <hap> / aa start / screenCap / hilog',
  '- Done when: build + test + screenshot + logs 都通过',
  '- Do not: 擅自扩写范围、跳过验证、修改无关模块'
].join('\n');

const skillTreeSnippet = [
  'harmony-hdc-deploy-verify/',
  '  SKILL.md / scripts/run.ps1',
  '  references/hdc-command-notes.md',
  '',
  'SKILL.md frontmatter',
  '---',
  'name: harmony-hdc-deploy-verify',
  'category: harmonyos, device-verify',
  'triggers: [build, hdc, screenshot, hilog]',
  'verify: [installed, screenshot, logs]',
  '---'
].join('\n');

const skillRoutingSnippet = [
  '| 场景 | 首选 skill | 不要用 |',
  '| --- | --- | --- |',
  '| 范围不清、跨模块 | Context-task-planning | 已有明确文件 |',
  '| API / 框架事实待确认 | Auto-research | docs 已覆盖 |',
  '| HarmonyOS 编译 | harmony-hvigor-build | 只是纯文档改动 |',
  '| 真机安装 / 截图 / 日志 | harmony-hdc-deploy-verify | 没有连接设备 |',
  '',
  'Rule: planning -> research -> execute -> verify'
].join('\n');

const pluginBundleSnippet = [
  'me2robot-engineering-plugin/',
  '  .codex-plugin/plugin.json',
  '  skills/  scripts/  hooks/',
  '  assets/  .mcp.json',
  '',
  'plugin.json',
  '{',
  '  "name": "me2robot-engineering-plugin"',
  '}'
].join('\n');

const practicalSkillsKnowledgeCards = [
  {
    title: 'Skill',
    meta: '高频能力',
    intro: 'Skill 用于封装可复用的高频动作。',
    topics: ['metadata', 'triggers', 'verify', '闭环'],
    paths: [{ label: '', value: '~/.codex/skills/<skill-name>/SKILL.md' }],
    points: [
      '一个 skill 只负责一个稳定闭环，避免把规划、研究、构建、设备验证混写在同一个 skill 里。',
      'frontmatter metadata 用于首轮筛选，至少写 name、description、triggers、category、scope、verify。',
      '在 AGENTS.md 中显式声明已有 skill 分类，帮助模型在首轮检索时缩小范围。',
      '正文重点写输入条件、执行步骤、验证出口和失败处理，不重复堆业务背景。',
      '示例要能独立复用，最好直接给出命令链、输入约束和验收方式。'
    ],
    example: skillTreeSnippet,
    caution: '不要为一次性任务、临时 workaround 或强依赖会话上下文的内容单独写 skill。',
    tone: 'blue'
  },
  {
    title: 'Rules',
    meta: '二层路由',
    intro: 'Rules 用于约束路由，帮助模型稳定选对能力。',
    topics: ['routing', 'scope', '禁区', '顺序'],
    paths: [{ label: '', value: '~/.codex/rules/<rule-name>.rules' }],
    points: [
      '把规则写成路由表，比写成长段提示词更稳，字段至少包括场景、首选 skill、不要用、追加验证。',
      '针对相似 skill，明确适用场景、scope、禁区和切换条件，辅助模型做二层判断。',
      '验收门槛、优先级、禁区和追加验证更适合写在 rules，而不是散落在 prompt 里。',
      '规则里适合定义顺序，例如先 planning，再 research，再 build/device，最后 verification。',
      'rules 解决的是怎么选、何时切换，不是把 skill 内部步骤再抄一遍。'
    ],
    example: skillRoutingSnippet,
    caution: '不要把项目事实和一次性结论塞进 rules；事实进 docs，长期稳定结论进 memory。',
    tone: 'teal'
  },
  {
    title: 'Plugin',
    meta: '打包分发',
    intro: 'Plugin 用于打包分发 skill、脚本和集成能力。',
    topics: ['scripts', 'hooks', 'MCP', '分发'],
    paths: [{ label: '', value: '~/plugins/<plugin-name>/.codex-plugin/plugin.json' }],
    points: [
      '当一个能力需要连 scripts、hooks、MCP、assets 和安装顺序一起交付时，再升级成 plugin。',
      '相比单个 skill，plugin 可以统一分发 scripts、hooks、MCP、资源文件和安装信息。',
      '适合封装需要脚本执行、钩子注册、MCP 配置或资源文件协同的能力。',
      'plugin 适合统一安装、统一版本和统一执行入口，不适合替代普通 markdown 说明。',
      '如果只是稳定方法说明或单一命令链，skill 通常已经足够，没有必要一开始就上 plugin。'
    ],
    example: pluginBundleSnippet,
    caution: '不要把 plugin 当成默认选项；只有确实存在打包、安装和团队分发需求时才值得引入。',
    tone: 'orange'
  }
];

const backwriteSnippet = [
  'Backwrite after delivery:',
  '',
  'docs/context/global-notice.md',
  '- 记录异常类型到统一提示文案的映射',
  '',
  '.codex/rules/skill-routing.md',
  '- 新增通知类改动的 skill 路由和验证要求',
  '',
  '.codex/memory/project-memory.md',
  '- 记录设备截图路径、默认 build 命令和常见 ArkTS 限制',
  '',
  'skills/harmony-hdc-deploy-verify/',
  '- 若命令链稳定复用，则升级为团队 skill'
].join('\n');

const executionSnippet = [
  'Harness runtime',
  '',
  'task      -> Goal + Files + Constraints + Done When',
  'load      -> AGENTS.md + docs + rules + memory + tests',
  'route     -> planning / research / build / device / verify',
  'execute   -> docs + tests + source + resources + commands',
  'verify    -> build + test + install + launch + screenshot + hilog',
  'feedback  -> inject build errors / test failures / screenshots / logs',
  'writeback -> docs(facts) / memory(stable constraints)',
  '          -> rules(routing) / skills(reusable loops)',
  'handoff   -> stop on retry limit / permission / device / fact conflict'
].join('\n');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toneByIndex(index) {
  return ['blue', 'teal', 'orange'][index % 3];
}

function renderTrainingPanelCards(cards, { delayStart = 300, delayStep = 55, compact = false } = {}) {
  return cards
    .map((card, index) => {
      const tone = card.tone ?? toneByIndex(index);
      return `
        <article class="training-panel-card training-panel-card--${tone}${compact ? ' training-panel-card--compact' : ''} enter-fade-up" style="--enter-delay: ${delayStart + index * delayStep}ms;">
          <div class="training-panel-card__head">
            <h3>${escapeHtml(card.title)}</h3>
            ${card.meta ? `<span class="training-panel-card__meta">${escapeHtml(card.meta)}</span>` : ''}
          </div>
          ${card.fit ? `<p class="training-panel-card__fit">${escapeHtml(card.fit)}</p>` : ''}
          ${card.body ? `<p>${escapeHtml(card.body)}</p>` : ''}
          ${card.points ? `<ul class="training-panel-card__points">${card.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>` : ''}
          ${card.caution ? `<p class="training-panel-card__note">${escapeHtml(card.caution)}</p>` : ''}
        </article>
      `;
    })
    .join('');
}

function renderTrainingRailSteps(items, { delayStart = 300, delayStep = 55, compact = false } = {}) {
  return items
    .map((item, index) => {
      const tone = item.tone ?? toneByIndex(index);
      return `
        <article class="training-rail-card training-rail-card--${tone}${compact ? ' training-rail-card--compact' : ''} enter-fade-up" style="--enter-delay: ${delayStart + index * delayStep}ms;">
          <span class="training-rail-card__step">${escapeHtml(item.step)}</span>
          <div class="training-rail-card__body">
            <div class="training-rail-card__head">
              <h3>${escapeHtml(item.title)}</h3>
              ${item.meta ? `<span class="training-rail-card__meta">${escapeHtml(item.meta)}</span>` : ''}
            </div>
            <p>${escapeHtml(item.detail)}</p>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderTrainingList(items, { ordered = false, className = 'training-list', delayStart = 300, delayStep = 40 } = {}) {
  const tag = ordered ? 'ol' : 'ul';
  return `
    <${tag} class="${className}">
      ${items
        .map(
          (item, index) => `
            <li class="enter-fade-up" style="--enter-delay: ${delayStart + index * delayStep}ms;">${escapeHtml(item)}</li>
          `
        )
        .join('')}
    </${tag}>
  `;
}

function renderCodeCard(title, code, { delay = 320, tone = 'blue', caption = '' } = {}) {
  return `
    <article class="training-code-card training-code-card--${tone} enter-fade-up" style="--enter-delay: ${delay}ms;">
      <div class="training-code-card__head">
        <h3>${escapeHtml(title)}</h3>
        ${caption ? `<span>${escapeHtml(caption)}</span>` : ''}
      </div>
      <pre><code>${escapeHtml(code)}</code></pre>
    </article>
  `;
}

function renderTableRows(rows, type) {
  if (type === 'models') {
    return rows
      .map(
        (row, index) => `
          <tr class="enter-fade-up" style="--enter-delay: ${300 + index * 45}ms;">
            <td><strong>${escapeHtml(row.model)}</strong>${row.sub ? `<span>${escapeHtml(row.sub)}</span>` : ''}</td>
            <td>${escapeHtml(row.fit)}</td>
            <td>${escapeHtml(row.strengths)}</td>
            <td>${escapeHtml(row.limits)}</td>
          </tr>
        `
      )
      .join('');
  }

  return rows
    .map(
      (row, index) => `
        <tr class="enter-fade-up" style="--enter-delay: ${300 + index * 45}ms;">
          <td><strong>${escapeHtml(row.layer)}</strong></td>
          <td>${escapeHtml(row.purpose)}</td>
          <td>${escapeHtml(row.examples)}</td>
          <td>${escapeHtml(row.when)}</td>
        </tr>
      `
    )
    .join('');
}

function slideCover() {
  return `
    <section id="cover" data-transition="fade">
      <div class="slide-shell slide-shell--cover">
        <div class="hero-copy">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">AI 实战分享 / HarmonyOS / Me2Robot</span>
          <h1 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">AI实战 HarmonyOS<br />应用开发分享</h1>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            以Me2Robot HarmonyOS应用为例：围绕任务输入、文档组织、Skill路由与Harness闭环展开
          </p>
          <p class="hero-statement enter-fade-up" style="--enter-delay: 300ms;">将AI接入完整工程流</p>
          <div class="hero-tags enter-fade-up" style="--enter-delay: 420ms;">
            ${coverTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>

        <div class="hero-visual">
          <img
            class="hero-figure hero-figure--cover-photo enter-fade-up"
            style="--enter-delay: 180ms;"
            src="${asset('cover-user-hero-clean.jpg')}"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  `;
}

function slideOverviewCore() {
  return `
    <section id="overview-core" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Overview / 分享结构</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">分享内容</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            围绕概念认知、技术关系、工程方法与项目案例四条主线，系统说明 AI 工程落地需要关注的核心问题。
          </p>
        </header>

        <div class="overview-core-stage" data-visual="overview-core">
          <div class="overview-core-stage__image" aria-hidden="true">
            <img src="${asset('overview-core-hero.jpg')}" alt="" />
          </div>
          <div class="overview-core-stage__wash" aria-hidden="true"></div>

          <div class="overview-core-stage__content">
            <article class="overview-core-summary enter-fade-up" style="--enter-delay: 280ms;">
              <span class="panel-kicker">Overview</span>
              <h3>${escapeHtml(overviewCards[0].title)}</h3>
              <p>${escapeHtml(overviewCards[0].body)}</p>
              <div class="overview-core-summary__track" aria-hidden="true">
                <span>概念认知</span>
                <span>技术关系</span>
                <span>工程方法</span>
                <span>项目案例</span>
              </div>
            </article>

            <div class="overview-core-grid">
              ${renderTrainingPanelCards(overviewCards.slice(1), { delayStart: 340 })}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function slideStackRelationship() {
  return `
    <section id="stack-relationship" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Concept / 技术分层</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">LLM、Agent、Skill、MCP、CLI、Harness 怎么分工</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            六个名词对应六段职责：生成、调度、复用、接入、执行和闭环。
          </p>
        </header>

        <div class="training-rail-stage training-rail-stage--wide" data-visual="stack-relationship">
          <div class="training-rail-board glass-card">
            <div class="training-rail-board__head enter-fade-up" style="--enter-delay: 260ms;">
              <span class="panel-kicker">Main Chain</span>
              <p>从上到下，是一条把生成能力推进到工程交付的责任链；越往下，越接近真实工程动作。</p>
            </div>
            <div class="training-rail-list" style="--training-steps: ${stackLayers.length};">
              ${renderTrainingRailSteps(stackLayers, { compact: true, delayStart: 300 })}
            </div>
          </div>

          <aside class="training-side-stack">
            <article class="training-hero-card training-hero-card--image enter-fade-up" style="--enter-delay: 320ms;">
              <img src="${asset('stack-relationship-hero.jpg')}" alt="" />
              <div class="training-hero-card__overlay">
                <span class="panel-kicker">Project Mapping</span>
                <strong>这 6 层对应从生成到验证回归的完整交付责任链。</strong>
                <p>LLM 负责生成初稿，Agent 负责拆任务，Skills 负责复用流程，MCP 负责查外部资源，CLI 负责 hvigor / hdc / hilog / screenshot，Harness 负责把验证和重试收口。</p>
                <div class="training-chip-row">
                  <span>AGENTS.md</span>
                  <span>Rules</span>
                  <span>Skills</span>
                  <span>MCP</span>
                  <span>CLI</span>
                  <span>Harness</span>
                </div>
              </div>
            </article>

            <div class="training-card-grid" style="--training-columns: 2;">
              ${renderTrainingPanelCards(stackSupportCards, { delayStart: 380, compact: true })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function slideParadigmEvolution() {
  return `
    <section id="paradigm-evolution" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Method / 工程演进</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">从 Prompt Engineering 到 Harness Engineering</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            三者分别解决指令设计、上下文组织和验证闭环问题。
          </p>
        </header>

        <div class="training-rail-stage training-rail-stage--wide" data-visual="paradigm-evolution">
          <div class="training-rail-board glass-card">
            <div class="training-rail-board__head enter-fade-up" style="--enter-delay: 260ms;">
              <span class="panel-kicker">Three Generations</span>
              <p>Prompt 决定表达是否清楚，Context 决定信息是否齐全，Harness 决定结果能否被验证。</p>
            </div>
            <div class="training-rail-list" style="--training-steps: ${paradigmStages.length};">
              ${renderTrainingRailSteps(paradigmStages, { delayStart: 300 })}
            </div>
          </div>

          <aside class="training-side-stack">
            <article class="training-hero-card training-hero-card--image enter-fade-up" style="--enter-delay: 320ms;">
              <img src="${asset('paradigm-evolution-hero.jpg')}" alt="" />
              <div class="training-hero-card__overlay">
                <span class="panel-kicker">Practical Meaning</span>
                <strong>这三层对应 AI 工程从“会答”走向“能交付”的三个控制点。</strong>
                <p>Prompt 阶段主要优化输入，Context 阶段开始治理项目知识，Harness 阶段把工具、验证、重试和回写接入工程闭环。</p>
              </div>
            </article>

            <article class="training-note-card enter-fade-up" style="--enter-delay: 380ms;">
              <span class="panel-kicker">Reference</span>
              <strong>Give Codex a map, not a 1,000-page instruction manual.</strong>
              <p>这句话对应的是 Context Engineering：AGENTS.md 负责导航，docs、rules、memory 分层承载事实，后续再由 Harness 负责验证与回写。</p>
            </article>

            ${renderTrainingList(paradigmSignals, { className: 'training-hero-list', delayStart: 420 })}
          </aside>
        </div>
      </div>
    </section>
  `;
}

function slideModelComparison() {
  return `
    <section id="model-comparison" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Models / 模型能力</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">模型选择按任务类型划分</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            模型比较更适合看“擅长什么任务”，而不是抽象地看谁更强。真正落地时，还要看它能否被工程体系稳定放大。
          </p>
        </header>

        <div class="training-data-stage training-data-stage--comparison" data-visual="model-comparison">
          <div class="training-matrix-card training-matrix-card--image glass-card">
            <img class="training-matrix-card__bg" src="${asset('model-comparison-table-bg.jpg')}" alt="" />
            <div class="training-matrix-card__head enter-fade-up" style="--enter-delay: 260ms;">
              <span class="panel-kicker">Fit Matrix</span>
              <p>这里强调的是使用分工：谁更适合仓库执行，谁更适合复杂重构，谁更适合视觉和文档表达。</p>
            </div>
            <div class="training-table-wrap">
              <table class="training-table training-table--tools training-table--model-comparison">
                <thead>
                  <tr>
                    <th>模型</th>
                    <th>更适合</th>
                    <th>优势</th>
                    <th>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  ${renderTableRows(modelRows, 'models')}
                </tbody>
              </table>
            </div>
          </div>

          <aside class="training-side-stack">
            <article class="training-hero-card training-hero-card--image enter-fade-up" style="--enter-delay: 320ms;">
              <img src="${asset('paradigm-systems-hero.svg')}" alt="" />
              <div class="training-hero-card__overlay">
                <span class="panel-kicker">Engineering Reality</span>
                <strong>模型负责发挥上限，Harness 负责把上限稳定下来。</strong>
                <p>同一个模型，在没有 rules、skills、memory 和验证闭环的情况下，表现波动会明显变大。</p>
                <div class="training-chip-row">
                  <span>Rules</span>
                  <span>Skills</span>
                  <span>Memory</span>
                  <span>CLI</span>
                  <span>MCP</span>
                </div>
              </div>
            </article>

            <div class="training-card-grid" style="--training-columns: 1;">
              ${renderTrainingPanelCards(modelSupportCards, { delayStart: 380, compact: true })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function slideModelComparisonV2() {
  return `
    <section id="model-comparison" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Models / 模型能力</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">主流模型怎么选</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            写代码、做重构、出页面、整理长文档不是同一类任务。模型要按任务类型选择，再用 Context 和 Harness 把结果稳定下来。
          </p>
        </header>

        <div class="training-data-stage training-data-stage--comparison" data-visual="model-comparison">
          <div class="training-matrix-card training-matrix-card--image glass-card">
            <img class="training-matrix-card__bg" src="${asset('model-comparison-table-bg.jpg')}" alt="" />
            <div class="training-matrix-card__head enter-fade-up" style="--enter-delay: 260ms;">
              <span class="panel-kicker">Fit Matrix</span>
            </div>
            <div class="training-table-wrap">
              <table class="training-table training-table--tools training-table--model-comparison">
                <thead>
                  <tr>
                    <th>模型</th>
                    <th>更适合</th>
                    <th>主要优势</th>
                    <th>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  ${renderTableRows(modelRows, 'models')}
                </tbody>
              </table>
            </div>
          </div>

          <aside class="training-side-stack">
            <article class="training-hero-card training-hero-card--image enter-fade-up" style="--enter-delay: 320ms;">
              <img src="${asset('model-comparison-hero.jpg')}" alt="" />
              <div class="training-hero-card__overlay">
                <span class="panel-kicker">工程结论</span>
                <strong>模型能力有差异，但稳定发挥仍然依赖 Context 和 Harness 约束。</strong>
                <p>没有 rules、skills、memory 和验证闭环，同一个模型在项目里的表现会明显波动。</p>
              </div>
            </article>

            <div class="training-card-grid" style="--training-columns: 1;">
              ${renderTrainingPanelCards(modelSupportCards, { delayStart: 380, compact: true })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function slideWorkflowSuperpowers() {
  return `
    <section id="workflow-superpowers" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Method / AGENTS + docs + memory</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">AGENTS、docs、memory 怎么拆</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            AGENTS 负责导航，docs 负责事实，memory 负责长期稳定约束；三者分清后，命中率和复用率都会明显提升。
          </p>
        </header>

        <div class="workflow-knowledge-stage" data-visual="workflow-superpowers">
          ${workflowKnowledgeCards
            .map(
              (card, index) => `
                <article class="workflow-knowledge-card workflow-knowledge-card--${card.tone ?? toneByIndex(index)} glass-card enter-fade-up" style="--enter-delay: ${260 + index * 60}ms;">
                  <div class="workflow-knowledge-card__head">
                    <span class="workflow-knowledge-card__index">${String(index + 1).padStart(2, '0')}</span>
                    <div>
                      ${card.meta ? `<span class="panel-kicker">${escapeHtml(card.meta)}</span>` : ''}
                      <h3>${escapeHtml(card.title)}</h3>
                    </div>
                  </div>

                  <p class="workflow-knowledge-card__intro">${escapeHtml(card.intro)}</p>

                  <div class="workflow-knowledge-card__topics">
                    ${card.topics
                      .map((topic) => `<span class="workflow-knowledge-card__topic">${escapeHtml(topic)}</span>`)
                      .join('')}
                  </div>

                  ${card.paths?.length
                    ? `
                      <div class="workflow-knowledge-card__paths">
                        ${card.paths
                          .map(
                            (path) => `
                              <div class="workflow-knowledge-path">
                                ${path.label ? `<span>${escapeHtml(path.label)}</span>` : ''}
                                <strong>${escapeHtml(path.value)}</strong>
                              </div>
                            `
                          )
                          .join('')}
                      </div>
                    `
                    : ''}

                  <div class="workflow-knowledge-card__section">
                    <span class="workflow-knowledge-card__label">建议内容</span>
                    <ul class="workflow-knowledge-card__points">
                      ${card.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="workflow-knowledge-card__section workflow-knowledge-card__section--example">
                    <span class="workflow-knowledge-card__label">最小示例</span>
                    <div class="workflow-knowledge-card__window">
                      <div class="workflow-knowledge-card__window-bar">
                        <div class="workflow-knowledge-card__window-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <label>snippet</label>
                      </div>
                      <pre class="workflow-knowledge-card__example">${escapeHtml(card.example)}</pre>
                    </div>
                  </div>

                  <p class="workflow-knowledge-card__caution">${escapeHtml(card.caution)}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function slidePracticalDocs() {
  return `
    <section id="practical-docs" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Practice / 文档组织</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">AGENTS.md、docs、memory 怎么拆</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            文档体系的目标不是“写全”，而是“让 AI 在正确位置命中正确信息”。入口越清晰，执行越稳定。
          </p>
        </header>

        <div class="training-code-stage" data-visual="practical-docs">
          <div class="training-side-stack">
            ${renderCodeCard('全局与项目作用域示例', docsPlacementSnippet, { delay: 300, tone: 'blue', caption: 'global scope vs project scope' })}
            ${renderCodeCard('AGENTS.md 最小示例', agentsSnippet, { delay: 360, tone: 'teal', caption: '地图，不是手册' })}
          </div>

          <aside class="training-side-stack">
            <article class="training-note-card enter-fade-up" style="--enter-delay: 340ms;">
              <span class="panel-kicker">Practical Rule</span>
              <strong>AGENTS.md 负责导航，docs 负责专题事实，memory 负责长期稳定信息。</strong>
              <p>这三类信息一旦混写，AI 的命中率和复用率都会下降，团队也很难持续维护。</p>
            </article>

            <div class="training-card-grid" style="--training-columns: 1;">
              ${renderTrainingPanelCards(docsCards, { delayStart: 400, compact: true })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function slidePracticalSkills() {
  return `
    <section id="practical-skills" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Practice / Skills + Rules + Plugin</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">Skill、Rules、Plugin 怎么设计</h2>
        </header>

        <div class="workflow-knowledge-stage" data-visual="practical-skills">
          ${practicalSkillsKnowledgeCards
            .map(
              (card, index) => `
                <article class="workflow-knowledge-card workflow-knowledge-card--${card.tone ?? toneByIndex(index)} glass-card enter-fade-up" style="--enter-delay: ${260 + index * 60}ms;">
                  <div class="workflow-knowledge-card__head">
                    <span class="workflow-knowledge-card__index">${String(index + 1).padStart(2, '0')}</span>
                    <div>
                      ${card.meta ? `<span class="panel-kicker">${escapeHtml(card.meta)}</span>` : ''}
                      <h3>${escapeHtml(card.title)}</h3>
                    </div>
                  </div>

                  <p class="workflow-knowledge-card__intro">${escapeHtml(card.intro)}</p>

                  <div class="workflow-knowledge-card__topics">
                    ${card.topics
                      .map((topic) => `<span class="workflow-knowledge-card__topic">${escapeHtml(topic)}</span>`)
                      .join('')}
                  </div>

                  ${card.paths?.length
                    ? `
                      <div class="workflow-knowledge-card__paths${card.paths.length === 1 ? ' workflow-knowledge-card__paths--single' : ''}">
                        ${card.paths
                          .map(
                            (path) => `
                              <div class="workflow-knowledge-path">
                                <span>${escapeHtml(path.label)}</span>
                                <strong>${escapeHtml(path.value)}</strong>
                              </div>
                            `
                          )
                          .join('')}
                      </div>
                    `
                    : ''}

                  <div class="workflow-knowledge-card__section">
                    <span class="workflow-knowledge-card__label">建议内容</span>
                    <ul class="workflow-knowledge-card__points">
                      ${card.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="workflow-knowledge-card__section workflow-knowledge-card__section--example">
                    <span class="workflow-knowledge-card__label">最小示例</span>
                    <div class="workflow-knowledge-card__window">
                      <div class="workflow-knowledge-card__window-bar">
                        <div class="workflow-knowledge-card__window-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <label>snippet</label>
                      </div>
                      <pre class="workflow-knowledge-card__example">${escapeHtml(card.example)}</pre>
                    </div>
                  </div>

                  <p class="workflow-knowledge-card__caution">${escapeHtml(card.caution)}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function slideFailureAssets() {
  return `
    <section id="failure-assets" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Practice / 经验沉淀</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">一次任务做完后，哪些经验要回写</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            真正能长期提升团队效率的，不是这次任务完成了，而是这次任务产出的知识、规则和命令链下次还能直接复用。
          </p>
        </header>

        <div class="training-rail-stage training-rail-stage--wide" data-visual="failure-assets">
          <div class="training-rail-board glass-card">
            <div class="training-rail-board__head enter-fade-up" style="--enter-delay: 260ms;">
              <span class="panel-kicker">Backwrite Flow</span>
              <p>把临时经验升级成团队资产，关键不是“记下来”，而是放到正确层级并带上 owner 与 review。</p>
            </div>
            <div class="training-rail-list" style="--training-steps: ${failureAssetSteps.length};">
              ${renderTrainingRailSteps(failureAssetSteps, { compact: true, delayStart: 300 })}
            </div>
          </div>

          <aside class="training-side-stack">
            ${renderCodeCard('回写示例', backwriteSnippet, { delay: 320, tone: 'blue', caption: 'docs / rules / skills / memory' })}

            <article class="training-note-card enter-fade-up" style="--enter-delay: 380ms;">
              <span class="panel-kicker">Why It Matters</span>
              <strong>没有回写，AI 每次都在重新学习项目；有了回写，AI 才会越来越像团队成员。</strong>
              <p>尤其是命令链、坑点、验证方式和 skill 路由，一旦稳定复用，就应该尽快沉淀。</p>
            </article>

            <div class="training-card-grid" style="--training-columns: 2;">
              ${renderTrainingPanelCards(failureAssetCards, { delayStart: 430, compact: true })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function slideExecutionLayers() {
  return `
    <section id="execution-layers" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Execution / Harness Orchestration</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">一个任务发出后，Harness 如何驱动整条工程链</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            Harness 的核心不是自动执行，而是把验证证据回灌到下一轮，并把稳定结论回写到 docs、memory、rules 和 skills。
          </p>
        </header>

        <div class="training-rail-stage training-rail-stage--wide" data-visual="execution-layers">
          <div class="training-rail-board glass-card">
            <div class="training-rail-board__head enter-fade-up" style="--enter-delay: 260ms;">
              <span class="panel-kicker">Runtime Loop</span>
              <p>Harness 不是单个 tool，也不是单个 skill，而是一条运行时编排链：任务整形、上下文装载、能力路由、执行验证、失败回灌、成功回写。</p>
            </div>
            <div class="training-rail-list" style="--training-steps: ${harnessFlowSteps.length};">
              ${renderTrainingRailSteps(harnessFlowSteps, { compact: true, delayStart: 300 })}
            </div>
          </div>

          <aside class="training-side-stack">
            ${renderCodeCard('Harness 运行时编排', executionSnippet, { delay: 320, tone: 'teal', caption: 'task -> feedback -> writeback' })}

            <div class="training-card-grid" style="--training-columns: 2;">
              ${renderTrainingPanelCards(executionCards, { delayStart: 430, compact: true })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function slideHarnessFlow() {
  return `
    <section id="harness-flow" data-transition="fade">
      <div class="slide-shell slide-shell--training-page">
        <header class="section-header section-header--compact">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Harness / 闭环编排</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">Harness Engineering 的核心流程</h2>
          <p class="slide-subtitle enter-fade-up" style="--enter-delay: 220ms;">
            Harness 的核心不是又一层概念，而是把执行环境、结构化文档、自动验证和重试交接真正接起来。
          </p>
        </header>

        <div class="training-rail-stage training-rail-stage--wide" data-visual="harness-flow">
          <div class="training-rail-board glass-card">
            <div class="training-rail-board__head enter-fade-up" style="--enter-delay: 260ms;">
              <span class="panel-kicker">Core Flow</span>
              <p>这 5 步对应的是一个 AI 工程系统的最小闭环：环境、文档、反馈、约束和工具。</p>
            </div>
            <div class="training-rail-list" style="--training-steps: ${harnessFlowSteps.length};">
              ${renderTrainingRailSteps(harnessFlowSteps, { compact: true, delayStart: 300 })}
            </div>
          </div>

          <aside class="training-side-stack">
            <article class="training-hero-card training-hero-card--image enter-fade-up" style="--enter-delay: 320ms;">
              <img src="${asset('harness-system-hero.svg')}" alt="" />
              <div class="training-hero-card__overlay">
                <span class="panel-kicker">Harness View</span>
                <strong>Harness 的目标不是替代人，而是让 AI 能在明确边界里持续推进任务。</strong>
                <p>到达自动重试阈值后，它要么继续修复，要么把问题和证据清晰地交还给人，而不是停在半路。</p>
                <div class="training-chip-row">
                  <span>Sandbox</span>
                  <span>Docs</span>
                  <span>Verify</span>
                  <span>Retry</span>
                  <span>Handoff</span>
                </div>
              </div>
            </article>

            <div class="training-card-grid" style="--training-columns: 1;">
              ${renderTrainingPanelCards(harnessCards, { delayStart: 380, compact: true })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function slideClosingChecklist() {
  return `
    <section id="closing-checklist" data-transition="fade">
      <div class="slide-shell slide-shell--closing-summary">
        <div class="closing-copy">
          <span class="kicker enter-fade-up" style="--enter-delay: 60ms;">Summary / 最佳实践</span>
          <h2 class="slide-title enter-fade-up" style="--enter-delay: 140ms;">最佳实践总结</h2>
          <p class="slide-subtitle enter-fade-up closing-copy__subtitle" style="--enter-delay: 220ms;">
            任务输入、文档分层、能力封装、验证闭环与经验回写，决定 AI 能否稳定进入工程交付。
          </p>
          <div class="closing-summary-head enter-fade-up" style="--enter-delay: 300ms;">
            <div class="closing-summary-head__copy">
              <span class="panel-kicker">Engineering Checklist</span>
              <strong>把模型能力稳定落到项目里，核心是把输入、约束、执行和回写组织成闭环。</strong>
            </div>
          </div>
          <div class="closing-summary-grid">
            ${closingSummaryCards
              .map(
                (card, index) => `
                  <article class="closing-summary-card closing-summary-card--${toneByIndex(index)} enter-fade-up" style="--enter-delay: ${340 + index * 45}ms;">
                    <h3>${escapeHtml(card.title)}</h3>
                    <p>${escapeHtml(card.body)}</p>
                  </article>
                `
              )
              .join('')}
          </div>
          <div class="closing-summary-tags enter-fade-up" style="--enter-delay: 620ms;">
            ${closingSummaryTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>

        <div class="closing-visual">
          <div class="closing-visual__frame enter-fade-up" style="--enter-delay: 220ms;">
            <img
              class="closing-visual__image"
              src="${asset('closing-summary-hero.jpg')}"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderSlides() {
  return [
    slideCover(),
    slideOverviewCore(),
    slideStackRelationship(),
    slideParadigmEvolution(),
    slideModelComparisonV2(),
    slideWorkflowSuperpowers(),
    slidePracticalSkills(),
    slideExecutionLayers(),
    slideClosingChecklist()
  ].join('\n');
}
