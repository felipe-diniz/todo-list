"use client";

import Modal from "@/components/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  BadgeCheckIcon,
  ClipboardClock,
  List,
  ListCheck,
  Plus,
  Sigma,
  SquarePen,
  Trash,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Tasks } from "@/generated/prisma";
import AlertModal from "@/components/alertModal";

const Home = () => {
  const [taskList, setTaskList] = useState<Tasks[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [task, setTask] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await fetch("api/tasks");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} `);
        }

        const tasks: Tasks[] = await response.json();
        setTaskList(tasks);
      } catch (erro) {
        console.error("Erro ao carregar tasks:", erro);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleCreateTask = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!task.trim()) return;

    try {
      const response = await fetch("api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, done: false }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar tarefa");
      }

      const newTask = await response.json();

      setTaskList((prev) => [...prev, newTask]);
      setTask("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch("api/tasks", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar tarefa");
      }
      setTaskList((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const totalTasks = taskList.length;
  const tasksDone = 3;

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gray-100">
      <Card className="w-lg">
        <CardContent className="flex gap-2 ">
          <Input
            ref={inputRef}
            placeholder="Adicionar tarefa..."
            onChange={(e) => setTask(e.target.value)}
          />
          <Button className="cursor-pointer" onClick={handleCreateTask}>
            <Plus /> Adicionar
          </Button>
        </CardContent>

        <CardContent>
          <Separator className="mb-4" />

          <div className="flex gap-2">
            <Badge variant="default" className="cursor-pointer">
              <List />
              Todas
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              <ClipboardClock />
              Não finalizadas
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              <BadgeCheckIcon />
              Concluídas
            </Badge>
          </div>
          <div className="mt-4">
            {loading === true ? (
              <div>Loading tasks...</div>
            ) : loading === false && taskList.length === 0 ? (
              <p>No tasks found</p>
            ) : (
              taskList.map((task) => {
                return (
                  <div
                    key={task.id}
                    className="flex h-14 gap-2 items-center justify-between border-t-1 last:border-b-1"
                  >
                    <div className="w-1 h-full bg-green-300" />
                    <p className="flex-1 px-2 text-sm">{task.task}</p>

                    <div className="flex items-center gap-2">
                      <Modal
                        title="Editar Tarefa"
                        trigger={
                          <SquarePen size={20} className="cursor-pointer" />
                        }
                      >
                        <div className="flex gap-2 text-center">
                          <Input placeholder="Editar tarefa" />
                          <Button className="cursor-pointer">Editar</Button>
                        </div>
                      </Modal>
                      <AlertModal
                        title={`Deseja realmente excluir a tarefa ${task.task}?`}
                        trigger={<Trash size={20} className="cursor-pointer" />}
                        onclick={() => handleDeleteTask(task.id)}
                      ></AlertModal>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">
                Tarefas Concluídas ({tasksDone}/{totalTasks})
              </p>
            </div>
            <Modal
              title="Tem certeza que deseja excluir x itens?"
              trigger={
                <Button
                  variant="outline"
                  className="text-xs h-7 cursor-pointer"
                >
                  <Trash /> Limpar tarefas concluídas
                </Button>
              }
            >
              <div className="flex gap-2 justify-end">
                <Button className="cursor-pointer">Sim</Button>
                <Button className="cursor-pointer">Não</Button>
              </div>
            </Modal>
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="flex gap-2 items-center justify-end text-sm mt-2">
            <Sigma size={18} />
            <p>{totalTasks} tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
