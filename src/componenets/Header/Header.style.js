import styled from "styled-components";
import { Link } from "react-router-dom";



export const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
    color: ${({ color }) => `${color}`};
    font-weight: 600;
`
export const CustomLink = styled(Link)`
    font-weight: inherit;
    background-color: transparent;
    border-radius: 12px;
    padding: 8px 12px;
    transition: background-color ease .33s;
    color: inherit;
        
    &:hover {
        ${({ bgdefault }) => bgdefault
        ? `background-color: hsla(0,0%,0%,.05);`
        : `background-color: hsla(0,0%,100%,.2);
        backdrop-filter: blur(16px);`} 
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    @media (max-width: 1200px) {
        display: none;
    }
`

export const RightMenu = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 1200px) {
        display: none;
    }
`
