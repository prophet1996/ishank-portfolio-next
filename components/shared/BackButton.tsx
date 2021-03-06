import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledSpan = styled.div`
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.background};
  font-weight: bold;
  cursor: pointer;
  padding: 0.7rem 1rem;
  position: absolute;
  margin: 1.2rem;
  top: 0px;
  left: 0px;
  border-radius: 2px;
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.highLight};
  z-index: 99999;
  border-radius: 4px;
`;
const BackButton = ({ prevLink }: { prevLink?: string }) => {
  const router = useRouter();
  if (typeof prevLink === "string") {
    return (
      <Link href={`/${prevLink}`}>
        <StyledSpan>{"<"}</StyledSpan>
      </Link>
    );
  } else {
    return <StyledSpan onClick={() => router.back()}>{"<"}</StyledSpan>;
  }
};

export default BackButton;
