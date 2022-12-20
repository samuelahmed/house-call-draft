import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import JobList from "../components/dashboardComponents/joblist";
import SearchBar from "../components/dashboardComponents/searchBar";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Pagination, Tabs } from "flowbite-react";

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

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <div className={`${showNav && !isMobile ? "" : "hidden"}`}>
        <SideNav />
      </div>
      <div className="px-4 md:px-72">
        <div className="justify-items-center md:grid">
          <div className="pb-6 text-2xl">Caretaker Dashboard</div>

          <Tabs.Group
            className="justify-center"
            aria-label="Tabs with icons"
            style="underline"
          >
            <Tabs.Item active={true} title="Find Patient" icon={HiUserCircle}>
              <div className="justify-items-center md:grid">
                <SearchBar />
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
              </div>
            </Tabs.Item>
            <Tabs.Item title="Scheduled Sessions" icon={MdDashboard}>
              List of scheduled sessions here
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
