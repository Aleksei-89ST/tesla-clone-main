import React from 'react';
import { Wrapper, TextItem, Title, Subtitle, ButtonGroup, LeftButton, RightButton, Buttons } from './Section.styles';
import { Fade } from "react-awesome-reveal";
import { DownArrow } from "../common/DownArrow"


export const Section = ({ title, description, image, leftBtn, rightBtn }) => {
    return (
        <Wrapper image={image}>
            <Fade>
                <TextItem>
                    <Title>{title}</Title>
                    <Subtitle>{description}</Subtitle>
                </TextItem>
            </Fade>
            <Fade>
                <Buttons>
                    <ButtonGroup>
                        {title === "Accessories"
                            ? <LeftButton opacity={1}>
                                {leftBtn}
                            </LeftButton>
                            : <LeftButton>
                                {leftBtn}
                            </LeftButton>}
                        {rightBtn &&
                            <RightButton>
                                {rightBtn}
                            </RightButton>
                        }
                    </ButtonGroup>
                    <DownArrow />
                </Buttons>
            </Fade>
        </Wrapper>
    )
}