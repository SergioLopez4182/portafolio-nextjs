import { useRouter } from 'next/navigation';
import { Project } from '@/types/project';
import { Card, Image, Text, Badge, Button, Group, Stack, SimpleGrid } from '@mantine/core';

interface Props {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    const router = useRouter();

    const images = [
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    ];

    return (
        <Card
            withBorder
            shadow="sm"
            radius="md"
            component="a"
            href={`/projects/${project.slug}`}
            className="border-2 border-transparent hover:border-indigo-500 hover:bg-indigo-300 hover:text-white"
        >
            <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                    <Text fw={700}>{project.title}</Text>
                </Group>
            </Card.Section>

            <Text my="sm" size="sm">
                {project.description}
            </Text>

            <Group gap="xs">
                {
                    project.language.map((s, i) => (
                        <Badge key={i} variant="filled">{s}</Badge>
                    ))
                }
            </Group>

            {/* <Card.Section mt="sm">
                <Image src="/project-placeholder.jpg" />
            </Card.Section> */}

            <Card.Section inheritPadding mt="sm" pb="md">
                <SimpleGrid cols={3}>
                    {images.map((image) => (
                        <Image src={image} key={image} radius="sm" />
                    ))}
                </SimpleGrid>
            </Card.Section>

        </Card>
    );
}