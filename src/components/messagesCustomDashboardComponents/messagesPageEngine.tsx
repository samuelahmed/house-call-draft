import Image from "next/image";
import MessageDashboardConnectionCard from "./messageDashboardConnectionCard";

const MessagesPageEngine = () => {
  return (
    <>
      <div className="w-11/12 grid-rows-1 rounded bg-gray-100 dark:bg-gray-900">
        <div className="grid w-full grid-cols-3 gap-0 rounded">
          <div className="rounded">
            <div className="flex  h-24 w-full flex-wrap items-center justify-around bg-gray-100 dark:bg-gray-900 md:h-16 lg:h-16 rounded">
              <div>
                <input
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200  py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none dark:border-white dark:bg-gray-900 dark:text-white"
                  id="grid-city"
                  type="text"
                  placeholder="Search all Conversations"
                />
              </div>
              <div>
                <button className="h-10  rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-green-200 hover:text-black dark:text-white">
                  Search
                </button>
              </div>
            </div>

            <div className="flex min-h-screen w-full justify-center bg-gray-100 dark:bg-gray-900 rounded">
              <div className="my-4 h-screen w-11/12 bg-gray-200 overflow-scroll rounded dark:bg-slate-900">
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
                <MessageDashboardConnectionCard />
              </div>
            </div>
          </div>

          <div className="col-span-2 rounded">
            <div className="flex h-16 w-full items-center justify-around bg-white dark:bg-gray-800 ">
              <div className="text-xl  font-semibold"> Contact Name</div>
            </div>

            <div className="block min-h-screen w-full bg-orange-300 rounded">
              <div className="flex h-24 w-full flex-wrap items-center justify-around bg-gray-100 dark:bg-gray-900 md:h-16 lg:h-16 rounded-r">
                <div className="flex justify-start">
                  <div>
                    <input
                      className="block w-full appearance-none rounded border border-gray-200 bg-gray-200  py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none dark:border-white dark:bg-gray-900 dark:text-white"
                      id="grid-city"
                      type="text"
                      placeholder="Search this Conversation"
                    />
                  </div>
                  <div>
                    <button className="h-10  rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-green-200 hover:text-black dark:text-white">
                      Search
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="h-10  rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-green-200 hover:text-black dark:text-white">
                    Request
                    <span className="hidden md:inline lg:inline">Session</span>
                  </button>
                  <button className="h-10  rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-red-200 hover:text-black dark:text-white">
                    Remove
                    <span className="hidden md:inline lg:inline">Contact</span>
                  </button>
                </div>
              </div>


              bottom Right
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPageEngine;
