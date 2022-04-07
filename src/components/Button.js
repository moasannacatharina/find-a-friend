import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme";

const StyledButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};

  &:hover {
    color: ${theme.palette.secondary.main};
  }
`;
const CustomButton = ({ children, onClick }) => {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      sx={{
        // bgcolor: "secondary.main",
        color: "primary.main",
        borderRadius: "50px",
        my: 5,
      }}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
