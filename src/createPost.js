import { useState } from "react";

const CreatePost = () => {
  const [blogTitle, updateTitle] = useState("");
  const [blogBody, updateBody] = useState("");
  const onchangeHandle = (value, state) => {
    state(value);
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
            value={blogTitle}
            onChange={(e)=>onchangeHandle(e.target.value,updateTitle)}//{console.log(e);updateTitle(blogTitle+e.nativeEvent.data)}}
          />
          <label>Blog content</label>
          <textarea rows="10" value={blogBody} onChange={(e)=>onchangeHandle(e.target.value,updateBody)}/>
          <div>
            <button className="readMore" onClick={(e) => formControl(e)}>
              Add Blog
            </button>
            {blogTitle}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
