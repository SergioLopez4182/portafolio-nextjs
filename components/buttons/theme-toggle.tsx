"use client";

import { ActionIcon, Button, useMantineColorScheme } from "@mantine/core";
import { IconCaretDownFilled, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

import { useTranslations } from "next-intl";

interface Props {
    isMobile: boolean;
}

export default function ThemeToggle({ isMobile }: Props) {
    const t = useTranslations("navbar");
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const toggle = () => {
        const next = colorScheme === "dark" ? "light" : "dark";

        // 1) Mantine
        setColorScheme(next);

        // 2) Tailwind
        document.documentElement.classList.toggle("dark", next === "dark");

        // 3) Cookie para SSR
        document.cookie = `mantine-color-scheme=${next}; path=/; max-age=31536000`;
    };

    if (isMobile) {
        return (
            <Button
                onClick={toggle}
                variant="outline"
                size="compact-lg"
                rightSection={colorScheme === "dark" ? <IconSunFilled size={24} /> : <IconMoonFilled size={24} />}
            >
                {colorScheme === "dark" ? t("light_mode") : t("dark_mode")}
            </Button>
        );
    } else {
        return (
            <ActionIcon
                onClick={toggle}
                variant="subtle"
                size="xl"
                aria-label="Cambiar tema"
            >
                {colorScheme === "dark" ? <IconSunFilled size={24} /> : <IconMoonFilled size={24} />}
            </ActionIcon>
        );
    }
}
