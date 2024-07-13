import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { PieChart } from "@mui/x-charts/PieChart";
import Table from "../components/Table";
import "./Admin.css";

import {
  retrieveRequestApi,
  deleteRequestApi,
  retrieveDonorsApi,
  retrieveRecipientApi,
} from "../services/allApi";
function Admin() {
  const [requests, setRequests] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [donors, setDonors] = useState([]);
  const [dataset, setDataset] = useState([
    { Total: 0, Fulfilled: 0, month: "Jan" },
    { Total: 0, Fulfilled: 0, month: "Feb" },
    { Total: 0, Fulfilled: 0, month: "Mar" },
    { Total: 0, Fulfilled: 0, month: "Apr" },
    { Total: 0, Fulfilled: 0, month: "May" },
    { Total: 0, Fulfilled: 0, month: "June" },
    { Total: 0, Fulfilled: 0, month: "July" },
    { Total: 0, Fulfilled: 0, month: "Aug" },
    { Total: 0, Fulfilled: 0, month: "Sept" },
    { Total: 0, Fulfilled: 0, month: "Oct" },
    { Total: 0, Fulfilled: 0, month: "Nov" },
    { Total: 0, Fulfilled: 0, month: "Dec" },
  ]);

  const retrieveRecipients = async () => {
    const result = await retrieveRecipientApi();
    setRecipients(result.data);
  };
  const retrieveRequest = async () => {
    const result = await retrieveRequestApi();
    setRequests(result.data);
    console.log("Requests data:", result.data);

    const updatedDataset = [
      { Total: 0, Fulfilled: 0, month: "Jan" },
      { Total: 0, Fulfilled: 0, month: "Feb" },
      { Total: 0, Fulfilled: 0, month: "Mar" },
      { Total: 0, Fulfilled: 0, month: "Apr" },
      { Total: 0, Fulfilled: 0, month: "May" },
      { Total: 0, Fulfilled: 0, month: "June" },
      { Total: 0, Fulfilled: 0, month: "July" },
      { Total: 0, Fulfilled: 0, month: "Aug" },
      { Total: 0, Fulfilled: 0, month: "Sept" },
      { Total: 0, Fulfilled: 0, month: "Oct" },
      { Total: 0, Fulfilled: 0, month: "Nov" },
      { Total: 0, Fulfilled: 0, month: "Dec" },
    ];

    result.data.forEach((request) => {
      const [day, month, year] = request.startDate.split("/").map(Number);
      const requestDate = new Date(year, month - 1, day);
      const monthIndex = requestDate.getMonth();
      updatedDataset[monthIndex].Total += 1;
      if (parseInt(request.unit, 10) === parseInt(request.currentUnit, 10)) {
        updatedDataset[monthIndex].Fulfilled += 1;
      }
    });

    setDataset(updatedDataset);
    console.log("Updated dataset:", updatedDataset);
  };

  const retrieveDonors = async () => {
    const result = await retrieveDonorsApi();
    setDonors(result.data);
  };

/* const deleteRequest = async (id) => {
    await deleteRequestApi(id);
    retrieveRequest();  
  };  */

  useEffect(() => {
    retrieveRequest();
    retrieveRecipients();
    retrieveDonors();
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

  const valueFormatter = (value) => `${value}`;

  return (
    <>
      <div className="row w-100 py-5 mt-5 ">
        <div className="col-12 p-3 d-flex flex-column">
          <div className="d-flex chart">
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                { dataKey: "Total", label: "Total Requests", valueFormatter },
                {
                  dataKey: "Fulfilled",
                  label: "Fulfilled Requests",
                  valueFormatter,
                },
              ]}
              {...chartSetting}
            />

            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: donors.length, label: "Donors" },
                    { id: 1, value: recipients.length, label: "Recipients" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>

          <div className="row w-100 table">
            <table className="table-responsive">
              <Table>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.data}</td>
                    <td>

                    </td>
                  </tr>
                ))}
              </Table>
            </table> 
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
