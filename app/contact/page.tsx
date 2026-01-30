import { ActionIcon, Avatar, Paper, Title, Text, Stack, Group, Divider } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

export default function Projects() {
    return (
        <Stack
            align="center"
            justify="center"
            p="lg"
        >
            <Avatar variant="otulined" color="cyan" radius="xl" size="lg">SL</Avatar>

            <Stack gap={0} justify="center" align="center">
                <Title order={1} ta="center">Sergio López Sánchez</Title>
                <Text size="xl" c="dimmed">Full Stack Developer</Text>
            </Stack>

            <Group justify="space-between">
                <Stack gap={0}>
                    <Text size="md">Enviame un correo</Text>
                    <Text size="md" c="dimmed">sergiols180798@gmail.com</Text>
                </Stack>

                <Divider size="sm" orientation="vertical" color="gray" />

                <Group gap="xs">
                    <ActionIcon
                        component="a"
                        href="https://www.linkedin.com/in/sergio-lopez-103013205"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="lg"
                        radius="md"
                        aria-label="LinkedIn"
                    >
                        <IconBrandLinkedin style={{ width: "75%", height: "75%" }} />
                    </ActionIcon>

                    <ActionIcon
                        component="a"
                        href="https://github.com/SergioLopez4182"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="lg"
                        radius="md"
                        aria-label="Github"
                    >
                        <IconBrandGithub style={{ width: "75%", height: "75%" }} />
                    </ActionIcon>
                </Group>

            </Group>
        </Stack>
    );
}
