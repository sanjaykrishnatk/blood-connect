// Admin.jsx
import React, { useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { PieChart } from "@mui/x-charts/PieChart";
import Table from "../components/Table";
import "./Admin.css";
import { retrieveRequestApi } from "../services/allApi";

function Admin() {
  const retrieveRequest = async () => {
    const result = await retrieveRequestApi();
    console.log(result);
  };

  useEffect(() => {
    retrieveRequest();
  }, []);

  const chartSetting = {
    yAxis: [
      {
        label: "Cases",
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };

  const valueFormatter = (value) => `${value}mm`;

  const dataset = [
    {
      london: 90,
      paris: 50,
      newYork: 10,
      month: "Jan",
    },
    {
      london: 10,
      paris: 29,
      newYork: 89,
      month: "Feb",
    },
    {
      london: 47,
      paris: 53,
      newYork: 10,
      month: "Mar",
    },
    {
      london: 4,
      paris: 5,
      newYork: 92,
      month: "Apr",
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      month: "May",
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      month: "June",
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      month: "July",
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      month: "Aug",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      month: "Sept",
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      month: "Oct",
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      month: "Nov",
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      month: "Dec",
    },
  ];

  return (
    <>
      <div className="row w-100 py-5 mt-5 ">
        <div className="col-12 p-3 d-flex flex-column">
          <div className="d-flex chart">
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                { dataKey: "london", label: "London", valueFormatter },
                { dataKey: "paris", label: "Paris", valueFormatter },
                { dataKey: "newYork", label: "New York", valueFormatter },
              ]}
              {...chartSetting}
            />

            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>

          <div className="row w-100 table">
            <table className="table-responsive">
              {" "}
              <Table />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
