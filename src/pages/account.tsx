import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import { trpc } from "../utils/trpc";
import { Avatar } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

const Account: NextPage = () => {
  const dbTest = trpc.example.getOne.useQuery();
  const [inputs, setInputs] = useState({
    role: "",
    // text: "",
    name: "",
  });

  //How do have multiple mutations activate at the same time?
  const { mutate } = trpc.example.updateName.useMutation({});
  // const { mutate } = trpc.example.dbWrite.useMutation({});

  const publish = () => mutate(inputs);

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Layout />

      <div className="grid min-h-screen justify-items-center dark:bg-gray-800">
        <div className="w-11/12 grid-rows-1 rounded bg-gray-100 dark:bg-gray-900">
          <img
            className="ml-20 mt-20 rounded"
            src={(dbTest.data && dbTest.data.image) || ""}
            alt="meow"
            width={200}
            height={200}
          />
          <div className="grid grid-cols-6 gap-6 py-10">
            <div className="... col-span-4 col-start-2">
              {/* NOTE: NAME CHANGE WILL OVERWRITE THE INPUT FROM GOOGLE AUTH AND WILL REMAIN OVERWRITTEN EVEN AFTER LOGOUT / LOGIN */}
              Name: {dbTest.data ? dbTest.data.name : "error"}
              <input
                value={inputs.name}
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                type="text"
                name="text"
                className="ml-6 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-black"
                placeholder=""
              />
              <button onClick={publish} className="ml-6 rounded border-2 ">
                Update Name in Database
              </button>
            </div>
            <div className="... col-span-4 col-start-2">
              Email: {dbTest.data ? dbTest.data.email : "error"}{" "}
            </div>

            <div className="... col-span-4 col-start-2">
              Role: {dbTest.data ? dbTest.data.role : "error"}
              <input
                value={inputs.role}
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    role: e.target.value,
                  }))
                }
                type="text"
                name="text"
                className="ml-6 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder=""
              />
              <button onClick={publish} className="ml-6 rounded border-2 ">
                Update Role in Database
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
