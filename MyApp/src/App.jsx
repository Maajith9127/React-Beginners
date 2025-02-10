
import './App.css'
import { useState } from 'react'
import Usestate from './Components/Usestate.jsx'
import UseEffect from './Components/UseEffect.jsx';
import { StateProvider } from './ContextProvider.jsx';
import Module1 from './Components/Module1.jsx';
import UseRefHook from './Components/UseRefHook.jsx';
function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  return (
    <>
      <StateProvider state1={state1} state2={state2} >
        <div className='border AllHooksContainer'>
          
          <div className="hook usestate a">
            <h1> UseState Hook</h1>
            <Usestate state1={state1} state2={state2} setState2={setState2} setState1={setState1} />

          </div>
          <div className="hook b">
            <h1>UseEffect Hook</h1>
            
            <UseEffect state1={state1} state2={state2} />

          </div>
          <div className="hook c">
            <h1>  UseContext Hook</h1>
          
            <Module1/>

          </div>
          <div className="hook d ">
            <h1>UseRef Hook</h1>
         <div className='userefhook'>
            <UseRefHook/>
         </div >
          </div>

        </div>

      </StateProvider>

    </>
  )
}

export default App
