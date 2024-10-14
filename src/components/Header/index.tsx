"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { WEB_NAME } from "~/constants";

function Header() {
    const ref = useRef<HTMLHeadElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const navItems = [
        {
            label: "Home",
            url: "#home",
        },
        {
            label: "About",
            url: "#about",
        },
        {
            label: "Contact",
            url: "#contact",
        },
    ];

    const socialItems = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=100009116800649",
            src: "/svg/facebook.svg",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/viet-nguyen-8a709020a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            src: "/svg/linkedin.svg",
        },
    ];

    useEffect(() => {
        const header = ref.current;
        const div = divRef.current;
        if (!header || !div) return;

        const handleScroll = () => {
            if (window.scrollY > 0) {
                header.classList.add(
                    "backdrop-blur",
                    "shadow-md",
                    "fixed",
                    "w-full",
                    "top-0",
                    "left-0",
                    "z-50"
                );
                div.classList.add("max-w-6xl", "mx-auto", "px-4", "md:px-10");
            } else {
                header.classList.remove(
                    "backdrop-blur",
                    "shadow-md",
                    "fixed",
                    "w-full",
                    "top-0",
                    "left-0",
                    "z-50"
                );
                div.classList.remove(
                    "max-w-6xl",
                    "mx-auto",
                    "px-4",
                    "md:px-10"
                );
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header ref={ref}>
            <div
                ref={divRef}
                className='flex justify-between items-center py-4'
            >
                <h5 className='font-semibold text-2xl'>{WEB_NAME}</h5>

                <ul className='flex gap-2 md:gap-16 text-lg'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.url}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                <ul className='hidden gap-3 opacity-60 md:flex'>
                    {socialItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} target='_blank'>
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;
