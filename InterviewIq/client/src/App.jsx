/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterViewPage from './Pages/InterViewPage'

export const ServerUrl="http://localhost:8000"
const App = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    const getUser=async()=>{
      try {
        const result=await axios.get(ServerUrl+"/api/user/current-user",{
          withCredentials:true
        })
        //redux ke liye 
        dispatch(setUserData(result.data))
        console.log(result.data)
      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
      }
    }
    getUser()
  },[dispatch])
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/auth' element={<Auth/>}></Route>
    <Route path='/interviewpage' element={<InterViewPage/>}></Route>
   </Routes>
  )
}

export default App
