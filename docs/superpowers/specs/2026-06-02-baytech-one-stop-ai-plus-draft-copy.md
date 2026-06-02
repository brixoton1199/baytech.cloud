# Baytech One-Stop AI Plus Draft Copy

## Purpose

中文说明：这一节说明本文档的用途，它不是开发任务清单，而是把已经认可的网站骨架转成可讨论、可上站的英文文案草稿。

This document turns the approved website blueprint and page-by-page outline into draft website copy.

It is written as market-facing content, not an implementation plan. The copy can later be adapted into the existing Vite pages, but the goal here is to make the website message coherent first.

## 文档写作约定

中文说明：这一节规定以后怎么写这类 MD：中文用于内部讨论和解释，英文用于最终网站内容。

Baytech.cloud 是英文网站，所以真正会上站的内容必须保持英文，包括页面标题、导航标签、正文、卡片文案、FAQ、表单选项和 CTA。

但是我们的策略讨论、取舍说明、页面意图、实现前判断和 review notes 可以用中文写在 Markdown 里。后续内容文档推荐使用这种结构：

- 中文用于解释：为什么这样设计、服务于哪个买方问题、参考 Verda 的哪种回答方式、有哪些 claim guardrails。
- 英文用于上站文案：`H1`、section copy、card copy、FAQ answer、CTA text、form labels。
- 如果同一段同时包含说明和文案，先用中文说明语境，再用英文代码块或英文列表给出最终候选文案。

这样可以保证内部讨论足够清楚，同时避免英文网站最终 copy 被中文说明污染。

## Copy Direction

中文说明：这一节定义整体语气。Baytech 需要听起来像完整 AI 生命周期提供方，而不是传统 IT 外包或空泛 AI 营销。

Baytech should sound like a confident One-Stop AI Plus provider:

- Complete enough to answer Verda-class AI lifecycle questions.
- Practical enough to avoid empty AI language.
- Honest enough to avoid unsupported proof claims.
- Platform-forward without pretending there is a public self-service console unless one exists.

Core language:

`Your One-Stop AI Plus`

Supporting idea:

`Model choice, private data, GPU platform, managed deployment, and business AI workflows in one path.`

## Global Navigation Copy

中文说明：这一节定义全站导航、页脚和侧边快捷入口的命名。这里的重点是把网站从 generic services 改成 AI Plus / GPU Platform / Managed AI 这种平台化栏目。

Recommended primary navigation:

- `AI Plus`
- `GPU Platform`
- `Managed AI`
- `Solutions`
- `Resources`
- `Company`
- `Contact`

Compact mobile labels:

- `AI Plus`
- `GPUs`
- `Managed`
- `Solutions`
- `Contact`

Footer columns:

### AI Plus

中文说明：页脚里的 AI Plus 栏目用于承接模型、私有 AI、端点和运维这些核心能力，帮助用户快速理解 Baytech 的主线。

- Model Selection
- Private AI
- Managed Endpoints
- Production Operations

### Platform

中文说明：Platform 栏目突出硬件和部署基础，特别是 GPU、推理、训练和私有模型部署。

- GPU Platform
- Inference
- Training and Fine-Tuning
- Private Model Deployment

### Solutions

中文说明：Solutions 栏目用业务用途表达 AI Plus 的价值，避免按传统行业模板堆内容。

- Private Knowledge Assistant
- Customer Support AI
- Document AI
- Operations Copilot

### Company

中文说明：Company 栏目保留公司信任入口，包括公司介绍、资料、资源和联系方式。

- About Baytech
- Company Profile
- Resources
- Contact

Footer brand copy:

`Baytech is a One-Stop AI Plus provider helping teams choose models, protect private data, run AI workloads on the right GPU and cloud platform, adapt AI to business workflows, and operate production AI systems.`

Side-sheet heading:

`AI Plus Quick Links`

Side-sheet CTA:

`Start with your model, data, workload, or business goal. Baytech will help map the right AI Plus path.`

Button:

`Start an Assessment`

## Homepage Copy

中文说明：首页承担“定义 Baytech 是谁”的任务。它要像 Verda 一样先占住类别，再解释 stack、部署路径、GPU 平台、业务用途、信任和转化。

### Hero

中文说明：Hero 是第一屏，目标是让 `Your One-Stop AI Plus` 不只是 slogan，而是用户马上能理解的完整类别。

Label:

`One-Stop AI Plus`

H1:

`Your One-Stop AI Plus`

Body:

`Model choice, private data, GPU platform, managed deployment, and business AI workflows in one path. Baytech helps teams plan, run, and operate AI workloads from first decision to production.`

Tags:

- `Model Selection`
- `Private AI`
- `GPU Platform`
- `Managed Deployment`

Primary CTA:

`Start an AI Plus Assessment`

Secondary CTA:

`Discuss GPU Capacity`

### Section: AI Plus Stack

中文说明：这一节解释 AI Plus 到底包含哪些层。它是整站的核心结构，后面所有页面都应该回到这些层。

Label:

`AI Plus Stack`

Heading:

`The full AI lifecycle, connected`

Body:

`AI projects fail when model, data, compute, deployment, and operations are treated as separate decisions. Baytech connects the layers so your AI system can move from idea to production with a clear technical and business path.`

