import { useState } from "react";

const CaregiverDashboardCustom = ({ color }: { color: any }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="pb-4 pt-4 text-3xl">
        <h1>Caregiver Dashboard</h1>
      </div>

      {/* TABS */}
      <div className="grid w-11/12 grid-rows-1 items-stretch justify-items-center bg-gray-300">
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
            <div className="pb-4 pt-4 text-md md:text-xl">
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
            <div className="pb-4 pt-4 text-md md:text-xl">
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
            <div className="pb-4 pt-4 text-md md:text-xl">
              <h1>History</h1>
            </div>
          </a>


        </div>
      </div>

      <div
        className={
          openTab === 1 ? "block grid w-full justify-items-center" : "hidden"
        }
        id="link1"
      >
        {/* SEARCH */}
        <div className="grid w-11/12 grid-rows-1 items-stretch justify-items-center bg-gray-300 ">
          <div className="h-14 w-full text-center">Search</div>
        </div>

        {/* MAIN SECTION */}
        <div className="grid w-11/12 grid-rows-1 items-stretch  bg-gray-300 px-4 py-4">
          <div className="grid h-128 grid-cols-1 md:grid-cols-2">
            {/* Job Session Card */}
            <div className="h-128 overflow-scroll pr-2">
              <div className="grid grid-rows-3 justify-items-center gap-6 bg-red-200 pt-4 pb-6">
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>
                <div className="h-44 w-9/12 bg-yellow-200"> card 1</div>

  

              </div>
            </div>

            {/* Job Session Details Card */}
            <div className="h-128 overflow-scroll pl-2">
              <div className="grid h-128 grid-rows-1 justify-items-center gap-6 bg-red-200 pt-4 pb-6 ">
                <div className="w-9/12 bg-yellow-200"> card 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
        <p>
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
          <br />
          <br />
          Dynamically innovate resource-leveling customer service for state of
          the art customer service.
        </p>
      </div>
      <div className={openTab === 3 ? "block" : "hidden"} id="link3">
        <p>
          Efficiently unleash cross-media information without cross-media value.
          Quickly maximize timely deliverables for real-time schemas.
          <br />
          <br /> Dramatically maintain clicks-and-mortar solutions without
          functional solutions.
        </p>
      </div>
    </>
  );
};

export default CaregiverDashboardCustom;
