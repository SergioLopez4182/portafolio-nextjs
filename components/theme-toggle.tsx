"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
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

    return (
        <ActionIcon
            onClick={toggle}
            variant="subtle"
            size="lg"
        
            radius='md'
            aria-label="Cambiar tema"
        >
            {colorScheme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
        </ActionIcon>
    );
}
