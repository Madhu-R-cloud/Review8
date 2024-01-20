import React, { useState } from 'react';

interface ParentProps {
  parentReceivedData: (data: string) => void;
}

function ParentComponent({ parentReceivedData }: ParentProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputValue = () => {
    parentReceivedData(inputValue);
    setInputValue('');
  };

  return (
    <>
      <h1>Parent Component</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={handleInputValue}>
        Submit
      </button>
    </>
  );
}

export default ParentComponent;
