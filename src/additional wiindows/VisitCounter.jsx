import React, { useEffect, useState } from "react";

export default function VisitCounter() {
  const [visitCount, setVisitCount] = useState(0);
  const [visitHistory, setVisitHistory] = useState([]);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem("visits") || "0", 10);
    const storedHistory = JSON.parse(localStorage.getItem("visitHistory") || "[]");

    const newCount = storedCount + 1;
    const newEntry = {
      time: new Date().toLocaleString(),
      page: window.location.pathname
    };

    localStorage.setItem("visits", newCount.toString());
    localStorage.setItem(
      "visitHistory",
      JSON.stringify([...storedHistory, newEntry])
    );

    setVisitCount(newCount);
    setVisitHistory([...storedHistory, newEntry]);
  }, []);

  return (
    <div style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>📊 Website Visits</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
        <strong>Total Visits:</strong> {visitCount}
      </p>

      <div style={{
        maxHeight: "300px",
        overflowY: "auto",
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#111",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 0 10px rgba(255,255,255,0.1)"
      }}>
        <h3 style={{ marginTop: 0, marginBottom: "0.5rem" }}>Visit History</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
          {visitHistory.map((v, i) => (
            <li key={i} style={{ padding: "0.25rem 0", borderBottom: "1px solid #222" }}>
              {v.time} — <span style={{ color: "#38bdf8" }}>{v.page}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
