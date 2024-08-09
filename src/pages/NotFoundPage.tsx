import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <title>404 Not found - Store</title>
      <h1>page not found</h1>
      <p>the page you requested does not exist</p>
      <button><Link to="/">Go back to home page</Link></button>
    </div>
  );
};

export default NotFoundPage;
