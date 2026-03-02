"use client";

import Link from "next/link";
import { Stack, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function LogoButton() {
    const t = useTranslations("");

    return (
        <Link
            href="/"
            className="group flex flex-col px-2 py-1 rounded-lg transition-colors hover:bg-indigo-500/10 no-underline"
        >
            <Text size="xl" fw={800} c="indigo" className="leading-none tracking-wider">
                {t("common.full_name")}
            </Text>

            <Text size="sm" c="dimmed" className="font-mono tracking-wider uppercase">
                  {"<"}{t("common.title")}{" />"}

            </Text>
        </Link>
    );
}
