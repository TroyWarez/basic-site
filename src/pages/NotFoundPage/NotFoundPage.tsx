import { Link } from "react-router-dom";
import PageContainer from '../../components/PageContainer/PageContainer';
import NavBar from "../../components/NavigationBar/NavigationBar";
const NotFoundPage = () => {
  return (
    <div>
      <title>404 Not found - Store</title>
      <NavBar isCentered={true}></NavBar>
      <PageContainer>
      <h1>page not found</h1>
      <p>the page you requested does not exist</p>
      <button><Link to="/">Go back to home page</Link></button>
      </PageContainer>
    </div>
  );
};

export default NotFoundPage;
