/**
 * Blog Post Detail Page
 * Technical broadsheet article
 */

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarkdownContent } from '@/components/features/blog';
import { getBlogPostBySlug } from '@/lib/content/blog';
import { formatDate, formatReadingTime } from '@/lib/utils/format';

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="page-shell article-sheet">
            <article>
                <header className="article-spread">
                    <Link href="/blog" className="text-link">
                        ← Back to notes
                    </Link>
                    <p className="eyebrow" style={{ marginTop: '1.25rem' }}>
                        {post.category} · Technical note
                    </p>
                    <h1 className="sheet-title" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
                        {post.title}
                    </h1>
                    <p className="sheet-lede">{post.description}</p>
                    <div className="dispatch-meta" style={{ marginTop: '1.25rem' }}>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span>{formatReadingTime(post.readingTime)}</span>
                        {post.tags.slice(0, 4).map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </header>

                <div className="article-layout">
                    <div className="article-body">
                        <MarkdownContent content={post.content} />
                    </div>
                    <aside className="article-margin" aria-label="Article metadata">
                        <dl>
                            <dt>Category</dt>
                            <dd>{post.category}</dd>
                            <dt>Published</dt>
                            <dd>
                                <time dateTime={post.date}>{formatDate(post.date)}</time>
                            </dd>
                            <dt>Reading</dt>
                            <dd>{formatReadingTime(post.readingTime)}</dd>
                            {post.tags.length > 0 && (
                                <>
                                    <dt>Tags</dt>
                                    <dd>{post.tags.join(' · ')}</dd>
                                </>
                            )}
                        </dl>
                    </aside>
                </div>
            </article>
        </div>
    );
}
