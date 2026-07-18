import type { CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ResumeSwitcher } from '@/components/features/resume/resume-switcher';
import { authorInfo } from '@/app/config';
import { getAllBlogPosts, getFeaturedBlogPosts } from '@/lib/content/blog';
import { formatDate } from '@/lib/utils';

const identityLinks = [
    { href: '#experience', label: 'Experience', external: false },
    { href: authorInfo.github, label: 'GitHub', external: true },
    { href: '/blog', label: 'Notes', external: false },
    { href: `mailto:${authorInfo.email}`, label: 'Email', external: false },
] as const;

const manifesto = [
    {
        num: '01',
        title: 'Agent Infrastructure',
        hang: true,
        accentWord: 'Infrastructure',
        description:
            'API 调度、GraphQL Resolver 优化、LangGraph 状态流转、LangSmith 链路追踪。',
        meta: 'GraphQL · LangGraph · Redis · LangSmith',
    },
    {
        num: '02',
        title: 'Backend Systems',
        hang: false,
        accentWord: 'Systems',
        description:
            'Spring Cloud Alibaba、Gateway 鉴权、分布式 ID、多级缓存、异步落库。',
        meta: 'Spring Cloud · Redis · RocketMQ · Gateway',
    },
    {
        num: '03',
        title: 'Data Automation',
        hang: true,
        accentWord: 'Automation',
        description:
            'XXL-Job 定时调度、RabbitMQ 削峰、Sharding-JDBC 分表、金融资讯 Bot。',
        meta: 'XXL-Job · RabbitMQ · Sharding-JDBC · Python',
    },
] as const;

const selectedWork = [
    {
        title: 'IMean.ai Agent Backend',
        description: '多源 API 稳定性、POI 检索性能、Agent 状态流转与跨服务调用链路。',
        stack: 'Redis · GraphQL · DataLoader · LangGraph',
        href: '#experience',
    },
    {
        title: 'IoT Platform Internship',
        description: '设备消息接入、多租户数据模型与 Redis + RabbitMQ 异步入库链路。',
        stack: 'Java · Spring Boot · MQTT · RabbitMQ',
        href: '#experience',
    },
    {
        title: 'RedFolio',
        description: '高并发内容社区：微服务拆分、多级缓存、点赞异步落库。',
        stack: 'Spring Cloud Alibaba · Redis · RocketMQ',
        href: '#experience',
    },
    {
        title: 'TodayStock',
        description: '股票数据采集、清洗、入库与可视化分析平台。',
        stack: 'Spring Boot · XXL-Job · Sharding-JDBC',
        href: '#experience',
    },
] as const;

const stackGroups = [
    { label: 'Backend', items: ['Java', 'Spring Boot', 'Spring Cloud Alibaba', 'GraphQL'] },
    { label: 'Infrastructure', items: ['Redis', 'RabbitMQ', 'RocketMQ', 'Docker', 'MySQL'] },
    { label: 'Agent', items: ['LangGraph', 'LangSmith', 'CrewAI'] },
    { label: 'Data', items: ['MySQL', 'PostgreSQL', 'XXL-Job', 'Sharding-JDBC'] },
] as const;

