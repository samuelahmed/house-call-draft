import { type NextPage } from "next";
import Layout from "../components/layout";
import Head from "next/head";
import CaregiverDashboard from "../components/caregiverDashboard";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Layout />
      <div className="px-4 md:px-72">
        <div className="justify-items-center md:grid">
          <div className="pb-6 text-2xl">Caretaker Dashboard</div>
          <CaregiverDashboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
