import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/layout";
import MessagesPageEngine from "../components/messagesPage/messagesPageEngine";

const Messages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>
      <Layout />
      <div className="grid min-h-screen justify-items-center dark:bg-gray-800">
        <MessagesPageEngine />
      </div>
    </>
  );
};

export default Messages;
