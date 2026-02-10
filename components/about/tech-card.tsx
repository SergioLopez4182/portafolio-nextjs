import { Card, Text, Stack, Badge } from '@mantine/core';
import { useTranslations } from 'next-intl';

type TechCardProps = {
    titleKey: string;
    stackKey: string;
};

export function TechCard({ titleKey, stackKey }: TechCardProps) {
    const t = useTranslations('about');

    const stack = t.raw(stackKey) as string[];

    return (
        <Card
            h="100%"
            radius="md"
            withBorder
            className="border-2 border-transparent hover:border-indigo-500 hover:shadow-2xl"
        >
            <Card.Section withBorder inheritPadding py="xs">
                <Text size="xl" fw={700} ta="center">
                    {t(titleKey)}
                </Text>
            </Card.Section>

            <Card.Section inheritPadding py="xs">
                <Stack align="center" gap="xs">
                    {stack.map((item) => (
                        <Badge key={item} variant="light">
                            {item}
                        </Badge>
                    ))}
                </Stack>
            </Card.Section>
        </Card>
    );
}
