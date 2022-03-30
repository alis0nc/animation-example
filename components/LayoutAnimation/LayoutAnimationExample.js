import React, { useState } from "react";
import { Image, LayoutAnimation } from "react-native";
import styled from "styled-components";
import {
  CCView,
  TextHeading1,
  TextBodyPrimary,
  ButtonPrimary,
  tokens,
} from "@companycam/slab";

const Container = styled(CCView)``;

export default function LayoutAnimationExample() {
  const [catVisible, setCatVisible] = useState(false);

  const toggleCatVisibility = () => {
    if (catVisible) {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          3000,
          LayoutAnimation.Types.easeInEaseOut,
          LayoutAnimation.Properties.opacity
        )
      );
      setCatVisible(false);
    } else {
      LayoutAnimation.easeInEaseOut();
      setCatVisible(true);
    }
  };

  return (
    <Container ccPadding="l" ccBackground={2}>
      <TextHeading1>React Native LayoutAnimation</TextHeading1>
      <TextBodyPrimary>
        This is an example of React Native LayoutAnimation.
      </TextBodyPrimary>
      <ButtonPrimary
        size="large"
        textContent="Press me!"
        onPress={toggleCatVisibility}
      />
      {catVisible ? (
        <Image
          style={{
            width: 250,
            height: 250,
            marginTop: tokens.size_spacing_m,
          }}
          source={{ uri: "https://placekitten.com/250/250" }}
        />
      ) : null}
    </Container>
  );
}
