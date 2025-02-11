import React, { useState, useCallback } from 'react';

const WithUseCallback = () => {
  const [count, setCount] = useState(0);
  const [x, setx] = useState(0)

  // Function is memoized and won't be recreated unless dependencies change
  const WithUseCallback = useCallback(() => {
    console.log('WithUseCallBack');
   alert("Hi")
  }, [x]);

  const WithoutUseCallback=()=>{
    console.log("Hi there")
   
  }

  

  return (
    <div>
      <h2>With useCallback</h2>
      <p>Count: {count}</p>
      <button className='WithoutMemoCountButton' onClick={() => setCount(count + 1)}>Increase Count {count}</button>
      <button className='WithoutMemoCountButton' onClick={() => setx(x + 1)}>Increase x {x}</button>
      
    </div>
  );
};

export default WithUseCallback;
