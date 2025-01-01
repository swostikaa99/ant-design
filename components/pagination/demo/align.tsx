import React, { useState } from 'react';
import { Pagination, Select } from 'antd';

const { Option } = Select;

const App: React.FC = () => {
  const [alignment, setAlignment] = useState<'start' | 'center' | 'end'>('start');

  const handleAlignmentChange = (value: 'start' | 'center' | 'end') => {
    setAlignment(value);
  };

  return (
    <div style={{ padding: 20 }}>
      <Select
        value={alignment}
        onChange={handleAlignmentChange}
        style={{ width: 120, marginBottom: 20 }}
      >
        <Option value="start">Start</Option>
        <Option value="center">Center</Option>
        <Option value="end">End</Option>
      </Select>
      <br />
      <Pagination align={alignment} defaultCurrent={1} total={50} />
    </div>
  );
};

export default App;
