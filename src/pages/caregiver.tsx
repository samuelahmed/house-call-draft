import { type NextPage } from "next";
import Layout from "../components/layout";
import Head from "next/head";
import CaregiverDashboardCustom from "../components/caregiverDashboardCustom";
import TabsRender from "../components/dashboardBuildingBlocks/tabs";

const Caregiver: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Layout />
      <div className="dark:bg-gray-800 grid justify-items-center min-h-screen">
        <CaregiverDashboardCustom color={undefined} />
      </div>
    </>
  );
};

export default Caregiver;
