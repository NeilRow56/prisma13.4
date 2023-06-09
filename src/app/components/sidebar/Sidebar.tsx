import Link from "next/link";
import prisma from "../../../../prisma";
import CreateProject from "./CreateProject";

const fetchProjects = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};

export default async function Sidebar() {
  const projects = await fetchProjects();

  return (
    <nav className="flex p-4 flex-col min-h-screen w-1/4 bg-slate-100">
      <div className="flex flex-row flex-wrap gap-10 items-center">
        <h2 className="font-semibold border-b border-slate-400">Projects</h2>
        <CreateProject />
      </div>
      <ul>
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`}>
            <li className=" bg-slate-300 p-1 mt-3">{project.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
