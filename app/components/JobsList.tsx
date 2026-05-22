'use client';

import { useState } from 'react';
import Link from 'next/link';
import { jobs, type JobDept } from '@/lib/jobs';

type Filter = 'all' | JobDept;

const FILTERS: ReadonlyArray<[Filter, string]> = [
  ['all', `全部职位 (${jobs.length})`],
  ['product', '产品 & AI'],
  ['tech', '技术研发'],
  ['ops', '运营增长'],
];

export default function JobsList() {
  const [filter, setFilter] = useState<Filter>('all');
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered = jobs.filter((job) => filter === 'all' || job.dept === filter);

  const toggle = (slug: string) => {
    setOpenSlug((current) => (current === slug ? null : slug));
  };

  return (
    <>
      <div className="jobs-filter">
        {FILTERS.map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={`filter-btn ${filter === key ? 'active' : ''}`}
            onClick={() => {
              setFilter(key);
              setOpenSlug(null);
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="jd-wrap">
        {filtered.map((job) => {
          const isOpen = openSlug === job.slug;
          return (
            <div key={job.slug} className={`jd-card ${isOpen ? 'open' : ''}`}>
              <div
                className="jd-head"
                role="button"
                tabIndex={0}
                onClick={() => toggle(job.slug)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(job.slug);
                  }
                }}
              >
                <div className="jd-head-left">
                  <div className="jd-role">{job.title}</div>
                  <div className="jd-meta">
                    <span className="jd-salary">{job.salary}</span>
                    {job.tags.map((tag) => (
                      <span key={tag} className="jd-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="jd-toggle">▾</div>
              </div>

              <div className={`jd-body ${isOpen ? 'show' : ''}`}>
                <div className="jd-highlight">{job.highlightHome}</div>
                <div className="jd-cols">
                  <div>
                    <div className="jd-col-title">岗位职责</div>
                    <ul className="jd-items">
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="jd-col-title">任职要求</div>
                    <ul className="jd-items">
                      {job.requirements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bonus-wrap">
                  <div className="bonus-label">加分项</div>
                  <div className="bonus-tags">
                    {job.bonus.map((tag) => (
                      <span key={tag} className="bonus-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="jd-foot">
                  <Link href={`/detail/${job.slug}`} className="apply-btn">
                    查看详情 →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