Cards:

#### Model Layer

`Choose between hosted APIs, open-source models, private deployments, fine-tuning, RAG, and managed endpoints based on workload, privacy, latency, quality, and cost.`

#### Private Data Layer

`Design knowledge systems, access boundaries, retrieval flows, governance, and deployment isolation so AI can work with company data responsibly.`

#### GPU and Cloud Platform

`Match inference, training, fine-tuning, rendering, and multimodal workloads to configurable GPU systems, storage, network, and deployment architecture.`

#### Managed Deployment

`Turn models into services through endpoints, containers, private model serving, observability, automation, and release workflows.`

#### Business Workflow Layer

`Adapt AI to support, documents, operations, sales, engineering, internal knowledge, and industry processes instead of leaving it as a standalone demo.`

#### Operations and Support

`Plan monitoring, cost control, access, model updates, performance, incident response, and continuous improvement from the start.`

### Section: Deployment Paths

中文说明：这一节回答用户最实际的问题：我到底应该用 hosted model、private model、managed endpoint、GPU training 还是 RAG？它把 Baytech 从“服务商”变成“帮你选路径的人”。

Label:

`Deployment Paths`

Heading:

`Choose the right path for every AI workload`

Body:

`Some teams need hosted models. Others need private model serving, managed endpoints, GPU-backed training, or a reusable internal AI platform. Baytech helps choose the path that fits the workload, data boundary, and operating model.`

Cards:

#### Hosted Model Adoption

`Use external model APIs with the right model choice, fallback plan, security review, workflow integration, and cost visibility.`

CTA: `Assess hosted model use`

#### Private Model Deployment

`Deploy open-source or owned models with controlled data boundaries, dedicated serving infrastructure, and production support.`

CTA: `Plan private AI`

#### Managed Endpoints

`Expose repeatable inference services through managed endpoints with monitoring, access controls, scaling decisions, and support.`

CTA: `Explore managed endpoints`

#### GPU-Backed Training And Fine-Tuning

`Run high-memory AI workloads on GPU systems planned around model size, storage, network, dataset flow, and checkpointing needs.`

CTA: `Discuss GPU capacity`

#### RAG And Private Knowledge Systems

`Build retrieval workflows for company documents, internal knowledge, permissions, evaluation, and controlled answer generation.`

CTA: `Plan private knowledge AI`

#### Dedicated AI Platform

`Create a reusable AI platform path for teams that need configurable capacity, isolation, hybrid architecture, and long-term operations.`

CTA: `Design an AI platform`

### Section: GPU Platform Preview

中文说明：这一节把 GPU 能力放进首页，但不让首页变成硬件清单。它的作用是告诉用户 Baytech 有真实 platform/capacity 讨论能力。

Label:

`GPU Platform`

Heading:

`GPU capacity matched to real AI workloads`

Body:

`Explore NVIDIA and AMD systems for inference, training, fine-tuning, rendering, multimodal workloads, and private model deployment. Baytech helps translate model requirements into GPU, memory, storage, network, and support decisions.`

Workload cards:

#### Inference

`Plan throughput, latency, endpoint design, monitoring, and model serving around production demand.`

#### Training And Fine-Tuning

`Align GPU memory, storage, dataset movement, checkpointing, and network design before the workload scales.`

#### Rendering And Multimodal

`Support image, video, rendering, and multimodal workloads with the right compute and storage profile.`

#### Private Model Serving

`Run private models with deployment isolation, secure access, observability, and operational support.`

CTA:

`View GPU Platform`

### Section: Managed AI

中文说明：这一节强调 Baytech 不只是提供 GPU 或建议，而是能把模型变成可运行、可监控、可持续运维的 AI 服务。

Label:

`Managed AI`

Heading:

`From model endpoint to production operation`

Body:

`Baytech helps turn model choices into managed AI systems: private deployments, inference endpoints, containerized services, monitoring, updates, and ongoing optimization.`

Bullets:

- `Private and open-source model deployment.`
- `Managed endpoints for repeatable inference.`
- `Containerized AI services.`
- `Monitoring, logs, and performance review.`
- `Cost and capacity optimization.`
- `Model update and deployment governance.`

CTA:

`Plan a Managed AI Deployment`

### Section: Business Solutions

中文说明：这一节把底层 AI 能力翻译成业务用途。用户不一定关心技术名词，但会关心知识库、客服、文档、运营和工程工作如何被改善。

Label:

`Solutions`

Heading:

`AI Plus for business workflows`

Body:

`The value of AI appears when it is connected to the work people already do. Baytech adapts models, data, GPU capacity, and managed deployment to practical workflows across teams.`

Cards:

#### Private Knowledge Assistant

`Give teams controlled answers from internal documents, policies, procedures, product knowledge, and technical references.`

#### Customer Support AI

`Assist support teams with triage, reply drafting, knowledge lookup, escalation, and quality review.`

#### Document AI

`Extract, validate, summarize, and route information from invoices, contracts, forms, reports, and operational documents.`

#### Operations Copilot

`Support finance, logistics, reporting, and internal operations with private data access and workflow-aware AI.`

#### Engineering Assistant

