import prisma from "../../../../prisma";
import CreateProject from "./CreateProject";

const fetchProjects = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};

export default async function Sidebar() {
  const projects = await fetchProjects();
  console.log(projects);
  return (
    <nav className="flex p-4 flex-col min-h-screen w-1/4 bg-slate-100">
      <div className="flex flex-row flex-wrap gap-10 items-center">
        <h2 className="font-semibold border-b border-slate-400">Projects</h2>
        <CreateProject />
      </div>
      <ul>
        {projects.map((project) => (
          <li className=" bg.slate-50" key={project.id}>
            {project.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
