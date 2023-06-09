import prisma from "../../../../prisma";
import { NextApiRequest } from "next";

const fetchProject = async (id: number) => {
  const result = prisma.project.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return result;
};

export default async function ProjectPage(props: {
  params: { id: string };
  searchParams: {};
}) {
  const project = await fetchProject(parseInt(props.params.id, 10));
  return (
    <div className="flex flex-col">
      <h2 className="mt-4 p-4 border border-b border-slate-200">
        {project.title}
      </h2>
    </div>
  );
}
