import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

const Login = () => {
 const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const userlogin = async () => {
        if (!username || !password || !email) {
            setErrorMsg("Please fill all fields");
            return;
        }

        try {
            const response = await axios.post(
                'https://shomyn.asia/api/v1/user/login'
               ,
                {
                    name:username,
                    email,
                    password,
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log("Login successful", response.data);
            setUsername('')
            setEmail('');
            setPassword('');
            setErrorMsg(''); 
        } catch (error) {
            setErrorMsg("Login failed. Please check your credentials.");
            console.error("Login error:", error);
           
        }
    }

    return (
        <div className=' flex justify-center items-center bg-[url("./assets/media/universebg.jpg")] bg-cover  w-screen h-screen'>
            <div className='w-[60vw] h-[80vh] bg-white/30 blur-none rounded-lg text-center '>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        userlogin();
                    }}
                    action="" className='flex flex-col justify-center items-center h-full'>

                    <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='w-[60%] h-[10%] bg-black/50 rounded-lg m-5 p-2 text-white' />
                    <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-[60%] h-[10%]  bg-black/50 rounded-lg m-5 p-2 text-white' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='w-[60%] h-[10%] bg-black/50 rounded-lg m-5 p-2 text-white' />

                    <button className='text-3xl font-semibold w-[60%] h-[10%] bg-white/50 rounded-lg m-5 p-2 text-black  transition-all duration-100 active:bg-cyan-950 active:text-white'>
                        Login
                    </button>
                   
                    <p className='text-black text-[20px]'>Register Account? 
                    <Link to="/Signup"> 
                       <span className='text-emerald-900  hover:underline cursor-pointer '>Sign Up</span>
                    </Link>
                    
                      </p>
                </form>
            </div>
        </div>
    )
}

export default Login