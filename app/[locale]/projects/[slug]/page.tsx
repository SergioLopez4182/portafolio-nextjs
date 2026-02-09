import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import ProjectDetailPage from '@/components/projects/project-detail-page';
import { getProjectBySlug } from '@/components/projects/get-projects';

export default async function ProjectPage({ params }: {
    params: Promise<{ slug: string }>
}) {
    const t = await getTranslations("projects");
    const { slug } = await params
    const project = await getProjectBySlug(slug);

    if (!project) notFound();

    return (
        <ProjectDetailPage project={project} />
    );
}
