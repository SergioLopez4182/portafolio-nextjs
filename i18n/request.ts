import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;

    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,
        messages: {
            common: (await import(`./messages/${locale}/common.json`)).default,
            navbar: (await import(`./messages/${locale}/navbar.json`)).default,
            home: (await import(`./messages/${locale}/home.json`)).default,
            projects: (await import(`./messages/${locale}/projects.json`)).default,
            about: (await import(`./messages/${locale}/about.json`)).default,
            contact: (await import(`./messages/${locale}/contact.json`)).default
        }
    };
});