import React, { useState } from "react";
import PropTypes from "prop-types";
import JungleContext from "./JungleContext";
import post from "../service/jungleApi";

function Provider({ children }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [span, setSpan] = useState("");
  const [invalid, setInvalid] = useState(true);
  const [loading, setLoading] = useState(true);

  const errorHandling = (data) => {
    const { name, email } = data;
    if (name && email) {
      if (name[0] !== email[0]) {
        const nameWithoutDot = name[0].replace(".", "");
        setSpan(`${nameWithoutDot} and ${email}`);
      } else {
        setSpan("These field may not be blank");
      }
    } else if (email) {
      setSpan(email);
    } else if (name) {
      setSpan(name);
    }
  };

  const handleSubmit = async (name, email) => {
    const data = { name, email };
    await post(data, errorHandling, setInvalid);
  };

  const data = {
    errorHandling,
    handleSubmit,
    setLoading,
    setEmail,
    setName,
    setSpan,
    invalid,
    loading,
    email,
    name,
    span,
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
