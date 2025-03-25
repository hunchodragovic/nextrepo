import React from "react";
import Link from "next/link";

interface IdProps {
  params: {
    id: string;
  };
}

const Id: React.FC<IdProps> = ({ params: { id } }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
        <img
          src={`https://i.pravatar.cc/150?u=${id}`}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">User {id}</h2>
        <p className="text-gray-600">User {id}</p>
        <Link href={`/dashboard/4/profile`}>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Id;
