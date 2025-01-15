export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <button
      className={isSelected ? "active" : undefined}
      style={{ backgroundColor: isSelected ? "#7925d3" : undefined }}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
