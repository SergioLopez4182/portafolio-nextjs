import DesktopNavbar from "@/components/desktop/navbar";
import MobileNavbar from "@/components/mobile/navbar";

interface Props {
    children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-black">

            {/* Desktop */}
            <div className="hidden md:block">
                <DesktopNavbar />
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
                <MobileNavbar />
            </div>

            <main className="flex-1 flex items-center justify-center">
                {children}
            </main>

            <footer className="p-8 text-sm text-gray-800 text-center">
                © 2026 Sergio López Sánchez · Saltillo, México
            </footer>
        </div>
    );
}