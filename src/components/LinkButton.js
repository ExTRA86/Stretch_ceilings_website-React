import React from 'react';
import { Link } from 'react-scroll';

const LinkButton = ({ children, toName }) => {
  return (
    <Link
      className='navLink'
      to={toName}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
