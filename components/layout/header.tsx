/**
 * Header Component
 * Site header with logo and navigation
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { mainNav } from '@/app/config';
import { ThemeToggle } from './theme-toggle';

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="site-header-inner">
                <Link href="/" className="site-logo">
                    <span className="site-logo-mark" aria-hidden="true">
                        C
                    </span>
                    <span className="site-logo-text">Caius</span>
                </Link>

                <nav className="site-nav" aria-label="Primary">
                    {mainNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn('site-nav-link', pathname === item.href && 'is-active')}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="site-header-actions">
                    <ThemeToggle />
                    <button
                        className="site-menu-toggle"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-label="Toggle navigation"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <nav className="site-nav-mobile" aria-label="Mobile">
                    {mainNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn('site-nav-link', pathname === item.href && 'is-active')}
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
