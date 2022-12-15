import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Navbar, Avatar }  from 'flowbite-react'

const Header = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="items-center">
      <Navbar
        fluid={true}
        rounded={true}
      >
        <div className="flex justify-start">
          <Avatar
            img={sessionData && sessionData.user?.image || ''}
            rounded={true}
          />
          <div className="flex items-center text-gray-800 dark:text-white pr-7 ml-11">
            {sessionData && <span>{sessionData.user?.name}</span>}
          </div>
        </div>
        <div className="flex justify-end">
          <Link 
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            href="/account"
          >
            {sessionData && <span>My Account</span>}
          </Link>
          <AuthShowcase />
        </div>
      </Navbar>
    </div>
  );
}
export default Header;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="flex items-center">
      <button
        className=" text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};