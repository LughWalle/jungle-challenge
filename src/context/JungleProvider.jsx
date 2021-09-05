import React, { useState } from "react";
import PropTypes from "prop-types";
import JungleContext from "./JungleContext";

function Provider({ children }) {
  const [ABTest, setABTest] = useState('');

  const data = {
    ABTest,
    setABTest,
  };

  return (
    <JungleContext.Provider value={data}>
      {children}
    </JungleContext.Provider>
  );
}

Provider.prototype = {
  children: PropTypes.node.isRequired,
};

export default Provider;