`Help engineering teams search internal knowledge, support incident response, improve documentation, and automate tooling workflows.`

#### Multimodal AI Workloads

`Support image, video, rendering, simulation, and AI media pipelines with the right model and GPU platform path.`

CTA:

`Explore Solutions`

### Section: Trust And Operating Model

中文说明：这一节替代传统“trusted partner”空话，用更具体的生产化逻辑建立信任：平台清晰、规格透明、安全边界、运维规划。

Label:

`Why Baytech`

Heading:

`Built for AI decisions that have to survive production`

Body:

`Baytech approaches AI as a connected operating system of decisions: model, data, compute, deployment, workflow, and support. That means the production path is considered before the first pilot becomes hard to maintain.`

Trust cards:

#### Platform Clarity

`Understand the tradeoffs between hosted models, private models, managed endpoints, GPU systems, and hybrid deployment before committing.`

#### Transparent System Specs

`Evaluate baseline GPU configurations with visible compute, memory, storage, network, and workload guidance.`

#### Secure-By-Design Planning

`Treat data boundaries, access paths, and deployment isolation as architecture decisions rather than late-stage fixes.`

#### Production Posture

`Plan monitoring, support, cost, updates, and operational ownership before an AI system reaches users.`

CTA:

`Talk to Baytech`

### Homepage FAQ

中文说明：FAQ 是购买问题区，直接回答用户心里的疑问。这里的口吻应该像在帮客户做判断，而不是像在推销。

#### Which model should we use?

`Baytech helps compare hosted APIs, open-source models, private deployments, fine-tuning, RAG, and managed endpoints against your data boundary, quality target, latency, and operating cost.`

#### Can we use AI with private company data?

`Yes. The right architecture depends on the data, access rules, retrieval needs, deployment boundary, and audit expectations. Baytech helps design that path before implementation.`

#### Do we need hosted models, private models, managed endpoints, or GPUs?

`The answer depends on workload type, privacy requirements, latency, cost, model size, and operational maturity. Baytech helps map the decision rather than forcing every use case into one pattern.`

#### Can Baytech help deploy open-source models?

`Baytech can help plan private and open-source model deployments, including serving architecture, GPU requirements, access boundaries, monitoring, and production support.`

#### How do we move from AI PoC to production?

`A production path needs evaluation, data controls, deployment architecture, user workflow, monitoring, cost review, update strategy, and support. Baytech plans these together.`

#### What happens after launch?

`Baytech can support ongoing monitoring, performance review, model updates, access changes, cost optimization, and operational improvement.`

### Final CTA

中文说明：最终 CTA 用来把用户分流到下一步行动：不确定的人做 assessment，有硬件需求的人谈 GPU，有私有部署需求的人谈 private AI。

Heading:

`Start your AI Plus path`

Body:

`Bring your model idea, private data question, GPU workload, or business workflow. Baytech will help map the next step.`

Buttons:

- `Start an AI Plus Assessment`
- `Discuss GPU Capacity`
- `Plan a Private AI Deployment`

## Managed AI Page Copy

中文说明：Managed AI 页面回答“Baytech 能帮我把模型真正部署和运营起来吗”。这页应该像平台能力页，而不是传统 services 页面。

Public label:

`Managed AI`

Route can remain:

`/services`

### Page Header

中文说明：页面头部要先明确 Managed AI 的范围：模型选择、私有数据、端点、GPU 工作负载、业务集成和生产运维。

Label:

`Managed AI`

H1:

`AI systems selected, deployed, and operated with Baytech`

Body:

`Baytech helps teams move from model decisions to private data architecture, managed endpoints, GPU-backed workloads, business integration, and production operations.`

Buttons:

- `Plan a Managed AI Deployment`
- `Start an AI Plus Assessment`

### Section: Capability Pillars

中文说明：这一节列出 Managed AI 的五个能力支柱，帮助用户理解 Baytech 管的是整套 AI service，而不只是某个模型或某台机器。

Label:

`What Baytech Manages`

Heading:

`From model decision to production AI service`

Body:

`Managed AI is the operating layer between a model idea and a reliable AI system. Baytech helps connect model, data, deployment, workflow, and support choices.`

Cards:

#### Model Strategy

`Select and evaluate API models, open-source models, private deployments, fine-tuning, RAG, and managed endpoints based on the actual workload.`

#### Private Data Architecture

`Design retrieval, permissions, document pipelines, data boundaries, governance, and deployment isolation for private AI use cases.`

#### Managed Endpoints

`Create production inference services with API-style access, monitoring, scaling decisions, access controls, and support planning.`

#### AI Application Integration

`Connect models to support systems, documents, CRMs, operations tools, internal platforms, and human review workflows.`

#### AI Operations

`Monitor quality, latency, cost, usage, model changes, access, incidents, and performance after launch.`

### Section: Deployment Path Selector

中文说明：这一节是自我识别工具。用户可以从自己的需求出发，找到对应路径和 Baytech 的作用。

Label:

`Find Your Path`

Heading:

`Different AI workloads need different operating models`

Rows:

#### Fast adoption with hosted models

Path:

`Hosted model integration`

Baytech role:

`Select the right model, secure the workflow, manage cost visibility, and integrate model output into business tools.`

