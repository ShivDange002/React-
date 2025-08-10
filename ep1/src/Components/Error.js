import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">🚨 OOPS!!!</h1>
      <h2 className="text-xl text-gray-700 mb-2">Something went wrong</h2>

      {err?.status && (
        <p className="text-gray-500">
          Error {err.status}: {err.statusText || "Unknown Error"}
        </p>
      )}

      <a
        href="/"
        className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-200"
      >
        Go Home
      </a>
    </div>
  );
};

export default Error;
