import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { renderSlides } from './slides.js';

const indexHtml = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const themeCss = readFileSync(new URL('./theme.css', import.meta.url), 'utf8');

describe('renderSlides', () => {
  it('renders the approved 9-slide structure', () => {
    const html = renderSlides();
    const sectionIds = Array.from(html.matchAll(/<section id="([^"]+)"/g)).map((match) => match[1]);

    expect(sectionIds).toEqual([
      'cover',
      'overview-core',
      'stack-relationship',
      'paradigm-evolution',
      'model-comparison',
      'workflow-superpowers',
      'practical-skills',
      'execution-layers',
      'closing-checklist'
    ]);

    expect(html).not.toContain('id="practical-docs"');
    expect(html).not.toContain('id="failure-assets"');
    expect(html).not.toContain('id="harness-flow"');
    expect(html).not.toContain('id="harmony-benchmark"');
    expect(html).not.toContain('id="tool-comparison"');
  });

  it('keeps the approved cover and overview copy', () => {
    const html = renderSlides();

    expect(html).toContain('AI实战 HarmonyOS<br />应用开发分享');
    expect(html).toContain('将AI接入完整工程流');
    expect(html).toContain('以Me2Robot HarmonyOS应用为例：围绕任务输入、文档组织、Skill路由与Harness闭环展开');
    expect(html).toContain('workflow first');
    expect(html).toContain('Docs as Map');
    expect(html).toContain('Skill Routing');
    expect(html).toContain('Harness loop');
    expect(html).toContain('分享内容');
    expect(html).toContain('概念认知、技术关系、工程方法与项目案例四条主线');
  });

  it('keeps the approved concept and model pages', () => {
    const html = renderSlides();

    expect(html).toContain('LLM、Agent、Skill、MCP、CLI、Harness 怎么分工');
    expect(html).toContain('Prompt Engineering');
    expect(html).toContain('Context Engineering');
    expect(html).toContain('Harness Engineering');
    expect(html).toContain('主流模型怎么选');
    expect(html).toContain('GPT-5.4');
    expect(html).toContain('Claude Opus 4.7');
    expect(html).toContain('Gemini 3.1 Pro Preview');
    expect(html).toContain('GLM 5.1');
    expect(html).toContain('MiniMax M2.7');
    expect(html).toContain('1M 上下文适合什么');
    expect(html).toContain('模型能力有差异，但稳定发挥仍然依赖 Context 和 Harness 约束。');
  });

  it('renders the compressed practical back half with concrete project content', () => {
    const html = renderSlides();

    expect(html).toContain('AGENTS、docs、memory 怎么拆');
    expect(html).toContain('AGENTS 负责导航，docs 负责事实，memory 负责长期稳定约束；三者分清后，命中率和复用率都会明显提升。');
    expect(html).toContain('AGENTS.md');
    expect(html).toContain('全局 AGENTS 适合放跨项目通用原则，作用接近 `CLAUDE.md`。');
    expect(html).toContain('Read first 直接指向 PRD、项目结构、模块说明和 rules 路由。');
    expect(html).toContain('Read first: docs/context/notice-flow.md');
    expect(html).toContain('项目结构文档写目录树、分层职责、模块边界和关键文件作用。');
    expect(html).toContain('docs/prd | architecture | modules | verify');
    expect(html).toContain('prd/me2robot-overview.md');
    expect(html).toContain('memory');
    expect(html).toContain('默认 UTF-8');
    expect(html).toContain('Get-Content -Encoding UTF8');
    expect(html).toContain('Windows 中文乱码、路径空格、真机权限差异');
    expect(html).toContain('~/.codex/AGENTS.md');
    expect(html).toContain('&lt;repo&gt;/AGENTS.md');

    expect(html).toContain('Skill、Rules、Plugin 怎么设计');
    expect(html).toContain('Skill 用于封装可复用的高频动作。');
    expect(html).toContain('frontmatter metadata 用于首轮筛选');
    expect(html).toContain('输入条件、执行步骤、验证出口和失败处理');
    expect(html).toContain('Rules 用于约束路由，帮助模型稳定选对能力。');
    expect(html).toContain('适用场景、scope、禁区和切换条件');
    expect(html).toContain('场景 | 首选 skill | 不要用 |');
    expect(html).toContain('Plugin 用于打包分发 skill、脚本和集成能力。');
    expect(html).toContain('相比单个 skill，plugin 可以统一分发 scripts、hooks、MCP、资源文件和安装信息。');
    expect(html).toContain('脚本执行、钩子注册、MCP 配置或资源文件协同');

    expect(html).toContain('一个任务发出后，Harness 如何驱动整条工程链');
    expect(html).toContain('Harness 的核心不是自动执行，而是把验证证据回灌到下一轮，并把稳定结论回写到 docs、memory、rules 和 skills。');
    expect(html).toContain('失败时回灌什么');
    expect(html).toContain('成功后写回哪里');
    expect(html).toContain('何时升级成 skill');
    expect(html).toContain('何时停止自动重试');
    expect(html).toContain('inject build errors / test failures / screenshots / logs');
    expect(html).toContain('docs(facts) / memory(stable constraints)');
    expect(html).toContain('rules(routing) / skills(reusable loops)');

    expect(html).toContain('最佳实践总结');
    expect(html).toContain('任务输入、文档分层、能力封装、验证闭环与经验回写，决定 AI 能否稳定进入工程交付。');
    expect(html).toContain('把模型能力稳定落到项目里，核心是把输入、约束、执行和回写组织成闭环。');
    expect(html).toContain('Goal、Context、Constraints、Files、Done When 必须写全');
    expect(html).toContain('AGENTS.md 只做导航；docs 记录事实；memory 存长期稳定约束');
    expect(html).toContain('metadata 先做分类筛选；rules 再做路由');
    expect(html).toContain('CLI 负责 build、install、launch、screenshot、hilog、regression');
    expect(html).toContain('失败证据必须自动回灌下一轮；成功结论必须写回 docs、memory、rules、skills');
    expect(html).toContain('Task Spec');
    expect(html).toContain('Harness Loop');
  });

  it('keeps the approved light visual shell and required assets', () => {
    const html = renderSlides();

    expect(indexHtml).toContain('AI实战 HarmonyOS 应用开发分享');
    expect(indexHtml).toContain('backdrop-image');
    expect(indexHtml).toContain('backdrop-glass');
    expect(themeCss).toContain('bg-tech-hero-light.svg');
    expect(html).toContain('/assets/overview-core-hero.jpg');
    expect(html).toContain('/assets/stack-relationship-hero.jpg');
    expect(html).toContain('/assets/model-comparison-hero.jpg');
    expect(html).toContain('/assets/model-comparison-table-bg.jpg');
    expect(html).toContain('/assets/closing-summary-hero.jpg');
    expect(readFileSync(new URL('./deck.css', import.meta.url), 'utf8')).toContain('/assets/closing-summary-backdrop.jpg');
  });
});
