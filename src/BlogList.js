import { Link } from "react-router-dom";
const GetBlogs = ({ blogs, title, deletFunc }) => {
  const blogPost = blogs;
  const BlogsTitle = title;
  const deletSingle = deletFunc;
  const callBack = function Ptint(element) {
    return (
      <div className="blog" key={element.id}>
        <Link to={"single/" + element.id} alt={element.title}>
          <div className="blogTitle">{element.title}</div>
          <div className="blogBody">
            {element.body.slice(0, 250)}
            <span className="readMore"> ...read more </span>
          </div>
        </Link>
        <button className="removeBlog" onClick={() => deletSingle(element.id)}>
          Delet this blog
        </button>
      </div>
    );
  };
  return (
    <div className="blogs">
      <h2>{BlogsTitle}</h2>
      {blogPost.map(callBack)}
    </div>
  );
};

export default GetBlogs;
