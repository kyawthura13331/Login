import { useState } from 'react'
import bg from './assets/media/universebg.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Signup = () => { // Renamed component to Signup for clarity
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
   
    const userlogin = async () => {
        if (!username || !password || !email) {
            setErrorMsg("Please fill all fields");
            return alert(errorMsg);
        }

        try {
            const response = await axios.post(
                
                //login user
                // 'http://150.95.82.207:8080/api/v1/user/login'
                //register user
                'http://150.95.82.207:8080/api/v1/user/register'
                ,
                {
                   name: username,
                    email,
                    password,
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
               
            );
            console.log("Registration successful", response.data);
            setUsername('');
            setPassword('');
            setEmail('');
           
        } catch (error) {
            
            const msg = error.response?.data?.message || "Login failed";
            setErrorMsg(msg);
            console.error("Login failed", msg);
        }
    }

    return (
        <div className='flex justify-center items-center bg-[url("./assets/media/universebg.jpg")] bg-cover  w-screen h-screen'>
            <div className='w-[60vw] h-[80vh] bg-black/50 blur-none rounded-lg text-center '>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        userlogin();
                    }}
                    action="" className='flex flex-col justify-center items-center h-full'>

                    <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='w-[60%] h-[10%] bg-white/50 rounded-lg m-5 p-2 text-black' />
                    <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-[60%] h-[10%] bg-white/50 rounded-lg m-5 p-2 text-black' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='w-[60%] h-[10%] bg-white/50 rounded-lg m-5 p-2 text-black' />

                    <button className='font-bold text-3xl w-[60%] h-[10%] bg-white/50 rounded-lg m-5 p-2 text-black hover:bg-white/70 transition-all duration-100 active:bg-cyan-950 active:text-white'>
                        Sign Up
                    </button>
                   
                    <p className='text-white '>Already have an account? 
                    <Link to="/Login"> 
                       <span className='text-blue-500 hover:underline cursor-pointer'>Log in</span>
                    </Link>
                    
                      </p>
                </form>
            </div>
        </div>
    )
}

export default Signup