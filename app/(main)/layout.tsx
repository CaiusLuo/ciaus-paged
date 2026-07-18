/**
 * Main Layout
 * Shared layout with masthead and colophon
 */

import { Header, Footer } from '@/components/layout';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="site-main">
                {children}
            </main>
            <Footer />
        </div>
    );
}
