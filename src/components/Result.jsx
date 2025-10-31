import useFetch from "../hooks/useFetch";

const Result = () => {
  const api = "http://localhost:7000/api";

  const { data, loading, error } = useFetch(api);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Query Results</h1>

      <div>
        {data?.map(({ Name, Age, Employed }, index) => (
          <ul key={index}>
            <li>{Name}</li>
            <li>{Age}</li>
            <li>{Employed}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Result;
