import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  display: flex;
  margin: 1.2em;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  & > span {
    margin: auto 0;
  }
  & > a {
    margin: auto;
  }
  & > span,
  & > a {
    cursor: pointer;
    display: flex;
    color: ${(props) => props.theme.body};
    align-items: center;
  }
  @media ${(props) => props.theme.deviceMax.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
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
    case 's':
      return 'font-size:1em;';
    default: {
      return '';
    }
    }
  }}
`;

export const SkillWrapper: any = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