#### Private model serving

Path:

`Managed private deployment`

Baytech role:

`Plan the model serving architecture, endpoint, access boundary, monitoring, and support model.`

#### Enterprise knowledge assistant

Path:

`RAG and private knowledge system`

Baytech role:

`Structure documents, retrieval, permissions, answer evaluation, and user workflow.`

#### Heavy inference or training

Path:

`GPU-backed platform`

Baytech role:

`Match model size, memory, storage, network, endpoint pattern, and operations support.`

#### Business workflow automation

Path:

`AI application integration`

Baytech role:

`Connect AI into approvals, systems of record, support flows, reporting, and internal processes.`

### Section: What Continues After Launch

中文说明：这一节强调上线之后才是真正的生产阶段，Baytech 的价值包括监控、成本、访问、模型变化和支持。

Heading:

`Production AI needs ownership`

Body:

`A model endpoint is not the finish line. Baytech helps teams maintain the system around it: access, monitoring, cost, usage, quality, performance, updates, and support.`

Cards:

- `Monitoring and logs`
- `Cost and capacity review`
- `Access and governance updates`
- `Model and prompt iteration`
- `Performance and latency tuning`
- `Operational support`

### CTA

中文说明：Managed AI 页的 CTA 要把用户导向部署规划或 GPU 容量讨论，避免泛泛的 Get Started。

Heading:

`Know your workload. Choose your path. Operate with confidence.`

Buttons:

- `Plan a Managed AI Deployment`
- `Discuss GPU Capacity`

## GPU Platform Page Copy

中文说明：GPU Platform 页面回答“Baytech 有什么硬件平台能力，以及这些 GPU 如何服务 AI workload”。它应该是产品/平台页，不是孤立库存页。

Public label:

`GPU Platform`

Route can remain:

`/gpu-cloud`

### Page Header

中文说明：页面头部要把 GPU 从“云资源”提升为 AI Platform 的一层，强调推理、训练、微调、渲染、多模态和私有模型部署。

Label:

`GPU Platform`

H1:

`GPU systems for AI workloads that need real capacity`

Body:

`Configurable NVIDIA and AMD systems for inference, training, fine-tuning, rendering, multimodal workloads, and private model deployment. Baytech helps match the system to the workload before capacity decisions are locked in.`

Buttons:

- `Discuss GPU Capacity`
- `Plan an AI Deployment`

### Section: Workload Fit

中文说明：这一节先讲 workload，再讲硬件。这样用户不会只看型号，而是理解不同任务为什么需要不同 GPU、存储、网络和运维模式。

Label:

`Workload Fit`

Heading:

`Start with the workload, then choose the system`

Body:

`GPU decisions depend on model size, memory, storage, network, latency, throughput, isolation, and operations. Baytech helps translate those requirements into a platform path.`

Cards:

#### Inference

`Plan serving capacity, latency, throughput, endpoint design, monitoring, and model update flow.`

#### Training And Fine-Tuning

`Plan GPU memory, dataset flow, local storage, checkpointing, network design, and scaling behavior.`

#### Rendering And Multimodal

`Support image, video, rendering, simulation, and multimodal workloads with appropriate compute and storage profiles.`

#### Private Model Serving

`Run private models with deployment isolation, secure access, observability, and support planning.`

### Section: GPU Systems

中文说明：这一节保留具体 GPU 系统和规格，这是建立技术可信度的关键；但文案要强调这些是 baseline profiles，需要根据模型和工作负载匹配。

Label:

`Available System Profiles`

Heading:

`Configurable NVIDIA and AMD GPU systems`

Body:

`Use these baseline profiles as a starting point. Baytech helps match the system to model size, workload type, data flow, storage, network, deployment model, and production operation.`

Row CTA:

`Discuss capacity`

Alternative row CTA:

`Request availability`

### Section: Platform Decisions

中文说明：这一节把 GPU 采购/容量讨论变成架构判断，解释 memory、storage、network、capacity、endpoint 和 monitoring 为什么重要。

Label:

`Platform Decisions`

Heading:

`The right GPU choice is an architecture decision`

Cards:

#### GPU Memory And Model Size

`Model size, context length, batch size, and precision all affect GPU memory requirements.`

#### Storage And Data Locality

`Training and multimodal workloads need the data path planned with local storage, throughput, and dataset movement in mind.`

#### Network And Distributed Workloads

`Clusters and multi-GPU workloads need network design that supports scale, synchronization, and reliability.`

#### Dedicated Or Shared Capacity

`Isolation, usage pattern, budget, security, and operational control all affect capacity strategy.`

#### Endpoint, Batch, Or Cluster

`Inference, batch processing, training, and fine-tuning each need different deployment shapes.`

#### Monitoring And Support

`Production AI workloads need visibility into usage, latency, errors, performance, and capacity over time.`

### CTA

中文说明：GPU 页的 CTA 应该让用户带着模型、workload 或 latency 目标来聊，而不是简单“买机器”。

Heading:

`Bring your model, workload, or target latency`

Body:

`Baytech can help translate AI workload requirements into GPU, storage, network, deployment, and support choices.`

Buttons:

- `Discuss GPU Capacity`
- `Plan a Managed AI Deployment`

