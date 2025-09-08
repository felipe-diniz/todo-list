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

const tasks = {
  title: [
    "Estudar React",
    "Estudar Next.js",
    "Estudar TypeScript",
    "Estudar Tailwind CSS",
  ],
};

const totalTasks = tasks.title.length;

const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gray-100">
      <Card className="w-lg">
        <CardContent className="flex gap-2 ">
          <Input placeholder="Adicionar tarefa..." />
          <Button className="cursor-pointer">
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
            {tasks.title.map((task) => {
              return (
                <div
                  key={task}
                  className="flex h-14 gap-2 items-center justify-between border-t-1 last:border-b-1"
                >
                  <div className="w-1 h-full bg-green-300" />
                  <p className="flex-1 px-2 text-sm">{task}</p>

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
                    <Trash size={20} className="cursor-pointer" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">Tarefas Concluídas (3/{totalTasks})</p>
            </div>
            <Modal
              title="Teste"
              trigger={
                <Button
                  variant="outline"
                  className="text-xs h-7 cursor-pointer"
                >
                  <Trash /> Limpar tarefas concluídas
                </Button>
              }
            >
              <button>teste</button>
              <button>teste</button>
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
