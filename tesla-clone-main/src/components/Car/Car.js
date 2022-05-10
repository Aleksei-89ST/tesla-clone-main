import React from "react";
import { Container, Specifications, Button, BottomItems, SpecificationsItem, BottomWrapper } from "./Car.styles";
import { DownArrow } from "../common/DownArrow"


export const Car = ({ title, image, range, time, topSpeed, peakPower }) => {
    return (
        <Container image={image}>
            <h1>{title}</h1>
            <BottomItems>
                <BottomWrapper>
                    <Specifications>
                        <SpecificationsItem>
                            <h2>{range}</h2>
                            <p>Range (EPA est.)</p>
                        </SpecificationsItem>
                        <SpecificationsItem>
                            <h2>{time}</h2>
                            <p>0-60 mph*</p>
                        </SpecificationsItem>
                        <SpecificationsItem>
                            <h2>{topSpeed}</h2>
                            <p>Top Speed</p>
                        </SpecificationsItem>
                        <SpecificationsItem>
                            <h2>{peakPower}</h2>
                            <p>Peak Power</p>
                        </SpecificationsItem>
                    </Specifications>
                    <Button>
                        Order Now
                    </Button>
                </BottomWrapper>
                <DownArrow />
            </BottomItems>
        </Container>
    )
}
