import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { router } from "../server/trpc/trpc";
import { trpc } from "../utils/trpc";
import Header from "./header"



//if not a member -> this links to a information / register page / login page
//if member but wrong type (patient on caregiver page) -> this page will offer login as patient or redirect to caregiver
//if member (cookie of acc logged in) -> this page is a dashboard


const Caregivers: NextPage = () => {


    // const { mutateAsync: setRoleAsCaregiver } = trpc.useMutation(
    //     'auth.setRoleAsCaregiver'
    // )

    // const setCaregiverRole = async () => {
    //     await setRoleAsCaregiver();
    // }


    return (
        <>
        < Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <button
                // onClick={setCaregiverRole}
            >
                caregiver
            </button>
        < AuthShowcase />
    </main>
    </>

    )
};

export default Caregivers;

const AuthShowcase: React.FC = () => {

    const { data: sessionData } = useSession();

    const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
    );

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
                {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
                {secretMessage && <span> - {secretMessage}</span>}
            </p>
            <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={sessionData ? () => signOut() : () => signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};

  