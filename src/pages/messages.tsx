import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { trpc } from "../utils/trpc";
import MessagesPageEngine from "../components/messagesPage/messagesPageEngine";

const Messages: NextPage = () => {
  const dbTest = trpc.updateAccount.getOne.useQuery();

  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>
      <Layout />
      <div className="grid min-h-screen justify-items-center dark:bg-gray-800">

        {/* <p className="text-2xl text-white">
          email: {dbTest.data ? dbTest.data.email : "error"}
        </p>
        <p className="text-2xl text-white">
          id: {dbTest.data ? dbTest.data.id : "error "}
        </p>
        <p className="text-2xl text-white">
          name: {dbTest.data ? dbTest.data.name : "error "}
        </p> */}

        <MessagesPageEngine />
      </div>
    </>
  );
};

export default Messages;
