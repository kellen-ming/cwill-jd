import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ScreenshotButton from '@/app/components/ScreenshotButton';
import { COMPANY_STATS, getJobBySlug, jobs } from '@/lib/jobs';

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: '岗位未找到 · CWILL 个人内推' };
  return {
    title: `${job.title} — CWILL 畅销家 · 个人内推`,
    robots: { index: false, follow: false },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const titleEl = job.titleLines ? (
    <>
      {job.titleLines[0]}
      <br />
      {job.titleLines[1]}
    </>
  ) : (
    job.title
  );

  return (
    <div className="detail-page">
      <nav>
        <div className="nav-inner">
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
        <div className="referral-inner">
          <div className="referral-icon">👋</div>
          <div>
            <div className="referral-title">这是一份个人内推页，并非 CWILL 官方招聘页</div>
            <div className="referral-desc">
              本页 JD 整理自公司公开招聘信息，由我作为在职员工帮你内推到对应部门负责人，最终录用以公司正式面试评估为准。
            </div>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="screenshot-frame" id="job-detail-screenshot">
          <div className="card" id="job-detail-card">
            <div className="card-header">
              <div className="eyebrow">{job.category}</div>
              <h1>{titleEl}</h1>
              <div className="badge-row">
                <span className="badge b-blue">{job.salary}</span>
                {job.tags.map((tag, idx) => {
                  const isLast = idx === job.tags.length - 1;
                  const text = isLast && !tag.includes('经验') ? `${tag}经验` : tag;
                  return (
                    <span key={tag} className="badge b-gray">
                      {text}
                    </span>
                  );
                })}
                {job.urgent && <span className="badge b-green">急需</span>}
              </div>
            </div>

            <div className="co-strip">
              {COMPANY_STATS.map((s) => (
                <div key={s.label} className="co-item">
                  <div className="co-num">{s.num}</div>
                  <div className="co-lbl">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="card-body">
              <div className="highlight">{job.highlightDetail}</div>

              {job.roleTags && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="role-tags-label">{job.roleTags.label}</div>
                  <div className="role-tags">
                    {job.roleTags.items.map((t) => (
                      <span key={t} className="role-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="two-col">
                <div>
                  <h2>岗位职责</h2>
                  <ul className="list">
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2>任职要求</h2>
                  <ul className="list">
                    {job.requirements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {job.tools && (
                <>
                  <div className="tools-label">{job.tools.label}</div>
                  <div className="tools">
                    {job.tools.items.map((t) => (
                      <span key={t} className="tool-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <hr />
              <div className="bonus-label">加分项</div>
              <div className="bonus-tags">
                {job.bonus.map((b) => (
                  <span key={b} className="bonus-tag">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <span className="foot-note">CWILL 畅销家 · 深圳 · 国家级高新科技企业</span>
              <Link className="foot-back" href="/">
                ← 回到所有岗位
              </Link>
            </div>
          </div>
        </div>
        <div className="screenshot-actions">
          <ScreenshotButton
            targetSelector="#job-detail-screenshot"
            defaultFileName={`cwill-${job.slug}-${job.title}`}
          />
        </div>
      </div>

      <footer>
        <p>
          <strong>免责声明</strong>
          ：本页为个人内推页，与 CWILL 畅销家无任何官方合作或委托关系。岗位信息整理自公司公开招聘资料，不构成任何录用承诺。
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
