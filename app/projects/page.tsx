'use client';

import { Paper, Title, Button, SimpleGrid, Stack, Text } from "@mantine/core";
import { projects } from '@/data/projects';
import ProjectCard from "@/components/projects/project-card";

export default function Projects() {

    return (
        <Stack className="w-[70%]" gap="lg">
            <Paper radius="md" p="lg">
                <Title order={1} mb="lg">Proyectos</Title>
                <Text lineClamp={4}>
                    La información presentada en este documento ha sido parcialmente anonimizada y ajustada con el objetivo de no divulgar información sensible de las empresas y clientes con los que he colaborado.
                </Text>
            </Paper>
            <SimpleGrid cols={3} verticalSpacing="lg">
                {
                    projects.map((p, i) => (
                        <ProjectCard key={i} project={p} />
                    ))
                }
            </SimpleGrid>
        </Stack>
    );
}
