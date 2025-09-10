"use client";

import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ListCheck, Plus, Sigma, Trash } from "lucide-react";
import { useEffect } from "react";
import TaskItem from "@/components/taskItem";
import { useTasks } from "@/hooks/useTasks";
import FilterTags from "@/components/filtersTags";

const Home = () => {
  const {
    taskList,
    loading,
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
  } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  const filtersOption = [
    { name: "Todas", tag: "all" },
    { name: "Pendentes", tag: "pending" },
    { name: "Completas", tag: "done" },
  ];

  const totalTasks = taskList.length;
  const tasksDoneCount = taskList.filter((task) => task.done === true).length;
  const filteredTasks = taskList.filter((task) => {
    if (selectedFilter === "all") return task;
    if (selectedFilter === "pending") return !task.done;
    if (selectedFilter === "done") return task.done;
  });

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
            {filtersOption.map((f) => {
              return (
                <FilterTags
                  key={f.tag}
                  id={f.tag}
                  name={f.name}
                  selectedFilter={selectedFilter}
                  setSelectedFilter={() => setSelectedFilter(f.tag)}
                />
              );
            })}
          </div>
          <div className="mt-4">
            {loading === true ? (
              <div>Loading tasks...</div>
            ) : loading === false && filteredTasks.length === 0 ? (
              <p>No tasks found</p>
            ) : (
              filteredTasks.map((task) => {
                return (
                  <TaskItem
                    key={task.id}
                    task={task}
                    editTaskValue={editTaskValue}
                    setEditTaskValue={setEditTaskValue}
                    handleEditTask={handleEditTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                );
              })
            )}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">
                Tarefas Concluídas ({tasksDoneCount}/{totalTasks})
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
