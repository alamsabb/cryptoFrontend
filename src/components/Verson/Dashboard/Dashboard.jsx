import React, { useEffect } from "react";
import { Box, Grid2, IconButton, Typography } from "@mui/material";
import StatBox from "./StatBox";
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import LineChart from "./LineChart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [dataStored, setDataStored] = React.useState({});
  const [transaction, setTransaction] = React.useState([]);
  useEffect(() => {
    const id = localStorage.getItem("wallet");
    if (!id) return;
    axios.get(`http://localhost:8000/profile/${id}`).then((res) => {
      setDataStored(res.data.user);
    });
    axios.get(`http://localhost:8000/userTransaction/${id}`).then((res) => {
      console.log(res.data.user);
      setTransaction(res.data.user);
    });
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    const email = localStorage.getItem("email");
    const id = localStorage.getItem("wallet");
    if (!email || !id) {
      navigate("/");
    }
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <Grid2 container spacing={2} sx={{ justifyContent: "flex-start" }} p={4}>
        <Grid2 item xs={12} sm={6}>
          <Box mb="30px">
            <Typography
              variant="h2"
              color={"#e0e0e0"}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              {dataStored.fullName}
            </Typography>
            <Typography variant="h5" color={"#70d8bd"}>
              {"Welcome to your dashboard"}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={2}
        sx={{
          justifyContent: "space-around",
        }}
      >
        <Grid2 item xs={12} sm={6}>
          <Box
            gridColumn="span 3"
            backgroundColor={"#1F2A40"}
            display="flex"
            alignItems="center"
            p={2}
            width={"200px"}
            borderRadius="12px"
            justifyContent="center"
          >
            <StatBox
              title={dataStored.amount}
              subtitle="Investment"
              progress="0.75"
              increase="+14%"
              icon={<Email sx={{ color: "#3da58a", fontSize: "26px" }} />}
            />
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <Box
            gridColumn="span 3"
            backgroundColor={"#1F2A40"}
            display="flex"
            alignItems="center"
            p={2}
            width={"200px"}
            borderRadius="12px"
            justifyContent="center"
          >
            <StatBox
              title="5% /Day"
              subtitle="ROI"
              progress="0.75"
              increase="+0.2%"
              icon={<PointOfSale sx={{ color: "#3da58a", fontSize: "26px" }} />}
            />
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <Box
            gridColumn="span 3"
            backgroundColor={"#1F2A40"}
            display="flex"
            alignItems="center"
            p={2}
            width={"200px"}
            borderRadius="12px"
            justifyContent="center"
          >
            <StatBox
              title={dataStored.totalIntrest}
              subtitle="Intrest Amount"
              progress="0.75"
              increase="+14%"
              icon={<PersonAdd sx={{ color: "#3da58a", fontSize: "26px" }} />}
            />
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <Box
            gridColumn="span 3"
            backgroundColor={"#1F2A40"}
            display="flex"
            alignItems="center"
            p={2}
            width={"200px"}
            borderRadius="12px"
            justifyContent="center"
          >
            <StatBox
              title={dataStored.amount + dataStored.totalIntrest}
              subtitle="Total Amount"
              progress="0.75"
              increase="+34%"
              icon={<Traffic sx={{ color: "#3da58a", fontSize: "26px" }} />}
            />
          </Box>
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={2}
        sx={{
          justifyContent: "space-around",
          height: "350px",
          margin: "50px 0",
        }}
      >
        <Grid2 item xs={12} sm={6} sx={{ width: "50%" }}>
          <Box gridColumn="span 8" gridRow="span 2" backgroundColor={"#1F2A40"}>
            <Box
              p="10px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h5" fontWeight="600" color={"#e0e0e0"}>
                  Revenue Generated
                </Typography>
                <Typography variant="h3" fontWeight="bold" color={"#4cceac"}>
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlined
                    sx={{ fontSize: "26px", color: "#4cceac" }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
              {/* <h1>Line</h1> */}
            </Box>
          </Box>
        </Grid2>
        <Grid2
          item
          xs={12}
          sm={6}
          sx={{
            width: "40%",
            height: "inherit",
          }}
        >
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            height={"inherit"}
            backgroundColor={"#1F2A40"}
            overflow="auto"
            color={"white"}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid "#141b2d"`}
              colors={"#e0e0e0"}
              p="15px"
            >
              <Typography color={"#e0e0e0"} variant="h5" fontWeight="600">
                Recent Transactions
              </Typography>
            </Box>
            {transaction.map((transaction, i) => (
              <Box
                key={`${transaction._id}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid "#141b2d"`}
                p="15px"
              >
                <Box>
                  <Typography color={"#4cceac"} variant="h5" fontWeight="600">
                    {transaction._id.slice(-5)}
                  </Typography>
                  <Typography color={"#e0e0e0"}>
                    {transaction.sender}
                  </Typography>
                </Box>
                <Box color={"#e0e0e0"}>
                  {new Date(transaction.date).toISOString().split("T")[0]}
                </Box>
                <Box
                  backgroundColor={"#4cceac"}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.amount}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Dashboard;
