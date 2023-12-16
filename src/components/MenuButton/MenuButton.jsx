import React from "react";
import './MenuButton.css'
const Button = (
    props
    ) => {
    return (
        <button className="menu__button" onClick={ () => {
            if (props.data.id === 1) {
                    props.changeProfileActive(!props.profileActive)
                    props.changeMenuActive(!props.menuActive)
            } else if ( props.data.id === 2) {
                    props.changeSettingsActive(!props.settingsActive)
                    props.changeMenuActive(!props.menuActive)
                
            }
        }}>
            {props.data.text}
        </button>
    );
}
export default Button;