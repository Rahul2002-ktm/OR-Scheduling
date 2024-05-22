import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Algorithm() {
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/Home/algorithm")
      .then((result) => {
        setResult(result.data.result), console.log(result.data.result);
      })
      .catch((error) => {
        console.error("Error fetching algorithm data:", error);
      });
  }, []);
  if (!result) return " ";
  return (
    <div className="scheduler">
      <h2 className="text-center">Operation Room Scheduler</h2>
      <table className="table mt-2">
        <thead>
          <tr>
            <th>Day</th>
            <th>Shift 1 (8:00 - 10:00) </th>
            <th>Shift 2 (12:00 - 14:00)</th>
            <th>Shift 3 (18:00 - 20:00)</th>
          </tr>
        </thead>
        <tbody>
          {result.map((result, index) => {
            return (
              <tr key={index + 1}>
                <td className="table-dark border"> {index + 1}</td>
                <td className="table-primary border"> {result[0] + 1}</td>
                <td className="table-danger border"> {result[1] + 1}</td>
                <td className="table-success border"> {result[2] + 1}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/Home/algorithm/visual" class="btn btn-primary">
          Next
        </Link>
      </div>
    </div>
  );
}

export default Algorithm;
