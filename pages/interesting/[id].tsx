import { useRouter } from "next/router";
import styled from "styled-components";
import data from "../../static/interesting";

const PageWrapper = styled.div`
  background: ${({ theme, idx }) => theme.pallete[idx]};
  height:100vh;
  width:100vw;
  overflow:hidden;
  padding: 1.2rem;
`;

function interesting() {
  let {
    query: { id },
  } = useRouter();
  if (typeof id !== "string") return false;
  id = id.split("-")[1];
  const {title} = data[id]; 
  
  return <PageWrapper idx={id}>{title}</PageWrapper>;
}

export default interesting;
