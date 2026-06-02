import React from "react";
import { Link } from "react-router-dom";
import { Clock3 } from "lucide-react";
import RatingDots from "../shared/RatingDots";

function ActivityCard({ activity }) {
  return (
    <Link
      to={`/products/${activity.slug}`}
      className="bg-white rounded-sm flex flex-col group transform transition-transform duration-300 ease-in-out hover:shadow-md border border-gray-300"
    >
      <div className="p-4 overflow-hidden rounded-sm">
        <div className="w-full h-60 overflow-hidden rounded-sm">
          <img
            src={activity.imageUrl}
            alt={activity.title}
            loading="lazy"
            className="w-full h-full object-cover rounded-sm transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>

      <div className="px-4 py-4 flex flex-col flex-1">
        <h3 className="text-md font-semibold text-dark mb-2">
          {activity.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <RatingDots rating={activity.rating} />
          <span className="text-xs font-semibold text-gray-500">
            {activity.reviews}
          </span>
        </div>

        {activity.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {activity.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock3 size={16} />
            <span className="text-xs">{activity.duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">From</span>
            <span className="font-semibold text-xl text-black">
              ${activity.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ActivityCard;

