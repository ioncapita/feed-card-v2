import React from "react";
import { Weather } from "../Weather/Weather";
import { Container, WeatherContainer } from "./LayoutElements";
import CommentsList from "../Comments/CommentList";
import FeedImage from "../FeedImage/FeedImage";

const Layout = () => {
  return (
    <Container>
      <WeatherContainer>
        <Weather />
      </WeatherContainer>
      <FeedImage />
      <CommentsList />
    </Container>
  );
};

export default Layout;
