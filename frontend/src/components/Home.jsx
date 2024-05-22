import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {

  const {handleInputChange,form}  = props;



  return (
    <div className="container col-sm-8">
      <h1 className="text-center mt-5">Optimization Parameters</h1>
      <h2 className="mt-5">1. Surgery and Surgeon Related Parameters</h2>
      <form class="row g-3 mt-5">
        <div class="col-md-6">
          <label for="surgeriesWaiting" class="form-label">
            Surgeries Waiting
          </label>
          <input
            name="surgeriesWaiting"
            onChange={handleInputChange}
            defaultValue={form.surgeriesWaiting }
            type="number"
            class="form-control"
            id="surgeriesWaiting"
          />
        </div>
        <div class="col-md-6">
          <label for="maxOperatingTimeSurgeon" class="form-label">
            Max Operating Time of Surgeon
          </label>
          <input
            name="maxOperatingTimeSurgeon"
            onChange={handleInputChange}
            defaultValue={form.maxOperatingTimeSurgeon }
            type="number"
            class="form-control"
            id="maxOperatingTimeSurgeon"
          />
        </div>
        <div class="col-12">
          <label for="operatingDuration" class="form-label">
            Operating Duration
          </label>
          <input
            name="operatingDuration"
            onChange={handleInputChange}
            defaultValue={form.operatingDuration }
            type="number"
            class="form-control"
            id="operatingDuration"
          />
        </div>
        <div class="col-12">
          <label for="deadline" class="form-label">
            Deadline
          </label>
          <input
            name="deadline"
            onChange={handleInputChange}
            defaultValue={form.deadline}
            type="number"
            class="form-control"
            id="deadline"
          />
        </div>
        <div class="col-12">
          <label for="sumOperatingTimesSurgeon" class="form-label">
            Sum of Operating Times of Surgeons
          </label>
          <input
            name="sumOperatingTimesSurgeon"
            onChange={handleInputChange}
            defaultValue={form.sumOperatingTimesSurgeon}
            type="number"
            class="form-control"
            id="sumOperatingTimesSurgeon"
          />
        </div>
      </form>

      <div class="col-12 text-center mt-5">
        <Link to="/Home/operatingroom" class="btn btn-primary">
          Next
        </Link>
      </div>
    </div>
  );
}
