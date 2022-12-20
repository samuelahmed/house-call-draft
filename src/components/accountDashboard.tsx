const AccountDashboard = () => {

    //TEMPORARY ACCOUNT PAGE - UPDATE STYLING 
    
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="no-wrap md:-mx-2 md:flex ">
        <div className="w-full md:mx-2 md:w-3/12">
          <div className="my-4"></div>
        </div>
        <div className="mx-2 h-64 w-full md:w-9/12">
          <div className="rounded-sm bg-white p-3 shadow-sm">
            <div className="text-gray-700">
              <div className="grid text-sm md:grid-cols-2">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First Name</div>
                  <div className="px-4 py-2">Jane</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last Name</div>
                  <div className="px-4 py-2">Doe</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  <div className="px-4 py-2">Female</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Current Address</div>
                  <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email.</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">
                      jane@example.com
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">Feb 06, 1998</div>
                </div>
              </div>
            </div>
            <button className="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
              edit account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
