import { Link } from "react-router-dom";
import { useState } from "react";
export default function OperatingRoom(props) {
  
  const {handleInputChange,form}  = props;
  
  return (
    <div>
      <div className="container col-sm-8 ">
        <h2 className="mt-5 ms-3">2. Operating Room Related Parameters</h2>
        <form class=" container m-3 row g-3 mt-5">
          <div class="col-md-6">
            <label for="operatingRoomsAvailable" class="form-label">
              Operating Rooms Available
            </label>
            <input
              name="operatingRoomsAvailable"
              onChange={handleInputChange}
              defaultValue={form.operatingRoomsAvailable }
              type="number"
              class="form-control"
              id="operatingRoomsAvailable"
            />
          </div>
          <div class="col-md-6">
            <label for="regularOpeningTimeRoom" class="form-label">
              Regular Opening Time of Operating Room
            </label>
            <input
              name="regOpeningTime"
              onChange={handleInputChange}
              defaultValue={form.regOpeningTime}
              type="time"
              class="form-control"
              id="regularOpeningTimeRoom"
            />
          </div>
          <div class="col-12">
            <label for="maxPermissibleOvertime" class="form-label">
              Maximum Permissible Overtime of Operating Room
            </label>
            <input
              name="maxPermissibleOvertime"
              onChange={handleInputChange}
              defaultValue={form.maxPermissibleOvertime}
              type="number"
              class="form-control"
              id="maxPermissibleOvertime"
            />
          </div>
          <div class="col-12">
            <label for="sumOperatingTimesScheduled" class="form-label">
              Sum of Operating Times of Scheduled Surgeries
            </label>
            <input
              name="sumOfOperatingTimes"
              onChange={handleInputChange}
              defaultValue={form.sumOfOperatingTimes}
              type="number"
              class="form-control"
              id="sumOperatingTimesScheduled"
            />
          </div>
          <div class="col-12">
            <label for="operatingCost" class="form-label">
              Operating Cost of Operating Room
            </label>
            <input
              name="operatingCost"
              onChange={handleInputChange}
              defaultValue={form.operatingCost}
              type="number"
              class="form-control"
              id="operatingCost"
            />
          </div>
          <div class="col-12">
            <label for="costRatio" class="form-label">
              Cost Ratio of Ordinary Working Hours and Overtime Ones
            </label>
            <input
              name="costRatio"
              onChange={handleInputChange}
              defaultValue={form.costRatio}
              type="number"
              class="form-control"
              id="costRatio"
            />
          </div>
        </form>
      </div>
      <div class="col-12 text-center mt-5">
        <Link to="/Home" class="btn me-5 btn-primary">
          Previous
        </Link>
        <Link to="/Home/operatingroom/planning" class="btn btn-primary">
          Next
        </Link>
      </div>
    </div>
  );
}
