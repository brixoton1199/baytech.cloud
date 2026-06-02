# Baytech AI Plus Content Implementation Plan

## 计划目的

这份计划把已确认的 `One-Stop AI Plus` 网站文案映射到现有 Vite SPA。它仍然是实施前计划，不直接改页面代码。

目标不是重新设计技术栈，而是在现有 vanilla JavaScript 页面结构里，把网站从 generic IT consulting 改成平台化的 AI Plus 网站：

- `AI Plus` 定义类别。
- `GPU Platform` 呈现硬件平台能力。
- `Managed AI` 承接模型、端点、私有部署和运维。
- `Solutions` 讲业务用途。
- `Resources` 建立教育和信任。
- `Company` 解释公司可信度。
- `Contact` 按 AI 意图分流。

## 输入文档

本计划以以下文档为依据：

- `docs/superpowers/specs/2026-06-02-baytech-one-stop-ai-plus-website-blueprint.md`
- `docs/superpowers/specs/2026-06-02-baytech-page-by-page-content-outline.md`
- `docs/superpowers/specs/2026-06-02-baytech-one-stop-ai-plus-draft-copy.md`

文档约定继续保持：

- 中文用于说明策略、取舍和实现注意点。
- 英文用于真正会上站的 copy、导航、按钮、FAQ、表单选项。

## 实施原则

1. 保持现有 Vite + vanilla JS 架构。
2. 先做内容和信息架构，不引入新框架。
3. 尽量复用现有组件 class：`page-header`、`section-header`、`service-card`、`solution-card`、`feature-list`、`btn`、`cta-section`。
4. 只有当新文案导致布局明显不适配时，才做小范围 CSS 调整。
5. 不提交生成目录 `baytech.cloud/`。
6. 不改业务敏感信息：公司名、地址、电话、邮箱、Web3Forms access key、外部 iframe URL。
7. 不写无证据 claim：SOC/ISO、NVIDIA Preferred Partner、客户 logo、客户 quote、SLA、公开价格、实时库存、自助 API/SDK/Terraform。

## 推荐导航映射

现阶段可以保留现有 routes，先改 public labels 和内容：

| 当前 route | 新公开角色 | 实施说明 |
| --- | --- | --- |
| `/` | `AI Plus` | 首页定义 One-Stop AI Plus 类别。 |
| `/gpu-cloud` | `GPU Platform` | 保留 route，页面标题和导航改成 GPU Platform。 |
| `/services` | `Managed AI` | 保留 route，公开命名从 Services 改成 Managed AI。 |
| `/solutions` | `Solutions` | 改成 AI use-case 页面。 |
| `/insights` | `Resources` | 保留 route，公开命名从 Insights 改成 Resources。 |
| `/about` | `Company` | 改成公司可信度和 AI Plus operating philosophy。 |
| `/approach` | `Method` | 可保留为 delivery method 页面；不一定放入移动主导航。 |
| `/contact` | `Contact` | 改成 AI Plus inquiry entry。 |
| `/case` | Future proof | 隐藏高曝光入口；如保留 route，内容诚实降级。 |
| `/company-profile` | `Company Profile` | 保持嵌入资产页，不改 iframe URL。 |

## 文件级实施计划

### 1. `src/main.js`

中文说明：这是全站 shell，导航、footer、side sheet、mobile nav 都在这里。它必须先从旧 IA 切到新 IA。

改动：

- Desktop rail:
  - `GPU Cloud` -> `GPU Platform`
  - `Services` -> `Managed AI`
  - `Insights` -> `Resources`
  - `About` -> `Company`
  - 保留 `Solutions`
  - `Case` 继续 disabled 或隐藏高曝光入口。
- Mobile nav:
  - 保持精简，推荐：`AI Plus` / `GPUs` / `Managed` / `Solutions` / `Contact`
  - 如果文本挤压，可用 `Home` 但页面内容仍以 AI Plus 为主。
