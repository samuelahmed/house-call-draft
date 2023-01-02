import { useState } from "react";
import Header from "./layoutComponents/header";
import SideNav from "./layoutComponents/sideNav";

const Layout = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <div className={`${showNav ? "" : "hidden"}`}>
        <SideNav />
      </div>
    </>
  );
};

export default Layout;
