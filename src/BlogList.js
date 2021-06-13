const GetBlogs = ({ blogs, title, deletFunc }) => {
  const blogPost = blogs;
  const BlogsTitle = title;
  const deletSingle = deletFunc;
  const callBack = function Ptint(element) {
    return (
      <div className="blog" key={element.id}>
        <div className="blogTitle">{element.title}</div>
        <div className="blogBody">{element.body}</div>
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
