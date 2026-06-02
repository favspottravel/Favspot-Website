import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { company, getProductBySlug } from "../data/content";
import { loadLastBooking } from "../lib/bookingStorage";

function BookingConfirmation() {
  const location = useLocation();
  const booking = location.state?.booking || loadLastBooking();
  const product = useMemo(
    () => (booking?.productSlug ? getProductBySlug(booking.productSlug) : null),
    [booking?.productSlug]
  );

  const subject = booking?.productTitle
    ? `Booking request: ${booking.productTitle}`
    : "Booking request";

  const body = booking
    ? [
        `Product: ${booking.productTitle}`,
        booking.date ? `Date: ${booking.date}` : null,
        booking.travelers ? `Travelers: ${booking.travelers}` : null,
        booking.pickup ? `Pickup: ${booking.pickup}` : null,
        booking.fullName ? `Name: ${booking.fullName}` : null,
        booking.email ? `Email: ${booking.email}` : null,
        booking.phone ? `Phone/WhatsApp: ${booking.phone}` : null,
        booking.notes ? `Notes: ${booking.notes}` : null,
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  const mailto = `mailto:${company.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const whatsapp = `${company.contact.whatsappLink}?text=${encodeURIComponent(
    body || subject
  )}`;

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Request received</h1>
        <p className="mt-3 text-sm text-gray-600">
          We’ll confirm availability and reply with the next steps.
        </p>

        {booking && (
          <div className="mt-8 rounded-sm border border-gray-300 bg-white p-6">
            <div className="grid gap-2 text-sm text-gray-700">
              <div>
                <span className="font-semibold text-gray-900">Product:</span>{" "}
                {booking.productTitle}
              </div>
              {booking.date && (
                <div>
                  <span className="font-semibold text-gray-900">Date:</span>{" "}
                  {booking.date}
                </div>
              )}
              {booking.travelers ? (
                <div>
                  <span className="font-semibold text-gray-900">
                    Travelers:
                  </span>{" "}
                  {booking.travelers}
                </div>
              ) : null}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
            style={{
              backgroundColor: "#223441",
              borderRadius: "2px",
              color: "#ffffff",
            }}
          >
            Continue on WhatsApp
          </a>
          <a
            href={mailto}
            className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium border border-gray-300 text-gray-900 hover:bg-gray-50"
            style={{ borderRadius: "2px" }}
          >
            Email us
          </a>
          {product ? (
            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium border border-gray-300 text-gray-900 hover:bg-gray-50"
              style={{ borderRadius: "2px" }}
            >
              Back to details
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium border border-gray-300 text-gray-900 hover:bg-gray-50"
              style={{ borderRadius: "2px" }}
            >
              Back home
            </Link>
          )}
        </div>

        <div className="mt-10 rounded-sm border border-gray-300 bg-white p-6">
          <h2 className="text-md font-semibold">Company</h2>
          <p className="mt-2 text-sm text-gray-600">{company.summary}</p>
          <div className="mt-4 grid gap-2 text-sm text-gray-700">
            <div>
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              {company.contact.phone}
            </div>
            <div>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              {company.contact.email}
            </div>
            <div>
              <span className="font-semibold text-gray-900">Base:</span>{" "}
              {company.contact.base}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BookingConfirmation;

