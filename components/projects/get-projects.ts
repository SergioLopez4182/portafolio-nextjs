import { Project } from "@/types/project";
import { getMessages } from "next-intl/server";

export async function getProjects(): Promise<Project[]> {
  const messages = await getMessages();
  console.log("Messages", messages);
  return messages.projects.items as Project[];
}
