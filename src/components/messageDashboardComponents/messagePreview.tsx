const MessagePreview = () => {
  return (
    <>
      {/* NOTE: SEND MESSAGE BUTTON DISSPEARS ON MOBILE */}

  
      <div className="p:2 flex h-128 flex-1 flex-col justify-between sm:p-6">
        <div className="flex justify-between border-b-2 border-gray-200 py-3 sm:items-center">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute right-0 bottom-0 text-green-500">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt=""
                  className="h-10 w-10 rounded-full sm:h-16 sm:w-16"
                />
              </picture>
            </div>
            <div className="flex flex-col leading-tight">
              <div className="mt-1 flex items-center text-2xl">
                <span className="mr-3 text-gray-700">Anderson Vanhron</span>
              </div>
              <span className="text-lg text-gray-600">Patient</span>
            </div>
          </div>
        </div>
        <div
          id="messages"
          className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col space-y-4 overflow-y-auto p-3"
        >
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-1 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                    Your error message says permission denied, npm global
                    installs must be given root privileges.
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-1 h-6 w-6 rounded-full"
                />
              </picture>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-2 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    Command was run with root privileges. Im sure about that.
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    Ive update the description so its more obviously now
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    FYI https://askubuntu.com/a/700266/510172
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    Check the line above (it ends with a # so, Im running it as
                    root )<pre># npm install -g @vue/devtools</pre>
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-1 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                    Any updates on this issue? Im getting the same error when
                    trying to install devtools. Thanks
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-2 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    Thanks for your message David. I thought Im alone with this
                    issue. Please, ? the issue to support it :)
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-1 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white ">
                    Are you using sudo?
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                    Run this command sudo chown -R `whoami` /Users//.npm-global/
                    then install the package globally without using sudo
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-2 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    It seems like you are from Mac OS world. There is no /Users/
                    folder on linux ?
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    I have no issue with any other packages installed with root
                    permission globally.
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-1 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                    yes, I have a mac. I never had issues with root permission
                    as well, but this helped me to solve the problem
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-2 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    I get the same error on Arch Linux (also with sudo)
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    I also have this issue, Here is what I was doing until now:
                    #1076
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    even i am facing
                  </span>
                </div>
              </div>
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  className="order-1 h-6 w-6 rounded-full"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="mb-2 border-t-2 border-gray-200 px-4 pt-4 sm:mb-0">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Write your message!"
              className="w-full rounded-md bg-gray-200 py-3 pl-12 text-gray-600 placeholder-gray-600 focus:placeholder-gray-400 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 hidden items-center sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-3 text-white transition duration-500 ease-in-out hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-2 h-6 w-6 rotate-90 transform"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePreview;