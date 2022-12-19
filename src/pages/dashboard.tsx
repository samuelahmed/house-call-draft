import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import JobList from "../components/dashboardComponents/joblist";
import SearchBar from "../components/dashboardComponents/searchBar";

import { Pagination } from "flowbite-react";

const Dashboard: NextPage = () => {
  //empty function for pagination
  const onPageChange = () => ({});

  //mobile screen size management
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(true);

  function handleResize() {
    if (innerWidth <= 640) {
      setIsMobile(true);
      setShowNav(false);
    } else {
      setIsMobile(false);
      setShowNav(true);
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      addEventListener("resize", handleResize);
    }
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  // if (isMobile === true) {
  //   console.log('meow')
  // }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header showNav={showNav} setShowNav={setShowNav} />

      <div className={`${showNav && !isMobile ? "" : "hidden"}`}>
        <SideNav showNav={showNav} />
      </div>
      <div className="px-4 md:px-72">
        <div className="justify-items-center md:grid">
          < SearchBar />
          < JobList />
          < Pagination
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
    </>
  );
};

export default Dashboard;
