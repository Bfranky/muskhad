import { MenuItem } from "@/lib/data";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="card overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group">
      <div className="bg-orange-pale h-24 flex items-center justify-center text-5xl">
        {item.icon}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-brand-dark text-sm mb-1 leading-tight">
          {item.name}
        </h3>
        <p className="text-brand-muted text-xs leading-relaxed mb-2">
          {item.description}
        </p>
        <p className="text-orange font-bold text-sm">{item.price}</p>
      </div>
    </div>
  );
}
