import React from "react";

export default function Group({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    const defaultClassNames = "flex flex-row";
    const customClassNames = className?.replace(defaultClassNames, '');

    return (
        <div className={`${defaultClassNames} ${customClassNames}`}>
            {children}
        </div>
    );
}