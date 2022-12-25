import { useState } from "react";

const MobileFindSessionModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    
    <>
      <button
        className="h-10 w-1/2 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black dark:text-white"
        onClick={() => setShowModal(true)}
      >
        Learn More
      </button>


      {showModal ? (
        <>
          <div className="fixed z-50 grid h-screen place-items-center">
            <div className="w-11/12 justify-items-center rounded border-2 border-gray-300 outline-none focus:outline-none">
              <div className="relative mx-auto ">
                <div className=" relative flex flex-col bg-white  shadow-lg outline-none focus:outline-none">
                  <div className="h-128 rounded-t border-gray-300 ">
                    <div className="mt-4 flex items-center justify-around text-sm">
                      <p className="text-gray-900">Milpitas</p>
                      <p className="text-gray-900">Saturday January 3, 2023</p>
                      <p className="text-gray-900">6:00am - 11:00am</p>
                      <p className="text-gray-900">$35 / hour</p>
                    </div>
                    <div className="mb-4 mr-4 ml-4">
                      <div className="mb-2 p-4 text-center text-xl  text-gray-800">
                        Mobility Support
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-900">
                          <span className="font-semibold text-gray-900">
                            Pay per Hour:&nbsp;
                          </span>
                          $35
                        </p>
                        <p className="text-gray-900">
                          <span className="font-semibold text-gray-900">
                            Total Compensation:&nbsp;
                          </span>
                          $175
                        </p>
                        <p className="text-gray-900">
                          <span className="font-semibold text-gray-900">
                            Date:&nbsp;
                          </span>
                          Friday January 3, 2023
                        </p>
                        <p className="text-gray-900">
                          <span className="font-semibold text-gray-900">
                            Time:&nbsp;
                          </span>
                          6:00am - 11:00am
                        </p>
                        <p className="text-gray-900">
                          <span className="font-semibold text-gray-900">
                            Total Hours:&nbsp;
                          </span>
                          5
                        </p>
                        <p className="text-gray-900">
                          <span className="font-semibold text-gray-900">
                            Address:&nbsp;
                          </span>
                          343 Bay Drive, Milpitas
                        </p>
                        <p className="text-gray-900">
                          <span className="font-semibold text-gray-900">
                            Age:&nbsp;
                          </span>
                          66
                        </p>
                        <p className="text-gray-900">
                          <span className="font-semibold text-gray-900">
                            Medical Notes:&nbsp;
                          </span>
                          Broke Wrist earlier this year
                        </p>
                      </div>
                      <p className="pt-4 text-base text-gray-800">
                        <span className="font-semibold text-gray-900">
                          Overview:&nbsp;
                        </span>
                        I need help walking around and taking walks to the park
                        to stay active
                      </p>
                    </div>
                    <div className="mb-4 mt-4 flex justify-around">
                      <button
                        onClick={() => setShowModal(false)}
                        className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-emerald-200 hover:text-black"
                      >
                        Schedule Session
                      </button>
                      <button
                        onClick={() => setShowModal(false)}
                        className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-red-200 hover:text-black"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MobileFindSessionModal;
