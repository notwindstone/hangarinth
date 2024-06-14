import React from "react";

export default function Center({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`grid place-content-center ${className}`}>
            {children}
        </div>
    );
}