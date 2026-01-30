"use client";

import Image from "next/image";
import { ActionIcon, TextInput, PasswordInput, Button, Paper, Title, Text, Checkbox, Stack, Group } from "@mantine/core";
import { useRouter } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';


export default function Home() {
  const router = useRouter();

  return (
    <Paper radius="md" p="xl">
      <Group gap="lg">
        <Stack gap="md" w={540}>

          <Title order={1}>Full Stack Developer</Title>
          <Text size="lg">Sergio López Sánchez</Text>

          <Text size="xl">
            Ingeniero en Sistemas con experiencia en el desarrollo de aplicaciones web y
            sistemas internos enfocados en la automatización de procesos administrativos y operativos.
            Especializado en backend, bases de datos e integración de sistemas, con enfoque en eficiencia,
            calidad del código y mejora continua de procesos de negocio.
          </Text>

          <Group gap="xs">
            <Button
              variant="filled"
              size="lg"
              radius="md"
              className="whitespace-nowrap"
              onClick={() => router.push("/contact")}
            >
              Contactame
            </Button>
            <Button
              variant="subtle"
              size="lg"
              radius="md"
              className="whitespace-nowrap"
              onClick={() => router.push("/projects")}
            >
              Ver CV
            </Button>
          </Group>

          <Group gap="xs">
            <Text size="lg">Tambien puedes ver</Text>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/sergio-lopez-103013205"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              size="lg"
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
              aria-label="Github"
            >
              <IconBrandGithub style={{ width: "75%", height: "75%" }} />
            </ActionIcon>
          </Group>


        </Stack>

        <Image
          src="/placeholder.svg"
          alt="Logo"
          width={360}
          height={360}
          priority
        />

      </Group>
    </Paper>
  );
}
