import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteMetadata } from '@/app/config';
import './globals.css';

const displaySerif = Instrument_Serif({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
    variable: '--font-display-face',
    display: 'swap',
});

const themeInitScript = `(() => {
    try {
        const storedTheme = localStorage.getItem('theme');
        const resolvedTheme = storedTheme === 'dark' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
    } catch {
        document.documentElement.classList.remove('dark');
    }
})();`;

export const metadata: Metadata = {
    title: siteMetadata.title,
    description: siteMetadata.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" className={displaySerif.variable} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}

