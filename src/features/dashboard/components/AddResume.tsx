import { Loader2, PlusSquareIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useCreateResume from "@/hooks/useResume.hooks";
import { CreateResumeDto } from "@/api/dto/create-resume.dto";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ResumeType from "@/types/resume.type";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState<string>();
  const navigate = useNavigate();
  //Hooks
  const { user } = useUser();
  const { isLoading, data, error, createResumeHandler } = useCreateResume();

  const createNewResume = () => {
    const payload: CreateResumeDto = {
      title: title ?? "",
      userEmail: user?.primaryEmailAddress?.emailAddress ?? "",
      userName: user?.username ?? user?.fullName ?? "New User",
    };
    createResumeHandler(payload);
  };

  useEffect(() => {
    if (!data && error) {
      toast.error(error.message);
    } else if (data && !error) {
      toast.success(`New Resume created for ${title}`);
      setOpenDialog(false);
      navigate(`/dashboard/resume/${(data as ResumeType).uuid}/edit`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);
  return (
    <div>
      <div
        className="p-14 py-24  items-center flex justify-center bg-secondary rounded-lg  h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed border-[2px]"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquareIcon />
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-gray1">Create New Resume</DialogTitle>
            <p className="pt-1 pb-2 text-sm">
              Add a title for your new resume.
            </p>
            <Input
              placeholder="Ex. Snr Frontend Dev"
              onChange={(event) => setTitle(event.target.value)}
            />
            <div className="flex justify-end gap-4 items-center pt-6">
              <Button variant={"outline"} onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button
                disabled={(title?.length ?? 0) < 3}
                onClick={createNewResume}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
                {isLoading ? "Loading.." : " Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
