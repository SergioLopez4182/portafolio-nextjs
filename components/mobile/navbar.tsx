'use client';

import { Button, Stack, Drawer, ActionIcon, Text } from "@mantine/core";
import { IconMenu2 } from '@tabler/icons-react';
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';


const sections = [
    {
        name: 'Inicio',
        url: '/',
    },
    {
        name: 'Proyectos',
        url: '/projects',
    },
    {
        name: 'Sobre mi',
        url: '/about',
    },
    {
        name: 'Contacto',
        url: '/contact',
    },
];

export default function MobileNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <nav className="px-6 md:px-8 h-16 flex items-center justify-between bg-white">
            <Image
                src="/logo-placeholder-alt.svg"
                alt="Logo"
                width={180}
                height={80}
                priority
            />

            <Drawer
                opened={opened}
                onClose={close}
                title={<Text size="xl" fw={700}>Navegación</Text>}
            >
                <Stack gap='xs'>
                    {
                        sections.map((section, i) => (
                            <Button
                                key={i}
                                variant={
                                    pathname === section.url
                                        ? 'filled'
                                        : 'outline'
                                }
                                size="md"
                                className="whitespace-nowrap"
                                onClick={() => {
                                    router.push(section.url);
                                    close();
                                }}
                            >
                                {section.name}
                            </Button>
                        ))
                    }
                </Stack>
            </Drawer>

            <ActionIcon
                variant="subtle"
                size="lg"
                onClick={open}
                aria-label="open-navigation-drawer"
            >
                <IconMenu2 size={28} stroke={2} />
            </ActionIcon>
        </nav>
    );
}