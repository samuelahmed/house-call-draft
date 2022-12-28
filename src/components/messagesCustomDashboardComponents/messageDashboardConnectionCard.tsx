const MessageDashboardConnectionCard = () => {
  return (
    <>
      <div className="my-2 mx-1 grid h-16 grid-rows-1 content-center overflow-hidden rounded-xl border bg-white dark:bg-sky-900 px-1 py-1 hover:bg-gray-100 md:grid-rows-2 lg:grid-rows-2 ">
        <div className="flex h-16 w-full items-center justify-around md:h-16 lg:h-16 ">
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
              <div className="text-gray-900 dark:text-white">Samuel Duval</div>
              <div className="hidden text-sm text-gray-500 dark:text-gray-300 md:inline lg:inline">
                preview of last message sent in conver...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageDashboardConnectionCard;
