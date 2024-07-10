import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <title>Page not found</title>
      <h1>404 Page not found.</h1>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default NotFoundPage;
