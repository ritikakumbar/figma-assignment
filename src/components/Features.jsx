import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="features">
      <h2>Our Features</h2>

      <div className="card-container">
        <FeatureCard title="Fast" desc="High performance UI" />
        <FeatureCard title="Responsive" desc="Works on all devices" />
        <FeatureCard title="Clean Code" desc="Reusable components" />
      </div>
    </section>
  );
}