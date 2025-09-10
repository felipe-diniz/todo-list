import { SquarePen, Trash } from "lucide-react";
import Modal from "./modal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AlertModal from "./alertModal";

interface TaskItemProps {
  task: {
    id: string;
    task: string;
    done: boolean;
  };
  editTaskValue: string;
  setEditTaskValue: (value: string) => void;
  handleEditTask: (id: string, newTaskValue?: string, done?: boolean) => void;
  handleDeleteTask: (id: string) => void;
}

const TaskItem = ({
  task,
  editTaskValue,
  setEditTaskValue,
  handleEditTask,
  handleDeleteTask,
}: TaskItemProps) => {
  return (
    <div
      key={task.id}
      className="flex h-14 gap-2 items-center justify-between border-t-1 last:border-b-1"
    >
      <div
        className={`w-1 h-full ${
          task.done === true ? "bg-green-400" : "bg-red-400"
        }`}
      />
      <p
        onClick={async () => handleEditTask(task.id, task.task, !task.done)}
        className={`flex-1 px-2 text-sm hover:text-gray-300 cursor-pointer`}
      >
        {task.task}
      </p>

      <div className="flex items-center gap-2 ">
        <Modal
          title="Editar Tarefa"
          trigger={<SquarePen size={20} className="cursor-pointer" />}
        >
          <div className="flex gap-2 text-center">
            <Input
              placeholder={task.task}
              value={editTaskValue}
              onChange={async (e) => setEditTaskValue(e.target.value)}
            />
            <Button
              className="cursor-pointer"
              onClick={async () => handleEditTask(task.id, editTaskValue)}
            >
              Editar
            </Button>
          </div>
        </Modal>
        <AlertModal
          title={`Deseja realmente excluir a tarefa ${task.task}?`}
          trigger={<Trash size={20} className="cursor-pointer" />}
          onclick={async () => handleDeleteTask(task.id)}
        ></AlertModal>
      </div>
    </div>
  );
};

export default TaskItem;
