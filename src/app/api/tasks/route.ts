import {
  CreateTaskSchema,
  DeleteTaskSchema,
  EditTaskSchema,
  TasksArraySchema,
  TaskSchema,
} from "@/types/schemas";
import { prisma } from "@/utils/prisma";
import z from "zod";

export async function GET(request: Request) {
  try {
    const tasks = await prisma.tasks.findMany();

    const validatedTasks = TasksArraySchema.parse(tasks);
    return new Response(JSON.stringify(validatedTasks), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Erro ao buscar tarefas:", error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          error: "Dados invalidos retornados do banco de dados",
          details: error.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({
        error: "Erro interno do servidor",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validadeData = CreateTaskSchema.parse(body);

    const newTask = await prisma.tasks.create({
      data: validadeData,
    });

    const validatedTask = TaskSchema.parse(newTask);

    return new Response(JSON.stringify(validatedTask), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstMessage = error.issues[0]?.message ?? "Erro de validação";
      return new Response(JSON.stringify({ error: firstMessage }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    return (
      new Response(JSON.stringify({ erro: "Erro ao criar tarefa" })),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const validadeData = EditTaskSchema.parse(body);

    const updateTask = await prisma.tasks.update({
      where: { id: validadeData.id },
      data: {
        task: validadeData.task,
        done: validadeData.done,
      },
    });

    const validatedTask = EditTaskSchema.parse(updateTask);

    return new Response(JSON.stringify(validatedTask), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstMessage = error.issues[0]?.message ?? "Erro de validação";
      return new Response(JSON.stringify({ error: firstMessage }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    return (
      new Response(JSON.stringify({ error: "Erro ao editar tarefa" })),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = DeleteTaskSchema.parse(body);

    await prisma.tasks.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({
        message: "Tarefa deletada com sucesso",
        id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ error: "Dados inválidos", details: error.message }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({
        erro: "Erro ao deletar tarefa",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
