import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

function Visual() {
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/Home/algorithm")
      .then((response) => {
        setResult(response.data.result);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching algorithm data:", error);
      });
  }, []);

  if (!result) return " ";

  const seriesData = result.map((dayResult, index) => ({
    name: `Day ${index + 1}`,
    data: dayResult.map((value) => value + 1),
  }));

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Shift 1", "Shift 2", "Shift 3"],
    },
    yaxis: {
      title: {
        text: "Operation Room(OR) Number ",
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return Math.ceil(val);
        },
      },
    },
  };

  const areaOptions = {
    chart: {
      id: "basic-area",
    },
    xaxis: {
      categories: ["Shift 1", "Shift 2", "Shift 3"],
    },
    yaxis: {
      title: {
        text: "Operation Room(OR) Number ",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.5,
      type: "solid",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return Math.ceil(val);
        },
      },
    },
    title: {
      text: "Operation Room Occupancy by Shift",
      align: "center",
    },
  };

  return (
    <div>
      <h1 className="text-center mt-3">Operation Room Scheduler</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-10">
          <Chart
            options={options}
            series={seriesData}
            type="bar"
            height="400"
          />
        </div>
        <div className="col-10">
          <Chart
            options={areaOptions}
            series={seriesData}
            type="area"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}

export default Visual;
