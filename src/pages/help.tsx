import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/layout";
import HelpDashboard from "../components/helpPage/helpDashboard";

const Help: NextPage = () => {
  return (
    <>
      <Head>
        <title>Help</title>
      </Head>
      <Layout />
      <div className="px-4 md:px-72">
        <div className="justify-items-center md:grid">
          <div className="pb-6 text-2xl">Help</div>
          < HelpDashboard />
        </div>
      </div>
    </>
  );
};

export default Help;
