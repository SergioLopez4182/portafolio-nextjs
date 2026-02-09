import { useRouter } from 'next/navigation';
import { Project } from '@/types/project';
import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';

interface Props {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    const router = useRouter();

    return (
        <article
            className={
                "flex flex-col border-2 rounded-lg p-4 h-fit cursor-pointer border-gray-400 " +
                "hover:border-indigo-500 hover:bg-gray-300" +
                ""
            }
            onClick={() => router.push('/projects/' + project.slug)}
        >
            <section className="">
                <Stack gap={0}>
                    <Text size="sm" fw={700} c="dimmed">{project.period}</Text>
                    <Text fw={700}>{project.title}</Text>
                    <Text c="dimmed">{project.description}</Text>
                    <Group gap="xs">
                        {
                            project.stack.core.map((s, i) => (
                                <Badge key={i} variant="light">{s}</Badge>
                            ))
                        }
                    </Group>

                </Stack>

            </section>
        </article>
    );
}