- Footer:
  - 用 `AI Plus`、`Platform`、`Solutions`、`Company` 四列替换旧 `Services` / `Company` / `Live Status` 语义。
  - Footer brand copy 改成 draft copy 中的英文文案。
- Side sheet:
  - 标题改为 `AI Plus Quick Links`
  - links 改为 Model Selection / Private AI / Managed Endpoints / GPU Platform / Solutions。
  - CTA 改为 `Start an Assessment`。

注意：

- `window.updateActiveNav` 的 path mapping 需要继续覆盖现有 route。
- 不要改联系方式。

### 2. `src/router.js`

中文说明：首轮可以不改 route path，只改 breadcrumb/page names，让 UI 展示符合新栏目。

改动：

- `pageNames`:
  - `/services`: `Managed AI`
  - `/gpu-cloud`: `GPU Platform`
  - `/insights`: `Resources`
  - `/about`: `Company`
  - `/approach`: `Method`
- Routes 本身保持不变，避免一次性 URL 重构。

### 3. `src/pages/home.js`

中文说明：首页是最重要的页面。它需要从“AI slogan + 旧 services grid”改成完整 AI Plus 生命周期叙事。

改动：

- Hero:
  - H1 保持 `Your One-Stop AI Plus`
  - subtitle 更新为 draft copy。
  - tags 改为 `Model Selection` / `Private AI` / `GPU Platform` / `Managed Deployment`
  - CTA 改为 `Start an AI Plus Assessment` 和 `Discuss GPU Capacity`
- Replace old service cards:
  - 用 `AI Plus Stack` 六层卡片替换 Strategy/Cloud/Security/DevOps。
- Add or replace sections:
  - `Deployment Paths`
  - `GPU Platform Preview`
  - `Managed AI`
  - `Business Solutions`
  - `Trust And Operating Model`
  - `Homepage FAQ`
  - Final CTA
- Remove high-profile `View Case Studies` CTA until real cases exist.

注意：

- 首页较长，先用现有 card/grid rhythm，避免做复杂新视觉。
- Hero map/brand visual 可以保留。

### 4. `src/pages/services.js`

中文说明：这个 route 的公开角色变成 `Managed AI`。它不能再是 Cloud Consulting / Network / Server / DevOps 服务列表。

改动：

- Page label: `Managed AI`
- H1: `AI systems selected, deployed, and operated with Baytech`
- Capability pillars:
  - `Model Strategy`
  - `Private Data Architecture`
  - `Managed Endpoints`
  - `AI Application Integration`
  - `AI Operations`
- Add deployment path selector.
- Add section `What Continues After Launch`
- CTA 使用 `Plan a Managed AI Deployment` / `Discuss GPU Capacity`
- Sidebar links 同步成 Managed AI categories。

### 5. `src/pages/gpu-cloud.js`

中文说明：这个页面从 `GPU Cloud` 升级为 `GPU Platform`，保留现有 GPU systems 数据和 specs，但增强 workload fit 和 architecture decisions。

改动：

- Breadcrumb/page name: `GPU Platform`
- Page label: `GPU Platform`
- H1: `GPU systems for AI workloads that need real capacity`
- Header copy 使用 draft copy。
- Add `Workload Fit` section before systems:
  - Inference
  - Training And Fine-Tuning
  - Rendering And Multimodal
  - Private Model Serving
- Systems section:
  - Heading `Configurable NVIDIA and AMD GPU systems`
  - Row CTA 改为 `Request Availability`
  - 页面 CTA 保持 `Discuss GPU Capacity`
- Replace `Why Baytech` trust section with `Platform Decisions` cards:
  - GPU Memory And Model Size
  - Storage And Data Locality
  - Network And Distributed Workloads
  - Dedicated Or Shared Capacity
  - Endpoint, Batch, Or Cluster
  - Monitoring And Support

注意：

- 保留已有 `gpuSystems` 数据结构。
- 更新 tests 对 `GPU Cloud` 文本和 CTA 的断言。

### 6. `src/pages/solutions.js`

