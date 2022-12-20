import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import CaregiverDashboard from "../components/caregiverDashboard";

const Dashboard: NextPage = () => {
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
          <CaregiverDashboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
