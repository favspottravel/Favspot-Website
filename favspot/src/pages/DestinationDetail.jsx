import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { destinations, activities } from "../data/content";
import { MapPin } from "lucide-react";
import ActivitiesSection from "../components/activities/ActivitiesSection";

function DestinationDetail() {
  const { slug } = useParams();

  const destination = destinations.find((d) => d.id === slug);

  if (!destination) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-2xl font-semibold">Destination not found</h1>
        </div>
      </Layout>
    );
  }

  const filteredActivities = activities.filter(
    (a) => a.destinationId === destination.id,
  );

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <h1 className="text-3xl font-semibold">{destination.name}</h1>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <MapPin size={14} />
          <span>{destination.country}</span>
        </div>

        <p className="mt-4 text-gray-700">{destination.description}</p>

        <ActivitiesSection
          id="activities"
          title={`Things to do in ${destination.name}`}
          subtitle={null}
          items={filteredActivities}
          sectionClassName="mt-10"
          containerClassName="px-0"
        />
      </div>
    </Layout>
  );
}

export default DestinationDetail;
