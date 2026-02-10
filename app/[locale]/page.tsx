"use client";

import { ActionIcon, TextInput, PasswordInput, Button, Paper, Title, Text, Checkbox, Stack, Group, Divider } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import PageLayout from "@/components/layouts/page-layout";
import { useTranslations } from "next-intl";

export default function Home() {
  const router = useRouter();
  const t = useTranslations('');

  return (
    <PageLayout>
      <Stack gap={0} justify="center" align="start">
        <Title order={1} c="indigo">
          {t('common.full_name')}
        </Title>

        <Title order={2} c="dimmed">
          {t('common.role')}
        </Title>
      </Stack>

      <Text size="lg">
        {t('home.summary')}
      </Text>

      <Group gap="xs">
        <Button
          variant="filled"
          size="md"
          radius="md"
          className="whitespace-nowrap"
          onClick={() => router.push("/contact")}
        >
          {t('home.contact_me')}
        </Button>
        <Button
          variant="subtle"
          size="md"
          radius="md"
          className="whitespace-nowrap"
          onClick={() => router.push("/about")}
        >
          {t('home.more_about_me')}
        </Button>
      </Group>

    </PageLayout>
  );
}
