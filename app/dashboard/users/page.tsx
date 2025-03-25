import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Here are the users</p>
      <ul className="space-y-6 m-6">
        <li>
          <Link
            href="/dashboard/users/1"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            user 1
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/users/2"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            user 2
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/users/3"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            user 3
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/users/4"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            user 4
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
