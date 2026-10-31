
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", aqi: 65 },
  { day: "Tue", aqi: 72 },
  { day: "Wed", aqi: 58 },
  { day: "Thu", aqi: 85 },
  { day: "Fri", aqi: 76 },
  { day: "Sat", aqi: 62 },
  { day: "Sun", aqi: 55 }
];

export default function EnvironmentalChart() {
  return (
    <div className="chart-card">
      <div className="section-heading">
        <div>
          <h3>Air Quality Trends</h3>
          <p>Weekly environmental monitoring</p>
        </div>
        <span className="live-label">DEMO DATA</span>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="aqiGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38d996" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#38d996" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#202b26" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#87958d" />
          <YAxis stroke="#87958d" />
          <Tooltip contentStyle={{
            background: "#101a15",
            border: "1px solid #294b38",
            borderRadius: "10px"
          }} />

          <Area
            type="monotone"
            dataKey="aqi"
            stroke="#38d996"
            fill="url(#aqiGradient)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
