"use client";

import {
    ActionIcon,
    Title,
    Text,
    Stack,
    Group,
    Tooltip,
    Button
} from "@mantine/core";
import {
    IconBrandLinkedin,
    IconBrandGithub,
    IconCopy,
    IconCheck
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
    const t = useTranslations("");
    const [copied, setCopied] = useState(false);

    const email = t("common.email");

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Stack
            justify="center"
            align="center"
            gap="xl"
            maw={480}
            mx="auto"
            px="xl"
        >
            <Stack align="center" gap="xs">
                <Title order={1}>{t("contact.page.title")}</Title>
                <Text size="lg" c="dimmed" ta="center">
                    {t("contact.page.body")}
                </Text>
            </Stack>

            <Stack gap={0} align="center">
                <Title order={2} c="indigo">
                    {t("common.full_name")}
                </Title>
                <Text size="xl" c="dimmed">
                    {t("common.role")}
                </Text>
            </Stack>

            <Group gap="xs">
                <Button
                    component="a"
                    href={`mailto:${email}`}
                    size="md"
                    radius="md"
                >
                    {t("contact.send_me")}
                </Button>

                <Tooltip
                    label={
                        copied
                            ? t("contact.email_copied")
                            : t("contact.copy_email")
                    }
                >
                    <ActionIcon
                        variant="subtle"
                        size="lg"
                        aria-label="copy-email"
                        onClick={handleCopyEmail}
                    >
                        {copied ? (
                            <IconCheck size={24} />
                        ) : (
                            <IconCopy size={24} />
                        )}
                    </ActionIcon>
                </Tooltip>
            </Group>

            <Group gap="xs">
                <Tooltip label="LinkedIn">
                    <ActionIcon
                        component="a"
                        href="https://www.linkedin.com/in/sergio-lopez-103013205"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="lg"
                        radius="md"
                        aria-label="LinkedIn"
                    >
                        <IconBrandLinkedin size={24} />
                    </ActionIcon>
                </Tooltip>

                <Tooltip label="GitHub">
                    <ActionIcon
                        component="a"
                        href="https://github.com/SergioLopez4182"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="lg"
                        radius="md"
                        aria-label="GitHub"
                    >
                        <IconBrandGithub size={24} />
                    </ActionIcon>
                </Tooltip>
            </Group>
        </Stack>
    );
}
