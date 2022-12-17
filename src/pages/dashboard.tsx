import { type NextPage } from "next";
import Header from "../components/header";
import { Sidebar }  from 'flowbite-react'
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";
import { HiChartPie, HiViewBoards, HiInbox, HiUser } from "react-icons/hi";


const Patients: NextPage = () => {

  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const { data: sessionData } = useSession();
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <>
    < Header />



    <div className="w-fit">
  <Sidebar aria-label="Default sidebar example">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="#"
          icon={HiChartPie}
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiViewBoards}
          label="Pro"
          labelColor="alternative"
        >
          Kanban
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiInbox}
          label="3"
        >
          Inbox
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiUser}
        >
          Users
        </Sidebar.Item>
        {/* <Sidebar.Item
          href="#"
          icon={HiShoppingBag}
        >
          Products
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiArrowSmRight}
        >
          Sign In
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiTable}
        >
          Sign Up
        </Sidebar.Item> */}
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>




    {/* TEPORARY CLOSE THE SERVER CONNENTIONS */}
    {/* <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <p className="text-2xl text-white">
        Patients Dashboard
      </p>
      <p className="text-2xl text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <p className="text-2xl text-white">
        {hello.data ? hello.data.meow : "Loading tRPC query..."}
      </p>
      <p className="text-2xl text-white">
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <p className="text-2xl text-white">
        {hello.data ? hello.data.date?.toLocaleDateString(undefined)  : "Loading tRPC query..."}
      </p>
    </div> */}
    </>
  );
};

export default Patients;
