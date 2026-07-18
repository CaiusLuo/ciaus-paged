import Link from 'next/link';
import { authorInfo, footerNav, siteConfig } from '@/app/config';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="colophon">
            <div>
                <p className="colophon__mark">Caius Luo</p>
                <p className="colophon__body">
                    Java backend and AI agent infrastructure — a maintained portfolio, project
                    index, and technical publication. Built to read like an engineering broadsheet,
                    not a product template.
                </p>
            </div>

            <address className="colophon__meta">
                Java Backend / Agent Infrastructure
                <br />
                <Link href={authorInfo.github} target="_blank" rel="noreferrer noopener">
                    GitHub · CaiusLuo
                </Link>
                <br />
                <Link href={`mailto:${authorInfo.email}`}>{authorInfo.email}</Link>
                <br />
                Next.js · Markdown notes · Vercel
            </address>

            <div className="colophon__rule">
                <span>
                    Set in Big Shoulders &amp; Fraunces · reverse-print dark mode available
                </span>
                <span>
                    © {currentYear} {siteConfig.author.name} · ENG Nº 04
                </span>
            </div>

            <nav className="colophon__rule" aria-label="Footer">
                {footerNav.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
        </footer>
    );
}
