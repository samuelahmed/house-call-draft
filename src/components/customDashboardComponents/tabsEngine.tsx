import { useState } from "react";
import SearchEngine from "./searchEngine";
import FindPatientTab from "./findPatientTab";

const TabsEngine = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="grid w-11/12 grid-rows-1 items-stretch justify-items-center rounded bg-gray-100 dark:bg-gray-900">
        <div className="items grid w-full grid-cols-3 justify-items-start gap-0 text-center">
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
              <h1>Find Patient</h1>
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
              <h1>Scheduled Sessions</h1>
            </div>
          </a>
          <a
            className={
              "h-16 w-full " +
              (openTab === 3
                ? "bg- text-white" + "-600"
                : "text-" + "-600 bg-white dark:bg-gray-800")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >
            <div className="text-md pb-4 pt-4 md:text-xl">
              <h1>History</h1>
            </div>
          </a>
        </div>
      </div>

      {/* NOTE: SHOULD STRUCTURE BE REBUILT SO SEARCH ENGINE IS NOT EMBEDDED HERE?  */}
      <SearchEngine />

      <div
        className={openTab === 1 ? "block h-128 w-11/12 rounded" : "hidden"}
        id="link1"
      >
        <FindPatientTab />
      </div>

      <div
        className={
          openTab === 2
            ? "block h-128 w-11/12 rounded bg-gray-100  dark:bg-gray-900"
            : "hidden"
        }
        id="link2"
      ></div>

      <div
        className={
          openTab === 3
            ? "block h-128 w-11/12 rounded bg-gray-100  dark:bg-gray-900"
            : "hidden"
        }
        id="link3"
      ></div>
    </>
  );
};

export default TabsEngine;
