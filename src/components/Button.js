import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme";

const StyledButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};
  color: ${theme.palette.primary.main};
  border-radius: 50px;
  margin: 40px 0;

  &:hover {
    color: ${theme.palette.secondary.main};
  }
`;
const CustomButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
