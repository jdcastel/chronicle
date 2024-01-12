import { Metadata } from "next"
import ForgotPasswordComponent from '../../../components/auth/ForgotPassword' 

export const generateMetadata = () => {
  return {
    title: 'Forgot-Password',
  }
}

const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordComponent />
    </>
  )
}

export default ForgotPassword