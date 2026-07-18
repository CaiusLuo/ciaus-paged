/**
 * Attraction Card Component
 * Contact-sheet plate
 */

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistance, formatRating } from '@/lib/utils/format';
import type { Attraction } from '@/types';

export interface AttractionCardProps {
    attraction: Attraction;
    className?: string;
    index?: number;
}

export function AttractionCard({ attraction, className, index = 0 }: AttractionCardProps) {
    const photo = attraction.photos[0];

    return (
        <article className={cn('contact-frame', className)}>
            <div className="contact-frame__media">
                <span className="contact-frame__num">
                    Plate {String(index + 1).padStart(2, '0')}
                </span>
                {photo ? (
                    <Image
                        src={photo.url}
                        alt={photo.alt || attraction.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-[color:var(--color-ink-muted)]">
                        <MapPin className="h-8 w-8" aria-hidden="true" />
                    </div>
                )}
            </div>

            <div className="contact-frame__body">
                <h3>{attraction.name}</h3>
                <p>{attraction.location.address || 'No address available'}</p>
                <p className="contact-frame__meta">
                    {attraction.distance !== undefined && (
                        <span>{formatDistance(attraction.distance)} · </span>
                    )}
                    {attraction.rating !== undefined && (
                        <span>Rating {formatRating(attraction.rating)} · </span>
                    )}
                    {attraction.tags.slice(0, 2).join(' · ') || 'Field note'}
                </p>
            </div>
        </article>
    );
}
