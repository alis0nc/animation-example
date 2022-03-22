import React from "react";
import styled from "styled-components";

import { CCView, TextHeading1 } from "@companycam/slab";

const Container = styled(CCView)``;

export default function AnimatedExample() {
  return (
    <Container ccPadding="xl" ccBackground={2}>
      <TextHeading1>React Native Animated</TextHeading1>
    </Container>
  );
}
