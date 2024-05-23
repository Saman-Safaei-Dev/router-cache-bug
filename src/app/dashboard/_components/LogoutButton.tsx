"use client";

import { logout } from "../actions";

function LogoutButton() {
  return (
    <button
      onClick={() => logout()}
      className="bg-red-500 text-white flex mx-auto py-3 px-4 rounded-md"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
