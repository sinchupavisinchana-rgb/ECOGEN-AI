
import {
  LayoutDashboard,
  Globe,
  Wind,
  Trees,
  CloudSun,
  ShieldCheck,
  Bot,
  FileBarChart,
  Settings
} from "lucide-react";

const menuItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Global Map", icon: Globe },
  { name: "Air Quality", icon: Wind },
  { name: "Deforestation", icon: Trees },
  { name: "Climate Intelligence", icon: CloudSun },
  { name: "Environmental Risk", icon: ShieldCheck },
  { name: "AI Eco Assistant", icon: Bot },
  { name: "Reports", icon: FileBarChart },
  { name: "Settings", icon: Settings }
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">E</div>
        <div>
          <h2>ECOGEN<span>AI</span></h2>
          <small>ENVIRONMENTAL INTELLIGENCE</small>
        </div>
      </div>

      <p className="menu-label">WORKSPACE</p>

      <nav>
        {menuItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            className={`nav-item ${
              activePage === name ? "active" : ""
            }`}
            onClick={() => onNavigate(name)}
          >
            <Icon size={19} />
            <span>{name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <span>●</span>
        ECOGEN SYSTEM ONLINE
      </div>
    </aside>
  );
}
