import { Button } from "flowbite-react";


const AccountInformation = () => {

  return (
    <>
<section className="text-gray-600 body-font lg:w-2/3 w-full overflow-hidden">
  <div className="container px-5 mx-auto">
    <div className="lg:w-full mx-auto flex flex-wrap">
      <div className="lg:w-full w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">First Name</span>
          <span className="ml-auto text-gray-900">Suzan</span>  
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Last Name</span>
          <span className="ml-auto text-gray-900">Millers</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Age</span>
          <span className="ml-auto text-gray-900">64</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Sex</span>
          <span className="ml-auto text-gray-900">Female</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Account Type</span>
          <span className="ml-auto text-gray-900">Patient</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Email</span>
          <span className="ml-auto text-gray-900">suzanlikescats@gmail.com</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Phone</span>
          <span className="ml-auto text-gray-900">1-408-320-3820</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">City</span>
          <span className="ml-auto text-gray-900">San Jose</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Zip Code</span>
          <span className="ml-auto text-gray-900">95129</span>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="flex flex-col items-center pt-4">


            <Button  color="gray" >
        Edit Account
      </Button>
</div>
 
    </>
  );
};

export default AccountInformation;
