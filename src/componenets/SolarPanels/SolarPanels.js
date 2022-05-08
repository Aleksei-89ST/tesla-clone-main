import React from "react";
import {
  Container,
  Specifications,
  Button,
  BottomItems,
  SpecificationsItem,
  BottomWrapper,
  TextItem,
} from "./SolarPanels.styles";
import { DownArrow } from "../common/DownArrow";

export const SolarPanels = () => {
  return (
    <Container image="solar-panel.jpg">
      <TextItem>
        <h1>Solar for Existing Roofs</h1>
        <p>Lowest Cost Solar Panels in America—Money-back guarantee</p>
      </TextItem>
      <BottomItems>
        <BottomWrapper>
          <Specifications>
            <SpecificationsItem>
              <h2>Solar Panels</h2>
              <p>Convert Sunlight to Energy</p>
            </SpecificationsItem>
            <SpecificationsItem>
              <h2>$</h2>
              <p>Guaranteed Lowest Price for Solar</p>
            </SpecificationsItem>
            <SpecificationsItem>
              <h2>24/7</h2>
              <p>Energy Monitoring</p>
            </SpecificationsItem>
          </Specifications>
          <Button>Order Now</Button>
        </BottomWrapper>
        <DownArrow />
      </BottomItems>
    </Container>
  );
};
