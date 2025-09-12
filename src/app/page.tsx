"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ListCheck, LoaderCircle, Plus, Sigma, Trash } from "lucide-react";
import { useEffect } from "react";
import TaskItem from "@/components/taskItem";
import { useTasks } from "@/hooks/useTasks";
import FilterTags from "@/components/filtersTags";
import AlertModal from "@/components/alertModal";

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
    handleDeleteAllDoneTask,
  } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const totalTasks = taskList.length;
  const taskDoneDeleted = taskList
    .filter((task) => task.done === true)
    .map((task) => task.id);
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
            {loading === true ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <Plus />
            )}{" "}
            Adicionar
          </Button>
        </CardContent>

        <CardContent>
          <Separator className="mb-4" />

          <FilterTags
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
          />

          <div className="mt-4">
            {loading === true ? (
              <div>Carregando tarefas...</div>
            ) : loading === false && filteredTasks.length === 0 ? (
              <p>Nenhuma tarefa encontrada</p>
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
            <AlertModal
              title={`Tem certeza que deseja excluir ${tasksDoneCount} tarefa(s) concluída(s)?`}
              trigger={
                <Button
                  variant="outline"
                  className="text-xs h-7 cursor-pointer"
                >
                  <Trash /> Limpar tarefas concluídas
                </Button>
              }
              onclick={async () => handleDeleteAllDoneTask(taskDoneDeleted)}
            ></AlertModal>
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: `${(tasksDoneCount / totalTasks) * 100}%` }}
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
