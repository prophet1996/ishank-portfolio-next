import React from 'react';
import styled from 'styled-components';

const StyledDiv: any = styled.div`
  height: ${(props: SvgPropType) => props.height};
  width: ${(props: SvgPropType) => props.width};
  background: ${(props: any) => props.theme.highLight};
`;

export default ({ name, height, width }: SvgPropType) => {
  switch (name) {
  case 'github':
    return (
      <StyledDiv height={height} width={width}>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 32">
          <path
            d="M21.945 3.118l-1.493-1.493H1.625v27.257h8.43l1.493 1.493h18.827V3.118h-8.43zm-3.296 15.864c.336.291.596 1.317.596 1.789v4.174H14.478s.007-1.415 0-2.385c-3.264.702-4.174-1.789-4.174-1.789-.596-1.193-1.193-1.789-1.193-1.789-1.193-.708 0-.596 0-.596 1.193 0 1.789 1.193 1.789 1.193 1.047 1.777 2.909 1.491 3.578 1.193 0-.596.261-1.498.596-1.789-2.605-.293-4.773-1.789-4.773-4.771s.599-3.578 1.195-4.174c-.12-.294-.62-1.381.018-2.982 0 0 1.172 0 2.365 1.789.591-.591 2.385-.596 2.982-.596.595 0 2.39.005 2.981.596 1.193-1.789 2.368-1.789 2.368-1.789.638 1.601.139 2.688.018 2.982.596.596 1.193 1.193 1.193 4.174-.001 2.981-2.167 4.476-4.772 4.77z"
            id="Glyph"
          />
        </svg>
      </StyledDiv>
    );
  case 'linkedIn':
    return (
      <StyledDiv height={height} width={width}>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 32">
          <path
            d="M21.945 3.118l-1.493-1.493H1.625v27.257h8.43l1.493 1.493h18.827V3.118h-8.43zM11.702 22.524H8.327V12.37h3.375v10.154zm-1.687-11.54h-.022c-1.133 0-1.866-.78-1.866-1.755 0-.996.755-1.754 1.909-1.754s1.866.758 1.887 1.754c.001.975-.732 1.755-1.908 1.755zm13.857 11.54h-3.375v-5.433c0-1.365-.488-2.296-1.71-2.296-.932 0-1.487.628-1.731 1.234-.089.217-.111.52-.111.823v5.671H13.57s.045-9.201 0-10.154h3.375v1.439c.447-.691 1.25-1.677 3.042-1.677 2.22 0 3.885 1.451 3.885 4.571v5.822z"
            id="Glyph"
          />
        </svg>
      </StyledDiv>
    );
  default:
    return <div>Wrong name given</div>;
  }
};

type SvgPropType = { name: string; height: string; width: string };
