import React from "react";
import Link from "next/link";

export default function HeaderLink({
    children,
    link,
}: {
    children?: React.ReactNode;
    link?: string;
}) {
    return (
        <Link className="flex items-start" href={link ?? "/"}>
            <p className="text-dark text-4.5 line-height-none">
                {children}
            </p>
            <div className="i-tabler-arrow-up-right text-gray text-4" />
        </Link>
    );
}