import { useState } from "react";

const CaregiverDashboardCustom = ({ color }: { color: any }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="pb-4 pt-4 text-3xl">
        <h1>Caregiver Dashboard</h1>
      </div>

      {/* TABS */}
      <div className="grid w-11/12 grid-rows-1 items-stretch justify-items-center rounded bg-gray-100">
        <div className="items grid w-full grid-cols-3 justify-items-start gap-0 text-center">
          <a
            className={
              "h-16 w-full " +
              (openTab === 1
                ? "bg- text-white" + color + "-600"
                : "text-" + color + "-600 bg-white")
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
                ? "bg- text-white" + color + "-600"
                : "text-" + color + "-600 bg-white")
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
                ? "bg- text-white" + color + "-600"
                : "text-" + color + "-600 bg-white")
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

      {/* SEARCH */}
      <div className="rounded flex w-11/12 justify-center  bg-gray-100 pt-2 pr-2 pl-1">
        {/* <div className="h-14 text-center">Search</div> */}

        <div className="hidden md:block lg:block mb-6 w-full px-3 md:mb-0 md:w-1/3">
          <div className="relative">
            <select
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-state"
            >
              <option>All Care Types</option>
              <option>Companion Care</option>
              <option>Mobility Support</option>
              <option>Personal Care</option>
              <option>Nutrition Assistance</option>
              <option>Conversation</option>
              <option>Personal Care Services</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block lg:block  mb-6 justify-items-center px-3 md:mb-0 md:w-1/3">
          {/* <label className="block text-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                      City
                    </label> */}
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-city"
            type="text"
            placeholder="City"
          />
        </div>

        <div className=" mb-6 justify-items-center px-3 md:mb-0 md:w-1/3">
          {/* <label className="block text-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                      City
                    </label> */}
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-city"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="shrink pr-4 ">
          {/* <label className="block text-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                              Confirm Search
                            </label>                   */}

          <button className="hover:bg-grey-200 h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-blue-700 hover:text-blue-700">
            Search
          </button>
        </div>
      </div>

      {/* TAB CONTAINERS - CONTAINER 1 */}
      <div
        className={openTab === 1 ? "block h-128 w-11/12 rounded" : "hidden"}
        id="link1"
      >


        {/* MAIN SECTION */}
        <div className=" grid w-full grid-rows-1 items-stretch rounded-b  bg-gray-100 px-4">
          <div className="grid grid-cols-1 pt-2 pb-2 md:grid-cols-2">


            {/* Job Session Card */}
            <div className="h-80 md:h-128 overflow-scroll pr-2">
              <div className="grid justify-items-center gap-4 rounded bg-gray-200 pt-6 pb-6">


                <div className="cursor-pointer hover:bg-gray-100 flex w-11/12  flex-col  justify-between rounded-xl border border-gray-400 bg-white p-2 leading-normal">
                  <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900">San Jose</p>
                    <p className="text-gray-900">Saturday January 7, 2023</p>
                    <p className="text-gray-900">11:00am - 5:00pm</p>
                    <p className="text-gray-900">$25 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl text-gray-800">
                      Companion Care
                    </div>
                    <p className="text-base text-gray-700">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                    </p>
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-gray-100 flex w-11/12  flex-col  justify-between rounded-xl border border-gray-400 bg-white p-2 leading-normal">
                  <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900">Milpitas</p>
                    <p className="text-gray-900">Saturday January 7, 2023</p>
                    <p className="text-gray-900">11:00am - 5:00pm</p>
                    <p className="text-gray-900">$35 / hour </p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl text-gray-800">
                      Mobility Support
                    </div>
                    <p className="text-base text-gray-700">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                    </p>
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-gray-100 flex w-11/12  flex-col  justify-between rounded-xl border border-gray-400 bg-white p-2 leading-normal">
                  <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900">Mountain View</p>
                    <p className="text-gray-900">Saturday January 7, 2023</p>
                    <p className="text-gray-900">11:00am - 5:00pm</p>
                    <p className="text-gray-900">$20 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl  text-gray-800">
                      Personal Care
                    </div>
                    <p className="text-base text-gray-700">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                    </p>
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-gray-100 flex w-11/12  flex-col  justify-between rounded-xl border border-gray-400 bg-white p-2 leading-normal">
                  <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900">San Jose</p>
                    <p className="text-gray-900">Saturday January 7, 2023</p>
                    <p className="text-gray-900">11:00am - 5:00pm</p>
                    <p className="text-gray-900">$25 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl  text-gray-800">
                      Companion Care
                    </div>
                    <p className="text-base text-gray-700">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                    </p>
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-gray-100 flex w-11/12  flex-col  justify-between rounded-xl border border-gray-400 bg-white p-2 leading-normal">
                  <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900">San Jose</p>
                    <p className="text-gray-900">Saturday January 7, 2023</p>
                    <p className="text-gray-900">11:00am - 5:00pm</p>
                    <p className="text-gray-900">$25 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl  text-gray-800">
                      Nutrition Assistance
                    </div>
                    <p className="text-base text-gray-700">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Session Details Card */}



            <div className="h-80 md:h-128 overflow-scroll pr-2">
              <div className="grid justify-items-center h-128   gap-4 rounded bg-gray-200 pt-6 pb-6">

                
              <div className="flex w-11/12 h-11/12  flex-col  justify-between rounded border border-gray-400 bg-white p-2 leading-normal">
                  {/* <div className="flex items-center justify-around text-sm">
                    <p className="leading-none text-gray-900">San Jose</p>
                    <p className="text-gray-900">Saturday January 7, 2023</p>
                    <p className="text-gray-900">11:00am - 5:00pm</p>
                    <p className="text-gray-900">$25 / hour</p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 p-4 text-center text-xl font-bold text-gray-800">
                      Companion Care
                    </div>
                    <p className="text-base text-gray-700">
                      Overview: Hi, I am stephanie, it would help a lot to have
                      someone visit and talk a few times a week. My
                      grandchildren moved away and I spend a lot of time alone
                      now.
                
                    </p>
                  </div> */}
                </div>
              </div>
            </div>























          </div>
        </div>
      </div>

      {/* TAB CONTAINERS - CONTAINER 2 */}
      <div
        className={
          openTab === 2 ? "block h-128 w-11/12 rounded bg-gray-100" : "hidden"
        }
        id="link2"
      ></div>

      {/* TAB CONTAINERS - CONTAINER 3 */}
      <div
        className={
          openTab === 3 ? "block h-128 w-11/12 rounded bg-gray-100 " : "hidden"
        }
        id="link3"
      ></div>
    </>
  );
};

export default CaregiverDashboardCustom;
