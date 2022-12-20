import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import CaregiverDashboard from "../components/caregiverDashboard";

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

 < CaregiverDashboard />
    </>
  );
};

export default Dashboard;
