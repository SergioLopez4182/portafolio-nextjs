"use client";

import { Button, Title, Text, Stack, Group } from "@mantine/core";
import { useRouter } from "next/navigation";
import PageLayout from "@/components/layouts/page-layout";
import { useTranslations } from "next-intl";

export default function Home() {
  const router = useRouter();
  const t = useTranslations('');

  return (
    <PageLayout>
      <Stack gap={0}>
        <span style={{ color: "var(--mantine-color-indigo-6)" }}
          className="font-extrabold text-3xl lg:text-4xl leading-none">
          {t('common.full_name')}
        </span>

        <span style={{ color: "var(--mantine-color-dimmed)" }}
          className="text-lg lg:text-xl font-mono uppercase">
          {"<"}{t('common.role')}{" />"}
        </span>
      </Stack>

      <Text size="lg" c="dimmed">
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
          variant="filled"
          color="gray"
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