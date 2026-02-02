'use client';

import { Title, Stack, Text, Group, ActionIcon, HoverCard } from "@mantine/core";
import { IconAlertCircle } from '@tabler/icons-react';
import { projects } from '@/data/projects';
import ProjectCard from "@/components/projects/project-card";
import PageLayout from "@/components/layouts/page-layout";

export default function Projects() {

    return (
        <PageLayout>
            <Stack>
                <Group gap="xs">
                    <Title order={1}>Proyectos</Title>

                    <HoverCard width={280} shadow="md" position="right">
                        <HoverCard.Target>
                            <ActionIcon variant="subtle" size="xl" radius="md" aria-label="disclaimer" color="black">
                                <IconAlertCircle size={28} stroke={2} />
                            </ActionIcon>
                        </HoverCard.Target>

                        <HoverCard.Dropdown>
                            <Text size="sm" fw={700}>Disclaimer</Text>
                            <Text size="sm" c="dimmed">
                                La información presentada en este documento ha sido parcialmente anonimizada y ajustada con el objetivo de no divulgar información sensible de las empresas y clientes con los que he colaborado.
                            </Text>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Group>

                <Text size="lg" c="dimmed">
                    Selección de proyectos en los que participé en el diseño, desarrollo e implementación de soluciones reales.
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
