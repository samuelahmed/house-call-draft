import { type NextPage } from "next";
import React from "react";
import { Label, TextInput, Button, Checkbox } from "flowbite-react";
import Header from "./components/header";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  caregiver: boolean;
  patient: boolean;
};

const Caregivers: NextPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <>
      <Header />
      <div className="grid h-screen place-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="First Name" />
            </div>
            <TextInput type="text" sizing="md" {...register("firstName")} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Last Name" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              {...register("lastName")}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              value="Yes"
              {...register("caregiver", { required: false })}
            />
            <Label htmlFor="base" value="Caregiver" />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              value="Yes"
              {...register("patient", { required: false })}
            />
            <Label htmlFor="base" value="Patient" />
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Caregivers;

//NOTES:
// import { trpc } from "../utils/trpc";
//if not a member -> this links to a information / register page / login page
//if member but wrong type (patient on caregiver page) -> this page will offer login as patient or redirect to caregiver
//if member (cookie of acc logged in) -> this page is a dashboard
