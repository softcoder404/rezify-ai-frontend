import ResumeType from "@/types/resume.type";
import { NotebookIcon } from "lucide-react";
import React from "react";

type Props = {
  resume: ResumeType;
  onClick?: (resumeId: string) => void;
};
const ResumeCard: React.FC<Props> = ({ resume, onClick }) => {
  return (
    <div
      onClick={() => {
        if (onClick) onClick!(resume.uuid);
      }}
    >
      <div className="p-10 bg-secondary flex items-center justify-center h-[280px] rounded-lg border border-primary hover:scale-105 transition-all hover:shadow-md">
        <NotebookIcon />
      </div>
      <h2 className="text-center mt-2">{resume.title}</h2>
    </div>
  );
};

export default ResumeCard;
