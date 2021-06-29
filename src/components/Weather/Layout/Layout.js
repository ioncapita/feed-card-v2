import React from "react";
import { Weather } from "../Weather";
import { Container, WeatherContainer } from "./LayoutElements";

const Layout = () => {
  return (
    <Container>
      <WeatherContainer>
        <Weather />
      </WeatherContainer>
    </Container>
  );
};

export default Layout;
