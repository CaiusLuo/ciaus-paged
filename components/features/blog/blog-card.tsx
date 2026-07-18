/**
 * Blog Card Component
 * Kept as a thin dispatch-row wrapper for any remaining imports
 */

import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { BlogPostSummary } from '@/types';

export interface BlogCardProps {
    post: BlogPostSummary;
    className?: string;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${encodeURIComponent(post.slug)}`} className="dispatch-row">
            <span className="dispatch-meta">
                <span>{post.category}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="dispatch-title">{post.title}</span>
            <span className="dispatch-desc">{post.description}</span>
        </Link>
    );
}
