'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('Home');
    const pathname = usePathname();

    const navItems = ['Home', 'Templates', 'Pricing', 'About', 'Contact'];

    // Map path -> nav item
    useEffect(() => {
        if (pathname === "/") {
            setActive("Home");
        } else {
            const path = pathname.replace("/", "").toLowerCase();

            const matched = navItems.find(
                (item) => item.toLowerCase() === path
            );

            if (matched) {
                setActive(matched);
            }
        }
    }, [pathname]);

    return (
        <nav className="bg-white px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between relative">

            <Link href="/" className="flex items-center gap-2">
                <span className="text-3xl font-bold text-zinc-800">ReadyUI</span>
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
                {navItems.map((item) => (
                    <Link
                        key={item}
                        href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                        className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                            active === item
                                ? 'bg-white border border-zinc-200 font-medium text-zinc-800'
                                : 'text-zinc-500 hover:text-zinc-400'
                        }`}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* CTA */}
            <button className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full">
                Get started
            </button>

            {/* Mobile Toggle */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5"
            >
                <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className={`px-4 py-2.5 rounded-lg text-sm ${
                                active === item
                                    ? 'bg-zinc-50 font-medium text-zinc-800'
                                    : 'text-zinc-500 hover:bg-zinc-50'
                            }`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}