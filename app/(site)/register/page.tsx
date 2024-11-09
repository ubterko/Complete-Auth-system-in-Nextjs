"use client"

import { useState } from "react";
import { toast } from "react-hot-toast"
import axios from "axios"
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowRoundForward } from "react-icons/io"

function Register(){
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const registerUser = (e) => {
        e.preventDefault();
        axios.post('/api/register', data)
        .then(() => toast.success("Successfully logged in."))
        .catch(() => toast.error("Unable to register user."))
    } 

    return(
        <div className="w-full h-screen bg-[#feabae] z-[-5]">
            <div className="clip-circle-top z-[0]"></div>

            <div className="absolute m-4 text-white z-[50]">
                <IoIosArrowBack size={25}/>
            </div>
        
            <p className="absolute m-4 top-[60px] text-6xl text-white font-[400] z-[50]">Create Account</p>

            <div className="flex flex-col justify-center items-center relative top-[270px]">
                <form className="">
                    <p>
                        <input 
                            name="name" 
                            type="text" 
                            placeholder="  Name" 
                            value={data.name} 
                            onChange={(e) => 
                            setData({...data, name: e.target.value}) } 
                            className="m-2 bg-zinc-600 opacity-50 
                                rounded-xl h-11 w-[80vw]" />
                    </p>
                    <p>
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="  Your Email" 
                            onChange={e => setData({...data, email: e.target.value })} 
                            className="m-2 bg-zinc-600 opacity-50 
                                rounded-xl h-11 w-[80vw]" 
                        /></p>
                    <p>
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="  Password" 
                            onChange={e => setData({...data, password: e.target.value}) } 
                            className="m-2 bg-zinc-600 opacity-50 
                                rounded-xl h-11 w-[80vw]" /></p>

                    <div className="flex w-full justify-between mt-[30px] z-50">
                        <h2 className="inline-block text-2xl font-bold">Sign Up</h2>
                        <button onClick={registerUser}>
                            <div className="relative flex justify-center items-center text-white w-[50px] h-[50px] rounded-full bg-[#8a4c7d] z-50">
                                <IoIosArrowRoundForward size={30}/>
                            </div>
                        </button>

                        {/* <div className="relative flex justify-center items-center text-white w-[50px] h-[50px] rounded-full bg-[#8a4c7d] z-50">
                            <IoIosArrowRoundForward onClick={registerUser} size={30}/>
                        </div> */}

                    </div>
                </form>
                
            </div>

            <div className="z-10">
                <Link href="/login" className="absolute font-bold bottom-10 right-10">
                    <div className="relative z-[15]">
                        Sign In
                        <div className="absolute w-[52px] h-3 bg-yellow-500 top-3 z-[-5]"></div>
                    </div>
                </Link>
            </div>
            <div className="clip-circle-bottom z-5"></div>
        </div>
    )
}

export default Register;