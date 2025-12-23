export default function GalaxyBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: "radial-gradient(red 2px, transparent 2px)",
        backgroundSize: "30px 30px",
        opacity: 1,
      }}
    />
  );
}
