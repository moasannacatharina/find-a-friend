import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Dot from "./Dot";

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-tems: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
const InnerWrapper = styled(Box)`
  width: 6rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
`;
const Loading = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Dot />
        <Dot delay={0.15} />
        <Dot delay={0.3} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Loading;
