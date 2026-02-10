'use client';

import { Button, Menu } from '@mantine/core';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { IconCaretDownFilled } from '@tabler/icons-react';

interface Props {
    isMobile: boolean;
}

export default function LanguageSwitcher({isMobile} : Props) {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const handleChangeLocale = (nextLocale: string) => {
        const segments = pathname.split('/').filter(Boolean);

        if (routing.locales.includes(segments[0] as any)) {
            segments.shift();
        }

        const newPath = `/${nextLocale}/${segments.join('/')}`;
        router.push(newPath);
    };

    return (
        <Menu position="bottom" shadow="md">
            <Menu.Target>
                <Button
                    variant={isMobile ? "outline" : "subtle"}
                    size="compact-md"
                    rightSection={<IconCaretDownFilled size={16}/>}
                >
                    {locale.toUpperCase()}
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                {routing.locales.map((loc) => (
                    <Menu.Item
                        key={loc}
                        onClick={() => handleChangeLocale(loc)}
                        disabled={loc === locale}
                    >
                        {loc.toUpperCase()}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
}
