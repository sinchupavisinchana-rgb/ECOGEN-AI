
import { useEffect, useState } from "react";
import {
  Wind, Trees, Thermometer, Factory, ShieldCheck
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import EnvironmentalChart from "../components/EnvironmentalChart";
import EnvironmentalPages from "./EnvironmentalPages";
import { getEnvironmentData } from "../services/api";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [activePage, setActivePage] = useState("Overview");

  useEffect(() => {
    getEnvironmentData()
      .then(setData)
      .catch(() => setError(true));
  }, []);

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="main-content">

        {activePage === "Overview" ? (
          <>
            <header className="topbar">
              <div>
                <p className="eyebrow">
                  ENVIRONMENTAL INTELLIGENCE PLATFORM
                </p>
                <h1>Environmental Overview</h1>
                <p className="subtitle">
                  Monitor our planet. Understand the changes. Predict the future.
                </p>
              </div>
              <span className="live-label">SYSTEM ONLINE</span>
            </header>

            {error && (
              <p className="error-message">
                Backend unavailable. Start your FastAPI server.
              </p>
            )}

            <div className="welcome-card">
              <div>
                <span className="welcome-tag">
                  ECOGEN INTELLIGENCE
                </span>
                <h2>Building a sustainable future with AI.</h2>
                <p>
                  Environmental insights and predictive intelligence
                  in one platform.
                </p>
              </div>
              <div className="earth-symbol">🌍</div>
            </div>

            <div className="section-title">
              <h2>Environmental Metrics</h2>
              <span>DEMO DATA</span>
            </div>

            <div className="stats-grid">
              <StatCard
                title="Air Quality Index"
                value={data?.aqi ?? "--"}
                unit="AQI"
                change="Demonstration reading"
                icon={Wind}
              />
              <StatCard
                title="Forest Coverage"
                value={data?.forest_coverage ?? "--"}
                unit="%"
                change="Demonstration reading"
                icon={Trees}
              />
              <StatCard
                title="Temperature"
                value={data?.temperature ?? "--"}
                unit="°C"
                change="Demonstration reading"
                icon={Thermometer}
              />
              <StatCard
                title="Carbon Emissions"
                value={data?.carbon_emissions ?? "--"}
                unit="ppm"
                change="Demonstration reading"
                icon={Factory}
              />
            </div>

            <div className="analytics-grid">
              <EnvironmentalChart />

              <div className="risk-card">
                <div className="risk-icon">
                  <ShieldCheck size={24} />
                </div>
                <h3>Environmental Risk</h3>

                <div className="risk-number">
                  {data?.risk_score ?? "--"}
                  <small>/100</small>
                </div>

                <div className="risk-bar">
                  <div
                    style={{
                      width: `${data?.risk_score ?? 0}%`
                    }}
                  />
                </div>

                <p>
                  Illustrative score, not a verified assessment.
                </p>
              </div>
            </div>
          </>
        ) : (
          <EnvironmentalPages page={activePage} />
        )}

        <footer>
          ECOGEN AI © 2026 · Intelligence for a Greener Tomorrow
        </footer>

      </main>
    </div>
  );
}
