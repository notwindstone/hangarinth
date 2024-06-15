import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex justify-between ml-16 mr-16 mb-16 mt-36 w-288 h-83">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-14 text-soft-blue line-height-none">
                        Hangarinth
                    </p>
                    <p className="font-bold text-14 text-dark-1 line-height-none">
                        Find your favourite plugins or mods
                    </p>
                </div>
                <div className="flex gap-8">
                    <button
                        className="text-3.5 font-semibold text-white bg-soft-blue rounded-full w-fit pl-6 pr-6 pt-2 pb-2"
                    >
                        Search
                    </button>
                    <button
                        className="text-3.5 font-semibold text-dark-1 bg-gray-3 rounded-full w-fit pl-6 pr-6 pt-2 pb-2"
                    >
                        About
                    </button>
                </div>
            </div>
            <Image className="shrink-0" width={296} height={332} src="/favicon.png" alt="Website favicon"/>
        </div>
    );
}