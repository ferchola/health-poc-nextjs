import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import WelcomeCard from "../components/layout/WelcomeCard";

export const Index = () => {
  return (
    <div>
      <Head>
        <title>Mi salud</title>
      </Head>
      <Navbar />
      <WelcomeCard />
    </div>
  );
};

export default Index;
