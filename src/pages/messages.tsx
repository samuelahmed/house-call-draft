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
      <div className="px-4 md:px-72">
        <div className="justify-items-center md:grid">
          <div className="pb-6 text-2xl">Messages</div>
          <MessagesDashboard />
        </div>
      </div>
    </>
  );
};

export default Messages;
