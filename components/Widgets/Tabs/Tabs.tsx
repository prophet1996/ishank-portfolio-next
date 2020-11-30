import React, { useState } from 'react';
import TabHeading from './TabHeading';
import TabBody from './TabBody';
import { TabWrapper } from './styles';

const mockTabsHeadingData = ['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4'];

export default () => {
  const [currentTabIndex, setCurrentTabIndex] = useState('0');

  const handleOnTabHeadingClick = (id:string) => {
    setCurrentTabIndex(id);
  };
  return (
    <TabWrapper>
      <TabHeading
        data={mockTabsHeadingData}
        currentTabIndex={currentTabIndex}
        onTabClick={handleOnTabHeadingClick}
      />
      <TabBody>
        <div>BIG FANCY COMPONENT</div>
      </TabBody>
    </TabWrapper>
  );
};
