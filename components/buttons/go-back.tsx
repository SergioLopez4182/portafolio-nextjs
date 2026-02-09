"use client";

import { ActionIcon, Button, useMantineColorScheme } from "@mantine/core";
import { IconArrowLeft, IconCaretDownFilled, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

import { useTranslations } from "next-intl";

interface Props {
    isMobile?: boolean;
    href: string;
}

export default function GoBackButton({ isMobile = false, href }: Props) {
    const t = useTranslations("common");

    return (
        <Button
            component="a"
            href={href}
            variant="subtle"
            color="indigo"
            size="compact-md"
            leftSection={<IconArrowLeft stroke={2} />}
        >
            {t("buttons.go_back")}
        </Button>
    );
}
