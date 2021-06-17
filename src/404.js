import { Link } from "react-router-dom";
const NotFount = () => {
  return (
    <div>
      <h2>this page does not exist</h2>
      <Link to="/">Home...</Link>
    </div>
  );
};

export default NotFount;
