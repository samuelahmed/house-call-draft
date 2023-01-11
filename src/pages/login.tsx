import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getServerAuthSession } from "@/server/common/get-server-auth-session";
import LoginForm from "../components/form/LoginForm";
import AuthLayout from "../components/layout/AuthLayout";

const Login: NextPage = () => {
  return (
    <>
      <Head>
      <title>Create T3 App</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
    <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Login;