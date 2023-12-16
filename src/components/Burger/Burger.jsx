import React from "react";
import './Burger.css'

const Burger = (
    {
        menuActive, 
        changeMenuActive
    }) => {

    return (
        <div className= "burger" onClick={() => changeMenuActive(!menuActive)} >
            <button></button>
        </div>  
    );
}

export default Burger;
