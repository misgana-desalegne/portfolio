import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';
import { Lock, Sun, Zap, GitBranch, MoreVertical } from 'lucide-react';

const energyData = [
  { id: 1, time: '00:00', usage: 0.8, solar: 0.2 },
  { id: 2, time: '04:00', usage: 0.6, solar: 0.0 },
  { id: 3, time: '08:00', usage: 1.8, solar: 1.2 },
  { id: 4, time: '12:00', usage: 2.1, solar: 2.3 },
  { id: 5, time: '16:00', usage: 1.9, solar: 1.1 },
  { id: 6, time: '20:00', usage: 2.7, solar: 0.5 },
  { id: 7, time: '24:00', usage: 1.0, solar: 0.0 },
];

const temperatureData = [
  { id: 1, time: '00:00', temp: 21 },
  { id: 2, time: '04:00', temp: 20 },
  { id: 3, time: '08:00', temp: 22 },
  { id: 4, time: '12:00', temp: 24 },
  { id: 5, time: '16:00', temp: 23 },
  { id: 6, time: '20:00', temp: 22 },
  { id: 7, time: '24:00', temp: 21 },
];

const weatherData = [
  { id: 1, time: 'Morning', condition: '☀️', temp: 22 },
  { id: 2, time: 'Noon', condition: '🌤️', temp: 24 },
  { id: 3, time: 'Evening', condition: '🌙', temp: 21 },
  { id: 4, time: 'Night', condition: '🌧️', temp: 19 },
];

const devices = [
  { id: 1, name: 'Living Room Light', type: 'light', status: 'on', icon: '💡' },
  { id: 2, name: 'Kitchen Light', type: 'light', status: 'off', icon: '💡' },
  { id: 3, name: 'Thermostat', type: 'thermostat', status: '22°C', icon: '🌡️' },
  { id: 4, name: 'Front Door Lock', type: 'lock', status: 'locked', icon: '🔒' },
  { id: 5, name: 'Garage Door', type: 'door', status: 'closed', icon: '🚪' },
  { id: 6, name: 'Motion Sensor', type: 'sensor', status: 'active', icon: '👀' },
];

export default function IotHomeIntegrationPage() {
  return (
    <>
      <style>{`
        body, html, #root {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(160deg, #0f172a, #1e293b);
          color: #e5e7eb;
        }
        .ha-dashboard { display: flex; flex-direction: column; min-height: 100vh; }
        .ha-header { background-color: rgba(30, 41, 59, 0.9); backdrop-filter: blur(10px); color: #fff; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.3); }
        .ha-header h1 { margin: 0; font-size: 1.75rem; }
        .ha-nav a { color: #cbd5e1; margin-left: 1rem; text-decoration: none; font-weight: 500; transition: 0.2s; }
        .ha-nav a:hover { color: #fff; }
        .ha-main { flex: 1; padding: 2rem; display: flex; flex-direction: column; gap: 2rem; }
        .overview-section, .devices-section, .graph-section, .weather-section { display: flex; gap: 1rem; flex-wrap: wrap; }
        .overview-card, .device-card, .weather-card { background-color: rgba(255,255,255,0.05); padding: 1rem; border-radius: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.3); display: flex; flex-direction: column; align-items: center; flex: 1 1 150px; transition: transform 0.2s; }
        .overview-card:hover, .device-card:hover, .weather-card:hover { transform: translateY(-4px); }
        .overview-icon, .device-icon, .weather-icon { font-size: 2rem; margin-bottom: 0.5rem; }
        .overview-label, .device-name, .weather-time { font-weight: 600; margin-bottom: 0.25rem; color: #f1f5f9; }
        .overview-value, .device-status, .weather-temp { font-size: 1.25rem; font-weight: 700; color: #fff; }
        .devices-grid, .weather-grid { display: flex; flex-wrap: wrap; gap: 1rem; }
        .dashboard-footer { text-align: center; padding: 1rem; background-color: rgba(30,41,59,0.9); color: #9ca3af; backdrop-filter: blur(10px); }
        .icon-button { background: transparent; border: none; color: #9ca3af; cursor: pointer; }
        .icon-button:hover { color: #fff; }
      `}</style>

      <div className="ha-dashboard">
        <header className="ha-header">
          <h1>Home Assistant Dashboard</h1>
          <nav className="ha-nav">
            <a href="#overview">Overview</a>
            <a href="#devices">Devices</a>
            <a href="#energy">Energy</a>
            <a href="#temperature">Temperature</a>
            <a href="#weather">Weather</a>
          </nav>
        </header>

        <main className="ha-main">
          <section id="overview" className="overview-section">
            {['💡', '🔒', '🌡️'].map((icon, idx) => {
              const labels = ['Lights On', 'Doors Locked', 'Avg Temperature'];
              const values = ['3', '2', '22°C'];
              return (
                <motion.div key={labels[idx]} className="overview-card">
                  <div className="overview-icon">{icon}</div>
                  <div className="overview-label">{labels[idx]}</div>
                  <div className="overview-value">{values[idx]}</div>
                  <button className="icon-button" style={{ marginTop: '0.5rem' }}>
                    <MoreVertical size={16} />
                  </button>
                </motion.div>
              );
            })}
          </section>

          <section id="devices" className="devices-section">
            <h2>Devices</h2>
            <div className="devices-grid">
              {devices.map(device => (
                <motion.div key={device.id} className="device-card">
                  <div className="device-icon">{device.icon}</div>
                  <div className="device-name">{device.name}</div>
                  <div className="device-status">{device.status}</div>
                  <button className="icon-button" style={{ marginTop: '0.5rem' }}>
                    <MoreVertical size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="energy" className="graph-section">
            <h2>Energy Usage</h2>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={energyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="usageGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#cbd5e1"/>
                <YAxis stroke="#cbd5e1"/>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '6px', border: 'none' }} />
                <Area type="monotone" dataKey="usage" stroke="#6366F1" fill="url(#usageGrad)" />
                <Area type="monotone" dataKey="solar" stroke="#06B6D4" fill="url(#solarGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </section>

          <section id="temperature" className="graph-section">
            <h2>Temperature Over Time</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={temperatureData}>
                <XAxis dataKey="time" stroke="#cbd5e1"/>
                <YAxis stroke="#cbd5e1"/>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '6px', border: 'none' }} />
                <Line type="monotone" dataKey="temp" stroke="#F97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </section>

          <section id="weather" className="weather-section">
            <h2>Weather Forecast</h2>
            <div className="weather-grid">
              {weatherData.map(d => (
                <motion.div key={d.id} className="weather-card">
                  <div className="weather-icon">{d.condition}</div>
                  <div className="weather-time">{d.time}</div>
                  <div className="weather-temp">{d.temp}°C</div>
                  <button className="icon-button" style={{ marginTop: '0.5rem' }}>
                    <MoreVertical size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <footer className="dashboard-footer">
          © {new Date().getFullYear()} IOT Home Integration — Modern Dashboard
        </footer>
      </div>
    </>
  );
}
