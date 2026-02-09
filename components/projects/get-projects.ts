import { Project } from "@/types/project";
import { getMessages } from "next-intl/server";

export async function getProjects(): Promise<Project[]> {
  const messages = await getMessages();
  return messages.projects.items as Project[];
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
}