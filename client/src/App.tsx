import React from 'react';
import TestComp from './Components/TestComp';

type MyProps = {};
type MyState = { counter: number };
class App extends React.Component<MyProps, MyState > {
  constructor() {
    super({});
    this.state = {
      counter: 0,
    };
  };

  incrementer = () => {
    const { counter } = this.state;
    const newNumber = counter + 1;
    this.setState({
      counter: newNumber
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <div onClick={this.incrementer}>App goes here</div>
        <TestComp number={counter} />
      </>
    );
  }
}

export default App;
