import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../styles/mediaQueries";

const WrapperContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  padding: 2rem;
  max-width: 120rem;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(to top, var(--background), var(--color-white));
  border: 1px solid var(--color-dark-grey);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
    background-image: linear-gradient(
      40% 0%,
      75% 84%,
      var(--background) 0%,
      var(--color-dark-grey) 60%,
      red 100%
    );
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--background) #f5f5f5;

  /* Small screens */
  @media (max-width: ${breakpoints.sm}) {
    max-width: 90%;
    left: 0.5rem;
    bottom: 0.5rem;
    padding: 1rem;
  }
`;

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

export default Wrapper;