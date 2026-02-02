import { projects } from '@/data/projects';

export async function getProject(locale: string, slug: string) {
  const project = projects.find(p => p.slug === slug);

  if (!project) return null;

  const content = await import(
    `@/i18n/projects/${locale}/${slug}.json`
  );

  return {
    ...project,
    ...content.default
  };
}