import styled from "styled-components";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";

const AnimatedListItemWrapper = styled(motion.div)`
  position: relative;
  padding: 1.2rem;
  z-index: 100;
  background: ${({ theme, idx }) => theme.pallete[idx]};
  grid-row: ${({ idx }) => {
    return idx + 1 + "/" + (idx + 2);
  }};
  grid-column: 1/2;
`;

const ReadMoreLink = styled(motion.button)`
  position: absolute;
  bottom: 10px;
  right: 0px;
  margin-right: 1.2rem;
  cursor: pointer;
  background: ${(props) => props.theme.highLight};
  color: ${(props) => props.theme.body};
  outline: none;
  border-radius: 4px;
  padding: 0.3rem 0.4rem;
  border: 2px solid ${(props) => props.theme.background};
  text-decoration: none;
`;

function InterestingListItem({ title, idx, slug, size }) {
  const router = useRouter();
  const controls = useAnimation();
  const readMoreRef = useRef<any>();
  const handleReadMore = async () => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    readMoreRef.current.style.display = "none";
    await controls.start({
      height: "200vh",
      width: "100vw",
      transition: {
        duration: 1,
      },
      position: "absolute",
      zIndex: 400,
      left: 0,
      borderBottomLeftRadius: "100%",
      borderBottomRightRadius: "100%",
    });
    router.push(slug);
  };

  return (
    <AnimatedListItemWrapper size={size} animate={controls} idx={idx}>
      {title}
      <ReadMoreLink
        ref={readMoreRef}
        whileTap={{ scale: 0.8 }}
        onTap={handleReadMore}
      >
        ...read more [+]
      </ReadMoreLink>
    </AnimatedListItemWrapper>
  );
}

export default InterestingListItem;
