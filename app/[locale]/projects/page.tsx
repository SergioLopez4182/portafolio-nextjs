import { getProjects } from "@/components/projects/get-projects";
import { getTranslations  } from "next-intl/server";
import ProjectsView from "@/components/projects/projects-view";

export default async function Projects() {
    const t = await getTranslations("projects");
    const projects = await getProjects();

    return (
        <ProjectsView
            title={t("title")}
            summary={t("summary")}
            disclaimer={{
                title: t("disclaimer.title"),
                body: t("disclaimer.body"),
            }}
            projects={projects}
        />
    );
}
