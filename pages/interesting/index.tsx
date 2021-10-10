import InterestingListItem from "../../components/InterestingListItem";
import data from "../../static/interesting";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: grid;
  height:100vh;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${({items})=>items}, 1fr);
`;

function interesting({ data }) {
  return (
    <WrapperDiv items={data.length}>
      {data.map(({ title, slug }, idx) => {
        return (
          <InterestingListItem size={data.length} slug={slug} key={idx} title={title} idx={idx} />
        );
      })}
    </WrapperDiv>
  );
}

export async function getStaticProps() {
  return {
    props: { data },
  };
}

export default interesting;
