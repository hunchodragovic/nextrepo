import React from "react";

interface IdProps {
  params: {
    id: string;
  };
}

const Id: React.FC<IdProps> = ({ params: { id } }) => {
  return <div>Id: {id}</div>;
};

export default Id;
