import Link from "next/link";
import React from "react";

const Gang = () => {
  return (
    <div>
      <h1>Take me to the users</h1>
      <Link href="/dashboard/users">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Take me to the users
        </button>
      </Link>
    </div>
  );
};

export default Gang;
