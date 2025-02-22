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
    const setMode = (e) =>{
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode",e.target.value);
        setThemeSetting(false);
    }

    const setColor = (color)=>{
        setCurrentColor(color);
        localStorage.setItem("colorMode",color);
        setThemeSetting(false);
    }


    const [screenSize , setScreenSize ] = useState(undefined);

    return (
        <stateContext.Provider 
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setColor,
                setMode,
                themeSetting,
                setThemeSetting
            }}
        >
            {children}
        </stateContext.Provider>
    );
 
};

export const useStateContext = () => useContext(stateContext);