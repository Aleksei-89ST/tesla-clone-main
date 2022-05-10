import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterContainer>
            <span>
                Tesla © 2022
            </span>
            <span>
                Privacy & Legal
            </span>
            <span>
                Contact
            </span>
            <span>
                Careers
            </span>
            <span>
                News
            </span>
            <span>
                Engage
            </span>
            <span>
                Locations
            </span>
        </FooterContainer>
    )
}


const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    position: absolute;
    bottom: 0;
    padding-bottom: 30px;

    span {
        color: #5c5d61;
        font-size: 12px;
        font-weight: 600;
        margin-left: 20px;
        cursor: pointer;

        &:hover {
            color: black;
        }
    }
`