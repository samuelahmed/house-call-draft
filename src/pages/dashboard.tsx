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
      <div className="flex flex-row">
        <div className="basis-1/4">
          <SideNav />
        </div>
        <div className="basis-1/2">
          <JobList />
          <div className="flex items-center justify-center text-center">
            <Pagination
              currentPage={1}
              layout="pagination"
              onPageChange={onPageChange}
              showIcons={true}
              totalPages={1000}
              previousLabel="Go back"
              nextLabel="Go forward"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
