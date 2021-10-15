import React from 'react';
import ColorBox from '../components/ColorBox';
import './Palette.css';

function Palette({ colors }) {
  const colorBoxes = colors.map(({ color, name }) => (
    <ColorBox background={color} key={`Item-${name}`} name={name} />
  ));
  return (
    <div className='Palette'>
      {/* Navbar */}
      <div className='Palette-colors'>{colorBoxes}</div>
      {/* Footer */}
    </div>
  );
}

export default Palette;
