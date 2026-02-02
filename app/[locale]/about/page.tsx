"use client";

import { Title, Text, Stack, Divider, List, Card, Group } from "@mantine/core";
import PageLayout from "@/components/layouts/page-layout";
import { useTranslations } from "next-intl";

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

            <Group align="flex-start" justify="center" gap="lg">
                <Card p="md" radius="md" withBorder shadow="lg">
                    <Text size="xl" fw={700} ta="center">
                        {t('tech.frontend.title')}
                    </Text>
                    <List size="lg" withPadding c="dimmed">
                        <List.Item>{t('tech.frontend.stack.0')}</List.Item>
                        <List.Item>{t('tech.frontend.stack.1')}</List.Item>
                        <List.Item>{t('tech.frontend.stack.2')}</List.Item>
                        <List.Item>{t('tech.frontend.stack.3')}</List.Item>
                        <List.Item>{t('tech.frontend.stack.4')}</List.Item>
                        <List.Item>{t('tech.frontend.stack.5')}</List.Item>
                    </List>
                </Card>
                <Card p="md" radius="md" withBorder shadow="lg">
                    <Text size="xl" fw={700} ta="center">
                        {t('tech.backend.title')}
                    </Text>
                    <List size="lg" withPadding c="dimmed">
                        <List.Item>{t('tech.backend.stack.0')}</List.Item>
                        <List.Item>{t('tech.backend.stack.1')}</List.Item>
                        <List.Item>{t('tech.backend.stack.2')}</List.Item>
                        <List.Item>{t('tech.backend.stack.3')}</List.Item>
                        <List.Item>{t('tech.backend.stack.4')}</List.Item>
                    </List>
                </Card>
                <Card p="md" radius="md" withBorder shadow="lg">
                    <Text size="xl" fw={700} ta="center">
                        {t('tech.database.title')}
                    </Text>
                    <List size="lg" withPadding c="dimmed">
                        <List.Item>{t('tech.database.stack.0')}</List.Item>
                        <List.Item>{t('tech.database.stack.1')}</List.Item>
                        <List.Item>{t('tech.database.stack.2')}</List.Item>
                        <List.Item>{t('tech.database.stack.3')}</List.Item>
                    </List>
                </Card>
                <Card p="md" radius="md" withBorder shadow="lg">
                    <Text size="xl" fw={700} ta="center">
                        {t('tech.infrastructure.title')}
                    </Text>
                    <List size="lg" withPadding c="dimmed">
                        <List.Item>{t('tech.infrastructure.stack.0')}</List.Item>
                        <List.Item>{t('tech.infrastructure.stack.1')}</List.Item>
                        <List.Item>{t('tech.infrastructure.stack.2')}</List.Item>
                        <List.Item>{t('tech.infrastructure.stack.3')}</List.Item>
                    </List>
                </Card>
            </Group>

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