export default function HomePage() {
    const posts = getAllBlogPosts();
    const featuredPosts = getFeaturedBlogPosts(3);
    const [lead, ...rest] = featuredPosts;

    return (
        <div className="front">
            <section className="sheet fold" aria-labelledby="fold-title">
                <p className="strapline">
                    A personal engineering broadsheet · backend · agents · notes
                </p>
                <div className="fold__inner">
                    <div>
                        <h1 className="fold__slogan" id="fold-title">
                            <span className="ln ghost" style={{ '--i': 0 } as CSSProperties}>
                                <span className="ink">Reliable</span>
                                <span className="reg" aria-hidden="true">
                                    Reliable
                                </span>
                            </span>
                            <span className="ln ghost" style={{ '--i': 1 } as CSSProperties}>
                                <span className="ink">Java systems.</span>
                                <span className="reg" aria-hidden="true">
                                    Java systems.
                                </span>
                            </span>
                            <span
                                className="ln ln--red ln--indent ghost"
                                style={{ '--i': 2 } as CSSProperties}
                            >
                                <span className="ink">Observable agents.</span>
                                <span className="reg" aria-hidden="true">
                                    Observable agents.
                                </span>
                            </span>
                        </h1>
                    </div>

                    <div className="fold__copy">
                        <p className="fold__lede">
                            Backend engineer building systems meant to survive real traffic — and
                            agent infrastructure you can inspect when it doesn&apos;t.
                        </p>
                        <p className="fold__lede-zh">
                            罗雄才 · Java 后端与 AI Agent 基础设施。这份站点是工程档案、项目索引与技术笔记的合订本。
                        </p>
                        <nav className="fold__links" aria-label="Primary links">
                            {identityLinks.map((link, index) => (
                                <span key={link.href} className="inline-flex items-center">
                                    {index > 0 && (
                                        <span className="sep" aria-hidden="true">
                                            /
                                        </span>
                                    )}
                                    <Link
                                        href={link.href}
                                        className="text-link"
                                        {...(link.external
                                            ? { target: '_blank', rel: 'noreferrer noopener' }
                                            : {})}
                                    >
                                        {link.label}
                                    </Link>
                                </span>
                            ))}
                        </nav>
                        <figure className="fold__portrait">
                            <Image
                                src="/caius-self-png.png"
                                alt="Portrait of Caius Luo"
                                width={1055}
                                height={1491}
                                priority
                            />
                            <figcaption className="fold__caption">Plate 01 · Contact insert</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="sheet spine" aria-labelledby="spine-title">
                <div className="spine__head">
                    <p className="eyebrow">Three working theses</p>
                    <h2 className="sheet-title" id="spine-title">
                        Engineering declarations
                    </h2>
                </div>

                {manifesto.map((item) => (
                    <article
                        key={item.num}
                        className={item.hang ? 'plank plank--hang' : 'plank'}
                    >
                        <p className="plank__num">{item.num}</p>
                        <div>
                            <p className="plank__slab">
                                {item.title.split(item.accentWord)[0]}
                                <span className="red">{item.accentWord}</span>
                            </p>
                            <p className="plank__gloss">{item.description}</p>
                            <p className="plank__meta">{item.meta}</p>
                        </div>
                    </article>
                ))}
            </section>

            <section className="sheet ledger" aria-labelledby="work-heading">
                <header className="ledger__head">
                    <div>
                        <p className="eyebrow">Selected work</p>
                        <h2 className="sheet-title" id="work-heading">
                            Project ledger
                        </h2>
                        <p className="sheet-lede">代表性工程与实习条目，按档案编号排列。</p>
                    </div>
                    <p className="ledger__count">
                        {String(selectedWork.length).padStart(2, '0')} entries
                    </p>
                </header>

                <ol className="ledger-list">
                    {selectedWork.map((item, index) => (
                        <li key={item.title}>
                            <Link href={item.href} className="ledger-row">
                                <span className="ledger-num">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="ledger-main">
                                    <span className="ledger-title">{item.title}</span>
                                    <span className="ledger-desc">{item.description}</span>
                                </span>
                                <span className="ledger-stack">{item.stack}</span>
                                <span className="ledger-arrow" aria-hidden="true">
                                    →
                                </span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>

            <div className="sheet">
                <ResumeSwitcher />
            </div>

            <section className="sheet stack-inventory" aria-labelledby="stack-heading">
                <header className="ledger__head">
                    <div>
                        <p className="eyebrow">Inventory</p>
                        <h2 className="sheet-title" id="stack-heading">
                            Technical stack
                        </h2>
                        <p className="sheet-lede">静态分栏排版，不做跑马灯。</p>
                    </div>
                </header>
                <div className="stack-grid">
                    {stackGroups.map((group) => (
                        <div key={group.label} className="stack-col">
                            <h3>{group.label}</h3>
                            <ul>
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="sheet dispatch" aria-labelledby="writing-heading">
                <header className="ledger__head">
                    <div>
                        <p className="eyebrow">Dispatches</p>
                        <h2 className="sheet-title" id="writing-heading">
                            Latest notes
                        </h2>
                        <p className="sheet-lede">
                            {posts.length} 篇工程记录、问题复盘与项目笔记。
                        </p>
                    </div>
                    <Link href="/blog" className="text-link">
                        All notes →
                    </Link>
                </header>

                <ul className="dispatch-list">
                    {lead && (
                        <li>
                            <Link
                                href={`/blog/${encodeURIComponent(lead.slug)}`}
                                className="dispatch-row is-lead"
                            >
                                <span className="dispatch-meta">
                                    <span>{lead.category}</span>
                                    <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                                </span>
                                <span className="dispatch-title">{lead.title}</span>
                                <span className="dispatch-desc">{lead.description}</span>
                            </Link>
                        </li>
                    )}
                    {rest.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${encodeURIComponent(post.slug)}`}
                                className="dispatch-row"
                            >
                                <span className="dispatch-meta">
                                    <span>{post.category}</span>
                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                </span>
                                <span className="dispatch-title">{post.title}</span>
                                <span className="dispatch-desc">{post.description}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
