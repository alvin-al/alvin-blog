import React from "react";
import Image from 'next/image';
import { signIn, signOut } from "/auth.ts"
import { useSession } from "next-auth/react";


const LoginForm = () => {
  return(
    <div className="w-[400px] m-auto bg-gray-100 rounded-xl h-[400px] flex flex-col justify-center items-center gap-4 mt-20">
        <form action={async () => {
          "use server"
          await signIn("google")
        }}>
            <button type="submit" className="border w-[250px] py-3 bg-blue-200 hover:bg-blue-300 rounded-md font-medium flex justify-center items-center gap-2">
                <span><Image src="/google_logo.svg" alt="google" width={24} height={24} /></span>
                <span>Sign in with Google</span>
            </button>
        </form>


         <button className="border w-[250px] py-3 bg-blue-200 hover:bg-blue-300 rounded-md font-medium flex justify-center items-center gap-2">
            <span><Image src="/facebook.svg" alt="google" width={24} height={24} /></span>
            <span>Sign in with Facebook</span>
         </button>
         
         <button className="border w-[250px] py-3 bg-blue-200 hover:bg-blue-300 rounded-md font-medium flex justify-center items-center gap-2">
            <span><Image src="/github.svg" alt="google" width={24} height={24} /></span>
            <span>Sign in with Github</span>
         </button>
    </div>
  );
};

export default LoginForm;
