import Hero from "@/components/Hero/Hero";
import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations('Index');

    return (
        <div className="flex items-center justify-center w-full">
            <p>{t('title')}</p>
            <Hero />
        </div>
    );
}
