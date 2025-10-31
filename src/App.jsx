import Result from "./components/Result";

function App() {
  // const getData = (e) => {
  //   e.preventDefault();

  //   console.log(data);
  //   console.log(loading);
  //   console.log(error);
  // };

  return (
    <>
      {/* Buttons */}
      <div className="flex gap-8 mt-8 mb-8 ml-4">
        <h1>Mini CRUD App</h1>

        <div className="border-2 ">
          <form className="form-control w-50 max-w-xs p-4 ">
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

            <button className="btn bg-yellow-200 text-black mt-7">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Result />
    </>
  );
}

export default App;
