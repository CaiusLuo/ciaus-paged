/**
 * Blog List Component
 * Editorial dispatch list
 */

import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { BlogPostSummary } from '@/types';

export interface BlogListProps {
    posts: BlogPostSummary[];
    loading?: boolean;
    loadingCount?: number;
}

export function BlogList({ posts, loading = false, loadingCount = 6 }: BlogListProps) {
    if (loading) {
        return (
            <ul className="dispatch-list" aria-busy="true">
                {Array.from({ length: loadingCount }).map((_, index) => (
                    <li key={index} className="dispatch-row">
                        <span className="dispatch-meta">Loading</span>
                        <span className="dispatch-title">…</span>
                    </li>
                ))}
            </ul>
        );
    }

    if (posts.length === 0) {
        return (
            <p className="sheet-lede">
                No notes found. Add Markdown files to the content folder and they will appear here.
            </p>
        );
    }

    return (
        <ul className="dispatch-list">
            {posts.map((post) => (
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
    );
}
