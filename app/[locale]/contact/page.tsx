import { ActionIcon, Avatar, Paper, Title, Text, Stack, Group, Divider } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations("");

    return (
        <Stack
            align="center"
            justify="center"
            p="lg"
        >
            <Avatar variant="otulined" color="cyan" radius="xl" size="lg">SL</Avatar>

            <Stack gap={0} justify="center" align="center">
                <Title order={1} c="indigo">{t("common.full_name")}</Title>
                <Text size="xl" c="dimmed">{t("common.role")}</Text>
            </Stack>

            <Group justify="space-between">
                <Stack gap={0}>
                    <Text size="md">{t("contact.send_me")}</Text>
                    <Text size="md" c="dimmed">{t("common.email")}</Text>
                </Stack>

                <Divider size="sm" my="sm" orientation="vertical" color="gray" />

                <Group gap="xs">
                    <ActionIcon
                        component="a"
                        href="https://www.linkedin.com/in/sergio-lopez-103013205"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="xl"
                        radius="md"
                        aria-label="LinkedIn"
                    >
                        <IconBrandLinkedin size={28} />
                    </ActionIcon>

                    <ActionIcon
                        component="a"
                        href="https://github.com/SergioLopez4182"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="xl"
                        radius="md"
                        aria-label="Github"
                    >
                        <IconBrandGithub size={28} />
                    </ActionIcon>
                </Group>
            </Group>
        </Stack>
    );
}
