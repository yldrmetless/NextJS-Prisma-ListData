"use server";

import { z } from "zod"; //npm i zod https://www.npmjs.com/package/zod
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const EmployeeSchema = z.object({
  name: z.string().min(6),
  email: z.string().min(6),
  phone: z.string().min(11),
});

export const saveEmployee = async (prevSate: any, formData: FormData) => {
  const validatedFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.employee.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
      },
    });
  } catch (error) {
    return { message: "Failed to create new employee" };
  }
  revalidatePath("/react-suspense");
  redirect("/react-suspense");
};

export const getEmployeeList = async (query: string) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return employees;
  } catch (err) {
    throw new Error("Failed to fetch employees data")
  }
};
