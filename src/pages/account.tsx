import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import AccountDashboard from "../components/accountDashboard";

const Account: NextPage = () => {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Layout />
      <div className="px-4 md:px-72">
        <div className="justify-items-center md:grid">
          <div className="pb-6 text-2xl">My Account</div>
            < AccountDashboard />
        </div>
      </div>{" "}
    </>
  );
};

export default Account;
