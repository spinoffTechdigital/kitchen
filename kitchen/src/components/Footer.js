import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>

    {`Copyright © Finike House ${year}`}
    </footer>;
};



export default Footer;

