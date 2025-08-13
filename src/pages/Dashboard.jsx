import React from "react";
import StatsPanel from "../widgets/StatPanel";
import CpuChart from "../widgets/CpuChart";
import MemoryChart from "../widgets/MemoryChart";
import RecentActivity from "../widgets/RecentActivity";
import IncidentMap from "../widgets/IncidentMap";

export default function Dashboard() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <StatsPanel />
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <CpuChart />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <MemoryChart />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow md:col-span-2">
            <RecentActivity />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow md:col-span-2">
            <IncidentMap />
          </div>
        </div>
      </div>
    </main>
  );
}
