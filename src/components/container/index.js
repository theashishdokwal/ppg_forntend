import React, { useState, useEffect } from "react";

// Core components
import Footer from "../Footer";
import Header from "../Header";

const WrapContainer = ({ children }) => {
  const [userdata, setuserData] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("Authtoken");
    const data = token;
    if (token) {
      setuserData(JSON.parse(data));
    }
    return;
  }, []);
  const user = userdata && userdata.data;
  return (
    <main>
      <Header userdata={user} />
      {children}
      <Footer />
    </main>
  );
};
export default WrapContainer;
