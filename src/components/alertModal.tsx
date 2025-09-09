import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ModalProps {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  title: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const AlertModal = ({ trigger, children, title, onclick }: ModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>{children}</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onclick} className="cursor-pointer">
            Sim
          </AlertDialogAction>
          <AlertDialogCancel className="cursor-pointer">Não</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
