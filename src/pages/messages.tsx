import { type NextPage } from "next";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import { useState } from "react";

const Messages: NextPage = () => {

  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>
      <Header />
      <SideNav />
      <div>Messages here</div>
    </>
  );
};

export default Messages;
