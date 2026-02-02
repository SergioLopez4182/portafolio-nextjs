import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript, MantineColorScheme } from "@mantine/core";
import { cookies } from "next/headers";
import BaseProvider from "@/components/providers/base-provider";
import BaseLayout from "@/components/layouts/base-layout";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portafolio | Sergio López",
    description: "Portafolio técnico de Sergio López",
};

function getColorScheme(value?: string): MantineColorScheme {
    return value === "dark" ? "dark" : "light";
}

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();

    const cookieStore = await cookies();
    const colorScheme = getColorScheme(
        cookieStore.get("mantine-color-scheme")?.value
    );

    return (
        <html
            lang={locale}
            data-mantine-color-scheme={colorScheme}
            className={colorScheme === "dark" ? "dark" : ""}
        >
            <head>
                <ColorSchemeScript defaultColorScheme={colorScheme} />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    <BaseProvider defaultColorScheme={colorScheme}>
                        <BaseLayout>
                            {children}
                        </BaseLayout>
                    </BaseProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
