import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';
import { Lock, Sun, Zap, GitBranch, Home, BarChart, Settings, User, LogOut, Cpu, Gauge } from 'lucide-react';

// --- ORIGINAL DATA (Content is unchanged as requested) ---
const energyData = [
    { time: '00:00', usage: 0.8, solar: 0.2 },
    { time: '04:00', usage: 0.6, solar: 0.0 },
    { time: '08:00', usage: 1.8, solar: 1.2 },
    { time: '12:00', usage: 2.1, solar: 2.3 },
    { time: '16:00', usage: 1.9, solar: 1.1 },
    { time: '20:00', usage: 2.7, solar: 0.5 },
    { time: '24:00', usage: 1.0, solar: 0.0 },
];

const features = [
    { title: 'Centralised Control', icon: <GitBranch className="w-6 h-6" />, text: 'All devices and automations are visible and configurable from a single Home Assistant dashboard.' },
    { title: 'Security & Alerts', icon: <Lock className="w-6 h-6" />, text: 'Sensor-driven alerts, event logging, camera snapshots on events and push/email notifications.' },
    { title: 'Energy & Sustainability', icon: <Sun className="w-6 h-6" />, text: 'Energy monitoring with automated efficiency actions and solar/battery integration.' },
    { title: 'Custom Automations', icon: <Zap className="w-6 h-6" />, text: 'Python-based automations and REST orchestration for advanced workflows and ML predictions.' }
];

const yamlSnippet = `alias: Turn on hallway lights when motion detected
description: "Turn on hallway lights after sunset when motion is detected"
trigger:
  - platform: state
    entity_id: binary_sensor.hallway_motion
    to: 'on'
condition:
  - condition: sun
    after: sunset
action:
  - service: light.turn_on
    target:
      entity_id: light.hallway
    data:
      brightness_pct: 60
mode: single`;
// --- END ORIGINAL DATA ---

// Helper component for the navigation links in the sidebar
const NavItem = ({ icon, text, active }) => (
    <motion.a
        href="#"
        className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
            active ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-100'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        {icon}
        <span className="font-medium text-sm">{text}</span>
    </motion.a>
);

// Helper component for a dashboard card
const DashboardCard = motion.div;

