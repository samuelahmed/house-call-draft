import { type NextPage } from "next";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Head from "next/head";
import { useState, useEffect } from "react";

const Account: NextPage = () => {
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
      <Header showNav={showNav} setShowNav={setShowNav} />
      <div className={`${showNav && !isMobile ? "" : "hidden"}`}>
        <SideNav />
      </div>{" "}
      <Head>
        <title>Account</title>
      </Head>
      <div className="px-4 md:px-72">
        <div className="justify-items-center md:grid">
          <div className="pb-6 text-2xl">My Account</div>
          Account Managent here
        </div>
      </div>{" "}
    </>
  );
};

export default Account;
