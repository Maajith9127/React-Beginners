import React from 'react'
import { useRef } from 'react'

const UseRefHook = () => {
    const abc=useRef(null)

    const focusname=()=>{
        abc.current.focus()
    }
  return (
    <div className='useref'>
        <input className='qwe' type="text" ref={abc} placeholder='Enter Name' />
        <button className='qwe' onClick={focusname}>Focus Name</button>
    </div>
  )
}

export default UseRefHook