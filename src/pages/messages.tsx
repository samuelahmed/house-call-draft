import { type NextPage } from "next";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import { useState } from "react";

const Messages: NextPage = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <SideNav />
      <div>Messages here</div>
    </>
  );
};

export default Messages;
