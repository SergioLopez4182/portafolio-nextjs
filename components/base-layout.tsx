import NavBar from "@/components/navbar";

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-black">
            <NavBar />

            <main className="flex-1 flex items-center justify-center">
                {children}
            </main>

            <footer className="p-8 text-sm text-gray-800 text-center">
                © 2026 Sergio López Sánchez · Saltillo, México
            </footer>
        </div>
    );
}