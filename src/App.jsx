import { StrictMode } from 'react'
import './App.css'
import { useStateContext } from './context/ContextProvider'

function App() {
  const {activeMenu, themeSetting,setThemeSetting,currentColor,currentMode,isClicked} = useStateContext();
  
  return (
    <StrictMode className>

    </StrictMode>
  )
}

export default App
