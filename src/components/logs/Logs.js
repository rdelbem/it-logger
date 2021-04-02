import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
}
