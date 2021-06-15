import { useParams } from "react-router-dom";
import FeatchUpdate from "./feachStateUpdate";
import { Link } from "react-router-dom";
const SinglePoseView = () => {
  const { id } = useParams();
  const [loading, errore, posts, setData] = FeatchUpdate({
    uri: `http://localhost:4000/blogs`,
  });
  const post = posts.filter((post) => post.id === Number(id))[0];
  // console.log(post);
  let content = null;
  if (errore.isTrue) {
    content = (
      <div className="loading">
        <h4> Errore... {errore.text}</h4>
      </div>
    );
  } else if (loading) {
    content = (
      <div className="loading">
        <h4> loading data...</h4>
      </div>
    );
  } else {
    content = (
      <div className="singlePost">
        <div className="blogTitle">{post.title}</div>
        <div className="blogBody">{post.body}</div>
        <div className="postBottom">
          <Link to="/">
            <span className="readMore"> Back to home </span>
          </Link>
        </div>
      </div>
    );
  }
  return content;
};

export default SinglePoseView;
