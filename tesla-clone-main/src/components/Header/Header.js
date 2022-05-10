import React, { useState } from 'react';
import { Container, Menu, RightMenu, ButtonMenu, BurgerNav, CloseButton, CustomLink } from './Header.style';
import CloseIcon from '@mui/icons-material/Close';




export const Header = ({ color, bgdefault }) => {
  const [toggleBurgerNav, setToggleBurgerNav] = useState(false)

  return (
    <Container color={color}>
      {color === "black"
        ? <CustomLink to="/">
          <img src="/images/logo.svg" alt="logo" />
        </CustomLink>
        : <CustomLink to="/">
          <img src="/images/logo-white.svg" alt="logo" />
        </CustomLink>
      }
      <Menu>
        <CustomLink bgdefault={bgdefault} to="/model-s">Model S</CustomLink>
        <CustomLink bgdefault={bgdefault} to="/model-3">Model 3</CustomLink>
        <CustomLink bgdefault={bgdefault} to="/model-y">Model Y</CustomLink>
        <CustomLink bgdefault={bgdefault} to="/model-x">Model X</CustomLink>
        <CustomLink bgdefault={bgdefault} to="/solarroof">Solar Roof</CustomLink>
        <CustomLink bgdefault={bgdefault} to="/solarpanels">Solar Panel</CustomLink>
      </Menu>
      <RightMenu>
        <CustomLink bgdefault={bgdefault} to="#">Shop</CustomLink>
        <CustomLink bgdefault={bgdefault} to="/login">Account</CustomLink>
      </RightMenu>
      <ButtonMenu bgdefault={bgdefault} onClick={() => setToggleBurgerNav(true)}>Menu</ButtonMenu>
      <BurgerNav show={toggleBurgerNav}>
        <CloseButton onClick={() => setToggleBurgerNav(false)}><CloseIcon/></CloseButton>
        <CustomLink to="/model-s">Model S</CustomLink>
        <CustomLink to="/model-3">Model 3</CustomLink>
        <CustomLink to="/model-y">Model Y</CustomLink>
        <CustomLink to="/model-x">Model X</CustomLink>
        <CustomLink to="/solarroof">Solar Roof</CustomLink>
        <CustomLink to="/solarpanels">Solar Panel</CustomLink>
        <CustomLink to="#">Existing Inventory</CustomLink>
        <CustomLink to="#">Used Inventory</CustomLink>
        <CustomLink to="#">Trade-In</CustomLink>
        <CustomLink to="#">Test Drive</CustomLink>
        <CustomLink to="#">Cybertruck</CustomLink>
        <CustomLink to="#">Roadster</CustomLink>
        <CustomLink to="#">Semi</CustomLink>
        <CustomLink to="#">Charging</CustomLink>
        <CustomLink to="#">Powerwall</CustomLink>
        <CustomLink to="#">Commercial Energy</CustomLink>
        <CustomLink to="#">Utilities</CustomLink>
        <CustomLink to="#">Find Us</CustomLink>
        <CustomLink to="#">Investor Relations</CustomLink>
        <CustomLink to="#">Shop</CustomLink>
        <CustomLink to="/login">Account</CustomLink>
      </BurgerNav>
    </Container >
  )
}
