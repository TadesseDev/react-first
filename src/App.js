import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contetnt">
        <Home />
      </div>
    </div>
  );
}
export default App;
