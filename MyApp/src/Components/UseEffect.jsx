import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
const UseEffect = ({state1,state2}) => {
    const [glowState1, setGlowState1] = useState(false);
    const [glowState2, setGlowState2] = useState(false)
    const [glowState3, setGlowState3] = useState(false)
   
    //Useeffect for glowstate1
    useEffect(() => {
        // Trigger the glow effect when state1 changes
        setGlowState1(true);
    
        // Remove the glow effect after 500ms
        const timer = setTimeout(() => {
          setGlowState1(false);
        }, 500);
    
        // Clean up the timer to avoid memory leaks
        return () => clearTimeout(timer);
      }, [state1]);
    

    //Useeffect for glowstate2
    useEffect(() => {
        // Trigger the glow effect when state1 changes
        setGlowState2(true);
    
        // Remove the glow effect after 500ms
        const timer = setTimeout(() => {
          setGlowState2(false);
        }, 500);
    
        // Clean up the timer to avoid memory leaks
        return () => clearTimeout(timer);
      }, [state2]);

      //Useefefct if any state changes
      useEffect(() => {
        // Trigger the glow effect when state1 changes
        setGlowState3(true);
    
        // Remove the glow effect after 500ms
        const timer = setTimeout(() => {
          setGlowState3(false);
        }, 500);
    
        // Clean up the timer to avoid memory leaks
        return () => clearTimeout(timer);
      },[state1, state2]);






  return (
    <div className='useeffectstatesss'>
        <span className={glowState1 ? 'glow' : 'span1'} > State1 Change: {state1} </span>
        <span className={glowState2 ? 'glow' : 'span2'}>State2 Change: {state2}</span>
        <span className={glowState3 ? 'glow' : 'span3'}>if Any state chnages</span>
       </div>
  )
}

export default UseEffect