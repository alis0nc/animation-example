import React, { useState, useRef } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components";
import {
  CCView,
  TextHeading1,
  TextBodyPrimary,
  ButtonPrimary,
  tokens,
} from "@companycam/slab";

const Container = styled(CCView)``;

export default function AnimatedExample() {
  const [catVisible, setCatVisible] = useState(false);

  // #region Animation Stuff
  const catOpacity = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(catOpacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(catOpacity, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  // #endregion

  const toggleCatVisibility = () => {
    if (catVisible) {
      fadeOut();
      setCatVisible(false);
    } else {
      fadeIn();
      setCatVisible(true);
    }
  };

  return (
    <Container ccPadding="l" ccBackground={2}>
      <TextHeading1>React Native Animated</TextHeading1>
      <TextBodyPrimary>
        This is an example of React Native Animated.
      </TextBodyPrimary>
      <ButtonPrimary
        size="large"
        textContent="Press me!"
        onPress={toggleCatVisibility}
      />
      <Animated.Image
        style={{
          width: 250,
          height: 250,
          opacity: catOpacity,
          marginTop: tokens.size_spacing_m,
        }}
        source={{ uri: "https://placekitten.com/250/250" }}
      />
    </Container>
  );
}
