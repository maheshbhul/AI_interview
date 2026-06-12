/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Step1Setup from '../Components/Step1Setup';
import Step2Interviw from '../Components/Step2Interviw';
import Step3Report from '../Components/Step3Report';

const InterViewPage = () => {
const[step,setStep]=useState(1);
const[interviewData,setInterviewdata]=useState(null)
  return (
    <div className='min-h-screen bg-gray-50'>
    {step===1 &&(
        <Step1Setup onStart={(data)=>{setInterviewdata(data);
        setStep(2)}
           
        } ></Step1Setup>
    )}

    
 {step===2 &&(
        <Step2Interviw interViewData={interviewData} onFinished={(report)=>{
            setInterviewdata(report);
            setStep(2)
        }}/>
    )}

     {step===3 &&(
        <Step3Report report={interviewData}/>
    )}
      
    </div>
  )
}

export default InterViewPage
