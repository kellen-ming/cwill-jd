import Link from 'next/link';
import ScreenshotButton from '@/app/components/ScreenshotButton';
import { COMPANY_STATS } from '@/lib/jobs';

const customerChips = [
  'Shopify',
  'WooCommerce',
  'Amazon',
  'eBay',
  'SHEIN',
  'DJI',
  'Banggood',
  'LUX SKIN',
  'BITTERLIEBE',
];

const companyFeatures = [
  {
    icon: '🌐',
    title: '全球化产品矩阵',
    desc: '10+ SaaS 产品覆盖跨境电商全链路，从流量获取到售后服务，助力卖家在全球市场规模化增长。',
  },
  {
    icon: '📈',
    title: '持续盈利，高速增长',
    desc: '年复合增长率超 100%，始终保持盈利，是极少数兼具高速增长与健康营收的互联网科技企业。',
  },
  {
    icon: '⭐',
    title: '行业认可，客户信赖',
    desc: 'Shopify App Store 15,000+ 条评价，4.9 星均分，G2 多项年度大奖，Built for Shopify 认证。',
  },
  {
    icon: '🌍',
    title: '国际化多元团队',
    desc: '200+ 成员遍布全球，15% 有留学背景，20% 硕士以上，核心成员来自 PayPal、华为、Airbnb。',
  },
];

const whyCards = [
  {
    num: '01 · Opportunity',
    title: '朝阳行业，稳健增长',
    desc: '跨境电商市场持续扩张，30 万+ 全球卖家，年复合增长率超 100% 且始终盈利。你加入的是有真实用户、真实收入的高速公司。',
  },
  {
    num: '02 · Compensation',
    title: '丰厚薪酬与合伙人通道',
    desc: '月薪 + 项目奖金 + 年终奖 + 年底分红，预留大量合伙人通道，成为合伙人后享有股权激励，付出与回报正相关。',
  },
  {
    num: '03 · Growth',
    title: '真正的高速成长环境',
    desc: '业务高速增长，每个人都有机会承担更大责任。培训报销、书籍采购、技术分享会，公司为你的成长持续真实投入。',
  },
  {
    num: '04 · Culture',
    title: '扁平开放的团队文化',
    desc: '公司没有“总”，只有哥和老师。90 后为主，年轻有活力，崇尚创新，扁平化管理，好想法被快速落地。',
  },
  {
    num: '05 · Care',
    title: '真心的员工关怀',
    desc: '七险一金 + 重疾险 + 责任险，“畅基金”应急援助，女生专属假期，程序员节彩蛋，年度体检。',
  },
  {
    num: '06 · Team',
    title: '高素质国际化团队',
    desc: '15% 有海外留学经历，20% 硕士以上，核心成员来自 PayPal、华为、Airbnb 及哥伦比亚大学、墨尔本大学等名校。',
  },
];

const benefits = [
  {
    icon: '🛡️',
    title: '七险一金 + 商业险',
    desc: '额外购买重疾险与责任险，保障更全面，让你和家人更安心。',
  },
  {
    icon: '💰',
    title: '多元薪酬激励',
    desc: '月薪 + 项目奖金 + 年终奖 + 年底分红，预留大量合伙人通道与股权激励。',
  },
  {
    icon: '📚',
    title: '学习成长支持',
    desc: '购书全额报销，外部培训报销，定期技术分享与读书会。',
  },
  {
    icon: '🏀',
    title: '每周运动活动',
    desc: '周二篮球、周四羽毛球、公司跑团，健康生活与团队凝聚力并重。',
  },
  {
    icon: '🍱',
    title: '餐饮 & 下午茶',
    desc: '每月部门聚餐经费，定期下午茶与水果零食，活动内容民主投票。',
  },
  {
    icon: '🌟',
    title: '特色假期与关怀',
    desc: '带薪年假，女生专属半天假，年度体检，“畅基金”应急援助。',
  },
];

const extraBenefits = [
  '妇女节礼品',
  '程序员节彩蛋',
  '端午 / 中秋福利',
  '圣诞节活动',
  '六一儿童节',
  '年度体检',
  '不定期团建',
  '畅基金援助',
];

const teamCards = [
  {
    label: '🎓 学历背景',
    title: '高学历，爱学习',
    desc: '20% 成员硕士及以上，15% 有海外留学背景，内部技术分享与读书会定期举办。',
    chips: ['北京大学', '中南大学', '哥伦比亚大学', '墨尔本大学'],
  },
  {
    label: '🏢 从业背景',
    title: '顶尖企业出身',
    desc: '核心成员来自全球顶尖科技与互联网公司，带来成熟的行业经验与全球化视野。',
    chips: ['PayPal', '华为', 'VIVO', 'Airbnb'],
  },
  {
    label: '🌍 团队分布',
    title: '真正的国际化团队',
    desc: '200+ 成员分布在全球各地，具备真正的跨文化协作能力，在跨境电商这个天然国际化的赛道上如鱼得水。',
  },
  {
    label: '🔥 团队文化',
    title: '年轻活力，扁平高效',
    desc: '90 后为主体，没有官僚气息，有的是直接沟通与快速行动。扁平化管理让好想法被快速验证。',
  },
];