## Solutions Page Copy

中文说明：Solutions 页面回答“AI Plus 能用于哪些真实业务工作”。这页不应该按行业模板写，而应该按用例和工作流写。

Public label:

`Solutions`

### Page Header

中文说明：页面头部要告诉用户：Baytech 能把模型、数据、GPU 平台和托管部署组合成实际业务解决方案。

Label:

`Solutions`

H1:

`AI Plus solutions for real workflows`

Body:

`Baytech adapts models, private data, GPU platform, and managed deployment to the workflows where AI can create practical leverage.`

Button:

`Explore an AI Use Case`

### Use Case Cards

中文说明：用例卡片要让用户看到自己的工作场景，而不是看到抽象技术名词。每张卡都要暗含 stack：模型、数据、平台、集成、运维。

#### Private Knowledge Assistant

`Give teams controlled answers from internal documents, procedures, product knowledge, engineering notes, policies, and support content. Baytech helps plan retrieval, permissions, evaluation, deployment, and user workflow.`

Stack tags:

- `RAG`
- `Private Data`
- `Permissions`
- `Managed Endpoint`

CTA:

`Plan knowledge AI`

#### Customer Support AI

`Assist support teams with triage, reply drafting, knowledge lookup, escalation, and quality review while keeping human review and operational control in the loop.`

Stack tags:

- `Model Selection`
- `Knowledge Base`
- `Support Workflow`
- `Monitoring`

CTA:

`Improve support with AI`

#### Document AI

`Extract, validate, summarize, and route information from invoices, contracts, onboarding files, forms, reports, and operational documents.`

Stack tags:

- `Document Processing`
- `Multimodal AI`
- `Validation`
- `Workflow Automation`

CTA:

`Plan document AI`

#### Operations Copilot

`Support finance, logistics, reporting, internal operations, and decision workflows with private data access and role-aware AI assistance.`

Stack tags:

- `Private Data`
- `Operations`
- `Reporting`
- `Role-Based Access`

CTA:

`Map an operations workflow`

#### Engineering AI

`Help engineering teams search internal knowledge, improve documentation, support incident response, and automate technical workflows with controlled access to internal context.`

Stack tags:

- `Internal Knowledge`
- `Engineering Workflow`
- `Incident Support`
- `Governance`

CTA:

`Plan engineering AI`

#### Multimodal And Rendering Workloads

`Support image, video, rendering, simulation, and AI media pipelines with the right model, storage, batch processing, and GPU platform path.`

Stack tags:

- `GPU Platform`
- `Multimodal`
- `Rendering`
- `Batch Processing`

CTA:

`Discuss multimodal capacity`

#### Private AI Platform

`Create a reusable internal AI foundation with model serving, managed endpoints, private data architecture, access controls, monitoring, and production support.`

Stack tags:

- `Private AI`
- `Managed Endpoints`
- `Platform`
- `Operations`

CTA:

`Design a private AI platform`

### Section: How Every Solution Is Built

中文说明：这一节说明所有解决方案背后的共同方法，保证 Solutions 不变成零散案例，而是统一回到 AI Plus 路径。

Heading:

`Every solution follows the AI Plus path`

Steps:

1. `Select the model`
   - `Choose hosted, private, open-source, fine-tuned, RAG, or managed endpoint paths.`
2. `Define data boundaries`
   - `Map private data, access, retrieval, governance, and deployment isolation.`
3. `Choose the platform`
   - `Match workload needs to hosted APIs, managed endpoints, GPU systems, cloud, or dedicated capacity.`
4. `Integrate the workflow`
   - `Connect AI to the tools, processes, users, and review loops where work happens.`
5. `Operate and improve`
   - `Monitor quality, cost, latency, access, usage, updates, and production support.`

### CTA

中文说明：Solutions 页的 CTA 要鼓励用户带着一个 AI 想法进入 assessment 或 private deployment 讨论。

Heading:

`Turn an AI idea into a working system`

Buttons:

- `Start an AI Plus Assessment`
- `Plan a Private AI Deployment`

## Resources Page Copy

中文说明：Resources 页面回答“用户在联系 Baytech 前应该先理解哪些 AI 决策”。它的作用是教育买方、建立信任，而不是假装已有完整博客库。

Public label:

`Resources`

Route can remain:

`/insights`

### Page Header

中文说明：页面头部要把 Resources 定位为 AI 决策指南集合，覆盖模型、私有数据、GPU sizing、部署路径、端点和生产运维。

Label:

`Resources`

H1:

`Guides for choosing and operating AI systems`

Body:

`Practical resources for model selection, private data, GPU sizing, deployment paths, managed endpoints, and production AI operations.`

### Guide Cards

中文说明：Guide cards 可以先作为资源主题和咨询入口存在；如果还没有完整文章，不要写成假链接或假博客。

#### Model Selection Guide

`Compare API models, open-source models, private deployments, RAG, fine-tuning, and managed endpoints against privacy, quality, latency, cost, and operations.`

CTA:

`Discuss model selection`

#### Private AI Deployment Checklist

`Review data boundaries, permissions, access controls, deployment choices, auditability, governance, and operational support before private AI goes live.`

CTA:

`Plan private AI`

