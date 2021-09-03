import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JungleContext from './JungleContext';

function Provider({ children }) {
  const [test, setTest] = useState(parseInt(Math.floor(Math.random() * 2), 10));
  const data = {
    test,
    setTest,
  };

  return (
    <JungleContext.Provider value={data}>
      {children}
    </JungleContext.Provider>
  );
};

Provider.prototype = {
  children: PropTypes.node.isRequired,
};

export default Provider;
