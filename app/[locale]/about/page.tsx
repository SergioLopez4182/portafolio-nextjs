"use client";

import { Title, Text, Stack, Divider, List, Card, Group, Badge, SimpleGrid } from "@mantine/core";
import PageLayout from "@/components/layouts/page-layout";
import { useTranslations } from "next-intl";
import { TechCard } from "@/components/about/tech-card";

export default function About() {
    const t = useTranslations('about');

    return (
        <PageLayout>
            <Title order={1}>{t('page.title')}</Title>
            <Text size="lg" c="dimmed">
                {t('page.body')}
            </Text>

            <Title order={1} ta="center">{t('background.title')}</Title>

            <Text size="lg" c="dimmed">
                {t('background.body')}
            </Text>

            <Divider />

            <Title order={1} ta="center">{t('tech.title')}</Title>

            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 4 }}
            >
                <TechCard
                    titleKey="tech.frontend.title"
                    stackKey="tech.frontend.stack"
                />
                <TechCard
                    titleKey="tech.backend.title"
                    stackKey="tech.backend.stack"
                />
                <TechCard
                    titleKey="tech.database.title"
                    stackKey="tech.database.stack"
                />
                <TechCard
                    titleKey="tech.infrastructure.title"
                    stackKey="tech.infrastructure.stack"
                />
            </SimpleGrid>

            <Divider />

            <Title order={1} ta="center">{t('methodology.title')}</Title>
            <Text size="lg" c="dimmed">
                {t('methodology.body')}
            </Text>

            <Divider />

            <Title order={1} ta="center">{t('interests.title')}</Title>

            <Text size="lg" c="dimmed">
                {t('interests.body')}
            </Text>

            <List size="lg" withPadding c="dimmed">
                <List.Item>{t('interests.list.0')}</List.Item>
                <List.Item>{t('interests.list.1')}</List.Item>
                <List.Item>{t('interests.list.2')}</List.Item>
                <List.Item>{t('interests.list.3')}</List.Item>
                <List.Item>{t('interests.list.4')}</List.Item>
            </List>
        </PageLayout>
    );
}
