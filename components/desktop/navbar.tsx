'use client';

import { Button, Group } from "@mantine/core";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';

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

export default function DesktopNavbar() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className="px-6 md:px-8 h-16 flex items-center justify-between bg-white">
            <Image
                src="/logo-placeholder-alt.svg"
                alt="Logo"
                width={180}
                height={80}
                priority
            />

            <Group gap='xs'>
                {
                    sections.map((section, i) => (
                        <Button
                            key={i}
                            variant={
                                pathname === section.url 
                                    ? 'filled'
                                    : 'subtle'
                            }
                            size="lg"
                            radius='md'
                            className="whitespace-nowrap"
                            onClick={() => router.push(section.url)}
                        >
                            {section.name}
                        </Button>
                    ))
                }

                {/* <ThemeToggle /> */}
            </Group>
        </nav>
    );
}