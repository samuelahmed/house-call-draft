import { type NextPage } from "next";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import { useState } from "react";



const Help: NextPage = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav}  />
      <SideNav />
      <Head>
        <title>Help</title>
      </Head>
      <div>Help Information and tools here</div>
    </>
  );
};

export default Help;
