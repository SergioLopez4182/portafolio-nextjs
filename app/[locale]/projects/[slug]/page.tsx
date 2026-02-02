import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { ActionIcon, Paper, Title, Text, Stack, Group, Button } from "@mantine/core";
import { IconArrowLeft } from '@tabler/icons-react';
import PageLayout from '@/components/layouts/page-layout';
import { getTranslations } from 'next-intl/server';

export default async function ProjectDetailPage({ params }: {
    params: Promise<{ slug: string }>
}) {
    const t = await getTranslations("projects");
    const { slug } = await params
    const project = projects.find(p => p.slug === slug);

    if (!project) notFound();

    return (
        <PageLayout>
            <Stack gap={0} align="start">
                <Button
                    component="a"
                    href="/projects"
                    variant="subtle"
                    color="indigo"
                    size="compact-md"
                    leftSection={<IconArrowLeft stroke={2} />}
                >
                    {t("go_back")}
                </Button>
                <Title order={1}>{project.title}</Title>
                <Text c="dimmed">{project.description}</Text>
            </Stack>

            <Text>{project.context}</Text>
        </PageLayout>
    );
}
