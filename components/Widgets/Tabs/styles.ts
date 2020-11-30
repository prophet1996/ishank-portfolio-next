import styled from 'styled-components';

export const TabHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabHeading: any = styled.div`
  border: 2px solid ${(props) => props.theme.highLight};
  padding: ${(props) => props.theme.spacing(2, 5, 3, 5)};
  cursor: pointer;
  border-bottom: ${(props: any) => (props.currentTabIndex === props.id ? 'none' : '')};
`;

export const TabBodyWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.highLight};
  border-top: none;

  padding: ${(props) => props.theme.spacing(2, 1, 3, 4)};


`;
