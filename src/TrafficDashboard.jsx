import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const TrafficDashboard = () => {
  const [weeks, setWeeks] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/stats.json")
      .then(res => {
        if (!res.ok) throw new Error("No data yet");
        return res.json();
      })
      .then(data => {
        setWeeks(data.weeks || []);
        setLoading(false);
      })
      .catch(() => {
        setError("No traffic data available yet.");
        setLoading(false);
      });
  }, []);

  const weeklyChartData = weeks.map(w => ({
    week: w.week_start.slice(5).replace("-", "/"),
    total: w.total_requests,
    raw: w
  }));

  const drillDownData = selectedWeek
    ? Object.entries(selectedWeek.daily_counts).map(([label, count]) => ({
        day: label.split(" ")[0],
        visits: count
      }))
    : [];

  const totalAllTime = weeks.reduce((sum, w) => sum + w.total_requests, 0);
  const bestWeek = weeks.reduce((best, w) =>
    w.total_requests > (best?.total_requests || 0) ? w : best, null);

  const tooltipStyle = {
    backgroundColor: "#1e1b4b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "#d1d5db"
  };

  const gradientDef = (
    <defs>
      <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
    </defs>
  );

  if (loading) return (
    <div className="text-center text-gray-400 py-12">Loading traffic data...</div>
  );

  if (error) return (
    <div className="text-center text-gray-400 py-12">{error}</div>
  );

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-gray-400 text-sm mb-1">All-Time Visits</p>
          <p className="text-3xl font-bold text-white">{totalAllTime.toLocaleString()}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-gray-400 text-sm mb-1">Best Week</p>
          <p className="text-3xl font-bold text-white">{bestWeek?.total_requests.toLocaleString() || 0}</p>
          {bestWeek && <p className="text-gray-500 text-xs mt-1">week of {bestWeek.week_start}</p>}
        </div>
      </div>

      {/* Chart */}
      {!selectedWeek ? (
        <div>
          <p className="text-gray-400 text-sm mb-3 text-center">Weekly visits — click a bar to see day-by-day</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyChartData}>
              <XAxis dataKey="week" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(168,85,247,0.1)" }} />
              {gradientDef}
              <Bar
                dataKey="total"
                radius={[4, 4, 0, 0]}
                cursor="pointer"
                onClick={(data) => setSelectedWeek(data.raw)}
                fill="url(#purpleGradient)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-400 text-sm">Week of {selectedWeek.week_start}</p>
            <button
              onClick={() => setSelectedWeek(null)}
              className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
            >
              ← Back to all weeks
            </button>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={drillDownData}>
              <XAxis dataKey="day" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(168,85,247,0.1)" }} />
              {gradientDef}
              <Bar dataKey="visits" radius={[4, 4, 0, 0]} fill="url(#purpleGradient)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default TrafficDashboard;