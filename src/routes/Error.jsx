import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to={"/"} className="btn btn-link">
        HOME
      </Link>
    </div>
  );
};

export default Error;
