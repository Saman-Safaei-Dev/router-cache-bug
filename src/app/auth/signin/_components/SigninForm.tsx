"use client";

import { FormEvent } from "react";
import { signin } from "./actions";

interface SigninFormProps {
    redirectPath?: string
}

function SigninForm(props: SigninFormProps) {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    signin(location.origin, props.redirectPath);
  };

  return (
    <form
      noValidate
      className="flex flex-col items-stretch gap-2 max-w-md mx-auto"
      onSubmit={submitHandler}
    >
      <input
        className="py-3 bg-gray-50 px-4 rounded-md"
        placeholder="Username"
        type="text"
        defaultValue="AUsername"
      />
      <input
        className="py-3 bg-gray-50 px-4 rounded-md"
        placeholder="Password"
        type="password"
        defaultValue="APasswordD"
      />

      <button
        className="bg-gray-900 text-gray-100 py-3 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default SigninForm;
