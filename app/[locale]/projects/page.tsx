'use client';

import { Title, Stack, Text, Group, ActionIcon, HoverCard } from "@mantine/core";
import { IconAlertCircle } from '@tabler/icons-react';
import { projects } from '@/data/projects';
import ProjectCard from "@/components/projects/project-card";
import PageLayout from "@/components/layouts/page-layout";
import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations("projects");

    return (
        <PageLayout>
            <Stack>
                <Group gap="xs">
                    <Title order={1}>{t("title")}</Title>

                    <HoverCard width={280} shadow="md" position="right">
                        <HoverCard.Target>
                            <ActionIcon variant="subtle" size="xl" radius="md" aria-label="disclaimer">
                                <IconAlertCircle size={28} stroke={2} />
                            </ActionIcon>
                        </HoverCard.Target>

                        <HoverCard.Dropdown>
                            <Text size="sm" fw={700}>{t("disclaimer.title")}</Text>
                            <Text size="sm" c="dimmed">
                                {t("disclaimer.body")}
                            </Text>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Group>

                <Text size="lg" c="dimmed">
                    {t("summary")}
                </Text>
            </Stack>

            <Stack align="strech" className="w-full">
                {
                    projects.map((p, i) => (
                        <ProjectCard key={i} project={p} />
                    ))
                }
            </Stack>
        </PageLayout>
    );
}
