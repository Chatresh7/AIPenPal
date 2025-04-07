import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div>
      {/* Tabs */}
      <div>
        <button onClick={() => setActiveTab('Tab1')}>
          Tab 1
        </button>
        <button onClick={() => setActiveTab('Tab2')}>
          Tab 2
        </button>
        <button onClick={() => setActiveTab('Tab3')}>
          Tab 3
        </button>
      </div>

      {/* Content for tabs*/}
      <div>
        {activeTab === 'Tab1' && <p>This is content for Tab 1</p>}
        {activeTab === 'Tab2' && <p>This is content for Tab 2</p>}
        {activeTab === 'Tab3' && <p>This is content for Tab 3</p>}
      </div>
    </div>
  );
};

export default TabComponent;
