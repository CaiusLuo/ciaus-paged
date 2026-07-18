/**
 * Attraction Grid Component
 * Contact-sheet layout
 */

import { AttractionCard } from './attraction-card';
import type { Attraction } from '@/types';

export interface AttractionGridProps {
    attractions: Attraction[];
    loading?: boolean;
    loadingCount?: number;
}

export function AttractionGrid({
    attractions,
    loading = false,
    loadingCount = 6,
}: AttractionGridProps) {
    if (loading) {
        return (
            <div className="contact-sheet" aria-busy="true">
                {Array.from({ length: loadingCount }).map((_, index) => (
                    <article key={index} className="contact-frame">
                        <div className="contact-frame__media" />
                        <div className="contact-frame__body">
                            <h3>Loading plate…</h3>
                        </div>
                    </article>
                ))}
            </div>
        );
    }

    if (attractions.length === 0) {
        return (
            <p className="sheet-lede">
                No plates in this sheet. Adjust radius or try another keyword.
            </p>
        );
    }

    return (
        <div className="contact-sheet">
            {attractions.map((attraction, index) => (
                <AttractionCard
                    key={attraction.id || `${attraction.name}-${index}`}
                    attraction={attraction}
                    index={index}
                />
            ))}
        </div>
    );
}
