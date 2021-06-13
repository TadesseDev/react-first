import { useState, useEffect } from "react";
import GetBlogs from "./BlogList";
const Home = () => {
  // const clickHandlerWitParameter = (element) => {
  //   console.log(" this is function with parameter");
  //   console.log(element.target);
  // };
  // const clickHandlerWithoutParameter = () => {
  //   console.log("this is function without parameter");
  // };
  // const [name, setName] = useState("");
  // const [age, setAge] = useState();
  // const stateChangingFunc = () => {
  //   setName("Addisu");
  //   setAge(27);
  // };

  const [blogPost, whatever] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web d top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);
  const [newBlog, updateNewState] = useState(blogPost);
  const deletSingleBlog = function (id) {
    const newArray = blogPost.filter((blog) => blog.id != id);
    whatever(newArray);
  };
  const deletSingleBlog2 = function (id) {
    const newArray = newBlog.filter((blog) => blog.id != id);
    updateNewState(newArray);
  };
  useEffect(() => {
    console.log("state changes");
  }, [blogPost]);

  return (
    <div className="home">
      <GetBlogs
        blogs={blogPost}
        title="All blogs"
        deletFunc={deletSingleBlog}
      />
      <GetBlogs
        blogs={newBlog.filter((blog) => blog.author === "mario")}
        title="blogs by mario"
        deletFunc={deletSingleBlog2}
      />
      {/* <p>
        {" "}
        {name} is {age} years old
      </p> */}
      {/* <button onClick={stateChangingFunc}>set</button> */}
      {/* <button onClick={clickHandlerWithoutParameter}>click me</button>
      <button onClick={(e) => clickHandlerWitParameter(e)}>click me</button> */}
    </div>
  );
};

export default Home;
