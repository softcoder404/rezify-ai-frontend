import { GetUserResumesService } from "@/api/resume/resume.service";
import ResumeType from "@/types/resume.type";
import { HttpStatusCode } from "axios";
import { useState } from "react";

const useGetResume = () => {
  const [fetchingResume, setFetchingResume] = useState(false);
  const [resumeList, setResumeList] = useState<Array<ResumeType>>([]);

  const fetchUserResume = async (userEmail: string) => {
    try {
      setFetchingResume(true);
      const response = await GetUserResumesService(userEmail);
      if (response.status === HttpStatusCode.Ok) {
        setResumeList(response.data);
        return;
      }
      console.debug("ERROR", response.data);
    } catch (error) {
      console.debug("ERROR", error);
    } finally {
      setFetchingResume(false);
    }
  };

  const addResume = (resume: ResumeType) => {
    setResumeList((prevList) => {
      return [resume, ...prevList];
    });
  };

  return { fetchUserResume, addResume, resumeList, fetchingResume };
};

export default useGetResume;