中文说明：Solutions 改成 AI use cases，不再按 Enterprise/SMB/Startup/Healthcare 模板分类。

改动：

- H1: `AI Plus solutions for real workflows`
- Use case cards:
  - Private Knowledge Assistant
  - Customer Support AI
  - Document AI
  - Operations Copilot
  - Engineering AI
  - Multimodal And Rendering Workloads
  - Private AI Platform
- 每张卡包含 stack tags 和具体 CTA。
- Add section `Every solution follows the AI Plus path`
- Remove old industry sidebar; 改为 use-case links 或简单 CTA。

### 7. `src/pages/insights.js`

中文说明：Insights 公开角色变为 Resources。不要保留旧的假日期文章和 `Read Article #` 假链接。

改动：

- Label: `Resources`
- H1: `Guides for choosing and operating AI systems`
- Guide cards:
  - Model Selection Guide
  - Private AI Deployment Checklist
  - GPU Sizing For AI Workloads
  - RAG And Private Knowledge Systems
  - From PoC To Production
  - Managed Endpoints Explained
- Add FAQ section.
- CTA 链接到 contact 或 relevant planning intent，不要使用 `href="#"` 的 fake article links。
- Remove newsletter if it feels generic; if retained, copy must be AI Plus resource-oriented.

### 8. `src/pages/about.js`

中文说明：About 公开角色变为 Company，用来讲 Baytech 为什么值得托付 AI Plus，而不是重复 services。

改动：

- Label: `Company`
- H1: `Baytech builds and operates practical AI infrastructure`
- Section `AI is only useful when the whole system works`
- Operating principles:
  - Platform Clarity
  - Private-By-Design
  - Production Mindset
  - Business Adaptation
  - Long-Term Partnership
- Company proof section 使用安全 proof，不写无证据 claim。
- CTA: `Contact Baytech` / `View Company Profile`

### 9. `src/pages/contact.js`

中文说明：Contact 是需求分流页。表单选项要从旧 services 改为 AI Plus inquiry types。

改动：

- Header:
  - H1 `Start your AI Plus conversation`
  - copy 使用 draft copy。
- Contact info:
  - Heading `Share the AI decision in front of you`
  - copy 使用 draft copy。
- Form:
  - Heading `Send an AI Plus inquiry`
  - service options:
    - AI Plus Assessment
    - Model Selection
    - Private AI / RAG
    - Managed Endpoint
    - GPU Platform
    - Training or Fine-Tuning
    - Business AI Solution
    - Production Operations
    - Other
  - message placeholder 更新。
  - submit button `Send AI Plus Inquiry`
- Preserve Web3Forms access key and submission JS.

### 10. `src/pages/approach.js`

中文说明：Approach 变成 Method 页面。如果最终导航不放它，也可以作为支持页面存在。

改动：

- Label: `Method`
- H1: `From AI question to production system`
- Steps:
  - Assess
  - Select
  - Prototype
  - Deploy
  - Operate
- CTA:
  - `Start an AI Plus Assessment`
  - `Plan a Managed AI Deployment`

### 11. `src/pages/case.js`

中文说明：不要保留假案例。短期作为低调 future-proof page 或从高曝光入口移除。

改动：

- Replace fake case cards with honest placeholder:
  - H1 `AI Plus proof points are being prepared`
  - copy from draft copy.
- CTA `Talk to Baytech`
- Remove fake customer names and metrics.

### 12. `src/pages/company-profile.js`

中文说明：只做轻微上下文 copy，如有需要；不要改 iframe URL 或 PPTX。

改动：

- Header copy 可改为 draft copy。
- Keep embedded presentation unchanged.

### 13. `index.html`

中文说明：metadata 需要从旧 AI-ready cloud wording 变成 One-Stop AI Plus 生命周期 wording。

改动：

- Title 可保持 `Baytech | Your One-Stop AI Plus`
- Meta description 更新为：

`Baytech is a One-Stop AI Plus provider for model selection, private data, GPU platform, managed deployment, business AI workflows, and production operations.`

