/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React from 'react'
import { VscRobot } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react"

import { auth,provider } from '../utils/firebase';
import axios from "axios"
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
const Auth = ({isModel=false}) => {

  const dispatch=useDispatch()
  const handleGoogleAuth = async () => {

    try {

      const response = await signInWithPopup(auth, provider);

      const user = response.user;

      const name = user.displayName;

      const email = user.email;

      const result = await axios.post(
        `${ServerUrl}/api/auth/google`,
        { name, email },
        { withCredentials: true }
      );
 dispatch(setUserData(result.data))
      console.log(result.data);

    } catch (error) {

      console.log(error.response?.data || error.message);
dispatch(setUserData(null))
    }

  };

  return (
  <div  className={`
  w-full ${isModel?"py-4":"min-h-screen bg-[#f3f3f3 flex items-center justify-center px-6 py-20"}
  `}>
<motion.div className='w-full min-h-screen bg-[#f3f3f3 flex items-center justify-center px-6 py-20' initial={{opacity:0,y:-40}} animate={{opacity:1,y:0}} transition={{duration:1.05}}>
      <div className='w-full max-w-md
       p-8 rounded-3xl bg-white 
      shadow-2xl border border-gray-200'>

            <div className="flex items-center justify-center gap-3 mb-6">
               <div className='bg-black text-whigte p-2 rounded-lg'>
              <VscRobot size={18} color='white' />
                  
               </div>
                <h2>InterviewIQ.AI</h2>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-center leading-snug mb-4">
                Continue with{" "}<span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                    <IoSparkles />
                 AI Smart Interview
                </span>
            </h1>
            <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">
              Sign in to start AI-Powered mock interviews,
              track your progress, and unlock detailed performance insights.
            </p>

            <motion.button className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md' 
            whileHover={{opacity:0.9,scale:1.03}} whileTap={{opacity:1,scale:0.98}}onClick={handleGoogleAuth}><FcGoogle size={20} />
            Continue With Google
</motion.button>
      </div>
    </motion.div>
  </div>
    
  )
}

export default Auth
