import React from 'react';

interface DisplayProps {
  data: string;
}

const DisplayComponent= ({ data }:DisplayProps) => (
  <div className='flex items center bg-[green]'>
    <p>Received data: {data}</p>
  </div>
);

export default DisplayComponent;

