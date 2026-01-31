'use client';

import { Title, Stack, Text, Group, ActionIcon, HoverCard } from "@mantine/core";
import { IconAlertCircle } from '@tabler/icons-react';
import { projects } from '@/data/projects';
import ProjectCard from "@/components/projects/project-card";

export default function Projects() {

    return (
        <Stack className="w-[75%] 2xl:w-[50%] mt-4" gap="lg">
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
                            <Text size="sm" c="dimmed">
                                La información presentada en este documento ha sido parcialmente anonimizada y 
                                ajustada con el objetivo de no divulgar información sensible de las empresas y 
                                clientes con los que he colaborado.
                            </Text>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Group>

                <Text size="lg" c="dimmed">
                    Hola, soy Sergio, desarrollador Full Stack apasionado por la tecnología, los videojuegos, la música y el ejercicio. <br />
                    He trabajado principalmente en proyectos donde el software impacta procesos reales: operación, seguridad, transporte y digitalización de flujos físicos.
                </Text>
            </Stack>

            <Stack align="strech">
                {
                    projects.map((p, i) => (
                        <ProjectCard key={i} project={p} />
                    ))
                }
            </Stack>
        </Stack>
    );
}
