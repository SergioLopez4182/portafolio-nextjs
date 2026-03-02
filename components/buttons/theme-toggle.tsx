"use client";

import { Button, Switch, useMantineColorScheme } from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

interface Props {
    isMobile: boolean;
}

export default function ThemeToggle({ isMobile }: Props) {
    const t = useTranslations("navbar");
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const toggle = () => {
        const nextTheme = colorScheme === "dark" ? "light" : "dark";
        setColorScheme(nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        document.cookie = `mantine-color-scheme=${nextTheme}; path=/; max-age=31536000`;
    };

    if (isMobile) {
        return (
            <Button
                onClick={toggle}
                variant="outline"
                size="compact-md"
                rightSection={colorScheme === "dark" ? <IconSunFilled size={16} /> : <IconMoonFilled size={16} />}
                aria-label={t("toggle_scheme")}
            >
                {colorScheme === "dark" ? t("light_mode") : t("dark_mode")}
            </Button>
        );
    } else {
        return (
            <Switch
                checked={colorScheme === "dark"}
                onChange={toggle}
                size="md"
                thumbIcon={
                    colorScheme === "dark" ? (
                        <IconSunFilled size={12} color="var(--mantine-color-gray-6)" stroke={2} />
                    ) : (
                        <IconMoonFilled size={12} color="var(--mantine-color-gray-8)" stroke={2} />
                    )
                }
                aria-label={t("toggle_scheme")}
            />
        );
    }
}
