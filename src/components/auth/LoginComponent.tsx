'use client'

import { Input, IconButton } from "@material-tailwind/react";
import './styles.css'
import Image from 'next/image'
import ChronicleLogo from "../../assets/chronicleLogo.jpeg";

const LoginComponent = () => {
  return (
    <>
      <div className="flex w-72 flex-col items-end gap-4">
        <Image
            src={ChronicleLogo}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <Input size="md" label="Username" color="green" crossOrigin={undefined} />
          <Input size="lg" label="Password" color="green" icon={<i className="fas fa-heart" />} crossOrigin={undefined} />
      </div>
      <p>
        Forgot Password?
      </p>
      <div>
        <button className="login-button text-white font-medium py-2 px-4 rounded-full">
            LOGIN
        </button><br/>
        <button className="register-button text-white font-medium py-2 px-4 rounded-full">
            REGISTER
        </button>
      </div>
    </>
  )
}

export default LoginComponent