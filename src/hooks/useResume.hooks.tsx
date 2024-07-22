import { CreateResumeDto } from "@/api/dto/create-resume.dto";
import { CreateResumeService } from "@/api/resume/resume.service";
import ResumeType from "@/types/resume.type";
import { useState } from "react";
interface CreateResumeState {
  isLoading: boolean;
  data?: unknown;
  error?: Error;
  createResumeHandler: (data: CreateResumeDto) => void;
}

const useCreateResume = (): CreateResumeState => {
  const [data, setData] = useState<ResumeType | null>(null); // Replace "any" with your user data type
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  const createResumeHandler = async (payload: CreateResumeDto) => {
    setIsLoading(true);
    setData(null);
    setError(undefined);
    try {
      const response = await CreateResumeService(payload);
      console.log("RESPONSE", response);
      setData(response.data as ResumeType);
    } catch (error) {
      console.log(error, "error");
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createResumeHandler };
};

export default useCreateResume;
