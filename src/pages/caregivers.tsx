import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { router } from "../server/trpc/trpc";
import { trpc } from "../utils/trpc";
import Header from "./components/header"

//if not a member -> this links to a information / register page / login page
//if member but wrong type (patient on caregiver page) -> this page will offer login as patient or redirect to caregiver
//if member (cookie of acc logged in) -> this page is a dashboard

const Caregivers: NextPage = () => {

    //START OF SET ROLE MUTATION
    // const { mutateAsync: setRoleAsCaregiver } = trpc.useMutation(
    //     'auth.setRoleAsCaregiver'
    // )

    // const setCaregiverRole = async () => {
    //     await setRoleAsCaregiver();
    // }
    //END OF SET ROLE MUTATION

    return (
        <>
        < Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <button
                // onClick={setCaregiverRole}
            >
                caregiver
            </button>
    </main>
    </>

    )
};

export default Caregivers;


  