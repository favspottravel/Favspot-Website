import React from "react";
import ActivityCard from "./ActivityCard";

function ActivitiesSection({
  id = "activities",
  title = "Available Activities",
  subtitle = "Explore our curated list of activities and experiences during your stay",
  items = [],
  sectionClassName = "py-16",
  containerClassName = "max-w-6xl mx-auto px-6",
}) {
  if (!items?.length) return null;

  return (
    <section className={sectionClassName} id={id}>
      <div className={containerClassName}>
        <div className="mb-10">
          <h2 className="text-lg lg:text-lg font-semibold text-dark">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-md lg:text-md font-regular text-gray-600">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
