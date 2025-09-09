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
    task: z.string(),
    done: z.boolean(),
  })
  .strict();

export const DeleteTaskSchema = z.object({
  id: z.string(),
});

export const TasksArraySchema = z.array(TaskSchema);

export type Task = z.infer<typeof TaskSchema>;
export type TasksArray = z.infer<typeof TasksArraySchema>;
export type CreateTask = z.infer<typeof CreateTaskSchema>;
export type DeleteTask = z.infer<typeof DeleteTaskSchema>;
