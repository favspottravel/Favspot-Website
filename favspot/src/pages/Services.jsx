import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { catalog, company } from "../data/content";

function Services() {
  const cards = [
    {
      title: "Transfers",
      description:
        "Airport, hotel, and cross-border transfers—private and coordinated.",
      count: catalog.transfers.length,
      links: [
        { label: "Airport Transfers", to: "/airport-transfers" },
        { label: "Hotel Transfers", to: "/hotel-transfers" },
        { label: "Cross Border Transfers", to: "/cross-border-transfers" },
      ],
    },
    {
      title: "Guided Tours",
      description:
        "Day tours and experiences with clear inclusions and pickup details.",
      count: catalog.tours.length,
      links: [{ label: "Guided Tours", to: "/guided-tours" }],
    },
    {
      title: "Holiday Packages",
      description:
        "Short breaks and multi-day itineraries—tailored to dates and budget.",
      count: catalog.packages.length,
      links: [
        { label: "Victoria Falls Packages", to: "/victoria-falls-packages" },
        { label: "Chobe Packages", to: "/chobe-packages" },
        { label: "Multi-Day Safaris", to: "/multi-day-safaris" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="mt-3 text-sm text-gray-600">{company.summary}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-sm border border-gray-300 bg-white p-6"
            >
              <h2 className="text-md font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
              <p className="mt-4 text-xs text-gray-600">
                {card.count} options available
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {card.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-[#223441] hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Services;
