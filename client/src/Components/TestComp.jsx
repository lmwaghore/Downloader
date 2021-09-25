import React from 'react';

const TestComp = (props) => {
  const { number } = props;
  return (
    <div>
      this new number is
      {' '}
      {number}
    </div>
  );
};

export default TestComp;
