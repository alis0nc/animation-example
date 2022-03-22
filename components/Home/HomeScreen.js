import React from "react";
import styled from "styled-components";

import { ButtonPrimary, CCView } from "@companycam/slab";

const Container = styled(CCView)`
  flex: 1;
  justify-content: center;
`;

export default function HomeScreen({ navigation }) {
  return (
    <Container ccPadding="xl" ccBackground={2}>
      <CCView ccMargin="s">
        <ButtonPrimary
          textContent="React Native Animated"
          size="large"
          onPress={() => navigation.navigate("RN Animated")}
        />
      </CCView>
      <CCView ccMargin="s">
        <ButtonPrimary
          textContent="React Native LayoutAnimation"
          size="large"
          onPress={() => navigation.navigate("RN LayoutAnimation")}
        />
      </CCView>
      <CCView ccMargin="s">
        <ButtonPrimary
          textContent="React Native Reanimated"
          size="large"
          onPress={() => navigation.navigate("RN Reanimated")}
        />
      </CCView>
    </Container>
  );
}
