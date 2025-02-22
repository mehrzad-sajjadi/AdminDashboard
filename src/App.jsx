import { StrictMode } from 'react'
import './App.css'
import { useStateContext } from './context/ContextProvider'
import { BrowserRouter } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";

function App() {
  const {activeMenu, themeSetting,setThemeSetting,currentColor,currentMode,isClicked} = useStateContext();
  
  return (
    <div className={currentMode==="Dark"?"dark":""}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className="fixed left-4 buttom-4 z-[1000]">
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
              style={{background:currentColor , borderRadius:"50%" }}
              onClick={()=>{setThemeSetting(true)} }
            >
              <FiSettings />
            </button>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
