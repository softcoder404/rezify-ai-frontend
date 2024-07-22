import axiosClient from "../base.api";
import { CreateResumeDto } from "../dto/create-resume.dto";
import ResumeEndpoints from "./resume.endpoint";

export const CreateResumeService = async (data: CreateResumeDto) => {
  return axiosClient.post(ResumeEndpoints.resume, { ...data });
};

export const GetUserResumesService = async (email: string) => {
  const endpoint = ResumeEndpoints.resume + `?email=${email}`;
  return axiosClient.get(endpoint);
};
