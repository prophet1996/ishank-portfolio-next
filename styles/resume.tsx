import styled from "styled-components";
import { Theme } from "../types";
export const ResumeWrapper = styled.div`
  display: flex;
  margin: 1.5em;
  align-items: start;
  flex-direction: column;
  margin-top: 20%;
  @media ${(props) => props.theme.device.tablet} {
    margin: 10% 15%;
  }
  @media ${(props) => props.theme.deviceMax.mobileM} {
    padding-top: 5%;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4px;
  & > span {
    margin: auto 0;
  }

  & > span,
  & > a {
    cursor: pointer;
    display: flex;
    color: ${(props) => props.theme.body};
    align-items: center;
  }
  @media ${(props) => props.theme.deviceMax.tablet} {
    font-size: small;
    margin: 1em 0;
    grid-gap: 10px;
    & > a {
      margin: 0;
    }
  }
  @media ${(props) => props.theme.deviceMax.mobileS} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    font-size: x-small;
    & > a {
      margin: 0;
    }
  }
`;

export const SummaryText: any = styled.p`
  font-size: 1.3em;
  @media ${(props) => props.theme.deviceMax.tablet} {
    font-size: 1.1em;
  }
  ${(props: any) => {
    switch (props.size?.toLowerCase()) {
      case "s":
        return "font-size:1em;";
      default: {
        return "";
      }
    }
  }}
`;

export const SkillWrapper: any = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ cols = 2 }: any) => cols}, 1fr);
  grid-template-rows: repeat(${({ rows = 2 }: any) => rows}, 1fr);
  grid-gap: 10px;
  margin-top: 2em;
  @media ${(props) => props.theme.deviceMax.tablet} {
    margin-top: 0;
  }
`;

export const SkillBox: any = styled.div`
  @media ${(props) => props.theme.deviceMax.mobileM} {
    padding-top: 1em;
  }
`;

export const ProfilePicture = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 10px solid ${(props: { theme: Theme }) => props.theme.highLight};
`;

export const ResumeHeadingSectionWrapper = styled.div`
  display: flex;
  @media ${(props) => props.theme.deviceMax.tablet} {
    flex-direction: column-reverse;
  }
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const ResumeTextWrapper = styled.div`
  flex-basis: 45%;
  white-space: nowrap;
  margin-right: 1em;
  @media ${(props) => props.theme.deviceMax.tablet} {
    margin-right: 0;
  }
`;
