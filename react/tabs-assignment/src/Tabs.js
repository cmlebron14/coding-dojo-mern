import React, { useState } from 'react';

const Tabs = props => {
  const [ content, setContent ] = useState("");

  const tabList = props.tabs.map((tab, i) =>
    <div 
      className="tab" 
      key={i}
      onClick={() => {
        setContent(tab.content)
      }}>
        {tab.label}</div>
  );

  return (
    <>
      <div className="tab-list">{ tabList }</div>
      <div className="content">{ content }</div>
    </>
  );
}

export default Tabs;