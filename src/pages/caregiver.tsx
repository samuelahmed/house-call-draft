import { type NextPage } from "next";
import Layout from "../components/layout/layout";
import Head from "next/head";
import CaregiverDashboardCustom from "../components/caregiverDashboardCustom";

const Caregiver: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Layout />
      <div className="dark:bg-gray-800 grid justify-items-center min-h-screen">
        <CaregiverDashboardCustom />
      </div>
    </>
  );
};

export default Caregiver;
