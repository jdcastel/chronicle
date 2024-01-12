'use client';

import { Input, IconButton } from "@material-tailwind/react";
import Image from 'next/image'
import ChronicleLogo from "../../assets/chronicleLogo.jpeg";
import Link from "next/link";
import './styles.css'
const Login = () => {
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
        <Link className="forgot-pass-link" href={"/forgot-password"}>
          <p className="text-gray-600 text-right text-xs ">Forgot Password?</p>
        </Link>
      </div>
      <div>
        <Link className="link" href={"/feeds"}>
        <button className="login-button text-white font-medium py-2 px-4 rounded-full">
              LOGIN
          </button>
        </Link>
          <br/>
          <Link className="link" href={"/register"}>
          <button className="register-button text-white font-medium py-2 px-4 rounded-full" onClick={() => console.log("Button clicked!")}>
              REGISTER
          </button>
        </Link>
      </div>
    </>
  )
}

export default Login