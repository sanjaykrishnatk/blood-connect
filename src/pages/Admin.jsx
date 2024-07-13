import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { PieChart } from "@mui/x-charts/PieChart";
import Table from "../components/Table";
import "./Admin.css";
import Card from "../components/Card";
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
    let recipientTableData = result.data.map((item) => {
      return {
        userName: item.userName,
        bloodGroup: item.bloodGroup,
        gender: item.gender,
        age: item.age,
        state: item.state,
        district: item.district,
        phone: item.phone,
      };
    });
    setRecipients(recipientTableData);
  };
  const retrieveRequest = async () => {
    const result = await retrieveRequestApi();
    let requestTableData = result.data.map((item) => {
      return {
        userName: item.userName,
        bloodGroup: item.bloodGroup,
        gender: item.gender,
        age: item.age,
        district: item.district,
        startDate: item.startDate,
        phone: item.phone,
      };
    });
    setRequests(requestTableData);
    console.log("Requests data:", result.data);
    console.log(`Table data: ${requestTableData}`);
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
    let donorData = result.data.map((item) => {
      return {
        name: item.username,
        bloodGroup: item.bloodGroup,
        gender: item.gender,
        age: item.age,
        state: item.state,
        district: item.district,
        lastDonation: item.lastDonation,
        phone: item.phone,
      };
    });
    setDonors(donorData);
    // console.log(`donor data : ${result.data}`); JSON.stringify(donorData, null, 2)
    console.log(
      "Transformed donor data:",
      JSON.stringify(result.data, null, 2)
    );
  };

  const deleteRequest = async (id) => {
    await deleteRequestApi(id);
    retrieveRequest();
  };

  useEffect(() => {
    retrieveRequest();
    retrieveRecipients();
    retrieveDonors();
  }, []);

  const chartSetting = {
    yAxis: [
      {
        label: "Requests",
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
  console.log("donors:" + donors);

  const donorsCard = {
    logo: "https://thumbs.dreamstime.com/b/blood-donors-logo-symbol-icon-your-needs-such-donor-sign-public-information-add-to-presentation-website-app-etc-154842885.jpg",
    title: "Donors",
    count: donors.length,
  };

  const usersCard = {
    logo: "https://cdn.dribbble.com/users/2620348/screenshots/10495041/media/b110a1631ac9ae054007f19bd98295c0.png?compress=1&resize=768x576&vertical=top",
    title: "Recipients",
    count: recipients.length,
  };

  const requestsCard = {
    logo: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/74-1024.png",
    title: "Requests",
    count: requests.length,
  };
  return (
    <>
      <div className="row w-100 py-3  ms-0 me-0">
        <div className="col-12 p-3 d-flex flex-column">
          <div
            className="card-container d-flex justify-content-between mb-5"
            style={{ flexWrap: "nowrap", overflowX: "auto" }}
          >
            <Card {...donorsCard} />
            <Card {...usersCard} />
            <Card {...requestsCard} />
          </div>
          <div className="d-flex chart mt-5">
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
            <Table
              columns={[
                "Name",
                "Blood Group",
                "Gender",
                "Age",
                "District",
                "Date",
                "Phone",
              ]}
              data={requests}
            />
            <Table
              columns={[
                "Name",
                "Blood Group",
                "Gender",
                "Age",
                "State",
                "District",
                "Phone",
              ]}
              data={recipients}
            />
            <Table
              columns={[
                "Name",
                "Blood Group",
                "Gender",
                "Age",
                "State",
                "District",
                "Last Donation",
                "Phone",
              ]}
              data={donors}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
