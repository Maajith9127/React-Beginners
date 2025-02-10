import React from 'react'

const Usestate = ({ state1, setState1, state2, setState2 }) => {
  
    return (

        <div className='border AllUseStateButtons '>
            <div className='StateButtons border'>
                <div><button onClick={()=>{setState1(state1+1)}}>State1</button> <span>{state1}</span> </div>
                <div><button onClick={()=>{setState2(state2+1)}}>State2</button> <span>{state2}</span> </div>

            </div>

        </div>

    )
}

export default Usestate