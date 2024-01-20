import React, { useState } from 'react';

interface ChildProps {
  childReceivedData: (data: string) => void;
}

function ChildComponent({ childReceivedData }: ChildProps) {
  const [inputChildValue, setInputValue] = useState<string>('');

  const handleInputValue = () => {
    childReceivedData(inputChildValue);
    setInputValue('');
  };

  return (
    <>
    <div>
      <h1>Child Component</h1>
      <input
        type="text"
        value={inputChildValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={handleInputValue}>
        Submit
      </button>
    </div>
    </>
  );
}

export default ChildComponent;

