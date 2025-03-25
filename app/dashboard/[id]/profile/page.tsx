import React from "react";

interface ProfileProps {
  params: {
    id: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ params: { id } }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center">
        <img
          src={`https://i.pravatar.cc/150?u=${id}`}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
        />
        <h1 className="mt-4 text-2xl font-bold text-gray-800">User {id}</h1>
        <p className="text-gray-600">This is the profile page of user {id}.</p>
        <p className="text-gray-500 mt-2">
          More details about the user can go here.
        </p>
      </div>
    </div>
  );
};

export default Profile;
