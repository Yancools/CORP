import React from "react";
import Button from "../MenuButton/MenuButton";  
import Layout from "../Layout/Layout";
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
            <div className={menuActive ? "menu active" : "menu"} onMouseLeave={() => changeMenuActive(false)}>
                <Layout>
                    <div className="content">
                    <div className="content__header">
                        <div className="content__header--logo"></div>
                        <div className="content__header--name">
                            Иван Бабайлов
                        </div>
                        <div className="content__header--status">
                            Never die... &#128148;
                        </div>
                    </div>
                    
                        <ul className="content__navbar">
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
                            )}
                        </ul>
                    <div className="content--copytight">
                        © И. А. Бабайлов, 2023
                    </div>
                    </div>
                </Layout>
            </div>
    );
}
export default Menu;