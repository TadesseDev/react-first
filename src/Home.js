import FeatchUpdate from "./feachStateUpdate";
import GetBlogs from "./BlogList";
import Container from "./topFullSizeContainer";
// import { useLocation } from "react-router-dom";
// let getPostDAta = async (whatever) => {
//   // console.log("function is called");
// };
const Home = () => {
  // const locstion = useLocation();
  // try {
  //   console.log(locstion.state.author);
  // } catch (e) {
  //   console.log("cant find the location");
  // }
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
  // const [blogPost, whatever] = useState([]);
  // const [loading, setLoadingState] = useState(true);
  // const [errore, setErroreState] = useState({ text: "", isTrue: false });
  const [loading, errore, blogPost] = FeatchUpdate({
<<<<<<< HEAD
    uri: "https://jsonplaceholder.typicode.com/posts",
=======
    uri: "http://winmac.epizy.com/database/blog-data/blogs",
>>>>>>> fe7472db189737eef29e67ad3ad9b4845271e0e6
  });
  // window.addEventListener("DOMContentLoaded", () => getPostDAta(whatever));
  // useEffect(() => {
  // const postURI = "http://localhost:4000/blogs";
  // setTimeout(() => {
  //   fetch(postURI)
  //     .then((jsonPost) => {
  //       if (!jsonPost.ok) {
  //         throw jsonPost;
  //       }
  //       jsonPost.json().then((postss) => {
  //         whatever(postss);
  //         setLoadingState(false);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.statusText);
  //       setLoadingState(false);
  //       setErroreState({ text: err.statusText, isTrue: true });
  //     });
  // }, 1000);
  // }, []);
  // console.log("the valuefor the blogPost is" + blogPost);
  let content = <div></div>;
  if (errore.isTrue)
    content = (
      <div className="loading">
        <h4> Errore... {errore.text}</h4>
      </div>
    );
  else if (loading)
    content = (
      <div className="loading">
        <h4> loading data...</h4>
      </div>
    );
  else
    content = (
      <div className="home">
        <GetBlogs blogs={blogPost} title="All blogs" />
        {/* <p>
        {" "}
        {name} is {age} years old
      </p> */}
        {/* <button onClick={stateChangingFunc}>set</button> */}
        {/* <button onClick={clickHandlerWithoutParameter}>click me</button>
      <button onClick={(e) => clickHandlerWitParameter(e)}>click me</button> */}
      </div>
    );

  return (
    <div>
      <Container />
      <div className="homeContent">{content}</div>
    </div>
  );
};

export default Home;
