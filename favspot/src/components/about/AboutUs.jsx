import React from "react";
import { Leaf, Target, Eye, Handshake } from "lucide-react";
import { aboutCards } from "../../data/content";

const iconMap = {
  leaf: Leaf,
  target: Target,
  eye: Eye,
  handshake: Handshake,
};

function AboutUs() {
  return (
    <section className="py-16" id="about">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-2xl lg:text-2xl font-semibold text-dark">
            About Us
          </h2>
          <p className="mt-2 text-md lg:text-md font-regular text-gray-600">
            Learn more about who we are, what we do, and what drives us forward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.id}
                className="bg-white rounded-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#223441] shadow-lg">
                    {Icon && (
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className="text-white"
                      />
                    )}
                  </div>
                </div>

                <h3 className="text-md font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
