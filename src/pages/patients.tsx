import { type NextPage } from "next";
import Header from "../components/header";
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";

const Patients: NextPage = () => {

  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const { data: sessionData } = useSession();
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <>
    <Header />
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <p className="text-2xl text-white">
        Patients Dashboard
      </p>
      <p className="text-2xl text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <p className="text-2xl text-white">
        {hello.data ? hello.data.greeting : "Loading tRPC query..."}
      </p>
      <p className="text-2xl text-white">
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
    </div>
    </>
  );
};

export default Patients;
