/* eslint-disable react/require-default-props */
import React from 'react';
import { TabHeadingWrapper, TabHeading } from './styles';

export default ({
  currentTabIndex,
  data,
  onTabClick,
  className = '',
}: {
  currentTabIndex: string;
  data: string[];
  onTabClick: any;
  className?: string;
}) => (
  <TabHeadingWrapper className={className}>
    {data.map((heading, index) => (
      <TabHeading
        currentTabIndex={currentTabIndex}
        key={heading}
        id={index.toString()}
        onClick={(e: any) => onTabClick(e.target.id)}
      >
        {heading}
      </TabHeading>
    ))}
  </TabHeadingWrapper>
);
