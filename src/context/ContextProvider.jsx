import React , { createContext,useContext,useState} from "react";

const stateContext = createContext();

const initialState = {
    chat : false ,
    cart : false , 
    userProfile : false ,
    notification : false
}

export const ContextProvider = ({children})=>{
    const [activeMenu , setActiveMenu] = useState(true);
    const [isClicked , setIsClicked] = useState(initialState);
    const [currentColor , setCurrentColor] = useState("#03c9d7");
    const [currentMode ,setCurrentMode ] = useState("Dark");
    const [themeSetting ,setThemeSetting ] = useState(false);

    const handleClick = (click)=>{
        setIsClicked({...initialState , [clicked]: !isClicked[clicked]});
    }
    return (
        <stateContext.Provider>
            {children}
        </stateContext.Provider>
    );
    const setMode = (e) =>{
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode",e.target.value);
        setThemeSetting(false);
    }


}