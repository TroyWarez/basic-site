import PageContainer from '../../components/PageContainer/PageContainer';
import SignupForm from '../../components/SignupForm/SignupForm';
import classes from '../SignUpPage/SignUpPage.module.css'
const SignUpPage = () => {
  return (<>
      <title>Create Your Store Account</title>
      <PageContainer className={classes.container}>
        <SignupForm/>
      </PageContainer>
      </> )
}
export default SignUpPage;