export default function CompanyPage() {
  return (
    <div className="detail-page">
      <nav>
        <div className="nav-inner company-nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-mark">CW</div>
            <div className="nav-brand-wrap">
              <span className="nav-brand">
                CWILL 畅销家 <span className="nav-tag">个人内推</span>
              </span>
              <span className="nav-brand-sub">非官方 · 由在职员工整理</span>
            </div>
          </Link>
          <Link href="/" className="nav-link">
            ← 回到内推页
          </Link>
        </div>
      </nav>

      <div className="referral-banner">
        <div className="referral-inner company-referral-inner">
          <div className="referral-icon">👋</div>
          <div>
            <div className="referral-title">这是一份个人整理的公司与福利介绍，并非 CWILL 官方页面</div>
            <div className="referral-desc">
              内容整理自公开招聘资料和在职员工视角，具体福利细则与岗位流程以公司 HR 和官方口径为准。
            </div>
          </div>
        </div>
      </div>

      <main className="company-page">
        <div className="screenshot-frame" id="company-screenshot">
          <div className="card company-card">
            <div className="company-card-top">
              <div className="eyebrow">About CWILL · 公司介绍</div>
              <h1>专注全球电商生态的 B2B SaaS 平台</h1>
              <p className="company-sub">
                CWILL 畅销家，成立于 2014 年，深圳，国家级高新科技企业。年复合增长率超 100%，持续盈利，服务全球超 30 万家跨境电商卖家。
              </p>
              <div className="company-stat-row">
                {COMPANY_STATS.map((stat) => (
                  <div key={stat.label} className="company-stat">
                    <div className="company-stat-num">{stat.num}</div>
                    <div className="company-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="company-card-body">
              <section className="company-section" id="about">
                <div className="company-grid-2">
                  <div className="company-copy">
                    <p>
                      CWILL（畅销家）于 2014 年在深圳成立，是一家深耕国际电商生态的 B2B SaaS 平台公司，专注于帮助全球跨境电商卖家提升销量、优化运营效率、拓展品牌影响力。
                    </p>
                    <p>
                      CWILL 推出了超过 10 款 SaaS 产品，覆盖供应链优化、多语言店铺建设、营销策略、转化率提升、物流追踪和售后管理等全链路场景，旗下产品包括 ParcelWILL、TrustWILL、ChatWILL、SendWILL、SEOWILL 等。
                    </p>
                    <p>
                      公司自成立起保持盈利，年复合增长率持续超过 100%，是行业内极少数兼具高速增长与健康营收的互联网科技企业，在 Shopify App Store 保持 4.9 星高评分，荣获 G2 多项年度大奖。
                    </p>
                    <div className="company-label-sm">服务的知名客户与合作平台</div>
                    <div className="chips">
                      {customerChips.map((chip) => (
                        <span key={chip} className="chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="feat-list">
                    {companyFeatures.map((feature) => (
                      <div key={feature.title} className="feat">
                        <div className="feat-icon">{feature.icon}</div>
                        <div>
                          <div className="feat-title">{feature.title}</div>
                          <div className="feat-desc">{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr />

              <section className="company-section" id="why">
                <h2 className="company-section-title">为什么推荐这家公司</h2>
                <p className="company-section-desc">
                  不只是一份工作，而是一个让你真正发挥价值、快速成长、与优秀的人并肩作战的舞台。
                </p>
                <div className="company-why-grid">
                  {whyCards.map((card) => (
                    <div key={card.num} className="why-card">
                      <div className="why-num">{card.num}</div>
                      <div className="why-title">{card.title}</div>
                      <div className="why-desc">{card.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <hr />

              <section className="company-section" id="benefits">
                <h2 className="company-section-title">员工福利</h2>
                <p className="company-section-desc">丰富的福利体系，希望你在这里过得好、长得快、待得久。</p>
                <div className="company-benefits-grid">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="benefit">
                      <div className="benefit-icon">{benefit.icon}</div>
                      <div className="benefit-title">{benefit.title}</div>
                      <div className="benefit-desc">{benefit.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="company-label-sm company-extra-label">更多节日福利</div>
                <div className="chips">
                  {extraBenefits.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </section>

              <hr />

              <section className="company-section" id="team">
                <h2 className="company-section-title">团队构成</h2>
                <p className="company-section-desc">与聪明的人一起做有意思的事，是最快的成长方式。</p>
                <div className="company-team-grid">
                  {teamCards.map((card) => (
                    <div key={card.title} className="team-card">
                      <div className="team-label">{card.label}</div>
                      <div className="team-title">{card.title}</div>
                      <div className="team-desc">{card.desc}</div>
                      {card.chips && (
                        <div className="origin-chips">
                          {card.chips.map((chip) => (
                            <span key={chip} className="origin-chip">
                              {chip}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="company-cta-strip">
              <div>
                <div className="company-cta-title">正在招募新成员</div>
                <div className="company-cta-sub">产品经理、工程师、SEO 运营，欢迎通过内推页查看岗位</div>
              </div>
              <Link href="/#jobs" className="btn-primary">
                查看开放职位 →
              </Link>
            </div>
          </div>
        </div>
        <div className="screenshot-actions">
          <ScreenshotButton targetSelector="#company-screenshot" defaultFileName="cwill-company-benefits" />
        </div>
      </main>

      <footer>
        <p>
          <strong>免责声明</strong>
          ：本页为个人内推页，与 CWILL 畅销家无任何官方合作或委托关系。内容仅供了解参考，最终信息以公司官方流程为准。
        </p>
        <p>
          © 2026 个人内推页 · 非 CWILL 官方页面 &nbsp;|&nbsp; 公司官网：
          <a href="https://www.cwill.com" target="_blank" rel="noopener noreferrer">
            www.cwill.com
          </a>
        </p>
      </footer>
    </div>
  );
}
