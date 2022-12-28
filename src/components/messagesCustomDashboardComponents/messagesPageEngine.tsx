import Image from "next/image";

const MessagesPageEngine = () => {
  return (
    <>
      <div className="w-11/12 grid-rows-1 rounded bg-gray-100 dark:bg-gray-900">
        <div className="grid  w-full grid-cols-3 gap-0 rounded">
          <div className="rounded bg-yellow-50">
            <div className="flex  h-24 w-full flex-wrap items-center justify-around bg-blue-100 md:h-16 lg:h-16">
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

            <div className="flex min-h-screen w-full justify-center bg-pink-300">
              <div className="my-4 h-screen w-11/12 bg-red-100">
                <div className="my-1 mx-1 grid h-16 grid-rows-1 content-center rounded-xl border bg-white px-1 py-1 hover:bg-gray-100 md:grid-rows-2 lg:grid-rows-2">
                  <div className="flex h-16 w-full items-center justify-around md:h-16 lg:h-16">
                    <div className="flex justify-start">
                      <img
                        className="hidden rounded md:inline lg:inline"
                        alt=""
                        width={50}
                        height={50}
                        src={
                          "https://lh3.googleusercontent.com/a/AEdFTp6NaZTShvMSBO0d5G5dr63_Mi7uQ37nSrxP4Bca=s96-c"
                        }
                      />
                    </div>

                    <div className="flex justify-end ">
                      <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-2 ">
                        <div>Samuel Duval</div>
                        <div className="hidden text-sm text-gray-500 md:inline lg:inline">
                          preview of last message sent in conver...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 rounded bg-red-200">
            <div className="flex h-16 w-full items-center justify-around  bg-blue-100">
              <div className="text-xl  font-semibold"> Contact Name</div>
            </div>

            <div className="block min-h-screen w-full bg-orange-300">
              <div className="flex h-24 w-full flex-wrap items-center justify-around bg-pink-100 md:h-16 lg:h-16">
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
                    Request <span className="hidden md:inline lg:inline">Session</span>
                  </button>
                  <button className="h-10  rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-red-200 hover:text-black dark:text-white">
                    Remove <span className="hidden md:inline lg:inline">Contact</span>
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
