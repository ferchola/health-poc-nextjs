import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import WelcomeCard from "../components/layout/WelcomeCard";
import Login from "../components/auth/Login";

export const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <Head>
        <title>Mi salud</title>
      </Head>
      <Navbar onLoginClick={() => handleLoginClick()} />
      <WelcomeCard isLoginVisible={showLogin} />
      <Login isLoginVisible={showLogin} />
    </div>
  );
};

export default Home;
