"use client";

import { useRouter } from 'next/navigation';
import { Project } from '@/types/project';
import { Card, Image, Text, Badge, Button, Group, Stack, Title, Tabs, List, Divider } from '@mantine/core';
import PageLayout from '../layouts/page-layout';
import { IconArrowLeft, IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import GoBackButton from '../buttons/go-back';

interface Props {
    project: Project;
};

export default function ProjectDetailPage({ project }: Props) {
    const t = useTranslations("projects");

    return (
        <PageLayout>
            <article className="flex flex-col gap-4 h-full w-full ">
                <section className='w-full rounded-xl'>
                    <GoBackButton href="/projects" />
                    <Title order={1}>{project.title}</Title>
                    <Text c="dimmed">{project.description}</Text>
                </section>

                <div className="flex gap-4">
                    <section className="w-3/4 border-2 border-gray-300 rounded-xl p-4">
                        <Tabs variant="pills" defaultValue="role" p={0}>
                            <Tabs.List grow>
                                <Tabs.Tab value="role">{t('labels.role.tab')}</Tabs.Tab>
                                <Tabs.Tab value="context">{t('labels.context.tab')}</Tabs.Tab>
                                <Tabs.Tab value="challenges">{t('labels.challenges.tab')}</Tabs.Tab>
                                <Tabs.Tab value="results">{t('labels.results.tab')}</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="role" py="lg">
                                <Stack gap="xs">
                                    <Text c="dimmed">{project.role.description}</Text>

                                    <Text c="dimmed">{t('labels.role.items_description')}</Text>

                                    <List withPadding c="dimmed">
                                        {project.role.responsabilities.map(
                                            (item, index) => (
                                                <List.Item key={index}>
                                                    {item}
                                                </List.Item>
                                            )
                                        )}
                                    </List>
                                </Stack>

                            </Tabs.Panel>

                            <Tabs.Panel value="context" p="lg">
                                <Stack gap="xs">
                                    {project.context.map(
                                        (item, index) => (
                                            <Text key={index} c="dimmed">{item}</Text>
                                        )
                                    )}
                                </Stack>
                            </Tabs.Panel>

                            <Tabs.Panel value="challenges" p="lg">
                                <Stack gap="xs">
                                    <Text c="dimmed">{project.tecnical_challenges.description}</Text>
                                    <Text c="dimmed">{t('labels.challenges.items_description')}</Text>
                                    <List withPadding c="dimmed">
                                        {project.tecnical_challenges.items.map(
                                            (item, index) => (
                                                <List.Item key={index}>
                                                    {item}
                                                </List.Item>
                                            )
                                        )}
                                    </List>
                                </Stack>
                            </Tabs.Panel>

                            <Tabs.Panel value="results" p="lg">
                                <Stack gap="xs">
                                    <Text c="dimmed">{project.results.description}</Text>
                                    <Text c="dimmed">{t('labels.results.items_description')}</Text>
                                    <List withPadding c="dimmed">
                                        {project.results.items.map(
                                            (item, index) => (
                                                <List.Item key={index}>
                                                    {item}
                                                </List.Item>
                                            )
                                        )}
                                    </List>
                                </Stack>
                            </Tabs.Panel>
                        </Tabs>
                    </section>

                    <section className="w-1/4 border-2 border-gray-300 rounded-xl p-4">
                        <Stack gap="lg">
                            <Stack gap={4} align="start">
                                <Text fw={700}>{t('labels.languages')}</Text>
                                <Group gap={4}>
                                    {project.language.map((l, i) => (
                                        <Badge
                                            key={i}
                                            variant="light"
                                            size="lg"
                                            radius="md"
                                        >
                                            {l}
                                        </Badge>
                                    ))}
                                </Group>
                            </Stack>
                            <Stack gap={4} align="start">
                                <Text fw={700}>{t('labels.stack.core')}</Text>
                                <Group gap={4}>
                                    {project.stack.core.map((l, i) => (
                                        <Badge
                                            key={i}
                                            variant="light"
                                            size="lg"
                                            radius="md"
                                        >
                                            {l}
                                        </Badge>
                                    ))}
                                </Group>
                            </Stack>
                            <Stack gap={4} align="start">
                                <Text fw={700}>{t('labels.stack.libraries')}</Text>
                                <Group gap={4}>
                                    {project.stack.libraries.map((l, i) => (
                                        <Badge
                                            key={i}
                                            variant="light"
                                            size="lg"
                                            radius="md"
                                        >
                                            {l}
                                        </Badge>
                                    ))}
                                </Group>
                            </Stack>
                            <Stack gap={0} align="start">
                                <Text fw={700}>{t('labels.period')}</Text>
                                <Text c="dimmed">{project.period}</Text>
                            </Stack>
                        </Stack>
                    </section>
                </div>
            </article>
        </PageLayout>
    );
}