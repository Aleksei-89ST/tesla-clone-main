import React from 'react';
import { SlideMenuContainer} from "./TeslaAccout.styles";
import { Sidebar } from "./Sidebar";

export const SlideMenu = ({ isMenuOpen, closeMenu }) => {
    
    return (
        <SlideMenuContainer isMenuOpen={isMenuOpen}>
            <Sidebar closeMenu={closeMenu}/>
        </SlideMenuContainer>
    )
}