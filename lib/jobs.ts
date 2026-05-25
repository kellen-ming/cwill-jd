export type JobDept = 'product' | 'tech' | 'ops';

export interface OptionalSection {
  label: string;
  items: string[];
}

export interface Job {
  slug: string;
  title: string;
  category: string;
  dept: JobDept;
  salary: string;
  tags: string[];
  urgent?: boolean;
  highlightHome: string;
  highlightDetail: string;
  responsibilities: string[];
  requirements: string[];
  bonus: string[];
  roleTags?: OptionalSection;
  tools?: OptionalSection;
}

export const DEPT_LABELS: Record<JobDept, string> = {
  product: '产品 & AI',
  tech: '技术研发',
  ops: '运营增长',
};

export const jobs: Job[] = [
  {
    slug: '01_pm_overseas',
    title: '中高级产品经理（海外产品）',
    category: 'Open Role · 产品 & SaaS',
    dept: 'product',
    salary: '15 – 25K',
    tags: ['B端 SaaS', '深圳', '3年以上'],
    urgent: true,
    highlightHome:
      '你不仅是需求的搬运工，更是商业问题的终结者。我们希望你用产品视角定义增长，而不只是执行需求清单。',
    highlightDetail:
      '你不仅是需求的搬运工，更是商业问题的终结者——用产品视角定义增长，而不只是执行需求清单。',
    responsibilities: [
      '深耕 SaaS / Tracking 场景，深度挖掘跨境电商 B 端客户（卖家、买家）的真实痛点，设计具有竞争壁垒的 SaaS 工具或平台解决方案',
      '以"数据 + 用户洞察"双驱动模式定义产品 Roadmap，设计完整的埋点体系与数据看板，以 GMV、履约时效、用户留存等核心指标持续迭代产品策略',
      '主导 A/B 测试，用实验结果代替主观判断，串联研发、Marketing、客户成功团队推动项目高质量落地',
      '在资源有限的情况下合理排优先级，识别并果断否定"伪需求"，保持产品聚焦',
      '持续监控海外电商政策与竞品动态，预判未来 6–12 个月产品机会点，定期输出行业趋势快报，成为团队信息枢纽',
    ],
    requirements: [
      '3 年以上产品经验，有 B 端产品或 SaaS 平台经验者优先',
      '熟练使用 Axure / Sketch，具备基础 SQL 分析能力，熟悉 Google Analytics 等数据工具',
      'PRD 文档清晰规范，开发"一看就懂"；逻辑与共情并重，能与技术聊架构，也能与 Marketing 聊增长',
      '具备 MVP 思维，用最小可行版本快速验证价值，拒绝功能堆砌',
      '对优秀产品有天然好奇心，主动拆解行业标杆，从中汲取灵感并内化为自身认知',
    ],
    bonus: ['英语可作为工作语言', '有海外团队对接经验', '熟悉跨境电商业务链路'],
  },
  {
    slug: '02_devops',
    title: '高级运维工程师（海外云）',
    category: 'Open Role · 技术研发',
    dept: 'tech',
    salary: '25 – 35K',
    tags: ['AWS / GCP', 'Kubernetes', '深圳', '6年以上'],
    highlightHome:
      '负责保障全球 SaaS 产品基础设施的稳定与安全运行，在多云架构上构建高可用、高弹性的运维体系，是支撑公司业务持续增长的核心岗位。',
    highlightDetail:
      '负责保障全球 SaaS 产品基础设施的稳定与安全运行，在多云架构上构建高可用、高弹性的运维体系，是支撑公司业务持续增长的核心岗位。',
    responsibilities: [
      '负责 AWS（主要）及 GCP、阿里云的日常资源管理、实例维护与成本优化，协助实施多云环境运维策略，提升资源利用率和系统稳定性',
      '负责 Kubernetes 集群的日常管理与维护，保障容器环境稳定；维护 CI/CD 流水线，确保应用高效、稳定交付',
      '参与 OpenSearch、Prometheus、Grafana、ELK、Zabbix 等监控与日志平台建设及维护，确保告警机制有效，及时发现并处理异常',
      '负责 MySQL、PostgreSQL、Redis、MongoDB 数据库及 Kafka、RabbitMQ、Nginx 等中间件的日常运维（备份、恢复、性能调优、审计）',
      '编写 Shell / Python / Go 脚本提升运维效率，对现有运维工具与平台进行二次开发与功能优化',
      '配合推进 GDPR、SOC2 等合规整改，执行权限最小化、安全审计、访问控制等安全策略',
    ],
    requirements: [
      '大专及以上学历，计算机或相关专业，6 年以上互联网 / SaaS 公司运维经验',
      '熟悉 AWS 或 GCP 常用服务（EC2、S3、R2、RDS、VPC 等），掌握 Docker 与 Kubernetes 集群日常管理',
      '熟悉 Prometheus、Grafana、ELK、Zabbix 的部署和维护',
      '具备 MySQL / Redis 等数据库日常运维与优化经验，熟练掌握 Linux 系统管理与故障排查',
      '具备 Python / Go / Shell 脚本编写能力，有 Ansible、Terraform、Jenkins、ArgoCD 等自动化工具使用经验',
      '责任心强，具备良好的问题分析与解决能力，积极学习新技术，具备良好的跨部门协作能力',
    ],
    bonus: [
      'AWS + GCP 多云混合部署经验',
      '云原生生态（ServiceMesh / Helm / ArgoCD）',
      '合规整改 / 安全审计经验',
      '国际化 SaaS 产品运维经验',
    ],
  },
  {
    slug: '03_golang',
    title: 'Golang 中高级工程师',
    category: 'Open Role · 技术研发',
    dept: 'tech',
    salary: '18 – 30K',
    tags: ['后端开发', '微服务', '深圳', '3年 Go 经验'],
    highlightHome:
      '负责核心业务系统架构设计与高并发场景技术攻坚，在真实的大规模 SaaS 流量场景下锻炼技术能力，有机会主导重要系统从零到一的构建。',
    highlightDetail:
      '负责核心业务系统架构设计与高并发场景技术攻坚，在真实的大规模 SaaS 流量场景下锻炼技术能力，有机会主导重要系统从零到一的构建。',
    responsibilities: [
      '负责后端业务系统核心模块的架构设计与开发，保障系统的性能、可用性及可扩展性',
      '主导技术选型与项目重构，推动代码分层规范化、数据结构化，提升系统可维护性与开发效率',
      '编写高质量技术文档与 API 文档，确保知识沉淀与团队协作顺畅，降低系统熵增',
      '参与高并发、高性能场景下的技术攻坚，主导核心架构设计，持续跟进前沿技术动态并推动技术演进',
      '指导初中级开发人员，组织技术分享与代码评审，持续提升团队整体技术能力',
    ],
    requirements: [
      '计算机相关专业，专科及以上，5 年以上开发经验，至少 3 年 Golang 开发经验',
      '熟练掌握 Go 语言及常见开源组件（gin、viper、cobra、zap、testify、nacos 等）',
      '熟悉 MySQL 数据库、Redis 分布式缓存设计，以及 Kafka / RocketMQ / Pulsar / RabbitMQ 等消息队列',
      '熟练使用 gorm / xorm 等 ORM 框架，熟悉微服务架构及 gRPC（go-micro / kratos / kitex）',
      '熟悉 Linux 基本操作，了解 Docker 容器化及 DevOps CI/CD 流水线，具备良好沟通与业务抽象能力',
    ],
    bonus: [
      '0→1 Go 微服务或大型系统重构经验',
      'Jaeger / SkyWalking 链路追踪',
      'Prometheus / Grafana 监控体系',
      'AI 项目落地经验',
      'Langchain / Langgraph 框架',
    ],
  },
  {
    slug: '04_ai_pm',
    title: 'AI 解决方案 / 产品经理（效率效能）',
    category: 'Open Role · 产品 & AI',
    dept: 'product',
    salary: '15 – 30K',
    tags: ['AI 产品', '企业效率', '深圳', '4–6 年经验'],
    highlightHome:
      '角色定位：BA + 产品经理 + PMO 三合一。面向流程体系型（SA / BA / PMO）、企业效率工具产品（协同办公 / 工作流 / 低代码平台）、研发效能产品三类背景人才开放。',
    highlightDetail:
      '角色定位：BA + 产品经理 + PMO 三合一。面向流程体系型（SA / BA / PMO）、企业效率工具产品（协同办公 / 工作流 / 低代码平台）、研发效能产品三类背景人才开放。',
    roleTags: {
      label: '适合以下背景人才',
      items: [
        '流程架构师 / SA / BA / PMO',
        '协同办公 / 工作流 / 低代码平台',
        '研发效能产品经验',
      ],
    },
    responsibilities: [
      '规划并落地公司 AI 应用产品与组织效率提升体系，通过 AI 技术改造研发、运营、客服、内容等核心业务流程',
      '打造企业级 AI 工作助手（AI Copilot）和自动化工作流体系，推动 AI 规模化应用，实现组织效率整体升级',
      '统筹管理公司办公协同系统整体规划（工具选型、使用规范制定、系统推广与优化）',
      '深入调研各业务团队效率瓶颈，识别 AI 提效关键场景，输出系统化产品解决方案',
      '设计 AI 自动化流程与 AI Agent 工作流，建立效能度量体系（使用率 / 自动化比例 / ROI），持续优化 AI 应用效果',
      '推动 AI 工具在公司内部规模化应用，组织培训，建立规范，制定安全合规与权限管控机制',
    ],
    requirements: [
      '本科及以上学历，4–6 年产品经理经验，有 AI 应用产品 / 企业效率工具 / 内部工具平台经验者优先',
      '能快速理解复杂业务流程，识别 AI 应用机会；有客服系统、运营工具、协同办公产品经验者优先',
      '熟悉 Prompt Engineering、AI Copilot、RAG、AI Agent 工作流、LLM 应用设计等典型落地场景，了解模型能力边界',
      '具备 AI 应用产品设计能力，能推动 AI 产品从 0 到 1 落地',
      '具备较强的业务抽象与流程梳理能力，优秀的跨部门沟通与项目推进能力，能推动组织变革与产品落地',
    ],
    bonus: [
      'AI 应用产品成功落地案例',
      '客服 AI / 营销 AI / 内容 AI 经验',
      '研发效能 / 企业效率平台经验',
    ],
  },
  {
    slug: '05_seo',
    title: '英文 SEO 运营',
    category: 'Open Role · 运营增长',
    dept: 'ops',
    salary: '15 – 22K',
    tags: ['海外 SEO', '英语优先', '深圳', '3年以上'],
    highlightHome:
      '负责驱动海外网站的自然流量增长，在真实的全球化市场中制定并执行 SEO 策略，是公司海外品牌增长的重要引擎，内容面向全球英语用户。',
    highlightDetail:
      '负责驱动海外网站的自然流量增长，在真实的全球化市场中制定并执行 SEO 策略，是公司海外品牌增长的重要引擎，内容面向全球英语用户。',
    responsibilities: [
      '负责海外网站 SEO 整体策略制定与执行，以提升自然流量、关键词排名和页面转化率为核心目标',
      '负责高质量英文 SEO 内容的策划、撰写和优化（网页文案、博客文章、产品描述、落地页等）',
      '深入挖掘分析关键词，结合目标用户画像制定精准内容策略，持续推动内容原创和迭代优化',
      '利用 SEO 工具监控分析网站数据，负责网站结构优化、内链布局、页面速度提升及异常页面处理',
      '结合市场热点策划内容推广活动，配合 EDM、社交媒体、YouTube 等多渠道协同运营',
      '应用 AI 工具提升内容创作效率，负责外链建设策略，定期撰写 SEO 效果分析报告',
    ],
    requirements: [
      '本科及以上学历，英语专业优先；书面与口语优秀，雅思 7 分及以上或同等水平优先',
      '3 年以上海外 SEO 内容运营经验，具备扎实的 SEO 理论基础和丰富实操经验',
      '熟练掌握主流 SEO 工具（Google Analytics、Search Console、Ahrefs、Similarweb、SEMrush 等）',
      '具备优秀的英文内容策划与原创写作能力，能将产品价值转化为吸引目标用户的高质量内容',
      '熟悉海外市场用户画像，具备良好的数据分析能力，擅长数据驱动内容优化',
      '具备良好的跨部门沟通协作能力，能与产品、设计、市场团队高效配合',
    ],
    tools: {
      label: '常用工具',
      items: [
        'Google Analytics',
        'Search Console',
        'Ahrefs',
        'SEMrush',
        'Similarweb',
        'ChatGPT / AI 写作工具',
      ],
    },
    bonus: ['AI 内容生成工具实战经验', '多渠道内容矩阵运营经验', '跨境电商行业背景'],
  },
];

export const COMPANY_STATS = [
  { num: '30万+', label: '全球卖家' },
  { num: '100%+', label: '年复合增长' },
  { num: '10+', label: 'SaaS 产品' },
  { num: '200+', label: '全球团队' },
] as const;

export const CONTACT = {
  emailBase64: 'bGlhbmd6aGltaW5nem1AZ21haWwuY29t',
  wechatBase64: 'Wk0xMTU0OTM5NDEw',
} as const;

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
