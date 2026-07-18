import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
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

const selectedWork = [
    {
        title: 'Agent Infrastructure',
        description: 'API 调度、GraphQL Resolver 优化、LangGraph 状态流转、LangSmith 链路追踪。',
        stack: 'GraphQL · LangGraph · Redis · LangSmith',
        href: '#experience',
    },
    {
        title: 'Backend Systems',
        description: 'Spring Cloud Alibaba、Gateway 鉴权、分布式 ID、多级缓存、异步落库。',
        stack: 'Spring Cloud · Redis · RocketMQ · Gateway',
        href: '#experience',
    },
    {
        title: 'Data Automation',
        description: 'XXL-Job 定时调度、RabbitMQ 削峰、Sharding-JDBC 分表、金融资讯 Bot。',
        stack: 'XXL-Job · RabbitMQ · Sharding-JDBC · Python',
        href: '#experience',
    },
    {
        title: 'IMean.ai Agent Backend',
        description: '多源 API 稳定性、POI 检索性能、Agent 状态流转与跨服务调用链路。',
        stack: 'Redis · GraphQL · DataLoader · LangGraph',
        href: '#experience',
    },
    {
        title: 'RedFolio',
        description: '高并发内容社区：微服务拆分、多级缓存、点赞异步落库。',
        stack: 'Spring Cloud Alibaba · Redis · Caffeine · RocketMQ',
        href: '#experience',
    },
    {
        title: 'TodayStock',
        description: '股票数据采集、清洗、入库与可视化分析平台。',
        stack: 'Spring Boot · RabbitMQ · XXL-Job · Sharding-JDBC',
        href: '#experience',
    },
] as const;

const stackGroups = [
    {
        label: 'Backend',
        items: ['Java', 'Spring Boot', 'Spring Cloud Alibaba', 'GraphQL'],
    },
    {
        label: 'Infrastructure',
        items: ['Redis', 'RabbitMQ', 'RocketMQ', 'Docker', 'MySQL'],
    },
    {
        label: 'Agent',
        items: ['LangGraph', 'LangSmith', 'CrewAI'],
    },
    {
        label: 'Data',
        items: ['MySQL', 'PostgreSQL', 'XXL-Job', 'Sharding-JDBC'],
    },
] as const;

export default function HomePage() {
    const posts = getAllBlogPosts();
    const featuredPosts = getFeaturedBlogPosts(3);

    return (
        <div className="archive-home">
            <section className="archive-intro" aria-labelledby="archive-identity">
                <div className="archive-intro-copy">
                    <p className="archive-meta">Portfolio · Engineering index</p>
                    <h1 id="archive-identity">Caius Luo</h1>
                    <p className="archive-lede">
                        Backend engineer building reliable Java systems and AI agent infrastructure.
                    </p>
                    <p className="archive-lede-zh">
                        维护一份工程向的个人索引：后端系统、Agent 基础设施，以及可复查的技术笔记。
                    </p>

                    <nav className="archive-identity-links" aria-label="Primary links">
                        {identityLinks.map((link, index) => (
                            <span key={link.href} className="archive-identity-link-item">
                                {index > 0 && <span className="archive-identity-sep" aria-hidden="true">/</span>}
                                <Link
                                    href={link.href}
                                    className="archive-text-link"
                                    {...(link.external
                                        ? { target: '_blank', rel: 'noreferrer noopener' }
                                        : {})}
                                >
                                    {link.label}
                                </Link>
                            </span>
                        ))}
                    </nav>
                </div>

                <figure className="archive-portrait">
                    <Image
                        src="/caius-self-png.png"
                        alt="Portrait of Caius Luo"
                        width={1055}
                        height={1491}
                        priority
                    />
                </figure>
            </section>

            <section className="archive-section" aria-labelledby="selected-work-heading">
                <header className="archive-section-head">
                    <div>
                        <h2 id="selected-work-heading">Selected work</h2>
                        <p>能力方向与代表性工程，索引式排列。</p>
                    </div>
                    <p className="archive-section-count">{String(selectedWork.length).padStart(2, '0')} entries</p>
                </header>

                <ol className="archive-index">
                    {selectedWork.map((item, index) => (
                        <li key={item.title}>
                            <Link href={item.href} className="archive-index-row">
                                <span className="archive-index-num">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="archive-index-main">
                                    <span className="archive-index-title">{item.title}</span>
                                    <span className="archive-index-desc">{item.description}</span>
                                </span>
                                <span className="archive-index-meta">{item.stack}</span>
                                <span className="archive-index-arrow" aria-hidden="true">
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>

            <ResumeSwitcher />

            <section className="archive-section" aria-labelledby="stack-heading">
                <header className="archive-section-head">
                    <div>
                        <h2 id="stack-heading">Technical stack</h2>
                        <p>按类别整理的常用技术，静态可读，不做跑马灯。</p>
                    </div>
                </header>

                <div className="archive-stack-grid">
                    {stackGroups.map((group) => (
                        <div key={group.label} className="archive-stack-group">
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

            <section className="archive-section archive-section-last" aria-labelledby="writing-heading">
                <header className="archive-section-head">
                    <div>
                        <h2 id="writing-heading">Latest writing</h2>
                        <p>
                            {posts.length} 篇工程记录、问题复盘与项目笔记。
                        </p>
                    </div>
                    <Link href="/blog" className="archive-text-link archive-text-link-quiet">
                        All notes
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                </header>

                <ul className="archive-writing-list">
                    {featuredPosts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${encodeURIComponent(post.slug)}`}
                                className="archive-writing-row"
                            >
                                <span className="archive-writing-meta">
                                    <span>{post.category}</span>
                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                </span>
                                <span className="archive-writing-title">{post.title}</span>
                                <span className="archive-writing-desc">{post.description}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