#### GPU Sizing For AI Workloads

`Understand how model size, batch size, latency, memory, storage, network, inference, and training needs influence GPU platform choices.`

CTA:

`Discuss GPU sizing`

#### RAG And Private Knowledge Systems

`Plan document ingestion, retrieval quality, permissions, evaluation, answer reliability, and user workflows for private knowledge assistants.`

CTA:

`Plan RAG architecture`

#### From PoC To Production

`Move beyond demos with evaluation, deployment architecture, security, monitoring, cost control, user workflow, and support planning.`

CTA:

`Start production planning`

#### Managed Endpoints Explained

`Learn when to use managed endpoints, how they differ from raw GPU instances, and what monitoring and support are needed after launch.`

CTA:

`Plan managed endpoints`

### FAQ Copy

中文说明：Resources FAQ 比首页 FAQ 更偏教育，帮助用户理解基础概念，例如什么是 managed endpoint、什么时候需要 GPU、什么是 private AI。

#### What is One-Stop AI Plus?

`One-Stop AI Plus is Baytech's complete path for AI adoption: model selection, private data, GPU and cloud platform, managed deployment, business workflow adaptation, and production operations.`

#### What is the difference between hosted AI and private AI?

`Hosted AI uses external model APIs. Private AI keeps more of the model, data, deployment, or access path under your control. Many organizations use a hybrid approach.`

#### What is a managed endpoint?

`A managed endpoint turns a model into a repeatable inference service with API-style access, monitoring, deployment controls, and operational support.`

#### When do we need GPUs?

`You may need GPUs for private model serving, high-throughput inference, training, fine-tuning, rendering, multimodal workloads, or dedicated AI capacity.`

#### Can Baytech support open-source models?

`Baytech can help evaluate, deploy, serve, monitor, and operate open-source models when they fit your data, workload, and deployment requirements.`

#### How do we keep company data private?

`Private AI requires clear data boundaries, permissions, retrieval architecture, access controls, deployment isolation, and governance. Baytech helps plan these as part of the system.`

#### What does Baytech operate after deployment?

`Baytech can support monitoring, performance, cost, access changes, model updates, usage review, incident handling, and continuous optimization.`

### CTA

中文说明：Resources 页的 CTA 应该让用户把读到的指南转化成下一步决策，而不是简单订阅 newsletter。

Heading:

`Use the guides to frame your next AI decision`

Buttons:

- `Start an AI Plus Assessment`
- `Discuss GPU Capacity`

## Company Page Copy

中文说明：Company 页面回答“为什么 Baytech 值得托付 AI 平台和生产运维决策”。它不是另一个 services 页面，而是公司可信度和理念页面。

Public label:

`Company`

Route can remain:

`/about`

### Page Header

中文说明：页面头部要把 Baytech 的公司身份和 One-Stop AI Plus 能力联系起来，同时保留 Dublin 这个真实业务身份。

Label:

`Company`

H1:

`Baytech builds and operates practical AI infrastructure`

Body:

`Based in Dublin, Baytech helps teams connect models, private data, GPU platform choices, managed deployment, and business workflows into production-ready AI systems.`

### Section: Belief

中文说明：这一节讲 Baytech 的基本观点：AI 不只是模型，必须把数据、部署、算力、访问、工作流和运维一起考虑。

Heading:

`AI is only useful when the whole system works`

Body:

`A model alone is not an AI system. The useful system includes private data, deployment architecture, compute capacity, access control, workflow integration, monitoring, support, and continuous improvement. Baytech brings these decisions into one AI Plus path.`

### Section: Operating Principles

中文说明：Operating Principles 是公司价值观的替代写法，比 Excellence/Reliability 这种泛词更贴合 AI Plus。

Cards:

#### Platform Clarity

`Explain model, data, compute, deployment, and operations choices before infrastructure decisions become hard to reverse.`

#### Private-By-Design

`Treat data access, retrieval, permissions, and deployment boundaries as architecture decisions from the start.`

#### Production Mindset

`Plan monitoring, cost, performance, support, updates, and operational ownership early.`

#### Business Adaptation

`Connect AI to the workflows, systems, approvals, and users that turn capability into business value.`

#### Long-Term Partnership

`Improve performance, cost, access, model behavior, and workflow fit after launch.`

### Section: Company Proof

中文说明：这一节区分“现在能安全说的 proof”和“未来有证据后可以补的 proof”，避免无证据夸大。

Heading:

`A practical partner for AI platform decisions`

Body:

`Baytech combines visible platform thinking, configurable GPU system information, company contact paths, and a full lifecycle AI Plus framework. As stronger public proof becomes available, this page can grow with customer cases, certifications, partner badges, technical docs, and benchmarks.`

Buttons:

- `Contact Baytech`
- `View Company Profile`

## Contact Page Copy

中文说明：Contact 页面回答“用户应该如何开始正确的 AI Plus 对话”。这里不能再让用户选择 Cloud Consulting 这类旧服务，而要按 AI 意图分流。

Public label:

`Contact`

### Page Header

中文说明：页面头部要提醒用户可以带着模型、私有数据、GPU 容量或生产化问题来联系 Baytech。

Label:

`Contact`

H1:

`Start your AI Plus conversation`