## CSS 计划

先不做大规模 CSS 改造。

可能需要的小范围调整：

- Longer nav labels: `Managed AI`, `GPU Platform`, `Resources`
- Homepage 新 section 的 grid spacing。
- FAQ layout。
- Contact select/options 不需要 CSS。
- GPU Platform workload/decision cards 可复用 `solution-card` / `service-card`。

验收标准：

- 移动端不出现文字溢出。
- 卡片不因长标题导致视觉破碎。
- 仍然保持 dark Baytech technical language。

## 测试计划

### 更新现有测试

1. `tests/slogan.test.mjs`
   - Hero subtitle 改为新 copy。
   - CTA 从 `Explore Services` 改成 `Discuss GPU Capacity` 或对应新 CTA。
   - Tags 改为 `Model Selection` / `Private AI` / `GPU Platform` / `Managed Deployment`。

2. `tests/gpu-cloud-page.test.mjs`
   - Route 可保持 `/gpu-cloud`。
   - Breadcrumb/page visible name 更新到 `GPU Platform`。
   - Row CTA 改为 `Request Availability`。
   - 不再断言 `GPU Cloud` 是主要显示名。
   - 保留禁止 pricing/checkout/inventory 的断言。

3. `tests/contact-web3forms.test.mjs`
   - 保留 Web3Forms access key 测试。
   - 增加 service options 新文案断言。

### 新增或扩展测试

建议新增 `tests/ai-plus-content.test.mjs`：

- Assert homepage includes:
  - `The full AI lifecycle, connected`
  - `Choose the right path for every AI workload`
  - `From model endpoint to production operation`
- Assert old primary categories are gone or demoted:
  - `Cloud Consulting`
  - `Network Architecture`
  - `Server Solutions`
  - `DevOps & Automation`
- Assert main nav includes:
  - `GPU Platform`
  - `Managed AI`
  - `Resources`
  - `Company`
- Assert fake article links or fake case metrics are removed.

## 验证计划

实施完成后运行：

1. `npm test`
2. `npm run build`
3. Browser visual QA:
   - Desktop homepage.
   - Mobile homepage.
   - `/services` as Managed AI.
   - `/gpu-cloud` as GPU Platform.
   - `/solutions`.
   - `/contact`.

重点检查：

- 首屏是否清楚表达 `Your One-Stop AI Plus`。
- 导航标签是否拥挤。
- 卡片长标题是否溢出。
- Case/Resources 是否有假链接或假证明。
- Contact form 是否仍能正常保留 Web3Forms 配置。

## 实施顺序

推荐按以下顺序执行，降低破坏面：

1. 更新 global shell：`src/main.js`、`src/router.js`、`index.html`。
2. 更新首页：`src/pages/home.js`。
3. 更新核心平台页：`src/pages/gpu-cloud.js`、`src/pages/services.js`。
4. 更新 supporting pages：`solutions.js`、`insights.js`、`about.js`、`approach.js`、`case.js`、`company-profile.js`。
5. 更新 contact：`contact.js`，最后确认敏感配置未动。
6. 更新测试。
7. 跑测试/build。
8. 浏览器检查 desktop/mobile。

## 非目标

本轮不做：

- 新框架。
- 新 route URL 结构。
- 新 CMS。
- 自助登录/注册。
- 公开价格。
- 实时 GPU 库存。
- 未验证的客户案例或认证。
- PPTX 内容重写。

## 开始实现前的确认点

如果按本计划进入实现，我会默认采用：

- Public nav: `AI Plus`, `GPU Platform`, `Managed AI`, `Solutions`, `Resources`, `Company`, `Contact`
- `/services` public title: `Managed AI`
- `/gpu-cloud` public title: `GPU Platform`
- GPU row CTA: `Request Availability`
- Page-level GPU CTA: `Discuss GPU Capacity`
- Resources: guide cards + FAQ, no fake article links
- Case: hidden from high-exposure links, route uses honest placeholder

这些是目前推荐的稳定版本。
