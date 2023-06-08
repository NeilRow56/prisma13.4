"use server";

import prisma from "../../../prisma";

export const addProjectItem = async (data: FormData) => {
  const title = (data.get("title") ?? "") as string;
  if (!title) {
    throw new Error("Title is required");
  }
  await prisma.project.create({
    data: {
      title,
    },
  });
};
