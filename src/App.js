import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import singlePoseView from "./SingleBlog";
import createPost from "./createPost";
function App() {
  window.addEventListener("onunload", localStorage.clear());
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contetnt">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/create" component={createPost} />
            <Route path="/single/:id" component={singlePoseView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
