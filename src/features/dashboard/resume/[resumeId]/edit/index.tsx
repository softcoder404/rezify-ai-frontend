import { useParams } from "react-router-dom";

const EditResume = () => {
  const param = useParams();
  return <div>Edit Resume {param["resumeId"]}</div>;
};

export default EditResume;
