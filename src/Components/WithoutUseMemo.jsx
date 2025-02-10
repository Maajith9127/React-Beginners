import React from 'react'
import { useState } from 'react'
const WithoutUseMemo = () => {
  const [Number, setNumer] = useState(0)
  const [Count, setCount] = useState(0)
  function HugeCalculation(Number){
    for (let i=0;i< 1000000000; i++){
      
    }
    return Number*2;
  }
  let num=HugeCalculation(Number)
  return (
    <div>
      <h2>
      WithoutUseMemo
      </h2>
      <button className='WithoutMemoCountButton' onClick={()=>{setNumer(Number+1)}}>Increase Number {Number}</button>
      <button className='WithoutMemoCountButton' onClick={()=>setCount(Count+1)} >Increase Count {Count}</button>

      </div>
  )
}

export default WithoutUseMemo