import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import theme from "../theme";
import { motion } from "framer-motion";

const StyledImage = styled.img`
  height: 200px;
  border-radius: 50%;
  width: 200px;
  box-shadow: 0px 0px 4px 1px ${theme.palette.boxShadow.main};
  margin: 2rem 0 1rem;
  border: 1px solid ${theme.palette.secondary.dark};
`;

const StyledCard = styled(motion.div)`
  background-color: ${theme.palette.light.main};
  box-shadow: 0px 0px 5px 0px ${theme.palette.boxShadow.secondary};
  color: ${theme.palette.primary.main};
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  align-items: center;
  max-width: 400px;
  & > h2 {
    font-family: "Lora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

const StyledContactInformation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem 2rem;

  & > p {
    margin-top: 10px;
    font-family: "Lora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: italic;
    font-size: 1.15rem;

    a {
      color: inherit;
      text-decoration: none;
      transition: 0.3s ease-in;

      &:hover {
        color: ${theme.palette.secondary.dark};
      }
    }
  }

  & > h3 {
    margin-top: 2rem;
    font-family: "Lora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
const UserCard = ({ userData }) => {
  const { name, picture, dob, email, cell, location } = userData[0];

  return (
    <StyledCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
    >
      <StyledImage src={picture.large} alt="Picture of user" />
      <Typography variant="h5" component="h2">
        {` ${name.first} ${name.last}`}
      </Typography>
      <StyledContactInformation>
        <Typography variant="p" component="p">
          <a href={`mailto:${email}`}>{email}</a>
        </Typography>
        <Typography variant="p" component="p">
          <a href={`tel:${cell}`}>{cell}</a>
        </Typography>

        <Typography variant="p" component="h3">
          {`${name.first} was born ${dob.age} years ago in ${location.city}, ${location.country}.`}
        </Typography>
      </StyledContactInformation>
    </StyledCard>
  );
};

export default UserCard;
