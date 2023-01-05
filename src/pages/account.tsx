import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import { trpc } from "../utils/trpc";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Account: NextPage = () => {
  
  const dbTest = trpc.example.getOne.useQuery();
  const { data: sessionData } = useSession();

  const [inputs, setInputs] = useState({
    role: "",
    name: "",
  });

  const { mutate } = trpc.example.updateName.useMutation({
    onSuccess() {
      //Replace with useState to reload only necessary state.
      window.location.reload();
    },
  });

  const publish = () => {
    mutate(inputs);
  };

  if (!sessionData)
    return (
      <>
        <Head>
          <title>Account</title>
        </Head>
        <Layout />
        <div>Login to see account page</div>
      </>
    );

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
            src={(sessionData.user && sessionData.user?.image) || ""}
            alt="meow"
            width={200}
            height={200}
          />
          <div className="grid grid-cols-6 gap-6 py-10">
            <div className="... col-span-4 col-start-2">
              Name: {(sessionData.user && sessionData.user?.name) || "error"}
              <input
                defaultValue={(sessionData.user && sessionData.user?.name) || inputs.name}
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                type="text"
                name="text"
                className="ml-6 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:text-black sm:text-sm"
                placeholder=""
              />
            </div>
            <div className="... col-span-4 col-start-2">
              Email: {(sessionData.user && sessionData.user?.email) || "error"}
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
                className="ml-6 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:text-black sm:text-sm"
                placeholder=""
              />
            </div>
          </div>
          <button onClick={publish} className="ml-6 rounded border-2 ">
            Update Account Information
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