// The main, modernized Dashboard component
export default function ModernHADashboard() {
    // Determine the total power usage and current status for "Quick Stats"
    const totalUsage = energyData[energyData.length - 2].usage + ' kW'; // Using the 20:00 entry for peak 'current'
    const totalSolar = energyData[energyData.length - 2].solar + ' kW';

    const getStatusColor = (usage) => {
        if (usage > 2.0) return 'text-red-500';
        if (usage > 1.5) return 'text-amber-500';
        return 'text-green-500';
    };

    const statusIcon = energyData[energyData.length - 2].usage > 2.0 ? <Zap className="w-4 h-4" /> : <Sun className="w-4 h-4" />;
    const statusText = energyData[energyData.length - 2].usage > 2.0 ? 'High Load' : 'Nominal';

    return (
        <div className="min-h-screen flex bg-slate-50 antialiased">
            {/* 1. Modern Sidebar Navigation */}
            <aside className="w-64 bg-white p-6 shadow-xl flex flex-col justify-between border-r border-slate-100">
                <div>
                    {/* Header/Logo (reusing the original project logo) */}
                    <div className="flex items-center gap-3 mb-10">
                        <div className="rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 text-white shadow-lg">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <path d="M6 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <path d="M18 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold text-slate-800">HomeOS</h1>
                    </div>

                    {/* Navigation Items */}
                    <nav className="space-y-2">
                        <NavItem icon={<Home className="w-5 h-5" />} text="Overview" active />
                        <NavItem icon={<BarChart className="w-5 h-5" />} text="Energy" />
                        <NavItem icon={<Lock className="w-5 h-5" />} text="Security" />
                        <NavItem icon={<Zap className="w-5 h-5" />} text="Automations" />
                        <NavItem icon={<Settings className="w-5 h-5" />} text="Configuration" />
                    </nav>
                </div>

                {/* Footer/Profile/Logout */}
                <div className="border-t pt-4">
                    <NavItem icon={<User className="w-5 h-5" />} text="Profile" />
                    <NavItem icon={<LogOut className="w-5 h-5" />} text="Log Out" />
                </div>
            </aside>

            {/* 2. Main Dashboard Content Area */}
            <main className="flex-1 p-8 overflow-y-auto">
                {/* Dashboard Header */}
                <header className="mb-8">
                    <h2 className="text-3xl font-extrabold text-slate-800">Welcome Home, User!</h2>
                    <p className="text-slate-500 mt-1">Real-time status of your local-first smart home.</p>
                </header>

                {/* 3. Quick Stats & Energy Snapshot (Grid) */}
                <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                    {/* Card 1: Current Energy Usage */}
                    <DashboardCard 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.4 }} 
                        className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500"
                    >
                        <div className="flex justify-between items-start">
                            <Cpu className="w-8 h-8 text-indigo-500" />
                            <span className={`text-sm font-semibold p-1 rounded-full ${getStatusColor(energyData[energyData.length - 2].usage)} bg-slate-100`}>
                                {statusIcon} {statusText}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">Current Usage</p>
                        <p className="text-3xl font-bold text-slate-800">{totalUsage}</p>
                    </DashboardCard>
                    
                    {/* Card 2: Solar Generation */}
                    <DashboardCard 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.4, delay: 0.1 }} 
                        className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-cyan-500"
                    >
                        <Sun className="w-8 h-8 text-cyan-500" />
                        <p className="text-sm text-slate-500 mt-4">Solar Generation</p>
                        <p className="text-3xl font-bold text-slate-800">{totalSolar}</p>
                    </DashboardCard>

                    {/* Card 3: Security Status (Reusing Lock icon) */}
                    <DashboardCard 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.4, delay: 0.2 }} 
                        className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-emerald-500"
                    >
                        <Lock className="w-8 h-8 text-emerald-500" />
                        <p className="text-sm text-slate-500 mt-4">Security Status</p>
                        <p className="text-3xl font-bold text-slate-800">Armed (Away)</p>
                    </DashboardCard>

                    {/* Card 4: Automations (Reusing Zap icon) */}
                    <DashboardCard 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.4, delay: 0.3 }} 
                        className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-purple-500"
                    >
                        <Zap className="w-8 h-8 text-purple-500" />
                        <p className="text-sm text-slate-500 mt-4">Active Automations</p>
                        <p className="text-3xl font-bold text-slate-800">12 Running</p>
                    </DashboardCard>
                </section>

                {/* 4. Main Energy Chart (Larger Section) */}
                <section className="grid lg:grid-cols-3 gap-6 mb-8">
                    <DashboardCard 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }} 
                        className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg"
                    >
                        <h3 className="text-lg font-semibold text-slate-800">Energy Consumption & Production</h3>
                        <p className="text-sm text-slate-500 mt-1">24-hour snapshot (kW)</p>
                        <div className="mt-4 h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={energyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="usageGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                                    <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                                    <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                                    <Area type="monotone" dataKey="usage" name="Usage" stroke="#6366F1" fillOpacity={1} fill="url(#usageGrad)" strokeWidth={2} />
                                    <Area type="monotone" dataKey="solar" name="Solar" stroke="#06B6D4" fillOpacity={1} fill="url(#solarGrad)" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </DashboardCard>

                    {/* Card 5: Core Automations/YAML Snippet (Smaller Card) */}
                    <DashboardCard 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.2 }} 
                        className="bg-white p-6 rounded-xl shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <GitBranch className="w-6 h-6 text-indigo-500" />
                            <h4 className="font-semibold text-slate-800">Core Automation: Hallway Light</h4>
                        </div>
                        <div className="bg-slate-900 rounded-lg overflow-hidden h-40">
                            {/* Display the YAML snippet with reduced height for dashboard 'widget' feel */}
                            <pre className="p-3 text-xs text-green-300 overflow-auto h-full whitespace-pre-wrap">{yamlSnippet}</pre>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button 
                                className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200" 
                                onClick={() => navigator.clipboard.writeText(yamlSnippet)}
                            >
                                Copy YAML
                            </button>
                        </div>
                    </DashboardCard>
                </section>

                {/* 5. Features as Dashboard 'Tiles' */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Core Integrations Status</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, i) => (
                            <DashboardCard 
                                key={i} 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                                whileHover={{ y: -4, boxShadow: '0 10px 15px rgba(0,0,0,0.05)' }} 
                                className="bg-white p-4 rounded-xl shadow-md flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                    {f.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-slate-800">{f.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1 truncate">{f.text}</p>
                                </div>
                            </DashboardCard>
                        ))}
                    </div>
                </section>
                
                {/* Footer (Simplified for a dashboard context) */}
                <footer className="pt-8 text-center text-sm text-slate-400 border-t mt-12">
                    IOT Home Integration • Home Assistant • Built with React & Framer Motion
                </footer>

            </main>
        </div>
    );
}