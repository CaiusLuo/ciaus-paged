import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/content/blog';
import { siteMetadata } from '@/app/config';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
    title: '技术笔记 | Caius',
    description:
        '技术笔记、项目复盘与工程记录，分享后端开发、Agent 工程化与架构设计的实践经验。',
    keywords: ['技术笔记', '后端开发', 'Agent 工程化', '微服务', '架构设计', '工程实践'],
    openGraph: {
        title: '技术笔记 | Caius',
        description:
            '技术笔记、项目复盘与工程记录，分享后端开发、Agent 工程化与架构设计的实践经验。',
        type: 'website',
        siteName: siteMetadata.name,
        locale: 'zh-CN',
    },
};

export default function BlogPage() {
    const posts = getAllBlogPosts();
    const [lead, ...rest] = posts;
    const categories = [...new Set(posts.map((post) => post.category))];
    const categoryCounts = categories.map((category) => ({
        category,
        count: posts.filter((post) => post.category === category).length,
    }));

    return (
        <div className="page-shell notes-edition">
            <header>
                <p className="eyebrow">Notes edition</p>
                <h1 className="sheet-title">工程笔记</h1>
                <p className="sheet-lede">
                    后端开发、Agent 工程化、项目复盘与问题排查记录。共 {posts.length} 篇，
                    {categories.length} 个分类。
                </p>
            </header>

            {categoryCounts.length > 0 && (
                <div className="topic-index" aria-label="Topic index">
                    {categoryCounts.map((item) => (
                        <span key={item.category}>
                            <strong>{item.category}</strong> · {item.count}
                        </span>
                    ))}
                </div>
            )}

            {lead && (
                <Link
                    href={`/blog/${encodeURIComponent(lead.slug)}`}
                    className="notes-lead"
                >
                    <span className="dispatch-meta">
                        <span>Lead · {lead.category}</span>
                        <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                    </span>
                    <h2 className="notes-lead-title">{lead.title}</h2>
                    <p className="dispatch-desc">{lead.description}</p>
                </Link>
            )}

            <section aria-labelledby="dispatch-heading">
                <div className="ledger__head">
                    <div>
                        <p className="eyebrow">Archive</p>
                        <h2 className="sheet-title" id="dispatch-heading">
                            Latest dispatches
                        </h2>
                    </div>
                    <p className="ledger__count">{String(posts.length).padStart(2, '0')} notes</p>
                </div>

                {posts.length === 0 ? (
                    <p className="sheet-lede">
                        Add Markdown files to the content folder and they will appear here.
                    </p>
                ) : rest.length === 0 ? (
                    <p className="sheet-lede">Lead note is the only entry in this edition.</p>
                ) : (
                    <ul className="dispatch-list">
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
                )}
            </section>
        </div>
    );
}
