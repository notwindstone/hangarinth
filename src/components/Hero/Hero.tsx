import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex justify-between w-288 h-83">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <p className="font-extrabold text-18 text-soft-blue line-height-none">
                        Hangarinth
                    </p>
                    <p className="font-extrabold text-18 text-dark-1 line-height-none">
                        Find your favourite plugins or mods
                    </p>
                </div>
                <div className="flex gap-8">
                    <button
                        className="text-6 font-semibold text-white bg-soft-blue rounded-full w-fit pl-12 pr-12 pt-4 pb-4">
                        Search
                    </button>
                    <button
                        className="text-6 font-semibold text-dark-1 bg-gray-3 rounded-full w-fit pl-12 pr-12 pt-4 pb-4">
                        About
                    </button>
                </div>
            </div>
            <div className="pos-relative shrink-0 w-74 h-full">
                <Image fill src="/favicon.png" alt="Website favicon" />
            </div>
        </div>
    );
}