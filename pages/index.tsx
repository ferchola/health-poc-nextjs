import React, { useState, useCallback } from "react";
import Navbar from "../components/layout/Navbar";
import "@fontsource/roboto";
import WelcomeCard from "../components/layout/WelcomeCard";
import Login from "../components/auth/Login";

export const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = useCallback(() => {
    setShowLogin(true);
  }, []);

  return (
    <div>
      <Navbar onLoginClick={() => handleLoginClick()} />
      <WelcomeCard isLoginVisible={showLogin} />
      <Login isLoginVisible={showLogin} />
    </div>
  );
};

export default Home;
