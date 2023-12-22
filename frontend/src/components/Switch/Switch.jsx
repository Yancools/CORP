import React from "react";
import './Switch.css'
import { useState } from "react";
import useTheme from "../../hooks/useTheme";


const Switch = (
    props
    ) => {    
        const {setTheme} = useTheme()
        
        let storageActive = false


        // if (props.data.id === 1) {
        //     storageActive = localStorage.getItem("storageThemeActive")    
        // }
        // if(props.data.id === 2) {
        //     storageActive = localStorage.getItem("storageLangActive")
        // }
        // console.log(storageActive)
        
        const [active, setActive] = useState(storageActive);

        const switchLanguage = () => {
            setActive(!active);
            localStorage.setItem("storageLangActive", !active)
            if (active) {
                props.changeLanguage("ru")
            } else if (!active) {
                props.changeLanguage("en")
            }
        }
        
        const switchTheme = (active, setActive) => {
            setActive(!active);
            localStorage.setItem("storageThemeActive", !active)
            if (active) {
                setTheme("Light")
                localStorage.setItem("Theme", "Light")
            } else if (!active) {
                setTheme("Dark")
                localStorage.setItem("Theme", "Dark")
            }
        }
         

        return (
            <div className= { active ? "switch-btn switch-on" : "switch-btn"} onClick={ () => {
                if (props.data.id === 1) {
                    switchLanguage(active, setActive)
                } else if ( props.data.id === 2) {
                    switchTheme(active, setActive)
                }
            }}></div>

        );
}

export default Switch;