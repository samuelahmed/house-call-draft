import { type NextPage } from "next";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import { useState } from "react";

const Account: NextPage = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <SideNav />
      <Head>
        <title>Account</title>
      </Head>
      <div>Account management and history here</div>
    </>
  );
};

export default Account;
