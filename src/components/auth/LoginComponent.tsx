'use client'

import { Input, IconButton } from "@material-tailwind/react";
import './styles.css'
import Image from 'next/image'
import ChronicleLogo from "../../assets/chronicleLogo.jpeg";
import Link from "next/link";

const LoginComponent = () => {
  return (
    <>
      <div className="flex w-72 flex-col items-end gap-4">
        <Image
            src={ChronicleLogo}
            width={500}
            height={500}
            alt="Chronicle"
          />
          <Input size="md" label="Username" color="green" crossOrigin={undefined} />
          <Input size="lg" label="Password" color="green" icon={<i className="fas fa-heart" />} crossOrigin={undefined} />
      </div>
      <div className="text-right">
        <Link className="link" href={"/register"}>
          Forgot Password?
        </Link>
      </div>
      <div>
        <button className="login-button text-white font-medium py-2 px-4 rounded-full" onClick={() => console.log("Button clicked!")}>
            LOGIN
        </button><br/>
        <button className="register-button text-white font-medium py-2 px-4 rounded-full" onClick={() => console.log("Button clicked!")}>
            REGISTER
        </button>
      </div>
    </>
  )
}

export default LoginComponent