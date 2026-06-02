import React, { useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { company, getProductBySlug } from "../data/content";
import { saveLastBooking } from "../lib/bookingStorage";
import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  User,
  Users,
} from "lucide-react";

function buildWhatsAppLink({ product, booking, total }) {
  const text = [
    `Hi ${company.name}, I'd like to book: ${product.title}`,

    booking.startDate && booking.endDate
      ? `Travel Dates: ${booking.startDate} to ${booking.endDate}`
      : null,

    booking.adults > 0 ? `Adults: ${booking.adults}` : null,
    booking.children > 0 ? `Children: ${booking.children}` : null,
    booking.infants > 0 ? `Infants: ${booking.infants}` : null,

    booking.pickup ? `Pickup: ${booking.pickup}` : null,

    booking.fullName ? `Name: ${booking.fullName}` : null,
    booking.email ? `Email: ${booking.email}` : null,
    booking.phone ? `Phone/WhatsApp: ${booking.phone}` : null,

    total > 0 ? `Estimated Total: $${total}` : null,

    booking.notes ? `Notes: ${booking.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `${company.contact.whatsappLink}?text=${encodeURIComponent(text)}`;
}

function Counter({ label, value, onChange, min = 0 }) {
  return (
    <div className="flex items-center justify-between rounded-sm border border-gray-300 px-4 py-3">
      <div>
        <div className="font-medium text-gray-900">{label}</div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-sm border bg-gray-50 border-gray-300 text-lg font-semibold hover:bg-gray-100"
        >
          -
        </button>

        <span className="min-w-[30px] text-center text-sm font-semibold">
          {value}
        </span>

        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border bg-gray-50 border-gray-300 text-lg font-semibold hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

function Book() {
  const { slug } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const product = getProductBySlug(slug);

  const todayIso = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  const plan = location.state?.plan || null;

  const initialNotes = useMemo(() => {
    if (!plan?.itineraryText) return "";

    return plan.itineraryText;
  }, [plan]);

  const [form, setForm] = useState({
    startDate: "",
    endDate: "",

    adults: plan?.adults || 2,
    children: plan?.children || 0,
    infants: plan?.infants || 0,

    fullName: "",
    email: "",
    phone: "",

    pickup: "",

    notes: initialNotes,
  });

  if (!product) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl font-semibold">
            Booking not available
          </h1>

          <p className="mt-3 text-sm text-gray-600">
            We couldn't find that item.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block text-[#223441] underline"
          >
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

  const adultPrice = Number(product.priceFrom || 0);

  const childPrice = Number(
    product.childPriceFrom || adultPrice * 0.5,
  );

  const infantPrice = Number(product.infantPriceFrom || 0);

  const adultsTotal = form.adults * adultPrice;

  const childrenTotal = form.children * childPrice;

  const infantsTotal = form.infants * infantPrice;

  const total =
    adultsTotal + childrenTotal + infantsTotal;

  const totalTravelers =
    form.adults + form.children + form.infants;

  const whatsappLink = buildWhatsAppLink({
    product,
    booking: form,
    total,
  });

  function updateField(name, value) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function onChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function onSubmit(event) {
    event.preventDefault();

    const booking = {
      id: `BK-${Date.now()}`,

      createdAt: new Date().toISOString(),

      productSlug: product.slug,
      productTitle: product.title,

      startDate: form.startDate,
      endDate: form.endDate,

      adults: form.adults,
      children: form.children,
      infants: form.infants,

      totalTravelers,

      pricing: {
        adultPrice,
        childPrice,
        infantPrice,

        adultsTotal,
        childrenTotal,
        infantsTotal,

        total,
      },

      customer: {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
      },

      pickup: form.pickup,

      notes: form.notes,

      paymentStatus: "WHATSAPP_PENDING",
    };

    saveLastBooking(booking);

    window.open(whatsappLink, "_blank");

    navigate("/booking-confirmation", {
      state: { booking },
    });
  }

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold">
              Complete Your Booking
            </h1>

            <p className="mt-3 text-sm text-gray-600">
              Booking for{" "}
              <span className="font-semibold text-gray-900">
                {product.title}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="rounded-sm border border-gray-300 bg-white p-6"
          >
            <div className="grid gap-6">
              {/* DATE RANGE */}
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-900">
                  Travel Dates
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {/* START DATE */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Start Date
                    </label>

                    <div className="relative mt-2">
                      <CalendarDays
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="date"
                        name="startDate"
                        value={form.startDate}
                        min={todayIso}
                        onChange={onChange}
                        required
                        className="w-full rounded-sm border bg-gray-50 border-gray-300 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                      />
                    </div>
                  </div>

                  {/* END DATE */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      End Date
                    </label>

                    <div className="relative mt-2">
                      <CalendarDays
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="date"
                        name="endDate"
                        value={form.endDate}
                        min={form.startDate || todayIso}
                        onChange={onChange}
                        required
                        className="w-full rounded-sm border bg-gray-50 border-gray-300 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* TRAVELERS */}
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-900">
                  Travelers
                </h2>

                <div className="space-y-3">
                  <Counter
                    label="Adults"
                    value={form.adults}
                    min={1}
                    onChange={(value) =>
                      updateField("adults", value)
                    }
                  />

                  <Counter
                    label="Children"
                    value={form.children}
                    onChange={(value) =>
                      updateField("children", value)
                    }
                  />

                  <Counter
                    label="Infants"
                    value={form.infants}
                    onChange={(value) =>
                      updateField("infants", value)
                    }
                  />
                </div>
              </div>

              {/* PICKUP */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Pickup / Meeting Point
                </label>

                <div className="relative mt-2">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    name="pickup"
                    value={form.pickup}
                    onChange={onChange}
                    placeholder={
                      product.pickup ||
                      "Where should we pick you up?"
                    }
                    className="w-full rounded-sm border bg-gray-50 border-gray-300 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                  />
                </div>
              </div>

              {/* NAME */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Full Name
                </label>

                <div className="relative mt-2">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    required
                    className="w-full rounded-sm border bg-gray-50 border-gray-300 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Email
                </label>

                <div className="relative mt-2">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="w-full rounded-sm border bg-gray-50 border-gray-300 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Phone / WhatsApp
                </label>

                <div className="relative mt-2">
                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+263..."
                    className="w-full rounded-sm border bg-gray-50 border-gray-300 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                  />
                </div>
              </div>

              {/* NOTES */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Notes
                </label>

                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={onChange}
                  rows={5}
                  placeholder="Anything we should know?"
                  className="mt-2 w-full rounded-sm border bg-gray-50 border-gray-300 px-3 py-3 text-sm outline-none focus:border-[#223441]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
                style={{
                  backgroundColor: "#223441",
                  borderRadius: "2px",
                }}
              >
                Confirm & Send on WhatsApp
              </button>
            </div>
          </form>

          {/* BOOKING SUMMARY */}
          <aside className="h-fit rounded-sm border bg-gray-50 border-gray-300 bg-white p-6 lg:sticky lg:top-32">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-[#223441]" />

              <h2 className="text-lg font-semibold">
                Booking Summary
              </h2>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="text-lg font-semibold text-gray-900">
                {product.title}
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span>
                  Adults x {form.adults}
                </span>

                <span className="font-semibold">
                  ${adultsTotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  Children x {form.children}
                </span>

                <span className="font-semibold">
                  ${childrenTotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  Infants x {form.infants} 
                </span>

                <span className="font-semibold">
                  ${infantsTotal}
                </span>
              </div>
            </div>

            <div className="mt-6 border-t  border-gray-300 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#223441]">
                  ${total}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-sm bg-gray-100 p-4 text-xs text-gray-700">
              Booking requests are sent directly through WhatsApp for confirmation.
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default Book;