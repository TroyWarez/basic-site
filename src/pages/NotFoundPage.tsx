import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <title>Page not found</title>
      <h1>page not found</h1>
      <p>the page you requested does not exist</p>
      <Link to="/">Go back to home page</Link>
      <footer>© Copyright {new Date().getFullYear()} all rights reserved</footer>
    </div>
  );
};

export default NotFoundPage;
