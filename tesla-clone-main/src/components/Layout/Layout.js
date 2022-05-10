import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";


export const Layout = () => {
    const { pathname } = useLocation()

    return (
        <Main>
            {["/", "/model-s", "/model-x", "/solarpanels", "/teslaaccount"].includes(pathname)
                ? <Header color="black" bgdefault={true} />
                : <Header color="white" bgdefault={false} />
            }
            <Outlet />
        </Main>
    )
}

const Main = styled.div`
    min-height: 100vh;
    position: relative;
`