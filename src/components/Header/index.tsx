"use client";

import Image from "next/image";
import Link from "next/link";
import { WEB_NAME } from "~/constants";

function Header() {
    const navItems = [
        {
            label: "Home",
            url: "#",
        },
        {
            label: "About",
            url: "#",
        },
        {
            label: "Contact",
            url: "#",
        },
    ];

    const socialItems = [
        {
            name: "Facebook",
            url: "#",
            src: "/svg/facebook.svg",
        },
        {
            name: "LinkedIn",
            url: "#",
            src: "/svg/linkedin.svg",
        }
    ]

    return (
        <header className="flex justify-between items-center py-4">
            <h5 className="font-semibold text-2xl">{WEB_NAME}</h5>

            <ul className="flex gap-2 md:gap-16 text-lg">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className="hidden gap-3 opacity-60 md:flex">
                {
                    socialItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.url}>
                                <Image src={item.src} alt={item.name} width={30} height={30} />
                            </Link>
                        </li>
                    ))
                }
            </ul>

        </header>
    );
}

export default Header;
