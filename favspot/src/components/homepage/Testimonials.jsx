import React from "react";
import { User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Parisa Khani",
    date: "7 May 2026 at 15:57",
    testimonial:
      "We had a great tour guide Mr Shalom and we enjoyed every minute of our tour with him.",
  },
  {
    id: 2,
    name: "Daniel Carreon",
    date: "8 May 2026 at 02:03",
    testimonial:
      "I was met by Shalom at the Vic Falls Airport. He arranged everything for me with regards to the border crossing, and offered various trips to the falls. Nice guy!",
  },
  {
    id: 3,
    name: "Louise McAllister",
    date: "8 May 2026 at 12:23",
    testimonial:
      "Absolutely fantastic service and hospitality whilst in Zimbabwe and crossing over to Zambia. Highly recommended.",
  },
  {
    id: 4,
    name: "Bob Sills",
    date: "8 May 2026 at 13:32",
    testimonial:
      "We only used Zazu tours only for transfer between airport and hotel but Shalom was very helpful and knowledgeable, and we would definitely book a tour next time we come.",
  },
];

function Testimonials() {
  return (
    <section className="py-16" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-2xl lg:text-2xl font-semibold text-dark">
            Testimonials
          </h2>

          <p className="mt-2 text-md lg:text-md font-regular text-gray-600">
            Hear what our customers have to say about their experience with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote */}
              <h3 className="text-4xl font-semibold mb-4 text-gray-900">
                "
              </h3>

              {/* Testimonial */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.testimonial}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <User size={18} className="text-gray-600" />
                </div>

                {/* Name + Date */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-500">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;