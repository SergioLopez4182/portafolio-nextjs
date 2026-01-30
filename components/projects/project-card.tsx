import { useRouter } from 'next/navigation';
import { Project } from '@/data/projects';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface Props {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    const router = useRouter();

    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            onClick={() => router.push('/projects/' + project.slug)}
            className='hover:cursor-pointer hover:shadow-xl'
        >
            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={700}>{project.title}</Text>
                <Badge color="green">Terminado</Badge>
            </Group>

            <Text size="sm" c="dimmed">
                {project.description}
            </Text>
        </Card>
    );
}