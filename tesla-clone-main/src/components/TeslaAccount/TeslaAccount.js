import React, { useState } from 'react';
import { Wrapper, Card, SidebarContainer, CardWrapper, Title } from "./TeslaAccout.styles";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useWindowSize } from '../../hooks/useWindowSize';
import { SlideMenu } from './SlideMenu';
import { Sidebar } from "./Sidebar";



export const TeslaAccount = () => {
    const { width } = useWindowSize()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <Wrapper>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <SlideMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <CardWrapper>
                {width > 1200
                    ? <Title>
                        <h1>Dashboard</h1>
                    </Title>
                    : <Title onClick={openMenu}>
                        <HomeIcon sx={{ marginRight: "15px" }} />
                        <h1>Dashboard</h1>
                        <KeyboardArrowDownIcon />
                    </Title>
                }
                <Card direction="column">
                    <img src="images/dashboard-card-image1.png" />
                    <div>
                        <h4>Reserve a Car</h4>
                        <p>Browse our models</p>
                    </div>
                    <div>
                        <p>Shop Now</p>
                    </div>
                </Card>
                <Card direction="row">
                    <img src="images/dashboard-card-image2.jpg" />
                    <div>
                        <div style={{ width: "180px" }}>Purchased a car from a third party?</div>
                        <p>Add</p>
                    </div>
                </Card>
            </CardWrapper>
        </Wrapper>
    )
}
