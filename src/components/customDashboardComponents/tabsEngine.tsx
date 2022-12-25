import { useState } from "react";
import MobileFindSessionModal from "./mobileFindSessionModal";
import SearchEngine from "./searchEngine";

const TabsEngine = () => {
  const [openTab, setOpenTab] = useState(1);
  const [rightCard, setRightCard] = useState(1);

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

      <SearchEngine />

      <div
        className={openTab === 1 ? "block h-128 w-11/12 rounded" : "hidden"}
        id="link1"
      >
        {/* MAIN SECTION */}
        <div className=" grid w-full grid-rows-1 items-stretch rounded-b  bg-gray-100  px-4 dark:bg-gray-900">
          <div className="grid grid-cols-1 pt-2 pb-2 md:grid-cols-2">
            {/* Job Session Card */}

            {/* NOTE: CREATE CARD ENGINE  */}
            <div className="h-128 overflow-scroll pr-2 md:h-128 lg:h-128">
              <div className="grid justify-items-center gap-4 rounded bg-gray-200 pt-6 pb-6 dark:bg-slate-900">
                <div
                  className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800"
                  onClick={(e) => {
                    e.preventDefault();
                    setRightCard(1);
                  }}
                >
                  <div className="flex items-center justify-around text-sm">
                    <p className=" text-gray-900 dark:text-white">San Jose</p>
                    <p className="text-gray-900 dark:text-white">
                      Saturday January 7, 2023
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      11:00am - 5:00pm
                    </p>
                    <p className="text-gray-900 dark:text-white">$25 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl text-gray-800 dark:text-white">
                      Companion Care
                    </div>
                    <p className="text-base text-gray-700 dark:text-white">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                    </p>
                  </div>
                </div>
                <div className="justify-top flex md:hidden lg:hidden">
                  {/* NEED TO FIX MODAL GOING TOO LOW */}
                  <MobileFindSessionModal />
                </div>

                <div
                  className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800"
                  onClick={(e) => {
                    e.preventDefault();
                    setRightCard(2);
                  }}
                >
                  <div className="flex items-center justify-around text-sm">
                    <p className=" text-gray-900 dark:text-white">Milpitas</p>
                    <p className="text-gray-900 dark:text-white">
                      Saturday January 3, 2023
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      6:00am - 11:00am
                    </p>
                    <p className="text-gray-900 dark:text-white">$35 / hour </p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl text-gray-800 dark:text-white">
                      Mobility Support
                    </div>
                    <p className="text-base text-gray-700 dark:text-white">
                      Overview: I need help walking around and taking walks to
                      the park to stay active
                    </p>
                  </div>
                  <div className="mb-4 mt-4 flex justify-around  md:hidden lg:hidden">
                    <button
                      className="h-10 w-1/2 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:text-white"
                      //   onClick={() => setShowModal(true)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div
                  className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800"
                  onClick={(e) => {
                    e.preventDefault();
                    setRightCard(3);
                  }}
                >
                  <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900  dark:text-white">
                      Mountain View
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      Saturday January 4, 2023
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      9:00am - 5:00pm
                    </p>
                    <p className="text-gray-900 dark:text-white">$20 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl  text-gray-800 dark:text-white">
                      Personal Care
                    </div>
                    <p className="text-base text-gray-700 dark:text-white">
                      Overview: Need support throughout the day with general
                      activities
                    </p>
                  </div>
                  <div className="mb-4 mt-4 flex justify-around  md:hidden lg:hidden">
                    <button
                      className="h-10 w-1/2 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:text-white"
                      //   onClick={() => setShowModal(true)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setRightCard(4);
                  }}
                  className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800"
                >
                  <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900 dark:text-white">
                      San Jose
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      Saturday January 7, 2023
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      11:00am - 5:00pm
                    </p>
                    <p className="text-gray-900 dark:text-white">$25 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl  text-gray-800 dark:text-white">
                      Companion Care
                    </div>
                    <p className="text-base text-gray-700 dark:text-white">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                    </p>
                  </div>
                  <div className="mb-4 mt-4 flex justify-around  md:hidden lg:hidden">
                    <button
                      className="h-10 w-1/2 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:text-white"
                      //   onClick={() => setShowModal(true)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setRightCard(5);
                  }}
                  className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800"
                >
                  <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900 dark:text-white">
                      San Jose
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      Saturday January 7, 2023
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      11:00am - 5:00pm
                    </p>
                    <p className="text-gray-900 dark:text-white">$25 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl  text-gray-800 dark:text-white">
                      Nutrition Assistance
                    </div>
                    <p className="text-base text-gray-700 dark:text-white">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                    </p>
                  </div>
                  <div className="mb-4 mt-4 flex justify-around  md:hidden lg:hidden">
                    <button
                      className="h-10 w-1/2 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:text-white"
                      //   onClick={() => setShowModal(true)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Session Details Card */}

            <div className="hidden h-80 overflow-scroll pr-2 md:block md:h-128 lg:block">
              <div className="grid h-128 justify-items-center   gap-4 rounded bg-gray-200 pt-6 pb-6 dark:bg-slate-900">
                <div className="h-11/12 flex w-11/12  flex-col  justify-between rounded-xl border border-gray-400 bg-white p-2 leading-normal dark:bg-sky-900">
                  <div className={rightCard === 1 ? "" : "hidden"}>
                    <div className="mt-4 flex items-center justify-around text-sm">
                      <p className="text-gray-900 dark:text-white">San Jose</p>
                      <p className="text-gray-900 dark:text-white">
                        Saturday January 7, 2023
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        11:00am - 5:00pm
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        $25 / hour
                      </p>
                    </div>
                    <div className="mb-4 mr-4 ml-4">
                      <div className="mb-2 p-4 text-center text-xl  text-gray-800 dark:text-white">
                        Companion Care
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Pay per Hour:&nbsp;
                          </span>
                          $25
                        </p>
                        <p className="text-gray-900  dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Compensation:&nbsp;
                          </span>
                          $150
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900  dark:text-white">
                            Date:&nbsp;
                          </span>
                          Saturday January 7, 2023
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Time:&nbsp;
                          </span>
                          11:00am - 5:00pm
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Hours:&nbsp;
                          </span>
                          6
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Address:&nbsp;
                          </span>
                          2830 West Field Drive, San Jose
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Age:&nbsp;
                          </span>
                          76
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Medical Notes:&nbsp;
                          </span>
                          None
                        </p>
                      </div>
                      <p className="pt-4 text-base text-gray-800 dark:text-white">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Overview:&nbsp;
                        </span>
                        Hi, I am stephanie, it would help a lot to have someone
                        visit and talk a few times a week. My grandchildren
                        moved away and I spend a lot of time alone now.
                      </p>
                    </div>
                    <div className="mb-4 mt-4 flex justify-around">
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:text-white">
                        Schedule Session
                      </button>
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-red-200 hover:text-black dark:text-white">
                        Report Post
                      </button>
                    </div>
                  </div>

                  <div className={rightCard === 2 ? "" : "hidden"}>
                    <div className="mt-4 flex items-center justify-around text-sm">
                      <p className="text-gray-900 dark:text-white">Milpitas</p>
                      <p className="text-gray-900 dark:text-white">
                        Saturday January 3, 2023
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        6:00am - 11:00am
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        $35 / hour
                      </p>
                    </div>
                    <div className="mb-4 mr-4 ml-4">
                      <div className="mb-2 p-4 text-center text-xl  text-gray-800 dark:text-white">
                        Mobility Support
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Pay per Hour:&nbsp;
                          </span>
                          $35
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Compensation:&nbsp;
                          </span>
                          $175
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Date:&nbsp;
                          </span>
                          Friday January 3, 2023
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Time:&nbsp;
                          </span>
                          6:00am - 11:00am
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Hours:&nbsp;
                          </span>
                          5
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Address:&nbsp;
                          </span>
                          343 Bay Drive, Milpitas
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Age:&nbsp;
                          </span>
                          66
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Medical Notes:&nbsp;
                          </span>
                          Broke Wrist earlier this year
                        </p>
                      </div>
                      <p className="pt-4 text-base text-gray-800 dark:text-white">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Overview:&nbsp;
                        </span>
                        I need help walking around and taking walks to the park
                        to stay active
                      </p>
                    </div>
                    <div className="mb-4 mt-4 flex justify-around">
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:text-white">
                        Schedule Session
                      </button>
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-red-200 hover:text-black dark:text-white">
                        Report Post
                      </button>
                    </div>
                  </div>

                  <div className={rightCard === 3 ? "" : "hidden"}>
                    <div className="mt-4 flex items-center justify-around text-sm">
                      <p className="text-gray-900 dark:text-white">
                        Mountain View
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        Saturday January 4, 2023
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        9:00am - 5:00pm
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        $20 / hour
                      </p>
                    </div>
                    <div className="mb-4 mr-4 ml-4">
                      <div className="mb-2 p-4 text-center text-xl  text-gray-800 dark:text-white">
                        Personal Care
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Pay per Hour:&nbsp;
                          </span>
                          $20
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Compensation:&nbsp;
                          </span>
                          $160
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Date:&nbsp;
                          </span>
                          Friday January 4, 2023
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Time:&nbsp;
                          </span>
                          9:00am - 5:00pm
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Hours:&nbsp;
                          </span>
                          8
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Address:&nbsp;
                          </span>
                          113 Bloom Street, Mountain View
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Age:&nbsp;
                          </span>
                          72
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Medical Notes:&nbsp;
                          </span>
                          Diabetic
                        </p>
                      </div>
                      <p className="pt-4 text-base text-gray-800 dark:text-white">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Overview:&nbsp;
                        </span>
                        Need support throughout the day with general activities
                      </p>
                    </div>
                    <div className="mb-4 mt-4 flex justify-around">
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:border-white dark:text-white">
                        Schedule Session
                      </button>
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-red-200 hover:text-black dark:border-white dark:text-white">
                        Report Post
                      </button>
                    </div>
                  </div>

                  <div className={rightCard === 4 ? "" : "hidden"}>
                    <div className="mt-4 flex items-center justify-around text-sm">
                      <p className="text-gray-900 dark:text-white">
                        Mountain View
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        Saturday January 4, 2023
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        9:00am - 5:00pm
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        $20 / hour
                      </p>
                    </div>
                    <div className="mb-4 mr-4 ml-4">
                      <div className="mb-2 p-4 text-center text-xl  text-gray-800 dark:text-white">
                        Unique Need
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Pay per Hour:&nbsp;
                          </span>
                          $20
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Compensation:&nbsp;
                          </span>
                          $160
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Date:&nbsp;
                          </span>
                          Friday January 4, 2023
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Time:&nbsp;
                          </span>
                          9:00am - 5:00pm
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Hours:&nbsp;
                          </span>
                          8
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Address:&nbsp;
                          </span>
                          113 Bloom Street, Mountain View
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Age:&nbsp;
                          </span>
                          72
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Medical Notes:&nbsp;
                          </span>
                          Diabetic
                        </p>
                      </div>
                      <p className="pt-4 text-base text-gray-800 dark:text-white">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Overview:&nbsp;
                        </span>
                        Need support throughout the day with general activities
                      </p>
                    </div>
                    <div className="mb-4 mt-4 flex justify-around">
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:border-white dark:text-white">
                        Schedule Session
                      </button>
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-red-200 hover:text-black dark:border-white dark:text-white">
                        Report Post
                      </button>
                    </div>
                  </div>

                  <div className={rightCard === 5 ? "" : "hidden"}>
                    <div className="mt-4 flex items-center justify-around text-sm">
                      <p className="text-gray-900 dark:text-white">
                        Mountain View
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        Saturday January 4, 2023
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        9:00am - 5:00pm
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        $20 / hour
                      </p>
                    </div>
                    <div className="mb-4 mr-4 ml-4">
                      <div className="mb-2 p-4 text-center text-xl  text-gray-800 dark:text-white">
                        Specific Task
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Pay per Hour:&nbsp;
                          </span>
                          $20
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Compensation:&nbsp;
                          </span>
                          $160
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Date:&nbsp;
                          </span>
                          Friday January 4, 2023
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Time:&nbsp;
                          </span>
                          9:00am - 5:00pm
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Total Hours:&nbsp;
                          </span>
                          8
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Address:&nbsp;
                          </span>
                          113 Bloom Street, Mountain View
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Age:&nbsp;
                          </span>
                          72
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Medical Notes:&nbsp;
                          </span>
                          Diabetic
                        </p>
                      </div>
                      <p className="pt-4 text-base text-gray-800 dark:text-white">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Overview:&nbsp;
                        </span>
                        Need support throughout the day with general activities
                      </p>
                    </div>
                    <div className="mb-4 mt-4 flex justify-around">
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:border-white dark:text-white">
                        Schedule Session
                      </button>
                      <button className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-red-200 hover:text-black dark:border-white dark:text-white">
                        Report Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAB CONTAINERS - CONTAINER 2 */}
      <div
        className={
          openTab === 2
            ? "block h-128 w-11/12 rounded bg-gray-100  dark:bg-gray-900"
            : "hidden"
        }
        id="link2"
      ></div>

      {/* TAB CONTAINERS - CONTAINER 3 */}
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
