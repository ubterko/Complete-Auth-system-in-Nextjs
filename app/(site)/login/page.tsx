"use client"

import { signIn }  from "next-auth/react"
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowBack, IoIosArrowRoundForward } from "react-icons/io";

function Login(){
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const loginUser = (e) => {
        e.preventDefault()
        signIn('credentials', {...data, redirect:false})
        .then((callback) => {
            if (callback?.error){
                toast.error(callback?.error)
            }
            if (callback?.ok){
                toast.success("Login successfull!")
            }
        })
    }

    return(
        <>
            <div className="clp-yellow"></div>
            <div className="clp-purple"></div>
            <div className="clp-pink"></div>
            <div className="absolute m-4 top-0 text-white z-[50]">
                <IoIosArrowBack size={25}/>
            </div>
            <h1 className="text-6xl text-white mt-[70px] m-4 z-50 relative">Welcome Back</h1>
            <form className="relative top-[100px] flex flex-col justify-center items-center">
                <input 
                    type="text" 
                    name="email" 
                    placeholder="  Email" 
                    value={data.email}
                    onChange={e => setData({...data, email: e.target.value})}
                    className="m-2 bg-zinc-700 opacity-30 
                                rounded-xl h-11 w-[80vw]"
                />

                <input 
                    type="password" 
                    name="password" 
                    placeholder="  Password" 
                    value={data.password}
                    onChange={e => setData({...data, password: e.target.value})}
                    className="m-2 bg-zinc-700 opacity-30 
                                rounded-xl h-11 w-[80vw]"
                />
                <div className="flex w-full justify-around mt-[30px] z-50">
                    <h2 className="text-xl font-bold">Sign In</h2>
                    <button onClick={loginUser}>
                        <div className="relative flex justify-center items-center text-white w-[50px] h-[50px] rounded-full bg-[#8a4c7d]">
                            <IoIosArrowRoundForward size={30}/>
                        </div>
                    </button>
                </div>
             </form>
             <div className="flex justify-around w-full mt-48 ">
                <div className="relative font-bold">
                    <h2>Sign Up</h2>
                    <span className="absolute bg-yellow-500 w-[63px] h-3 top-3 z-[-5]"></span>
                </div>
                <div className="relative font-bold">
                    <h2>Forgot password?</h2>
                    <span className="absolute bg-[#feabae] w-[125px] h-3 top-3 z-[-5]"></span>
                </div>
             </div>
        </>
    )
}

export default Login;