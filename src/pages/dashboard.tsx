import { type NextPage } from "next";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import JobList from "../components/dashboardComponents/joblist";
import { Pagination } from "flowbite-react";

const Dashboard: NextPage = () => {
  const onPageChange = () => ({});

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <SideNav />
      <JobList />
      <Pagination
        currentPage={1}
        layout="pagination"
        onPageChange={onPageChange}
        showIcons={true}
        totalPages={1000}
        previousLabel="Go back"
        nextLabel="Go forward"
      />
    </>
  );
};

export default Dashboard;
