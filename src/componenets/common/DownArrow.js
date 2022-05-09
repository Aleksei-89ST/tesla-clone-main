import styled from "styled-components";
import React from "react";

export const DownArrow = () => (
    <DownArrowStyle src="/images/down-arrow.svg" />
)

const DownArrowStyle = styled.img`
    margin: 20px 0 5px 0;
    height: 40px;
    animation: animateDown infinite 1.5s;
`