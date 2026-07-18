/**
 * About Page
 * Editor's letter
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { authorInfo, siteMetadata } from '@/app/config';

export const metadata: Metadata = {
    title: '关于 | Caius',
    description: 'Caius 个人简介，后端开发，专注 Agent 工程化与微服务架构',
    keywords: ['关于', '个人简介', '后端开发', 'Agent 工程化', 'Caius'],
    openGraph: {
        title: '关于 | Caius',
        description: 'Caius 个人简介，后端开发，专注 Agent 工程化与微服务架构',
        type: 'website',
        siteName: siteMetadata.name,
        locale: 'zh-CN',
    },
};

const timeline = [
    {
        period: '2025.11 – 2026.02',
        title: 'IMean.ai / 跨越星空',
        detail: 'Agent 后端开发实习：API 调度、GraphQL 优化、LangGraph 工程化。',
    },
    {
        period: '2025.07 – 2025.10',
        title: '智测云联',
        detail: 'Java 后端开发实习：IoT 消息接入、多租户与异步入库。',
    },
    {
        period: '2024 – 2025',
        title: 'RedFolio / TodayStock / Bot',
        detail: '高并发内容社区、股票数据分析平台、金融资讯自动化推送。',
    },
] as const;

const principles = [
    {
        title: 'Build with intent',
        detail: '有意识的构建：接口、缓存与消息链路都应说得出为什么。',
    },
    {
        title: 'Trace the thought',
        detail: '可追溯的思考：在经验尚未冷却时写成笔记，方便复盘。',
    },
    {
        title: 'Keep warmth',
        detail: '留有温度的表达：工程之外保持好奇，不把页面做成仪表盘。',
    },
] as const;

export default function AboutPage() {
    return (
        <div className="page-shell letter-sheet">
            <header>
                <p className="eyebrow">Editor&apos;s letter</p>
                <h1 className="sheet-title">关于 Caius</h1>
                <p className="sheet-lede">
                    后端开发，关注 Agent 工程化、微服务架构、缓存与消息链路。这份站点是个人工程档案，不是产品营销页。
                </p>
            </header>

            <div className="letter-grid">
                <section>
                    <p className="fold__lede" style={{ maxWidth: '48ch' }}>
                        我是罗雄才（Caius Luo）。日常工作集中在可靠的 Java 后端系统，以及可观测的 AI Agent
                        基础设施。首页是合订本的封面；笔记、探索与关于页共用同一套印刷语言。
                    </p>

                    <ul className="letter-principles" aria-label="Engineering principles">
                        {principles.map((item) => (
                            <li key={item.title}>
                                <strong>{item.title}</strong>
                                <span>{item.detail}</span>
                            </li>
                        ))}
                    </ul>

                    <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <Link
                            href={authorInfo.github}
                            className="btn-print"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub →
                        </Link>
                        <Link href={`mailto:${authorInfo.email}`} className="text-link">
                            {authorInfo.email}
                        </Link>
                    </div>
                </section>

                <aside className="letter-aside">
                    <h2>Timeline</h2>
                    <ul className="letter-timeline">
                        {timeline.map((item) => (
                            <li key={item.title}>
                                <time>{item.period}</time>
                                <strong
                                    style={{
                                        display: 'block',
                                        marginTop: '0.35rem',
                                        fontFamily: 'var(--font-editorial)',
                                        fontWeight: 550,
                                    }}
                                >
                                    {item.title}
                                </strong>
                                <p style={{ margin: '0.35rem 0 0', color: 'var(--color-ink-muted)' }}>
                                    {item.detail}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h2 style={{ marginTop: '2rem' }}>Contact</h2>
                    <p className="colophon__meta">
                        <Link href={authorInfo.github} target="_blank" rel="noreferrer noopener">
                            github.com/CaiusLuo
                        </Link>
                        <br />
                        <Link href={`mailto:${authorInfo.email}`}>{authorInfo.email}</Link>
                    </p>
                </aside>
            </div>
        </div>
    );
}
