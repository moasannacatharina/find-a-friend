import React from "react";
import Container from "@mui/material/Container";

const Layout = ({ children }) => {
  return (
    <main>
      <Container
        maxWidth="l"
        sx={{
          bgcolor: "primary.main",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          color: "secondary.main",
        }}
      >
        {children}
      </Container>
    </main>
  );
};

export default Layout;
