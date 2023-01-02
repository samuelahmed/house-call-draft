import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Account: NextPage = () => {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Layout />

      <div className="grid min-h-screen justify-items-center dark:bg-gray-800">
        <div className="w-11/12 grid-rows-1 rounded bg-gray-100 dark:bg-gray-900">

          <div className="grid grid-cols-6 gap-6 py-10">
            <div className="... col-span-4 col-start-2">Name:  </div>
            <div className="... col-span-4 col-start-2">Email: </div>
            <div className="... col-span-4 col-start-2">Role: </div>
            <div className="... col-span-4 col-start-2">Image: </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Account;
