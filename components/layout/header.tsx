'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { mainNav } from '@/app/config';
import { ThemeToggle } from './theme-toggle';

function isActivePath(pathname: string, href: string) {
    if (href === '/') {
        return pathname === '/';
    }

    if (href.startsWith('/#')) {
        return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const year = new Date().getFullYear();

    return (
        <header className="masthead">
            <div className="masthead__inner">
                <div className="masthead__bar">
                    <Link href="/" className="masthead__brand">
                        <span className="masthead__mark">
                            Caius Luo
                            <span className="issue">ENG Nº 04</span>
                        </span>
                        <p className="masthead__subtitle">
                            Engineering Notes · Backend Systems · Agent Infrastructure
                        </p>
                    </Link>

                    <div className="masthead__meta">
                        <p className="masthead__edition">
                            Personal broadsheet
                            <br />
                            Edition {year} · In print
                        </p>
                    </div>
                </div>

                <div className="masthead__nav-row">
                    <nav className="masthead__nav" aria-label="Primary">
                        {mainNav.map((item, index) => (
                            <span key={item.href} className="inline-flex items-center gap-3">
                                {index > 0 && (
                                    <span className="dot" aria-hidden="true">
                                        ·
                                    </span>
                                )}
                                <Link
                                    href={item.href}
                                    className={cn(isActivePath(pathname, item.href) && 'is-active')}
                                    aria-current={isActivePath(pathname, item.href) ? 'page' : undefined}
                                >
                                    {item.title}
                                </Link>
                            </span>
                        ))}
                    </nav>

                    <div className="masthead__actions">
                        <ThemeToggle />
                        <button
                            type="button"
                            className="masthead__menu"
                            onClick={() => setMobileMenuOpen((open) => !open)}
                            aria-label="Toggle navigation"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <nav className="masthead__mobile" aria-label="Mobile">
                    {mainNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(isActivePath(pathname, item.href) && 'is-active')}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
