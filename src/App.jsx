
import './App.css'
import { useState } from 'react'
import Usestate from './Components/Usestate.jsx'
import UseEffect from './Components/UseEffect.jsx';
import { StateProvider } from './ContextProvider.jsx';
import Module1 from './Components/Module1.jsx';
import UseRefHook from './Components/UseRefHook.jsx';
import WithUseMemo from './Components/WithUseMemo.jsx';
import WithoutUseMemo from './Components/WithoutUseMemo.jsx';
import UseCallBackHook from './Components/UseCallBackHook.jsx';
function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  return (
    <>
      <StateProvider state1={state1} state2={state2} >
        <div className='border AllHooksContainer'>

          <div className="hook usestate a ">
            <span className='title'> UseState Hook</span>
            <div className='x'>
              <Usestate state1={state1} state2={state2} setState2={setState2} setState1={setState1} />
            </div>

          </div>
          <div className="hook b">
            <span className='title'> UseEffect Hook</span>
            <div className='x'>
              <UseEffect state1={state1} state2={state2} />
            </div>

          </div>
          <div className="hook c">
            <span className='title'> UseContext Hook</span>
            <div className='x'>
              <Module1 />
            </div>


          </div>
          <div className="hook d ">
            <span className='title'> UseRef Hook</span>
            <div className='userefhook x'>
              <UseRefHook />
            </div >
          </div>
          <div className="hook d ">
            <span className='title'> UseMemo Hook</span>
            <div className='userefhook x'>
              <WithoutUseMemo/>
              <WithUseMemo/>
           
            </div >
          </div>
          <div className="hook d ">
            <span className='title'> UseCallBack Hook</span>
            <div className='userefhook x'>
              <UseCallBackHook/>
            </div >
          </div>

        </div>

      </StateProvider>

    </>
  )
}

export default App
