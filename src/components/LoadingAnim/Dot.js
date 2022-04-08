import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import theme from "../../theme";

const StyledDot = styled(motion.span)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${theme.palette.secondary.main};
  border-radius: 50%;
`;

const Dot = ({ delay }) => {
  //Loading animation
  const dotVariants = {
    initial: { y: "0%" },
    animate: { y: "100%" },
  };
  return (
    <StyledDot
      variants={dotVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.3,
        repeat: Infinity,
        ease: "easeIn",
        delay: delay ? delay : 0,
      }}
    />
  );
};
export default Dot;
