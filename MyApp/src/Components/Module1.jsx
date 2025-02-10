import React from 'react'
import { StateContext } from '../ContextProvider'
import { useContext } from 'react'

const Module1 = () => {
 const states=useContext(StateContext)
 
  return (
    <div>
        <div>

            Importing state1 and state2 values <br />
            with the help of UseContext from App Module to 
            Module1:
        </div>
        <div className=''>State1:{states.state1}</div>
        <div className=''>State2:{states.state2}</div>
    
        </div>
    
  )
}

export default Module1