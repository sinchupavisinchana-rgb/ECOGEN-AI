
import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer
} from "recharts";
import {
  MapPin, Wind, Trees, CloudSun,
  ShieldAlert, Bot, Send
} from "lucide-react";

const aqiData = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 72 },
  { day: "Wed", value: 58 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 76 },
  { day: "Sat", value: 62 },
  { day: "Sun", value: 55 }
];

const climateData = [
  { month: "Jan", temp: 24 },
  { month: "Feb", temp: 26 },
  { month: "Mar", temp: 29 },
  { month: "Apr", temp: 31 },
  { month: "May", temp: 30 },
  { month: "Jun", temp: 27 }
];

function Metric({ title, value, unit }) {
  return (
    <div className="stat-card">
      <div className="stat-top">{title}</div>
      <h2>{value}<small> {unit}</small></h2>
      <p className="stat-change">Illustrative demo metric</p>
    </div>
  );
}

function ChartPanel({ title, children }) {
  return (
    <div className="chart-card">
      <div className="section-heading">
        <div>
          <h3>{title}</h3>
          <p>Illustrative demonstration data</p>
        </div>
        <span className="live-label">DEMO</span>
      </div>
      {children}
    </div>
  );
}

export default function EnvironmentalPages({ page }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm ECOGEN AI. Ask me about air quality, forests or climate."
    }
  ]);

  const sendMessage = () => {
    if (!question.trim()) return;

    const userQuestion = question.trim();

    setMessages(previous => [
      ...previous,
      { role: "user", text: userQuestion },
      {
        role: "assistant",
        text: "I can help explain environmental concepts and suggest what data to investigate. This is currently a demo assistant; connect an AI model to enable intelligent answers."
      }
    ]);

    setQuestion("");
  };

  if (page === "Global Map") {
    return (
      <>
        <PageHeader
          title="Global Environment Map"
          subtitle="Explore environmental monitoring locations."
        />
        <div className="chart-card">
          <MapPin size={28} color="#54dda0" />
          <h3>Geospatial Monitoring</h3>
          <p className="subtitle">
            Map integration will be connected in the next phase.
          </p>
          <div className="map-placeholder">
            <div className="map-circle">🌍</div>
            <h2>Global Environmental Intelligence</h2>
            <p>Interactive geographic monitoring workspace</p>
            <span className="live-label">MAP INTEGRATION PENDING</span>
          </div>
        </div>
      </>
    );
  }

  if (page === "Air Quality") {
    return (
      <>
        <PageHeader title="Air Quality Intelligence"
          subtitle="Analyse air pollution indicators and trends." />
        <div className="stats-grid">
          <Metric title="Air Quality Index" value="85" unit="AQI" />
          <Metric title="PM2.5" value="32" unit="µg/m³" />
          <Metric title="PM10" value="58" unit="µg/m³" />
          <Metric title="CO₂" value="412" unit="ppm" />
        </div>
        <ChartPanel title="Weekly AQI Analysis">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={aqiData}>
              <CartesianGrid stroke="#26392d" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#87958d" />
              <YAxis stroke="#87958d" />
              <Tooltip />
              <Area dataKey="value" stroke="#38d996"
                fill="#38d996" fillOpacity={0.18} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartPanel>
      </>
    );
  }

  if (page === "Deforestation") {
    return (
      <>
        <PageHeader title="Deforestation Monitor"
          subtitle="Explore forest-loss monitoring and vegetation analysis." />
        <div className="stats-grid">
          <Metric title="Forest Coverage" value="68.4" unit="%" />
          <Metric title="Monitored Regions" value="24" unit="areas" />
          <Metric title="Detected Changes" value="12" unit="events" />
          <Metric title="Monitoring Status" value="Active" unit="" />
        </div>
        <div className="chart-card">
          <Trees size={28} color="#54dda0" />
          <h3>Satellite Analysis Workspace</h3>
          <p className="subtitle">
            Satellite image uploads and vegetation-change detection
            will be implemented in the computer vision phase.
          </p>
        </div>
      </>
    );
  }

  if (page === "Climate Intelligence") {
    return (
      <>
        <PageHeader title="Climate Intelligence"
          subtitle="Explore temperature trends and climate indicators." />
        <div className="stats-grid">
          <Metric title="Average Temperature" value="28.5" unit="°C" />
          <Metric title="Rainfall" value="112" unit="mm" />
          <Metric title="Humidity" value="72" unit="%" />
          <Metric title="Forecast Horizon" value="7" unit="days" />
        </div>
        <ChartPanel title="Temperature Trends">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={climateData}>
              <CartesianGrid stroke="#26392d" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#87958d" />
              <YAxis stroke="#87958d" />
              <Tooltip />
              <Bar dataKey="temp" fill="#38d996" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartPanel>
      </>
    );
  }

  if (page === "Environmental Risk") {
    return (
      <>
        <PageHeader title="Environmental Risk Engine"
          subtitle="Explore illustrative environmental risk indicators." />
        <div className="stats-grid">
          <Metric title="Overall Risk" value="32" unit="/100" />
          <Metric title="Air Risk" value="45" unit="/100" />
          <Metric title="Climate Risk" value="28" unit="/100" />
          <Metric title="Forest Risk" value="36" unit="/100" />
        </div>
        <div className="chart-card">
          <ShieldAlert size={28} color="#54dda0" />
          <h3>Risk Analysis Centre</h3>
          <p className="subtitle">
            These are demonstration scores, not verified risk assessments.
            A trained and validated model will power this module later.
          </p>
        </div>
      </>
    );
  }

  if (page === "AI Eco Assistant") {
    return (
      <>
        <PageHeader title="AI Eco Assistant"
          subtitle="Your environmental knowledge workspace." />
        <div className="chart-card assistant-panel">
          <Bot size={30} color="#54dda0" />
          <h3>ECOGEN Intelligence Assistant</h3>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index}
                className={`chat-message ${message.role}`}>
                <strong>{message.role === "user" ? "You" : "ECOGEN AI"}</strong>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={question}
              onChange={event => setQuestion(event.target.value)}
              onKeyDown={event => {
                if (event.key === "Enter") sendMessage();
              }}
              placeholder="Ask an environmental question..."
            />
            <button onClick={sendMessage}>
              <Send size={18} />
            </button>
          </div>
          <p className="subtitle">Demo assistant · AI model not connected yet</p>
        </div>
      </>
    );
  }

  if (page === "Reports") {
    return (
      <>
        <PageHeader title="Reports & Analytics"
          subtitle="Environmental reporting workspace." />
        <div className="chart-card">
          <h3>Environmental Summary</h3>
          <p className="subtitle">
            Reports will be generated from validated environmental
            datasets and model outputs in a later phase.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Settings"
        subtitle="ECOGEN AI application settings." />
      <div className="chart-card">
        <h3>Platform Configuration</h3>
        <p className="subtitle">
          Data sources, model settings and user preferences
          will be configured here.
        </p>
      </div>
    </>
  );
}

function PageHeader({ title, subtitle }) {
  return (
    <header className="topbar page-header">
      <div>
        <p className="eyebrow">ECOGEN AI / WORKSPACE</p>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      <span className="live-label">DEMO ENVIRONMENT</span>
    </header>
  );
}
