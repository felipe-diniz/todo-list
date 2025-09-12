import { FilterType } from "@/components/filtersTags";
import { Tasks } from "@/generated/prisma";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import { set } from "zod";

export function useTasks() {
  const [taskList, setTaskList] = useState<Tasks[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [task, setTask] = useState<string>("");
  const [editTaskValue, setEditTaskValue] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("api/tasks");
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Erro ao editar tarefa");
        return;
      }

      const tasks: Tasks[] = await response.json();
      setTaskList(tasks);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCreateTask = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!task.trim()) {
      toast.error("Tarefa vazia não pode ser criada");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, done: false }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Erro ao editar tarefa");
        setLoading(false);
        return;
      }

      const newTask = await response.json();

      setTaskList((prev) => [...prev, newTask]);
      setTask("");
      setLoading(false);
      toast.success("Tarefa criada com sucesso");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro desconhecido");
      setLoading(false);
    }
  };

  const handleEditTask = async (
    id: string,
    newTaskValue?: string,
    done?: boolean
  ) => {
    if (!newTaskValue?.trim()) return;
    try {
      const response = await fetch("api/tasks", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, task: newTaskValue, done }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Erro ao editar tarefa");
        return;
      }
      setTaskList((prev) =>
        prev.map((task) =>
          task.id === id
            ? {
                ...task,
                task: newTaskValue ?? task.task,
                done: done ?? task.done,
              }
            : task
        )
      );
      toast.success("Tarefa editada com sucesso");
      setEditTaskValue("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro desconhecido");
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch("api/tasks", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.error || "Erro ao deletar tarefa");
        return;
      }
      setTaskList((prev) => prev.filter((task) => task.id !== id));
      toast.success(result.message || "Tarefa deletada com sucesso");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro desconhecido");
    }
  };

  const handleDeleteAllDoneTask = async (id: string[]) => {
    try {
      const response = await fetch("api/tasks", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.error || "Erro ao deletar tarefas");
        return;
      }
      setTaskList((prev) => prev.filter((task) => !id.includes(task.id)));
      toast.success(result.message || "Tarefas deletadas com sucesso");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro desconhecido");
    }
  };

  return {
    taskList,
    setTaskList,
    loading,
    setLoading,
    task,
    setTask,
    editTaskValue,
    setEditTaskValue,
    selectedFilter,
    setSelectedFilter,
    inputRef,
    fetchTasks,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
    handleDeleteAllDoneTask,
  };
}
