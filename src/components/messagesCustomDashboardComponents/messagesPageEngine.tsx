import Image from "next/image";
import MessageDashboardConnectionCard from "./messageDashboardConnectionCard";
import { useState } from "react";

const MessagesPageEngine = () => {
  const [openChat, setOpenChat] = useState(1);

  return (
    <>
      <div className="w-11/12 grid-rows-1 rounded bg-gray-100 dark:bg-gray-900">
        <div className="grid w-full grid-cols-3 gap-0 rounded">
          <div className="rounded">
            <div className="flex  h-24 w-full flex-wrap items-center justify-around rounded bg-gray-100 dark:bg-gray-900 md:h-16 lg:h-16">
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

            <div className="flex min-h-screen w-full justify-center rounded bg-gray-100 dark:bg-gray-900">
              <div className="my-4 h-screen w-11/12 overflow-scroll rounded bg-gray-200 dark:bg-slate-900">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenChat(1);
                  }}
                  className="my-2 mx-1 grid h-16 grid-rows-1 content-center overflow-hidden rounded-xl border bg-white px-1 py-1 hover:bg-gray-100 dark:bg-sky-900 md:grid-rows-2 lg:grid-rows-2 "
                >
                  <MessageDashboardConnectionCard />
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenChat(2);
                  }}
                  className="my-2 mx-1 grid h-16 grid-rows-1 content-center overflow-hidden rounded-xl border bg-white px-1 py-1 hover:bg-gray-100 dark:bg-sky-900 md:grid-rows-2 lg:grid-rows-2 "
                >
                  <MessageDashboardConnectionCard />
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenChat(3);
                  }}
                  className="my-2 mx-1 grid h-16 grid-rows-1 content-center overflow-hidden rounded-xl border bg-white px-1 py-1 hover:bg-gray-100 dark:bg-sky-900 md:grid-rows-2 lg:grid-rows-2 "
                >
                  <MessageDashboardConnectionCard />
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenChat(4);
                  }}
                  className="my-2 mx-1 grid h-16 grid-rows-1 content-center overflow-hidden rounded-xl border bg-white px-1 py-1 hover:bg-gray-100 dark:bg-sky-900 md:grid-rows-2 lg:grid-rows-2 "
                >
                  <MessageDashboardConnectionCard />
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenChat(5);
                  }}
                  className="my-2 mx-1 grid h-16 grid-rows-1 content-center overflow-hidden rounded-xl border bg-white px-1 py-1 hover:bg-gray-100 dark:bg-sky-900 md:grid-rows-2 lg:grid-rows-2 "
                >
                  <MessageDashboardConnectionCard />
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              openChat === 1
                ? "col-span-2 bg-gray-100 dark:bg-gray-800"
                : "hidden"
            }
          >
            <div className="flex h-16 w-full items-center justify-around  ">
              <div className="text-center text-xl font-semibold">
                Samuel Duval
              </div>
            </div>
          </div>

          <div className={openChat === 2 ? "" : "hidden"}>
            <div className="col-span-2 rounded">
              <div className="flex h-16 w-full items-center justify-around bg-white dark:bg-gray-800 ">
                <div className="text-xl  font-semibold">Contact #2</div>
              </div>

              <div className="block min-h-screen w-full rounded">top right</div>

              <div className="bg-red-500">bottom Right</div>
            </div>
          </div>

          <div className={openChat === 3 ? "" : "hidden"}>
            <div className="col-span-2 rounded">
              <div className="flex h-16 w-full items-center justify-around bg-white dark:bg-gray-800 ">
                <div className="text-xl  font-semibold">Contact #3</div>
              </div>

              <div className="block min-h-screen w-full rounded">top right</div>

              <div className="bg-red-500">bottom Right</div>
            </div>
          </div>

          <div className={openChat === 4 ? "" : "hidden"}>
            <div className="col-span-2 rounded">
              <div className="flex h-16 w-full items-center justify-around bg-white dark:bg-gray-800 ">
                <div className="text-xl  font-semibold">Contact #4</div>
              </div>

              <div className="block min-h-screen w-full rounded">top right</div>

              <div className="bg-red-500">bottom Right</div>
            </div>
          </div>

          <div className={openChat === 5 ? "" : "hidden"}>
            <div className="col-span-2 rounded">
              <div className="flex h-16 w-full items-center justify-around bg-white dark:bg-gray-800 ">
                <div className="text-xl  font-semibold">Contact #5</div>
              </div>

              <div className="block min-h-screen w-full rounded">top right</div>

              <div className="bg-red-500">bottom Right</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPageEngine;
