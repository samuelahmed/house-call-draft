import { type NextPage } from "next";
import Head from "next/head";
import MessagesDashboard from "../components/messagesDashboard";
import Layout from "../components/layout";

const Messages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>
      <Layout />
      <div className="dark:bg-gray-800 grid justify-items-center min-h-screen">
        <MessagesDashboard />
      </div>
    </>
  );
};

export default Messages;
