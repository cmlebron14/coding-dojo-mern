import React from 'react';
import Tabs from './Tabs';

const App = () => {

  const tabs = [
    {
      label: `Tab 1`,
      content: `Tab 1 content`
    },
    {
      label: `Tab 2`,
      content: `Tab 2 content`
    },
    {
      label: `Tab 3`,
      content: `Tab 3 content`
    }
  ];

  return (
    <div className="app">
      <Tabs tabs={ tabs } />
    </div>
  );
}

export default App;
