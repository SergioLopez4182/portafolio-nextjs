"use client";

import {
    Title,
    Stack,
    Text,
    Group,
    ActionIcon,
    HoverCard,
    SimpleGrid,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import PageLayout from "@/components/layouts/page-layout";
import ProjectCard from "./project-card";
import { Project } from "@/types/project";

type Props = {
    title: string;
    summary: string;
    disclaimer: {
        title: string;
        body: string;
    };
    projects: Project[];
};

export default function ProjectsView({
    title,
    summary,
    disclaimer,
    projects,
}: Props) {
    return (
        <PageLayout>
            <Stack>
                <Group gap="xs">
                    <Title order={1}>{title}</Title>

                    <HoverCard width={280} shadow="md" position="right">
                        <HoverCard.Target>
                            <ActionIcon variant="subtle" size="xl" radius="md">
                                <IconAlertCircle size={28} stroke={2} />
                            </ActionIcon>
                        </HoverCard.Target>

                        <HoverCard.Dropdown>
                            <Text size="sm" fw={700}>
                                {disclaimer.title}
                            </Text>
                            <Text size="sm" c="dimmed">
                                {disclaimer.body}
                            </Text>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Group>

                <Text size="lg" c="dimmed">
                    {summary}
                </Text>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
                {projects.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </SimpleGrid>
        </PageLayout>
    );
}
