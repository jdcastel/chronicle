'use client';

import Link from "next/link";
import { Input, IconButton } from "@material-tailwind/react";
import './styles.css'

const Register = () => {
  return (
    <>
      <div className="flex w-72 flex-col items-center gap-4">
      <p className="text-xl">Create an <span className="text-green-600">Account</span></p>
            <Input size="md" label="First Name" color="green" crossOrigin={undefined} />
            <Input size="lg" label="Last Name" color="green" crossOrigin={undefined} />
            <Input size="md" label="Email" color="green" crossOrigin={undefined} />
            <Input size="lg" label="Username" color="green" crossOrigin={undefined} />
            <Input size="md" label="Password" color="green" crossOrigin={undefined} />
            <Input size="lg" label="Confirm Password" color="green" crossOrigin={undefined} />
        <Link className="link" href={"/feeds"}>
            <button className="login-button text-white font-medium py-2 px-4 rounded-full">
                REGISTER
            </button>
        </Link>
        <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <Link href="/login">
                <span className="account-text text-sm text-green-600">Log in</span>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Register