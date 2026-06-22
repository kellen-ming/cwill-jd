import Link from 'next/link';
import JobsList from './components/JobsList';
import { COMPANY_STATS, CONTACT } from '@/lib/jobs';

export default function HomePage() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-mark">CW</div>
            <div className="nav-brand-wrap">
              <span className="nav-brand">
                CWILL 畅销家 <span className="nav-tag">个人内推</span>
              </span>
              <span className="nav-brand-sub">非官方页面 · 由在职员工整理</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link href="/company#about">关于公司</Link>
            <Link href="/company#benefits">福利待遇</Link>
            <a href="#jobs">开放职位</a>
          </div>
          <a href="#jobs" className="nav-btn">
            查看职位
          </a>
        </div>
      </nav>

      {/* REFERRAL NOTICE */}
      <div className="referral-banner">
        <div className="referral-inner">
          <div className="referral-icon">👋</div>
          <div>
            <div className="referral-title">这是一份个人内推页，并非 CWILL 官方招聘页</div>
            <div className="referral-desc">
              我目前在 CWILL 工作，把公司当前在招的岗位整理在这里，方便你了解。所有职位均真实在招，欢迎通过页面底部的邮箱 / 微信联系我，我会帮你把简历直接递到对应部门负责人。最终是否录用以公司正式面试评估为准。
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Personal Referral · 在职员工内推 · 5 个深圳岗位
          </div>
          <h1>
            一份手写的
            <br />
            <span>CWILL 内推清单</span>
          </h1>
          <p className="hero-desc">
            我目前在 CWILL（畅销家）工作。把公司当前在招的 5 个岗位、福利、团队画像整理成这份清单，分享给身边可能感兴趣的人。所有 JD 均来自公司公开信息，由我作为在职员工帮你内推到对应部门负责人。
          </p>
          <div className="hero-actions">
            <a href="#jobs" className="btn-primary">
              浏览岗位
            </a>
            <Link href="/company" className="btn-ghost">
              先了解公司
            </Link>
          </div>
          <div className="hero-stats">
            {COMPANY_STATS.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="sec-eyebrow">About · 公司介绍</div>
          <h2>
            极少数兼具高速增长
            <br />
            与盈利健康的科技公司
          </h2>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                CWILL（畅销家）于 2014 年在深圳成立，是一家深耕国际电商生态的 B2B SaaS 平台公司，专注于帮助全球跨境电商卖家提升销量、优化运营效率、拓展品牌影响力。
              </p>
              <p>
                CWILL 推出了超过 10 款 SaaS 产品，覆盖供应链优化、多语言店铺建设、营销策略、转化率提升、物流追踪和售后管理等全链路场景，旗下产品包括 ParcelWILL、TrustWILL、ChatWILL、SendWILL、SEOWILL 等。
              </p>
              <p>
                公司自成立起保持盈利，年复合增长率持续超过 100%，是行业内极少数兼具高速增长与健康营收的互联网科技企业，目前已服务全球超过 30 万家企业，在 Shopify App Store 保持 4.9 星高评分，荣获 G2 多项年度大奖。
              </p>
              <div className="chips-label">公司服务的部分客户与合作平台</div>
              <div className="chips">
                {[
                  'Shopify',
                  'WooCommerce',
                  'Amazon',
                  'eBay',
                  'SHEIN',
                  'DJI',
                  'Banggood',
                  'LUX SKIN',
                  'BITTERLIEBE',
                ].map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="feat-list">
              {[
                {
                  icon: '🌐',
                  title: '全球化产品矩阵',
                  desc:
                    '10+ SaaS 产品覆盖跨境电商全链路，从流量获取到售后服务，助力卖家在全球市场规模化增长。',
                },
                {
                  icon: '📈',
                  title: '持续盈利，高速增长',
                  desc:
                    '年复合增长率超 100%，始终保持盈利，是健康可持续的商业模式，你加入的是一家有真实收入的高速公司。',
                },
                {
                  icon: '⭐',
                  title: '行业认可，客户信赖',
                  desc:
                    'Shopify App Store 15,000+ 条评价，4.9 星均分，G2 多项年度大奖，Built for Shopify 认证。',
                },
                {
                  icon: '🌍',
                  title: '国际化多元团队',
                  desc:
                    '200+ 成员遍布全球，15% 有留学背景，20% 硕士以上，核心成员来自 PayPal、华为、Airbnb。',
                },
              ].map((f) => (
                <div key={f.title} className="feat">
                  <div className="feat-icon">{f.icon}</div>
                  <div>
                    <div className="feat-title">{f.title}</div>
                    <div className="feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* WHY JOIN */}
      <section className="why-bg" id="why">
        <div className="container">
          <div className="sec-eyebrow">Why CWILL · 我为什么推荐这家公司</div>
          <h2>六个值得考虑的理由</h2>
          <p className="sec-desc">
            下面这些是我作为在职员工的真实感受，结合公司公开信息整理。仅供参考，建议你结合自身情况判断。
          </p>
          <div className="why-grid">
            {[
              {
                num: '01 · Opportunity',
                title: '朝阳行业，稳健增长',
                desc:
                  '跨境电商市场持续高速扩张，CWILL 已服务超 30 万全球卖家，年复合增长率超 100% 且始终盈利。你加入的是一家有真实用户、真实收入的高速公司，而不是靠融资维持的泡沫。',
              },
              {
                num: '02 · Compensation',
                title: '丰厚薪酬与合伙人通道',
                desc:
                  '竞争力月薪 + 项目目标奖金 + 年终奖金 + 年底分红，公司预留大量合伙人通道，成为合伙人后享有股权激励。付出与回报完全正相关，真正创造价值的人成为公司增长的共同受益者。',
              },
              {
                num: '03 · Growth',
                title: '真正的高速成长环境',
                desc:
                  '业务高速增长意味着每个人都有机会承担更大的责任。提供培训报销、书籍采购、技术分享会全方位支持，让你的专业成长有实实在在的投入，不只是口头鼓励。',
              },
              {
                num: '04 · Culture',
                title: '扁平开放的团队文化',
                desc:
                  '公司没有"总"，只有哥和老师。以 90 后为主，年轻有活力，崇尚创新、追求卓越。扁平化管理让好想法被快速听见落地，每周篮球、羽毛球，工作之外一起运动。',
              },
              {
                num: '05 · Care',
                title: '真心的员工关怀',
                desc:
                  '七险一金之外额外购买重疾险与责任险；"畅基金"为遭遇重大困难的员工提供援助；女生专属假期、程序员节彩蛋、年度体检——每一项都不是走流程，是真心在意每位同事。',
              },
              {
                num: '06 · Team',
                title: '高素质国际化团队',
                desc:
                  '15% 成员有海外留学经历，20% 拥有硕士以上学历。核心成员来自 PayPal、华为、Airbnb，以及哥伦比亚大学、墨尔本大学、北京大学等顶尖学府，与聪明的人共事是最快的成长方式。',
              },
            ].map((card) => (
              <div key={card.num} className="why-card">
                <div className="why-num">{card.num}</div>
                <div className="why-title">{card.title}</div>
                <div className="why-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />

      {/* BENEFITS */}
      <section id="benefits">
        <div className="container">
          <div className="sec-eyebrow">Benefits · 福利待遇</div>
          <h2>公司的福利体系</h2>
          <p className="sec-desc">
            以下福利均为 CWILL 在职员工实际享有的内容。如对具体细则有疑问，可在联系我后由 HR 进一步确认。
          </p>
          <div className="benefits-grid">
            {[
              {
                icon: '🛡️',
                title: '七险一金 + 商业险',
                desc: '标准七险一金，额外为全体员工购买重疾险与责任险，保障更全面，让你和家人更安心。',
              },
              {
                icon: '💰',
                title: '多元薪酬激励',
                desc:
                  '月薪 + 项目奖金 + 年终奖 + 年底分红，预留大量合伙人通道，成为合伙人后享有股权激励。',
              },
              {
                icon: '📚',
                title: '学习成长全额支持',
                desc:
                  '购书全额报销，外部培训费用报销，不定期技术分享与读书会，公司为你的成长持续真实投入。',
              },
              {
                icon: '🏀',
                title: '运动活动',
                desc: '周二篮球、周四羽毛球、公司跑团，运动不只是为了健康，更是团队凝聚力的重要来源。',
              },
              {
                icon: '🍱',
                title: '餐饮 & 下午茶',
                desc:
                  '每月部门聚餐经费，不定期下午茶与水果零食，部门活动内容民主投票，氛围自由轻松。',
              },
              {
                icon: '🌟',
                title: '特色假期与人文关怀',
                desc: '带薪年假、法定假日保障，女生每月专属半天假，"畅基金"应急援助，年度体检。',
              },
            ].map((b) => (
              <div key={b.title} className="benefit">
                <div className="benefit-icon">{b.icon}</div>
                <div className="benefit-title">{b.title}</div>
                <div className="benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
          <div className="extras">
            <div className="extras-label">更多节日福利与活动</div>
            <div className="chips">
              {[
                '妇女节礼品',
                '程序员节彩蛋',
                '端午 / 中秋节福利',
                '圣诞节活动',
                '六一儿童节',
                '年度体检',
                '不定期团建旅行',
                '畅基金援助',
                '部门经费民主支配',
              ].map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* TEAM */}
      <section className="team-bg">
        <div className="container">
          <div className="sec-eyebrow">Team · 团队画像</div>
          <h2>你将与什么样的人共事</h2>
          <p className="sec-desc">
            这是关于团队构成的几个事实，可以帮你判断公司氛围是否与你匹配。
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-label">🎓 学历背景</div>
              <div className="team-title">高学历，爱学习</div>
              <div className="team-desc">
                20% 团队成员拥有硕士及以上学历，15% 有海外留学背景。内部技术分享与读书分享会不定期举办，学习氛围浓厚。
              </div>
              <div className="origin-chips">
                {['北京大学', '中南大学', '哥伦比亚大学', '墨尔本大学'].map((c) => (
                  <span key={c} className="origin-chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="team-card">
              <div className="team-label">🏢 从业背景</div>
              <div className="team-title">顶尖企业出身</div>
              <div className="team-desc">
                核心成员来自全球顶尖科技与互联网公司，带来成熟的行业经验与全球化视野，在 CWILL 继续创造更大影响力。
              </div>
              <div className="origin-chips">
                {['PayPal', '华为', 'VIVO', 'Airbnb'].map((c) => (
                  <span key={c} className="origin-chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="team-card">
              <div className="team-label">🌍 团队分布</div>
              <div className="team-title">真正的国际化团队</div>
              <div className="team-desc">
                200+ 成员分布在全球各地，具备真正的跨文化协作能力。在跨境电商这个天然国际化的赛道上，全球视野是基础素质。
              </div>
            </div>
            <div className="team-card">
              <div className="team-label">🔥 团队文化</div>
              <div className="team-title">年轻活力，扁平高效</div>
              <div className="team-desc">
                90 后为主体，没有官僚气息，有的是直接沟通与快速行动。扁平化管理让好想法被快速验证，公司没有"总"，只有哥和老师。
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* JOBS */}
      <section id="jobs">
        <div className="container">
          <div className="sec-eyebrow">Open Roles · 当前在招岗位</div>
          <h2>5 个开放岗位（深圳）</h2>
          <p className="sec-desc">
            JD 内容整理自公司公开招聘信息，截至本页最近更新均真实在招。看到合适的岗位，可通过页尾的邮箱 / 微信联系我，由我帮你内推。
          </p>
          <JobsList />
        </div>
      </section>
      <hr />

      {/* CONTACT / 联系内推人 */}
      <section className="cta-bg" id="contact">
        <div className="container">
          <div className="cta-inner" style={{ maxWidth: 760 }}>
            <div className="sec-eyebrow" style={{ textAlign: 'center' }}>
              Contact · 联系内推人
            </div>
            <div className="cta-title">看到合适的岗位？这样联系我</div>
            <p className="cta-desc">
              下面两种方式任选其一即可。联系方式做了 base64 编码、防止被爬虫抓走，给你和我都减少点骚扰，麻烦自行解码后联系，谢谢理解 🙏
            </p>

            <div className="contact-grid">
              <div className="contact-card-cta">
                <div className="contact-card-icon">📧</div>
                <div className="contact-card-label">邮件投递（Base64）</div>
                <div className="contact-card-value">{CONTACT.emailBase64}</div>
              </div>
              <div className="contact-card-cta">
                <div className="contact-card-icon">💬</div>
                <div className="contact-card-label">微信联系（Base64）</div>
                <div className="contact-card-value">{CONTACT.wechatBase64}</div>
              </div>
            </div>

            <div className="contact-tip-bottom">
              <strong>邮件请包含：</strong>
              1) 姓名与联系电话；2) 简历附件或在线简历链接（Boss / 领英 / 个人网站均可）；3) 简短自我介绍（可选）。
              <br />
              <strong>邮件主题建议：</strong>【内推】岗位名 - 姓名（例：
              <code>【内推】Golang 中高级工程师 - 张三</code>）
            </div>

            <div className="cta-row" style={{ marginTop: '1.5rem' }}>
              <a
                href="https://www.cwill.com"
                className="btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                了解 CWILL 产品 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p style={{ marginBottom: 6 }}>
            <strong style={{ color: 'var(--text2)' }}>免责声明</strong>
            ：本页为个人内推页，与 CWILL 畅销家无任何官方合作或委托关系。岗位信息整理自公司公开招聘资料，不构成任何录用承诺；最终面试评估与录用以公司官方流程为准。
          </p>
          <p>
            © 2026 个人内推页 · 非 CWILL 官方页面 &nbsp;|&nbsp; 公司官网：
            <a href="https://www.cwill.com" target="_blank" rel="noopener noreferrer">
              www.cwill.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
