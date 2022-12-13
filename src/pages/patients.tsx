import { type NextPage } from "next";
import { trpc } from '../utils/trpc';



const Patients: NextPage = () => {
    const mutation = trpc.login.useMutation();
    const handleLogin = async () => {
      const name = 'John Doe';
      mutation.mutate({ name });
    };
    return (
      <div>
        <h1>Login Form</h1>
        <button onClick={handleLogin} disabled={mutation.isLoading}>
          Login
        </button>
        {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
      </div>
    );
  }

  
export default Patients;

  