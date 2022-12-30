import React from 'react';

const TestComp = ({ number } : {number:number}) => {
  return (
    <div>
      Your Number is
      {' '}
      {number}
    </div>
  );
};

export default TestComp;
