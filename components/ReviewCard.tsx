import { Review } from "@/lib/data";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-green rounded-2xl p-5 text-white">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-orange-light text-lg">★</span>
        ))}
      </div>
      <p className="text-base italic leading-relaxed mb-4 text-white/95">
        &quot;{review.text}&quot;
      </p>
      <div className="flex items-center gap-2 text-white/70 text-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-light" />
        <span className="font-medium text-white/90">{review.author}</span>
        <span>·</span>
        <span>{review.date}</span>
        <span>·</span>
        <span>Google Review</span>
      </div>
    </div>
  );
}
