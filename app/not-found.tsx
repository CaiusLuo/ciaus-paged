import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function DefaultNotFound() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="site-main">
                <div className="page-shell utility-sheet">
                    <p className="eyebrow">Press error</p>
                    <h1>
                        404
                        <br />
                        <span style={{ color: 'var(--color-accent)' }}>Not found</span>
                    </h1>
                    <p className="sheet-lede">
                        这一页不在合订本里。或许链接过期，或许从未付印。
                    </p>
                    <Link href="/" className="btn-print">
                        Return to front page →
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
