import React from "react";

export default function Stack({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
}