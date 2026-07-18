'use client';

import { useCallback, useEffect, useSyncExternalStore } from 'react';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark';

function applyThemeToDocument(theme: Theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
}

let currentTheme: Theme = 'light';
const listeners = new Set<() => void>();

function getTheme(): Theme {
    return currentTheme;
}

function setThemeValue(theme: Theme) {
    currentTheme = theme;
    listeners.forEach((listener) => listener());
}

function subscribeToTheme(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getClientSnapshot() {
    return true;
}

function getServerSnapshot() {
    return false;
}

export function ThemeToggle() {
    const isClient = useSyncExternalStore(() => () => {}, getClientSnapshot, getServerSnapshot);

    const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => 'light' as Theme);

    useEffect(() => {
        const savedTheme = (localStorage.getItem('theme') as Theme | null) || 'light';
        setThemeValue(savedTheme);
        applyThemeToDocument(savedTheme);
    }, []);

    const handleThemeChange = useCallback((newTheme: Theme) => {
        setThemeValue(newTheme);
        localStorage.setItem('theme', newTheme);
        applyThemeToDocument(newTheme);
    }, []);

    if (!isClient) {
        return (
            <div className="theme-switch" aria-hidden="true">
                <button type="button" tabIndex={-1}>
                    Paper
                </button>
                <button type="button" tabIndex={-1}>
                    Ink
                </button>
            </div>
        );
    }

    return (
        <div className="theme-switch" role="group" aria-label="Theme">
            <button
                type="button"
                onClick={() => handleThemeChange('light')}
                className={cn(theme === 'light' && 'is-active')}
                aria-pressed={theme === 'light'}
            >
                Paper
            </button>
            <button
                type="button"
                onClick={() => handleThemeChange('dark')}
                className={cn(theme === 'dark' && 'is-active')}
                aria-pressed={theme === 'dark'}
            >
                Ink
            </button>
        </div>
    );
}
