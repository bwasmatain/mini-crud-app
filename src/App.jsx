import Result from "./components/Result";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

function App() {
  const [emp, setEmp] = useState("");

  const api = "http://localhost:7000/api";
  const { data, loading, error } = useFetch(api);
  const getData = (e) => {
    e.preventDefault();

    console.log("Getting data");

    setEmp(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return { data, loading, error };
  };

  return (
    <>
      {/* Buttons */}
      <div className="flex gap-8 mt-8 mb-8 ml-4">
        <h1>Mini CRUD App</h1>

        <div className="border-2 ">
          <form className="form-control w-auto max-w-xs p-4 ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Age</span>
            </label>

            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
            />

            <div className="flex gap-4 mt-18">
              <button className="btn bg-yellow-200 text-black">Submit</button>

              <button className="btn btn-info" onClick={getData}>
                Get Results
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="ml-40">
        <Result data={emp} />
      </div>
    </>
  );
}

export default App;
