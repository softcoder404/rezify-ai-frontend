import { useUser } from "@clerk/clerk-react";
import AddResume from "./components/AddResume";
import useGetResume from "@/hooks/getResume.hook";
import { useEffect } from "react";
import ResumeCard from "./components/ResumeCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useUser();
  const { fetchUserResume, resumeList } = useGetResume();
  const navigate = useNavigate();

  useEffect(() => {
    user && fetchUserResume(user.primaryEmailAddress?.emailAddress ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <div>
        <h1 className="font-bold font-inter text-3xl">My Resume</h1>
        <p>Start Creating Ai resume for your next Job role</p>

        {/* ADD RESUME BUTTON */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5 ">
          <AddResume />

          {/* <ResumePreview /> */}

          {resumeList.length > 0 &&
            resumeList.map((resume) => {
              return (
                <ResumeCard
                  key={resume.id}
                  resume={resume}
                  onClick={(id) => {
                    navigate(`/dashboard/resume/${id}/edit`);
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
