import type { Metadata } from 'next';
import { Big_Shoulders, Fraunces, Spline_Sans_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteMetadata } from '@/app/config';
import './globals.css';

const display = Big_Shoulders({
    subsets: ['latin'],
    weight: 'variable',
    style: 'normal',
    axes: ['opsz'],
    variable: '--font-display-face',
    display: 'swap',
});

const editorial = Fraunces({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    style: 'normal',
    variable: '--font-editorial-face',
    display: 'swap',
});

const mono = Spline_Sans_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-mono-face',
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
        <html
            lang="zh-CN"
            className={`${display.variable} ${editorial.variable} ${mono.variable}`}
            suppressHydrationWarning
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body>
                <a className="skip-link" href="#main-content">
                    Skip to content
                </a>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
