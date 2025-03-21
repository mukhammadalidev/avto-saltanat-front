"use client";

import Login from "@/components/auth/Login";
import Dashboard from "@/components/dashboard/Dashboard";
import axios from 'axios'
import { useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [isLogin,setIsLogin] = useState(false)

  const loginFunc = (data:object)=>{
    axios.post('http://localhost:8000/api/token/',{
      username:data.username,
      password:data.password
    }).then(res=>{
      console.log(res);
      toast.success('You did it!');
      setTimeout(()=>{
        setIsLogin(true)

      },2000)
      
    }).catch(err=>{
      console.log(err);
      
    })
  }
  return (
    <div>
      {
        isLogin == false ? <Login func={loginFunc} /> : <Dashboard />
      }
        
    </div>
  )
}

export default Page