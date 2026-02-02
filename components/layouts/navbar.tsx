"use client";

import { Button, Stack, Drawer, Text, Group, Divider, Burger } from "@mantine/core";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LanguageSwitcher from "@/components/language-switcher";
import { useDisclosure } from "@mantine/hooks";
import ThemeToggle from "../theme-toggle";

export default function Navbar() {
    const t = useTranslations("navbar");
    const router = useRouter();
    const pathname = usePathname();
    const [opened, { close, toggle }] = useDisclosure(false);

    const sections = [
        {
            name: t("home"),
            url: "/",
        },
        {
            name: t("projects"),
            url: "/projects",
        },
        {
            name: t("about"),
            url: "/about",
        },
        {
            name: t("contact"),
            url: "/contact",
        },
    ];


    const normalizedPathname = (() => {
        type Locale = (typeof routing.locales)[number];

        const segments = pathname.split("/").filter(Boolean);

        if (segments.length && routing.locales.includes(segments[0] as Locale)) {
            return "/" + segments.slice(1).join("/");
        }

        return pathname;
    })();

    const calculateActive = (url: string, isMobile: boolean) => {
        const variant = isMobile ? "outline" : "subtle"
        if (url === "/")
            return normalizedPathname === "/" ? "filled" : variant;

        return normalizedPathname.startsWith(url)
            ? "filled"
            : variant;
    };

    return (
        <nav className="px-6 md:px-8 h-16 flex items-center justify-between bg-white dark:bg-gray-900">
            <Image
                src="/logo-placeholder-alt.svg"
                alt="Logo"
                width={180}
                height={80}
                priority
            />

            {/* Desktop */}
            <div className="hidden md:block">
                <Group gap="xs">
                    <LanguageSwitcher isMobile={false} />
                    <ThemeToggle isMobile={false} />
                    <Divider size="sm" my="sm" orientation="vertical" color="gray" />
                    {
                        sections.map((section, i) => (
                            <Button
                                key={i}
                                variant={calculateActive(section.url, false)}
                                size="compact-lg"
                                radius="md"
                                className="whitespace-nowrap"
                                onClick={() => router.push(section.url)}
                            >
                                {section.name}
                            </Button>
                        ))
                    }
                </Group>
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
                <Drawer
                    opened={opened}
                    onClose={close}
                    title={<Text size="xl" fw={700}>{t('title')}</Text>}
                >
                    <Stack gap="xs">
                        {
                            sections.map((section, i) => (
                                <Button
                                    key={i}
                                    variant={calculateActive(section.url, true)}
                                    size="compact-lg"
                                    className="whitespace-nowrap"
                                    onClick={() => {
                                        router.push(section.url);
                                        close();
                                    }}
                                >
                                    {section.name}
                                </Button>
                            ))
                        }

                        <Divider size="sm" my="xs" color="dimmed" />
                        <LanguageSwitcher isMobile={true} />
                        <ThemeToggle isMobile={true} />
                    </Stack>
                </Drawer>

                <Burger
                    size="md"
                    opened={opened}
                    onClick={toggle}
                    aria-label="toggle-navigation-drawer"
                />
            </div>
        </nav>
    );
}