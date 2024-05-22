import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Planning(props) {
  const { handleInputChange, form } = props;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/handleForm", form)
      .then((res) => {
        console.log(res);
        if (res.data == "Success") {
          navigate("/Home/admin");
          alert("Form Submitted ");
        } else {
          alert("Error submitting form ");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container col-sm-8 ">
        <h2 className="mt-5 ms-3 ">
          3. Planning Horizon and Population Parameters
        </h2>
        <form class="row g-3 m-3">
          <div class="col-md-4">
            <label for="planningHorizon" class="form-label">
              Planning Horizon (Number of Days)
            </label>
            <input
              name="noOfDays"
              onChange={handleInputChange}
              defaultValue={form.noOfDays}
              type="number"
              class="form-control"
              id="planningHorizon"
            />
          </div>
          <div class="col-md-8">
            <label for="numSurgeons" class="form-label">
              Number of Surgeons
            </label>
            <input
              name="numberOfSurgeons"
              onChange={handleInputChange}
              defaultValue={form.numberOfSurgeons}
              type="number"
              class="form-control"
              id="numSurgeons"
            />
          </div>
          <div class="col-12">
            <label for="populationSize" class="form-label">
              Number of Population
            </label>
            <input
              name="noOfPopulation"
              onChange={handleInputChange}
              defaultValue={form.noOfPopulation}
              type="number"
              class="form-control"
              id="populationSize"
            />
          </div>
          <div class="col-12">
            <label for="maxExplorationProcesses" class="form-label">
              Maximum Number of Exploration Processes for an Employed Bee
            </label>
            <input
              name="maxNoOfExploration"
              onChange={handleInputChange}
              defaultValue={form.maxNoOfExploration}
              type="number"
              class="form-control"
              id="maxExplorationProcesses"
            />
          </div>
          <div class="col-12">
            <label for="maxEliteSolutions" class="form-label">
              Maximum Number of Elite Solutions that can be Stored
            </label>
            <input
              name="maxNoOfEliteSolutions"
              onChange={handleInputChange}
              defaultValue={form.maxNoOfEliteSolutions}
              type="number"
              class="form-control"
              id="maxEliteSolutions"
            />
          </div>
          <div class="col-12">
            <label for="maxIterationWithoutImprovement" class="form-label">
              Maximum Number of Iteration without Improvement
            </label>
            <input
              name="MaxNoOfIteration"
              onChange={handleInputChange}
              defaultValue={form.MaxNoOfIteration}
              type="number"
              class="form-control"
              id="maxIterationWithoutImprovement"
            />
          </div>
        </form>
      </div>

      <div class="col-12 text-center mt-5">
        <Link to="/Home/operatingroom" class="btn me-5 btn-primary">
          Previous
        </Link>

        <Link
          to="Home/admin"
          type="submit"
          onClick={handleSubmit}
          class="btn btn-primary"
        >
          Submit
        </Link>
      </div>
    </div>
  );
}
