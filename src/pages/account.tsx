import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import AccountEditModal from "../components/accountDashboardComponents/accountEditModal";

const Account: NextPage = () => {
  const dbTest = trpc.example.getOne.useQuery();
  const { data: sessionData } = useSession();

  //Any issue with wrapping all return in a big if{}else{}?
  //Note: Putting else if (sessionData) causes error with Account: function.
  if (!sessionData) {
    return (
      <>
        <Head>
          <title>Account</title>
        </Head>
        <Layout />
        <div className="flex h-screen flex-col flex-wrap items-center justify-center">
          <p>Login to see account page</p>
          <button
            className="h-10 rounded border border-gray-500 bg-transparent px-4 pt-2 pb-8 font-semibold text-gray-700 hover:border-gray-700 hover:bg-green-200 hover:text-black dark:text-white"
            onClick={() => signIn()}
          >
            sign in
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Account</title>
        </Head>
        <Layout />
        <div className="grid min-h-screen justify-items-center dark:bg-gray-800">
          <div className="w-11/12 grid-rows-1 rounded bg-gray-100 dark:bg-gray-900">
            <Image
              className="ml-20 mt-20 rounded"
              src={(sessionData.user && sessionData.user?.image) || ""}
              alt="meow"
              width={200}
              height={200}
            />
            {/* NOTE: DO I WANT TO USE SESSIONDATA AND DBTEST OR ONLY ONE OF THEM? */}
            <div className="grid grid-cols-6 gap-6 py-10">
              <div className="col-span-4 col-start-2">
                Name: {(sessionData.user && sessionData.user?.name) || "error"}
              </div>
              <div className="col-span-4 col-start-2">
                Email:{" "}
                {(sessionData.user && sessionData.user?.email) || "error"}
              </div>
              <div className="col-span-4 col-start-2">
                Address: {dbTest.data ? dbTest.data.address : "error"}
              </div>
              <div className="col-span-4 col-start-2">
                Role: {dbTest.data ? dbTest.data.role : "error"}
              </div>
            </div>
            <div className="flex justify-center">
              <AccountEditModal />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Account;
