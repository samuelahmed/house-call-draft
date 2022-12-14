import { type NextPage } from "next";
import React from "react";
import { Label, TextInput, Button, Checkbox } from "flowbite-react";





const Caregivers: NextPage = () => {

  return (
    <div className='w-3/12	'>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>

        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
};

export default Caregivers;


  






//NOTES:
// import { trpc } from "../utils/trpc";
//if not a member -> this links to a information / register page / login page
//if member but wrong type (patient on caregiver page) -> this page will offer login as patient or redirect to caregiver
//if member (cookie of acc logged in) -> this page is a dashboard