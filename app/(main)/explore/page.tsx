/**
 * Explore Page
 * Photographic field notes / contact sheet
 */

import type { Metadata } from 'next';
import { ExploreAttractions } from '@/components/features/attractions';
import { siteMetadata } from '@/app/config';

export const metadata: Metadata = {
    title: '探索 | Caius',
    description: '基于地理位置的周边探索，发现附近值得关注的去处',
    keywords: ['周边探索', '地理位置', '地图', 'LBS'],
    openGraph: {
        title: '探索 | Caius',
        description: '基于地理位置的周边探索，发现附近值得关注的去处',
        type: 'website',
        siteName: siteMetadata.name,
        locale: 'zh-CN',
    },
};

export default function ExplorePage() {
    return (
        <div className="page-shell field-sheet">
            <header>
                <p className="eyebrow">Field notes · Supplement</p>
                <h1 className="sheet-title">周边探索</h1>
                <p className="sheet-lede">
                    基于地理位置与关键词的地点检索，排成接触印样（contact sheet）式的影像笔记，而不是旅行 App 仪表盘。
                </p>
                <div className="dispatch-meta" style={{ marginTop: '1rem' }}>
                    <span>Live location</span>
                    <span>Keyword search</span>
                    <span>Captioned plates</span>
                </div>
            </header>

            <section className="field-controls" aria-label="Explore interface">
                <ExploreAttractions />
            </section>
        </div>
    );
}
