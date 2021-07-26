import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import WelcomeCard from "../components/layout/WelcomeCard";
import Login from "../components/auth/Login";
import Profile from "../components/Profile";

export const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleNavBarLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClick = () => {
    setShowProfile(true);
    setShowLogin(false);
  };

  const handleNavBarMenuClick = () => {
    setShowLogin(false);
    setShowProfile(false);
  };

  return (
    <div>
      <Head>
        <title>Mi salud</title>
      </Head>
      <Navbar onLoginClick={() => handleNavBarLoginClick()} />
      {!showProfile ? <WelcomeCard isLoginVisible={showLogin} /> : ""}
      <Login
        isLoginVisible={showLogin}
        onLoginClick={() => handleLoginClick()}
      />
      <Profile isProfileVisible={showProfile} />
    </div>
  );
};

export default Index;