Body:

`Tell Baytech whether you are evaluating models, planning private AI, looking for GPU capacity, or moving an AI workload into production.`

### Contact Info Copy

中文说明：联系信息旁边的文案应该告诉用户要提供什么上下文：模型方向、数据边界、workload、硬件需求或业务流程目标。

Heading:

`Share the AI decision in front of you`

Body:

`Bring your model direction, private data needs, workload profile, hardware requirements, or business workflow goal. Baytech will help map the next step.`

### Form Header

中文说明：表单区域是最重要的分流点，service options 应该对应 AI Plus 的真实购买问题。

Heading:

`Send an AI Plus inquiry`

Body:

`Share a few details and Baytech will follow up on the right path: model selection, private AI, managed endpoint, GPU platform, business solution, or production operations.`

Service options:

- `AI Plus Assessment`
- `Model Selection`
- `Private AI / RAG`
- `Managed Endpoint`
- `GPU Platform`
- `Training or Fine-Tuning`
- `Business AI Solution`
- `Production Operations`
- `Other`

Message placeholder:

`Tell us about your model, data, workload, capacity, or business workflow...`

Submit button:

`Send AI Plus Inquiry`

### Direct Contact CTA

中文说明：直接联系 CTA 给不想填表的用户一个清晰入口，文案也要保持 AI Plus 语境。

Heading:

`Prefer a direct conversation?`

Body:

`Reach Baytech by email or phone to discuss AI Plus planning, GPU capacity, private deployment, or production operations.`

Buttons:

- `Email Baytech`
- `Call Baytech`

## Approach Page Copy

中文说明：Approach 页面回答“Baytech 如何把一个 AI 问题推进成生产系统”。如果保留这个页面，它应该变成交付方法页。

Public label:

`Method`

Route can remain:

`/approach`

### Page Header

中文说明：页面头部要把方法论从传统 technology strategy 改成 AI 从评估到生产的过程。

Label:

`Method`

H1:

`From AI question to production system`

Body:

`Baytech helps teams move through assessment, model and platform selection, prototype, secure deployment, business integration, and production operations.`

### Method Steps

中文说明：方法步骤要覆盖 Assess、Select、Prototype、Deploy、Operate，和 Verda 式完整生命周期相呼应。

#### 01 Assess

`Clarify the business goal, data sensitivity, current systems, workflow needs, model options, workload profile, and success criteria.`

#### 02 Select

`Choose the model path, data path, deployment path, GPU or endpoint path, and operational model before implementation begins.`

#### 03 Prototype

`Test model quality, latency, cost, data flow, user workflow, security assumptions, and operational feasibility.`

#### 04 Deploy

`Build private AI, managed endpoints, GPU-backed workloads, integrations, access boundaries, monitoring, and release workflows.`

#### 05 Operate

`Monitor, update, optimize, support, govern, and improve the AI system after launch.`

### CTA

中文说明：Approach 页的 CTA 要鼓励用户从决策开始，而不是从某个工具或实现细节开始。

Heading:

`Start with the decision, not the tool`

Buttons:

- `Start an AI Plus Assessment`
- `Plan a Managed AI Deployment`

## Case Page Copy

中文说明：Case 页面目前要谨慎处理。没有真实案例和授权证明前，不应该继续放假公司名、假指标或假 quote。

Public role:

`Future proof page`

### Near-Term Page Header

中文说明：短期方案是把 Case 页降级成“proof points are being prepared”的诚实状态，避免误导用户。

Label:

`Case Studies`

H1:

`AI Plus proof points are being prepared`

Body:

`Baytech is shaping its public case study library around real AI lifecycle work: model choices, data boundaries, GPU platform decisions, deployment paths, workflow integration, and production operations.`

CTA:

`Talk to Baytech`

### Future Case Template

中文说明：未来有真实案例时，必须按完整 AI lifecycle 写：问题、模型/数据、平台、部署、业务适配、运维和结果。

Use this structure only when approved proof exists:

- Customer context.
- AI problem.
- Model and data decision.
- Platform and deployment path.
- Business workflow adaptation.
- Operations model.
- Measured outcome.
- Approved quote or proof.

## Company Profile Page Copy

中文说明：Company Profile 页面目前只负责承载公司资料/演示文稿，不要在这个任务里改外部 iframe 或 PPTX 内容。

Public label:

`Company Profile`

### Page Header

中文说明：页面头部可以给 embedded presentation 一个清楚语境，但不要改业务敏感链接。

Label:

`Company Profile`

H1:

`Baytech company profile`

Body:

`View the Baytech company profile and strategy presentation.`

Note:

`Keep the existing embedded presentation and external iframe URL unchanged unless explicitly requested.`

## CTA Copy Bank

中文说明：这一节是全站按钮文案库。统一 CTA 能让用户明确下一步动作，也能避免 `Get Started` 这种模糊词。

Use these consistently:

- `Start an AI Plus Assessment`
- `Discuss GPU Capacity`
- `Plan a Private AI Deployment`
- `Plan a Managed AI Deployment`
- `Talk to Baytech`
- `View GPU Platform`
- `Explore Solutions`
- `Read AI Plus Resources`
- `View Company Profile`

Avoid:

