import React from "react";
import './Burger.css'

const Burger = (
    {
        menuActive, 
        changeMenuActive
    }) => {

    return (
        <button className = "burger" onClick={() => changeMenuActive(!menuActive)} >
            <span></span>
        </button>  
    );
}

export default Burger;
