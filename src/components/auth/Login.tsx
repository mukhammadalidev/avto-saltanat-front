"use client";

import { Button } from "@radix-ui/themes";
import {useForm} from "react-hook-form"
function Login({func}) {
    const {register,handleSubmit} = useForm()

    
  return (
    <div className="bg-gray-800 text-white">

       <div className="flex justify-center items-center h-screen">
       


       <form action="" className="w-full md:w-80" onSubmit={handleSubmit(func)}>
       <h2 className="text-center  flex justify-center">
        <img src="/images/logo2.png" className="object-contain w-32 my-3" alt="" />
       </h2>
            <input {...register("username")} type="username" className="border-1 w-full  p-2" placeholder="username" /><br /><br />
            <input {...register("password")} type="password" className="border-1 w-full p-2" placeholder="password" /><br /><br />
            <Button type="submit"  className="bg-red-800 float-right">Login</Button>
        </form>
       </div>
    </div>
  )
}

export default Login