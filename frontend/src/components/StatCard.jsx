
export default function StatCard({
  title,
  value,
  unit,
  change,
  icon: Icon
}) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{title}</span>
        <div className="stat-icon">
          <Icon size={20} />
        </div>
      </div>

      <h2>{value}<small> {unit}</small></h2>

      <p className="stat-change">
        {change}
      </p>
    </div>
  );
}