- `Get Started`
- `Get Quote`
- `Cloud Consultation`
- `Explore Services`
- `Book Consultation` when a more specific AI Plus CTA fits.

## Claim Guardrails

中文说明：这一节是防止网站写过头的红线。即使 Baytech 能做 Verda 类似事情，没有公开证据的 badge、认证、客户结果也不能写成事实。

Do not write these unless Baytech has verified public evidence:

- Formal compliance claims such as SOC 2 or ISO certification.
- NVIDIA Preferred Partner or other partner status.
- Public self-service console, API, SDK, or Terraform support.
- Live stock, real-time availability, or public pricing.
- Specific uptime guarantees or SLA claims.
- Customer logos, customer names, quotes, or quantified outcomes.
- Absolute data promises such as "all data never leaves your environment."

Safe alternatives:

- `secure-by-design planning`
- `deployment isolation`
- `private data boundaries`
- `access controls`
- `production support planning`
- `transparent system profiles`
- `capacity discussion`
- `configurable GPU systems`

## Review Questions Before Implementation

中文说明：这一节列出进入实现前需要你拍板的命名和呈现问题。它们会影响导航、页面标题和 CTA 分流。

1. Should the public service label be `Managed AI`, `AI Plus`, or `AI Cloud`?
2. Should `Managed endpoints` appear on the homepage, or only on the Managed AI page?
3. Should the GPU page use `Request availability` or `Discuss capacity` as the row CTA?
4. Should the Case page become a quiet future-proof page, or should all case links be hidden until real content exists?
5. Should Resources start as guide cards without full article pages, or should draft article pages be written before launch?

## Recommended Decisions

中文说明：这一节是我对上面 review questions 的推荐答案。目的不是替你最终拍板，而是先给出一个稳定版本，避免后面进入页面实现时还在导航、栏目和 CTA 上摇摆。

### 1. Public service label

中文推荐：主导航里保留 `AI Plus` 作为总分类和品牌类别；把原来的 Services 页面公开命名为 `Managed AI`。暂时不推荐把主服务页叫 `AI Cloud`，因为 `AI Cloud` 太接近 Verda 的平台类别，会弱化我们自己的 `One-Stop AI Plus` 品牌资产。

Recommended final labels:

- `AI Plus` for the category/homepage concept.
- `Managed AI` for the service/capability page.
- `GPU Platform` as a first-class product/platform page.

### 2. Managed endpoints on homepage

中文推荐：`Managed endpoints` 应该出现在首页，但只作为 deployment paths 里的一个选项，不要放到 hero 的第一层。原因是它能证明 Baytech 的回答接近 Verda 的完整 AI lifecycle，但首页第一屏仍然应该先讲 One-Stop AI Plus 的总概念。

Recommended treatment:

- Mention `Managed Endpoints` in the AI Plus Stack and Deployment Paths sections.
- Keep hero tags broader: `Model Selection`, `Private AI`, `GPU Platform`, `Managed Deployment`.

### 3. GPU row CTA

中文推荐：GPU 系统行里的 CTA 用 `Request Availability` 更好；页面级 CTA 继续用 `Discuss GPU Capacity`。这样既能让 GPU rows 看起来像具体 platform/product item，又不暗示有公开自助下单或实时库存。

Recommended CTA split:

- GPU row CTA: `Request Availability`
- Page primary CTA: `Discuss GPU Capacity`
- Secondary CTA: `Plan an AI Deployment`

### 4. Case page handling

中文推荐：真实案例准备好之前，不要在主导航、首页 CTA 或 footer 中主动引导用户去 Case。保留 route 可以，但它应该是低调的 future-proof page，不能继续使用假公司名、假指标或像真实 case study 一样的内容。

Recommended treatment:

- Hide Case from primary navigation.
- Remove high-profile `View Case Studies` CTAs until real cases exist.
- If the route remains accessible, use the honest placeholder copy from this document.

### 5. Resources launch scope

中文推荐：Resources 先用 guide cards 启动，不需要等完整文章写完。关键是不要把 guide cards 伪装成已完成文章；按钮应导向 assessment/contact 或未来资源状态，而不是 `Read Article` 假链接。

Recommended launch model:

- Start with guide cards and FAQ.
- Use CTAs such as `Discuss model selection`, `Plan private AI`, and `Discuss GPU sizing`.
- Write full article pages later if Resources becomes a stronger acquisition channel.

### Decision Summary

中文总结：当前推荐版本是一个更稳的 One-Stop AI Plus 网站骨架：`AI Plus` 负责定义类别，`Managed AI` 负责模型/端点/私有部署/运维，`GPU Platform` 负责硬件平台能力，`Solutions` 负责业务用途，`Resources` 负责教育和信任，`Company` 负责公司可信度。

Recommended nav:

- `AI Plus`
- `GPU Platform`
- `Managed AI`
- `Solutions`
- `Resources`
- `Company`
- `Contact`

## Recommended Next Step

中文说明：这一节说明下一步流程：先 review 文案，再把批准后的文案映射进现有页面，而不是边写代码边决定网站内容。

Review this copy draft at the website level. Once approved, the next step can finally become a controlled implementation plan that maps approved copy into the existing Vite pages and global navigation.
