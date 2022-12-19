import { type NextPage } from "next";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";

const Help: NextPage = () => {
  return (
    <>
      <Header />
      <SideNav />
      <Head>
        <title>Help</title>
      </Head>
      <div>Help Information and tools here</div>
    </>
  );
};

export default Help;
