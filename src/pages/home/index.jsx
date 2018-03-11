import React from 'react';
import axios from 'axios';
import bg from 'src/assets/images/bg.jpg';

console.log(bg);

class World extends React.Component
{
  constructor(prop)
  {
    super(prop);
    this.state = {
      data: {},
    };
  }

  getContent()
  {
    const keys = Object.keys(this.state.data);

    return keys.map(key => <p key={key}>{key}: {this.state.data[key]}</p>);
  }

  handleClick()
  {
    axios.get('/key').then(({ data }) =>
    {
      this.setState({ data });
    });
  }

  handleClick2()
  {
    axios.get('/home/index').then(({ data }) =>
    {
      this.setState({ data });
    });
  }

  render()
  {
    return (
      <div>
        <button onClick={() => { this.handleClick(); }}>
          Click me
        </button>
        <button onClick={() => { this.handleClick2(); }}>
          Click me
        </button>

        <div>{this.getContent()}</div>
      </div>
    );
  }
}

export default World;
