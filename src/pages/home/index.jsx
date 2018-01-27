import React from 'react';
import bg from 'src/assets/images/bg.jpg';

console.log(bg);

class World extends React.Component
{
  render()
  {
    return (
      <div>
        <h2>ABC</h2>
        <img src={bg} alt="" />
      </div>
    );
  }
}

export default World;
