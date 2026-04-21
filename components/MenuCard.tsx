import Image from "next/image";
import { MenuItem } from "@/lib/data";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="card overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group">
      <div className="relative h-28 w-full overflow-hidden bg-orange-pale">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {/* Category badge */}
        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
          {item.icon}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-brand-dark text-sm mb-1 leading-tight">
          {item.name}
        </h3>
        <p className="text-brand-muted text-xs leading-relaxed mb-2 line-clamp-2">
          {item.description}
        </p>
        <p className="text-orange font-bold text-sm">{item.price}</p>
      </div>
    </div>
  );
}
