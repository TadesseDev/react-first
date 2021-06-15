import FeatchUpdate from "./feachStateUpdate";
import GetBlogs from "./BlogList";
import Container from './topFullSizeContainer'
// let getPostDAta = async (whatever) => {
//   // console.log("function is called");
// };
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
  // const [blogPost, whatever] = useState([]);
  // const [loading, setLoadingState] = useState(true);
  // const [errore, setErroreState] = useState({ text: "", isTrue: false });
  const [loading, errore, blogPost, changeDataState] = FeatchUpdate({
    uri: "http://localhost:4000/blogs",
  });
  // window.addEventListener("DOMContentLoaded", () => getPostDAta(whatever));
  const deletSingleBlog = function (id) {
    const newArray = blogPost.filter((blog) => blog.id !== id);
    changeDataState(newArray);
  };
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
  let content =<div></div>;
  if (errore.isTrue)
  content= (
      <div className="loading">
        <h4> Errore... {errore.text}</h4>
      </div>
    );
  else if (loading)
  content=  (
      <div className="loading">
        <h4> loading data...</h4>
      </div>
    );
  else
  content = (
      <div className="home">
        <GetBlogs
          blogs={blogPost}
          title="All blogs"
          deletFunc={deletSingleBlog}
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
    
    return (
      <div>
        <Container />
        <div className="homeContent">
        {content}
        </div>
      </div>
    );
};

export default Home;
