'use client';

import { Button, Group } from "@mantine/core";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { routing } from "@/i18n/routing";

export default function DesktopNavbar() {
    const t = useTranslations('navbar');
    const router = useRouter();
    const pathname = usePathname();

    const sections = [
        {
            name: t('home'),
            url: '/',
        },
        {
            name: t('projects'),
            url: '/projects',
        },
        {
            name: t('about'),
            url: '/about',
        },
        {
            name: t('contact'),
            url: '/contact',
        },
    ];


    const normalizedPathname = (() => {
        type Locale = (typeof routing.locales)[number];

        const segments = pathname.split('/').filter(Boolean);

        if (segments.length && routing.locales.includes(segments[0] as Locale)) {
            return '/' + segments.slice(1).join('/');
        }

        return pathname;
    })();

    const calculateActive = (url: string) => {
        if (url === "/")
            return normalizedPathname === "/" ? "filled" : "subtle";

        return normalizedPathname.startsWith(url)
            ? "filled"
            : "subtle";
    };

    return (
        <nav className="px-6 md:px-8 h-16 flex items-center justify-between bg-white">
            <Image
                src="/logo-placeholder-alt.svg"
                alt="Logo"
                width={180}
                height={80}
                priority
            />

            <Group gap='xs'>
                {
                    sections.map((section, i) => (
                        <Button
                            key={i}
                            variant={calculateActive(section.url)}
                            size="lg"
                            radius='md'
                            className="whitespace-nowrap"
                            onClick={() => router.push(section.url)}
                        >
                            {section.name}
                        </Button>
                    ))
                }

                {/* <ThemeToggle /> */}
            </Group>
        </nav>
    );
}