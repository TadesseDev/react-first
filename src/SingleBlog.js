import { useParams } from "react-router-dom";
const SinglePoseView = () => {
  const { id } = useParams();
  return (
    <div className="singlePost">
      <h2> this is single post with {id}</h2>
    </div>
  );
};

export default SinglePoseView;
