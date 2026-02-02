import Navbar from "@/components/layouts/navbar";
import { useTranslations } from "next-intl";

interface Props {
    children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
    const t = useTranslations('');
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-gray-950">
            <Navbar />

            <main className="flex-1 flex items-center justify-center">
                {children}
            </main>

            <footer className="p-8 text-sm text-gray-900 dark:text-gray-50 text-center">
                © {t('common.year')} · {t('common.full_name')} · {t('common.location')}
            </footer>
        </div>
    );
}