import Image from "next/image";

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
                <div className="flex">
                    to be filled
                </div>
            </div>
        </header>
    );
}