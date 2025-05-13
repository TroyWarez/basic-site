import PageContainer from '../../components/PageContainer/PageContainer';
import LoginForm from '../../components/LoginForm/LoginForm';
const LoginPage = () => {
  return (<>
      <title>Log into your Store Account</title>
      <PageContainer isCentered={true}>
        <LoginForm/>
      </PageContainer>
      </> )
}
export default LoginPage;