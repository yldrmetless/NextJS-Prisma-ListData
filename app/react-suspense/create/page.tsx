"use client";

import { saveEmployee } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";

const page = () => {
  const [state, formAction] = useFormState(saveEmployee, null);
  return (
    <div className="max-w-full w-full flex justify-center items-center flex-col mt-5 px-36">
      <h1 className="text-2xl text-center mb-2">Add New Employee</h1>
      <div className="max-w-md w-full">
        <form className="max-w-full w-full flex flex-col items-center justify-center" action={formAction}>
          <div className="mb-5 w-full">
            <label
              htmlFor="name" 
              className="block text-sm font-medium text-gray-200"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-bordered primary w-full"
            />
            <div className="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
          </div>
          <div className="mb-5 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered primary w-full"
            />
            <div className="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
            </div>
          </div>
          <div className="mb-5 w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-200"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="input input-bordered primary w-full"
            />
            <div className="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
          </div>
          <button className="btn btn-primary w-full">Save</button>
        </form>
      </div>
    </div>
  );
};

export default page;
