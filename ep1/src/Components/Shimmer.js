const Shimmer = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 animate-pulse rounded-lg h-48"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
