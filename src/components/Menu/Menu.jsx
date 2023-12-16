import React from "react";
import Button from "../MenuButton/MenuButton";  
import './Menu.css'
    const Menu = ({
        menuActive, 
        changeMenuActive, 
        translation,
        profileActive, 
        changeProfileActive, 
        settingsActive, 
        changeSettingsActive,
    }) => {
        return(
        <div className={menuActive ? "menu active" : "menu"} onClick={() => changeMenuActive(!menuActive)}>
            <div className="blur"></div>
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__content--logo"></div>
                <div className="menu__content--name">
                    Иван Бабайлов
                </div>
                <div className="menu__content--status">
                    Never die... &#128148;
                </div>
                <ul className="menu__content--nav">
                    {
                    translation('menu', { returnObjects: true }).map((data) =>
                        <Button 
                            data = {data} 
                            key = {data.id}
                            menuActive = {menuActive}
                            changeMenuActive = {changeMenuActive}
                            profileActive = {profileActive}
                            changeProfileActive = {changeProfileActive}
                            settingsActive = {settingsActive}
                            changeSettingsActive = {changeSettingsActive}
                        />
                    ) 
                }
                </ul>
                <div className="menu__content--copytight">
                    © И. А. Бабайлов, 2023
                </div>
            </div>
        </div>
    );
}
export default Menu;