import { useState } from "react";
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
  let blogPost = [
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web d top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ];
  return (
    <div className="home">
      <div className="blogs">
        {blogPost.map((element) => (
          <div className="blog" key={element.id}>
            <div className="blogTitle">{element.title}</div>
            <div className="blogBody">{element.body}</div>
          </div>
        ))}
      </div>
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
