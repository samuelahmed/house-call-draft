import { useState, useEffect } from "react";
import Header from "./layoutComponents/header";
import SideNav from "./layoutComponents/sideNav";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setIsMobile(true);
      // setShowNav(false);
    } else {
      setIsMobile(false);
      // setShowNav(true);
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
      </div>
    </>
  );
};

export default Layout;
