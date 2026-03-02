"use client";

import { Button, Stack, Drawer, Text, Group, Divider, Burger, Title } from "@mantine/core";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LanguageSwitcher from "@/components/buttons/language-switcher";
import { useDisclosure } from "@mantine/hooks";
import ThemeToggle from "../buttons/theme-toggle";
import LogoButton from "../buttons/logo-button";

export default function Navbar() {
    const t = useTranslations("");
    const router = useRouter();
    const pathname = usePathname();
    const [opened, { close, toggle }] = useDisclosure(false);

    const sections = [
        {
            name: t("navbar.projects"),
            url: "/projects",
        },
        {
            name: t("navbar.about"),
            url: "/about",
        },
        {
            name: t("navbar.contact"),
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
        <nav className="px-8 lg:px-32 2xl:px-64 h-16 flex items-center justify-between bg-white dark:bg-neutral-800">
            <LogoButton />

            {/* Desktop */}
            <div className="hidden lg:block">
                <Group gap="xs">
                    {
                        sections.map((section, i) => (
                            <Button
                                key={i}
                                variant={calculateActive(section.url, false)}
                                size="compact-md"
                                radius="md"
                                className="whitespace-nowrap"
                                onClick={() => router.push(section.url)}
                            >
                                {section.name}
                            </Button>
                        ))
                    }
                    <Divider size="sm" my="sm" orientation="vertical" color="gray" />
                    <LanguageSwitcher isMobile={false} />
                    <Divider size="sm" my="sm" orientation="vertical" color="gray" />
                    <ThemeToggle isMobile={false} />
                </Group>
            </div>

            {/* Mobile */}
            <div className="block lg:hidden">
                <Drawer
                    opened={opened}
                    onClose={close}
                    title={<Text size="xl" fw={700}>{t('navbar.title')}</Text>}
                >
                    <Stack gap="xs">
                        {
                            sections.map((section, i) => (
                                <Button
                                    key={i}
                                    variant={calculateActive(section.url, true)}
                                    size="compact-md"
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