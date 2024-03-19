import React from "react";
import UseApiFetch from "./hooks/useApiFetch";

const DummyData = () => {
  const { data, loading, error } = UseApiFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Interesting Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-gray-600">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.body}</p>
            <div className="mt-2">
              <span className="text-gray-500">User ID: {item.userId}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyData;
