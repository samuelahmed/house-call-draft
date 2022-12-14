import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    return (
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <AuthShowcase />
      </nav>
    );
  }

export default Header;

const AuthShowcase: React.FC = () => {

  const { data: sessionData } = useSession();

  return (
    <div className="flex items-center justify-end">
      <p className="text-white pr-7">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <button
        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};