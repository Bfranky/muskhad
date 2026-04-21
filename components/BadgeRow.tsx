interface Badge {
  icon: string;
  label: string;
}

const BADGES: Badge[] = [
  { icon: "🕐", label: "Open 24 Hours" },
  { icon: "🛵", label: "Delivery Available" },
  { icon: "⭐", label: "5.0 Rating" },
  { icon: "📍", label: "Tarauni, Kano" },
];

export default function BadgeRow() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {BADGES.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full"
        >
          <span className="text-sm">{badge.icon}</span>
          {badge.label}
        </div>
      ))}
    </div>
  );
}
