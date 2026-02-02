"use client";

import { ActionIcon, TextInput, PasswordInput, Button, Paper, Title, Text, Checkbox, Stack, Group, Divider } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import PageLayout from "@/components/layouts/page-layout";


export default function Home() {
  const router = useRouter();

  return (
    <PageLayout>

      <Stack gap="xs" justify="center" align="start">
        <Title order={1} c="indigo">
          Sergio López Sánchez
        </Title>

        <Title order={2} c="dimmed">
          Full Stack Developer
        </Title>
      </Stack>


      <Text size="lg">
        Ingeniero en Sistemas con experiencia en el desarrollo de aplicaciones web y sistemas internos, enfocados en la automatización de procesos administrativos y operativos. Especializado en backend, bases de datos e integración de sistemas, con enfoque en eficiencia, calidad del código y mejora continua de procesos de negocio.
      </Text>

      <Group gap="xs">
        <Button
          variant="filled"
          size="lg"
          radius="md"
          className="whitespace-nowrap"
          onClick={() => router.push("/contact")}
        >
          Contáctame
        </Button>
        <Button
          variant="subtle"
          size="lg"
          radius="md"
          className="whitespace-nowrap"
          onClick={() => router.push("/about")}
        >
          Más sobre mí
        </Button>
      </Group>

    </PageLayout>
  );
}
