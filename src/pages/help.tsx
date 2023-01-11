import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/navLayout";
import { useState } from "react";
import ContactUs from "../components/helpPage/contactUs";
import SupportDocumentation from "../components/helpPage/supportDocumentation";

const Help: NextPage = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <Head>
        <title>Help</title>
      </Head>
      <Layout />
      <div className="grid min-h-screen justify-items-center dark:bg-gray-800">
        <div className="w-11/12 grid-rows-1 rounded bg-gray-100 dark:bg-gray-900">
          <div className="items grid w-full grid-cols-2 justify-items-start gap-0 text-center">
            <a
              className={
                "h-16 w-full " +
                (openTab === 1
                  ? "bg- text-white" + "-600"
                  : "text-" + "" + "-600 bg-white dark:bg-gray-800")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              <div className="text-md pb-4 pt-4 md:text-xl">
                <h1>Documentation</h1>
              </div>
            </a>
            <a
              className={
                "h-16 w-full " +
                (openTab === 2
                  ? "bg- text-white" + "-600"
                  : "text-" + "-600 bg-white dark:bg-gray-800")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              <div className="text-md pb-4 pt-4 md:text-xl">
                <h1>Contact Support</h1>
              </div>
            </a>
          </div>
          <div
            className={
              openTab === 1
                ? "block min-h-screen w-11/12 rounded  bg-gray-100  dark:bg-gray-900"
                : "hidden"
            }
            id="link1"
          >
            <SupportDocumentation />
          </div>
          <div
            className={
              openTab === 2
                ? "block min-h-full w-11/12 rounded bg-gray-100  dark:bg-gray-900"
                : "hidden"
            }
            id="link2"
          >
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
