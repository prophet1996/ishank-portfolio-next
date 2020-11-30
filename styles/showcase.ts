import styled from 'styled-components';

const ShowcaseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > iframe {
    @media ${(props) => props.theme.device.tablet} {
      margin: 15% 0;
    }
    width: 100%;
    margin: 25%;
    height: 50vh;
  }
`;

export default {
  ShowcaseWrapper,
};
