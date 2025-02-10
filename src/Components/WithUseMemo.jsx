import React from 'react'
import { useState,useMemo } from 'react'
const WithoutUseMemo = () => {
  const [number, setNumer] = useState(0)
  const [Count, setCount] = useState(0)
  function HugeCalculation(number){
    for (let i=0;i< 1000000000; i++){
      
    }
    return number*2;
  }
  let num=useMemo(() => HugeCalculation(number), [number]);
  return (
    <div>
      <h2>
      WithUseMemo
      </h2>
      <button className='WithoutMemoCountButton' onClick={()=>{setNumer(number+1)}}>Increase number {number}</button>
      <button className='WithoutMemoCountButton' onClick={()=>setCount(Count+1)} >Increase Count {Count}</button>

      </div>
  )
}

export default WithoutUseMemo