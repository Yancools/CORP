import React from "react";
import { useTranslation } from "react-i18next";
import './Home.css'
import Search from "../../components/Search/Search";
import Dialog from "../../components/Dialog/Dialog"
import Menu from "../../components/Menu/Menu";
import Burger from "../../components/Burger/Burger";
import Chat from "../../components/Chat/Chat";
import Profile from "../../components/Profile/Profile";
import Settings from "../../components/Settings/Settings"
import { useState } from "react";

const Home = () => {
    // const menu = [
    //     {
    //         id: 1,
    //         text: "Profile"
    //     },
        
    //     {
    //         id: 2,
    //         text: "Settings"
    //     }
    // ]
    const [translation, i18next] = useTranslation();

    const [menuActive, setMenuActive] = useState(false);

    const [profileActive, setProfileActive] = useState(false);
    
    const [settingsActive, setSettingsActive] = useState(false);

    const changeLanguage = (language) => {
        i18next.changeLanguage(language);
    }
 
    const changeProfileActive = (newState) => {
        setProfileActive(newState)
    }

    const changeSettingsActive = (newState) => {
        setSettingsActive(newState)
    }
    
    const changeMenuActive = (newState) => {
        setMenuActive(newState)
    }

    return (
        <div className="home">
            <div className="dialogs">
                <div className="dialogs__header">
                    <Burger 
                        menuActive={menuActive} 
                        changeMenuActive = {changeMenuActive}
                    />
                    <Search />
                </div>
                <div className="dialogs__list">
                    <Dialog/>
                </div>
            </div>
            <Chat/>
            <Menu 
                menuActive = {menuActive}
                changeMenuActive = {changeMenuActive}
                translation = {translation}
                profileActive = {profileActive}
                changeProfileActive = {changeProfileActive}
                settingsActive = {settingsActive}
                changeSettingsActive = {changeSettingsActive}
            />
            <Profile 
                profileActive = {profileActive} 
                changeProfileActive = {changeProfileActive}
                translation = {translation}
            />
            <Settings 
                settingsActive = {settingsActive} 
                changeSettingsActive = {changeSettingsActive}
                changeLanguage = {changeLanguage}
                translation = {translation}
            />
        </div>
    );
}

export default Home;