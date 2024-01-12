import { Metadata } from "next"
import './style.css';
import LoginComponent from '../../../components/auth/Login' 
export const generateMetadata = () => {
  return {
    title: 'Login',
  }
}

const Login = () => {
  return (
    <>
    <div className="login">
        <span className="circle-top "></span>
        <div className="login-content">
            <LoginComponent />
        </div>
        <span className="circle-bottom"></span>
    </div>
    </>
  )
}

export default Login