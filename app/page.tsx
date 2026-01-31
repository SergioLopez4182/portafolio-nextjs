"use client";

import Image from "next/image";
import { ActionIcon, TextInput, PasswordInput, Button, Paper, Title, Text, Checkbox, Stack, Group } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';


export default function Home() {
  const router = useRouter();

  return (
    <main
      className="flex gap-4 p-8 rounded-xl"
    >
      <section className="">
        <Stack gap="md" w={540}>
          <Title order={1}>Sergio López Sánchez</Title>
          <Title order={2}>Full Stack Developer</Title>

          <Text size="lg" c="dimmed">
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
              onClick={() => router.push("/about")}
            >
              Más sobre mi
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
              size="xl"
              radius="md"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={28}/>
            </ActionIcon>

            <ActionIcon
              component="a"
              href="https://github.com/SergioLopez4182"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              size="xl"
              radius="md"
              aria-label="Github"
            >
              <IconBrandGithub size={28}/>
            </ActionIcon>
          </Group>


        </Stack>
      </section>
      <section className="flex justify-center items-center">
        <Image
          src="/placeholder.svg"
          alt="Logo"
          width={360}
          height={360}
          priority
        />
      </section>
    </main>
  );
}
