import PageContainer from '../../components/PageContainer/PageContainer';
import SignupForm from '../../components/SignupForm/SignupForm';
const SignUpPage = () => {
  return (<>
      <title>Create Your Store Account</title>
      <PageContainer isCentered={true}>
        <SignupForm/>
      </PageContainer>
      </> )
}
export default SignUpPage;