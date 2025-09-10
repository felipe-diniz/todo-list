import { z } from "zod";
import { Tasks } from "@/generated/prisma";

export const TaskSchema: z.ZodType<Tasks> = z
  .object({
    id: z.string(),
    task: z.string(),
    done: z.boolean(),
  })
  .strict();

export const CreateTaskSchema = z
  .object({
    task: z.string().min(4, "Nome da tarefa muito curta, mínimo 4 letras"),
    done: z.boolean(),
  })
  .strict();

export const DeleteTaskSchema = z.object({
  id: z.string(),
});

export const EditTaskSchema = z
  .object({
    id: z.string(),
    task: z
      .string()
      .min(4, "Nome da tarefa muito curta, mínimo 4 letras")
      .optional(),
    done: z.boolean().optional(),
  })
  .strict();

export const TasksArraySchema = z.array(TaskSchema);

export type Task = z.infer<typeof TaskSchema>;
export type TasksArray = z.infer<typeof TasksArraySchema>;
export type CreateTask = z.infer<typeof CreateTaskSchema>;
export type DeleteTask = z.infer<typeof DeleteTaskSchema>;
export type EditTask = z.infer<typeof EditTaskSchema>;
