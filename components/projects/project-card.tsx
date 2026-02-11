import { Project } from '@/types/project';
import { Card, Image, Text, Badge, Group, SimpleGrid } from '@mantine/core';

interface Props {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
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
            className="border-2 border-transparent hover:border-[#4c6ef5] hover:bg-[#4c6ef5] hover:text-white"
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <Card.Section withBorder inheritPadding py="xs">
                <Text fw={700} lineClamp={2}>{project.title}</Text>
            </Card.Section>

            <Card.Section
                withBorder
                inheritPadding
                py="xs"
                style={{ flex: 1 }}
            >
                <Text size="sm">
                    {project.description}
                </Text>

                <Group my="xs" gap="xs">
                    {
                        project.language.map((s, i) => (
                            <Badge key={i} variant="filled">{s}</Badge>
                        ))
                    }
                </Group>
            </Card.Section>

            <Card.Section withBorder inheritPadding p="md">
                <SimpleGrid cols={3}>
                    {images.map((image) => (
                        <Image src={image} key={image} radius="sm" />
                    ))}
                </SimpleGrid>
            </Card.Section>

        </Card>
    );
}