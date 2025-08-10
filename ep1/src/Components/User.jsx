import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Function Based Component
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
        <h1 className="text-lg font-semibold text-gray-700">
          Name: <span className="text-blue-600">{name}</span>
        </h1>
        <h2 className="text-gray-600 mt-2">City: Pune</h2>
        <h3 className="text-gray-600">Country: India</h3>
        <div className="mt-4 space-y-1">
          <h4 className="text-sm text-gray-500">Count: {count}</h4>
          <h4 className="text-sm text-gray-500">Count2: {count2}</h4>
        </div>
      </div>
    </div>
  );
};

export default User;
