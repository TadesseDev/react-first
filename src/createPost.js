import { useState } from "react";
import { useHistory } from "react-router-dom";
const CreatePost = () => {
  const [blogTitle, updateTitle] = useState("");
  const [blogBody, updateBody] = useState("");
  const [author, setAuthor] = useState("Addisu");
  const [isLoading, setLoadin] = useState(false);
  let histo = new useHistory();
  const onchangeHandle = (value, state) => {
    state(value);
    // console.log(value);
  };
  const formControl = (e, loading) => {
    e.preventDefault();
    loading(true);
    setTimeout(() => {
      fetch("http://localhost:4000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: blogTitle,
          body: blogBody,
          author: author,
        }),
      })
        .then((e) => {
          loading(false);
          localStorage.clear();
          histo.push("/", { author: author });
        })
        .catch((e) => {
          loading(false);
        });
    }, 2000);
  };
  return (
    <div className="createPsot">
      <div className="formContainer">
        <h2> fill the form to create one</h2>
        <form>
          <label> Blog Title</label>
          <input
            type="text"
            rows="10"
            value={blogTitle}
            onChange={(e) => onchangeHandle(e.target.value, updateTitle)}
          />
          <label>Blog content</label>
          <textarea
            rows="10"
            value={blogBody}
            onChange={(e) => onchangeHandle(e.target.value, updateBody)}
          />
          <label>autor</label>
          <select onChange={(e) => onchangeHandle(e.target.value, setAuthor)}>
            <option value="Addisu">Addisu</option>
            <option value="Bekalu">Bekalu</option>
            <option value="Maru">Maru</option>
            <option value="Wosagne">Wosagne</option>
            <option value="Other">Other</option>
          </select>
          {!isLoading && (
            <button
              className="readMore"
              onClick={(e) => formControl(e, setLoadin)}
            >
              Add Blog
            </button>
          )}
          {isLoading && (
            <button className="readMore" disabled={true}>
              submiting blog ...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
