import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ParentComponent from './components/ParentComponent';
import DisplayComponent from './components/DisplayComponent';
import ChildComponent from './components/ChildComponent';
import { log } from 'console';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const App = () => {
  const [parentCompData, setParentData] = useState<string>('');
  const [childCompData, setChildData] = useState<string>('');

  const handleParentData = (data: string) => {
    console.log(data);
    
    setParentData(data);
  };

  const handleChildData = (data: string) => {
    setChildData(data);
  };

  return (
    <>
      <ParentComponent parentReceivedData={handleParentData} />
      <DisplayComponent data={childCompData} />
      <ChildComponent childReceivedData={handleChildData} />
      <DisplayComponent data={parentCompData} />
    </>
  );
};

root.render(
 <>
 <App/>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
