import { Metadata } from "next"
import RegisterComponent from '../../../components/auth/Register' 

export const generateMetadata = () => {
  return {
    title: 'Register',
  }
}

const Register = () => {
  return (
    <>
      <RegisterComponent />
    </>
  )
}

export default Register