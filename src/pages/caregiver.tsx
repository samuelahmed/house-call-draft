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
      <div className="grid justify-items-center">
        <CaregiverDashboardCustom />
      </div>
    </>
  );
};

export default Caregiver;
