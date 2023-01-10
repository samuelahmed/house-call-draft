import ScheduledSessionOverviewOne from "./demoComponents/scheduledSessionOverviewOne";
import ScheduledSessionModal from "./scheduledSessionModal";

const ScheduledSessionTab = () => {
  return (
    <>
      {/* MAIN SECTION */}
      <div className="grid grid-rows-1  rounded-b  bg-gray-100  px-4 dark:bg-gray-900">
        <div className="grid grid-cols-1 pt-2 pb-2 md:grid-cols-1">
          {/* Job Session Cards */}
          <div className="h-full overflow-scroll pr-2 md:max-h-screen lg:max-h-screen ">
            <div className="grid justify-items-center gap-4 rounded bg-gray-200 pt-6 pb-6 dark:bg-slate-900">
              <div className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800">
                <ScheduledSessionOverviewOne />
                <div className="flex justify-center">
                  <ScheduledSessionModal />
                </div>
              </div>
              <div className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800">
                <ScheduledSessionOverviewOne />
                <div className="flex justify-center">
                  <ScheduledSessionModal />
                </div>
              </div>
              <div className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800">
                <ScheduledSessionOverviewOne />
                <div className="flex justify-center">
                  <ScheduledSessionModal />
                </div>
              </div>
              <div className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800">
                <ScheduledSessionOverviewOne />
                <div className="flex justify-center">
                  <ScheduledSessionModal />
                </div>
              </div>
              <div className="flex w-11/12 cursor-pointer flex-col  justify-between  rounded-xl border border-gray-400 bg-white p-2 leading-normal hover:bg-gray-100 dark:bg-sky-900 dark:hover:bg-sky-800">
                <ScheduledSessionOverviewOne />
                <div className="flex justify-center">
                  <ScheduledSessionModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledSessionTab;
