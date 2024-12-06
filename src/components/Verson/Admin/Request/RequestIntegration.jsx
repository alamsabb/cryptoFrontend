import React, { useEffect } from "react";
import RequestTable from "./RequestTable";
import "./Request.css";
import axios from "axios";

function RequestIntegration() {
  const [request, setRequest] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    axios.get("http://localhost:8000/request").then((res) => {
      setRequest(res.data.dataStored);
    });
  }, [refresh]);

  return (
    <div>
      <h1>Request</h1>
      <div className="table">
        <RequestTable data={request} refresh={handleRefresh} />
      </div>
    </div>
  );
}

export default RequestIntegration;
