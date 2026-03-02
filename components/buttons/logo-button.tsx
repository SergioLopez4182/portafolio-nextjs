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
            <span style={{ color: "var(--mantine-color-indigo-5)" }}
                className="font-extrabold text-md lg:text-lg leading-none tracking-wider"
            >
                {t("common.full_name")}
            </span>

            <span style={{ color: "var(--mantine-color-dimmed)" }}
                className="text-xs lg:text-md font-mono tracking-wider uppercase"
            >
                {"<"}{t("common.title")}{" />"}
            </span>
        </Link>
    );
}
