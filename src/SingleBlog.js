import { useHistory, useParams } from "react-router-dom";
import FeatchUpdate from "./feachStateUpdate";
import { Link } from "react-router-dom";
import { useState } from "react";
const SinglePoseView = () => {
  const hist = useHistory();
  const { id } = useParams();
  const [loading, errore, posts] = FeatchUpdate({
    uri: `https://jsonplaceholder.typicode.com/`,
  });
  const [deleting, setDeleting] = useState(false);
  const post = posts.filter((post) => post.id === Number(id))[0];
  const deletPost = async () => {
    console.log(id);
    setDeleting(true);
    await fetch(`https://jsonplaceholder.typicode.com//${id}`, {
      method: "DELETE",
    });
    setDeleting(false);
    hist.push("/");
  };
  // console.log(post);
  let content = null;
  if (deleting) {
    content = (
      <div className="loading">
        <h4> deleting...</h4>
      </div>
    );
  } else if (errore.isTrue) {
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
          <button href="" className="readMore delete" onClick={deletPost}>
            Delete this blog
          </button>
        </div>
      </div>
    );
  }
  return content;
};

export default SinglePoseView;
