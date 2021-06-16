import { useState } from "react";

const CreatePost = () => {
  const [blogTitle, updateTitle] = useState("simple state");
  const [blogBody, updateBody] = useState("simple state");
  const onchangeHandle = (value, state) => {
    // console.log(value);
    console.log("form submited");
  };
  const formControl = (e) => {
    e.preventDefault();
    console.log("form submited");
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
            onChange={(e, updateTitle) => onchangeHandle}
          />
          <label>Blog content</label>
          <textarea rows="10" value={blogBody} />
          <div>
            <button className="readMore" onClick={(e) => formControl(e)}>
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
