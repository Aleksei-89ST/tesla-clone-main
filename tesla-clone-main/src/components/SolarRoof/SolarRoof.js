import React from "react";
import { Container, Specifications, Button, BottomItems, SpecificationsItem, BottomWrapper } from "./SolarRoof.styles";
import { DownArrow } from "../common/DownArrow"

export const SolarRoof = () => {
    return (
        <Container image="solar-roof-page.png">
            <h1>Solar Roof</h1>
            <BottomItems>
                <BottomWrapper>
                    <Specifications>
                        <SpecificationsItem>
                            <h2>Solar Roof</h2>
                            <p>Beautiful Solar Without Compromise</p>
                        </SpecificationsItem>
                        <SpecificationsItem>
                            <h2>25-Year</h2>
                            <p>Tile Warranty</p>
                        </SpecificationsItem>
                        <SpecificationsItem>
                            <h2>24/7</h2>
                            <p>Outage Protection</p>
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