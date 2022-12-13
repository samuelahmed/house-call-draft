import { type NextPage } from "next";



//if not a member -> this links to a information / register page / login page
//if member but wrong type (patient on caregiver page) -> this page will offer login as patient or redirect to caregiver
//if member (cookie of acc logged in) -> this page is a dashboard


const Caregivers: NextPage = () => {
    return (
        <div>
            <p>
                Caregiver Dashboard
            </p>
        </div>
    )
};
  
export default Caregivers;

  