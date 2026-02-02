import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { ActionIcon, Paper, Title, Text, Stack, Group } from "@mantine/core";
import { IconArrowLeft } from '@tabler/icons-react';
import PageLayout from '@/components/layouts/page-layout';

export default async function ProjectDetailPage({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find(p => p.slug === slug);

    if (!project) notFound();

    return (
        <PageLayout>
            <Group>
                <ActionIcon
                    component="a"
                    href="/projects"
                    variant="subtle"
                    size="lg"
                    aria-label="Github"
                >
                    <IconArrowLeft color='black' style={{ width: "100%", height: "100%" }} stroke={2} />
                </ActionIcon>
                <Stack gap={0}>
                    <Title order={1}>{project.title}</Title>
                    <Text c="dimmed">{project.description}</Text>
                </Stack>
            </Group>
            
            <Text>{project.context}</Text>

            
        </PageLayout>
    );
}
