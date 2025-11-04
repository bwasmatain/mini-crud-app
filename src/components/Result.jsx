import { ClockLoader } from "react-spinners";
import { useState } from "react";

const Result = ({ data }) => {
  let [color, setColor] = useState("#7FFFD4");

  // Safeguard: handle empty or undefined data
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col gap-3">
        <ClockLoader
          color={color}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Query Results</h1>

      <div>
        {data.map(({ Name, Age, Employed }, index) => (
          <ul key={index} className="border p-2 my-2 rounded">
            <li>
              <strong>Name:</strong> {Name}
            </li>
            <li>
              <strong>Age:</strong> {Age}
            </li>
            <li>
              <strong>Employed:</strong> {Employed ? "Yes" : "No"}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Result;
