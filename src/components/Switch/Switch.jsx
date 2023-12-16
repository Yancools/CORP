import React from "react";
import './Switch.css'
import { useState } from "react";

const Switch = (
    props
    ) => {
        const [active, setActive] = useState(false);
        const handleToggle = () => {
            setActive(!active);
            if (active) {
                props.changeLanguage("ru")
                
            } else if (!active) {
                props.changeLanguage("en")
            }
          };
    return (
        <div class= {active ? "switch-btn switch-on" : "switch-btn"} onClick = {(handleToggle)}> </div>
    );
}

export default Switch;