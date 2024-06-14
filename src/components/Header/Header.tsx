import Image from "next/image";
import HeaderLink from "@/components/Header/HeaderLink/HeaderLink";
import Link from "next/link";

const links = [
    {
        "label": "Search",
        "link": "/search",
    },
    {
        "label": "About",
        "link": "/about",
    },
];

const social = [
    {
        "classes": "i-fa6-brands-github",
        "link": "/",
    },
    {
        "classes": "i-fa6-brands-discord",
        "link": "/",
        "isDiscordLogo": true,
    },
];

export default function Header() {
    return (
        <header className="bg-white b-b-gray-2 b-b-1 pos-sticky top-0 flex justify-center w-full">
            <div className="h-16 flex items-center justify-between max-w-352 w-full pl-4 pr-4">
                <div className="flex items-center gap-4">
                    <Image width={28} height={32} src="/favicon.png" alt="Website favicon" />
                    <p className="font-semibold text-5 line-height-none text-dark">
                        Hangarinth
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    {
                        links.map((link) => {
                            return (
                                <HeaderLink key={link.label} link={link.link}>
                                    {link.label}
                                </HeaderLink>
                            );
                        })
                    }
                    <div className="w-0.25 h-6 bg-gray-2"/>
                    {
                        social.map((social) => {
                            return (
                                <Link key={social.classes} href={social.link}>
                                    <div className={`${social.classes} text-gray-5 text-5`}/>
                                </Link>
                            );
                        })
                    }
                    <div className="w-0.25 h-6 bg-gray-2"/>
                    <button className="i-tabler-sun text-5 text-gray-5" />
                </div>
            </div>
        </header>
    );
}