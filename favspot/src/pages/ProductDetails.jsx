import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { company, getProductBySlug } from "../data/content";
import { saveLastBooking } from "../lib/bookingStorage";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import ExpandableText from "../components/shared/ExpandableText";
import {
  Mail,
  User,
  BadgeCheck,
  BadgeX,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Info,
  Layers,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

function List({ title, items, icon: Icon }) {
  if (!items?.length) return null;
  return (
    <div className="mt-8">
      <h2 className="text-md font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-gray-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            {Icon ? (
              <Icon size={16} className="mt-0.5 shrink-0 text-[#223441]" />
            ) : (
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#223441]" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
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
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-300 bg-gray-50 text-lg font-semibold hover:bg-gray-100"
        >
          -
        </button>

        <span className="min-w-[30px] text-center text-sm font-semibold">
          {value}
        </span>

        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-300 bg-gray-50 text-lg font-semibold hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

function Gallery({ images }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (!images?.length) return null;

  const MAX_PREVIEW = 10;
  const previewImages = images.slice(0, MAX_PREVIEW);

  const isFirst = index === 0;
  const isLast = index === images.length - 1;

  function openModal(startIndex = 0) {
    setIndex(startIndex);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function prev() {
    if (!isFirst) setIndex((i) => i - 1);
  }

  function next() {
    if (!isLast) setIndex((i) => i + 1);
  }

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="relative w-full overflow-hidden rounded-sm border border-gray-300 bg-white">
        <img
          src={images[index]}
          alt={`Gallery ${index + 1}`}
          className="h-80 w-full object-cover"
        />

        {/* LEFT */}
        <button
          onClick={prev}
          disabled={isFirst}
          className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-3 transition
    ${
      isFirst
        ? "bg-black/40 text-white/40 cursor-not-allowed"
        : "bg-black/40 text-white hover:bg-black/70"
    }`}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          disabled={isLast}
          className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-3 transition
    ${
      isLast
        ? "bg-black/40 text-white/40 cursor-not-allowed"
        : "bg-black/40 text-white hover:bg-black/70"
    }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2 w-full">
        {Array.from({ length: 6 }).map((_, i) => {
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 640;

          const limit = isMobile ? 3 : 6;
          const isHiddenOnMobile = i >= limit;

          const src = previewImages[i];
          const isLastSlot = i === limit - 1;

          if (isHiddenOnMobile) return null;

          return (
            <button
              key={i}
              onClick={() => {
                if (isLastSlot) {
                  openModal(0);
                } else {
                  openModal(i);
                }
              }}
              className={`relative h-16 w-full overflow-hidden rounded-sm border ${
                i === index ? "border-[#223441]" : "border-gray-300"
              }`}
            >
              {/* IMAGE */}
              {src && (
                <img src={src} alt="" className="h-full w-full object-cover" />
              )}

              {/* VIEW ALL */}
              {isLastSlot && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 text-white text-xs font-semibold">
                  View All
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black p-4" onClick={closeModal}>
          <div
            className="mx-auto flex h-full max-w-6xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between py-3 text-white">
              <div>
                Photo {index + 1} of {images.length}
              </div>
              <button onClick={closeModal}>Close</button>
            </div>

            {/* IMAGE */}
            <div className="relative flex-1 flex items-center justify-center">
              <img
                src={images[index]}
                className="max-h-full max-w-full object-contain"
              />

              {/* ARROWS */}
              {/* LEFT */}
              <button
                onClick={prev}
                disabled={isFirst}
                className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-3 transition
    ${
      isFirst
        ? "bg-black/40 text-white/40 cursor-not-allowed"
        : "bg-black/40 text-white hover:bg-black/70"
    }`}
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                disabled={isLast}
                className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-3 transition
    ${
      isLast
        ? "bg-black/40 text-white/40 cursor-not-allowed"
        : "bg-black/40 text-white hover:bg-black/70"
    }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    startDate: today,
    endDate: today,
    adults: 2,
    children: 0,
    infants: 0,
    fullName: "",
    email: "",
  });

  function updateField(name, value) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function onChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  const adultPrice = Number(product.priceFrom || 0);

  const childPrice = Number(product.childPriceFrom || adultPrice * 0.5);

  const infantPrice = Number(product.infantPriceFrom || 0);

  const adultsTotal = form.adults * adultPrice;

  const childrenTotal = form.children * childPrice;

  const infantsTotal = form.infants * infantPrice;

  const total = adultsTotal + childrenTotal + infantsTotal;

  if (!product) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl font-semibold">Product not found</h1>
          <p className="mt-3 text-sm text-gray-600">
            The item you're looking for doesn't exist (or the link is wrong).
          </p>
          <Link to="/" className="mt-6 inline-block text-[#223441] underline">
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

  const activityOffers = Array.from(
    new Set(
      [
        ...(Array.isArray(product.highlights) ? product.highlights : []),
        ...(Array.isArray(product.includes) ? product.includes : []),
      ]
        .map((item) => String(item || "").trim())
        .filter(Boolean),
    ),
  );

  const galleryImages = product.gallery?.length
    ? product.gallery
    : [product.imageUrl].filter(Boolean);

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-3">
        <div className="grid gap-10 lg:grid-cols-[3fr_1.2fr]">
          <div>
            {/* GALLERY */}
            <Gallery images={galleryImages} />
            {/* TITLE */}
            <h1 className="mt-6 text-2xl font-semibold tracking-wide text-gray-900">
              {product.title}
            </h1>
            {/* QUICK INFO */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
              {product.duration ? (
                <div className="flex items-center gap-1 rounded-sm border border-gray-300 px-2 py-1">
                  <Clock3 size={14} className="text-[#223441]" />
                  <span>{product.duration}</span>
                </div>
              ) : null}

              {product.groupSize ? (
                <div className="flex items-center gap-1 rounded-sm border border-gray-300 px-2 py-1">
                  <Users size={14} className="text-[#223441]" />
                  <span>{product.groupSize}</span>
                </div>
              ) : null}

              {product.destination ? (
                <div className="flex items-center gap-1 rounded-sm border border-gray-300 px-2 py-1">
                  <MapPin size={14} className="text-[#223441]" />
                  <span>{product.destination}</span>
                </div>
              ) : null}

              {product.activityType ? (
                <div className="flex items-center gap-1 rounded-sm border border-gray-300 px-2 py-1">
                  <Layers size={14} className="text-[#223441]" />
                  <span>{product.activityType}</span>
                </div>
              ) : null}
            </div>
            <ExpandableText
              text={product.longDescription}
              lines={4}
              className="mt-3 text-sm text-gray-900 leading-loose"
              moreLabel="Show more details"
              lessLabel="Show less"
            />
            <div className="mt-8 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
              {product.route ? (
                <div>
                  <span className="font-semibold text-gray-900">Route:</span>{" "}
                  {product.route}
                </div>
              ) : null}
              {product.pickup ? (
                <div className="sm:col-span-2 flex items-center gap-2">
                  <MapPin size={16} className="text-[#223441]" />
                  <span className="font-semibold text-gray-900">
                    Pickup:
                  </span>{" "}
                  <span>{product.pickup}</span>
                </div>
              ) : null}
            </div>
            {/* HIGHLIGHTS */}
            <List title="Highlights" items={product.highlights} />

            {/* START TIMES */}
            <List title="Start Times" items={product.startTimes} />

            {/* INCLUDED */}
            <List title="Includes" items={product.includes} />

            {/* NOT INCLUDED */}
            <List title="Not Included" items={product.excludes} />

            {/* ACCESSIBILITY */}
            <List title="Accessibility" items={product.accessibility} />

            {/* WHAT TO BRING */}
            <List title="What to Bring" items={product.whatToBring} />

            {/* CANCELLATION */}
            <List title="Cancellation" items={product.cancellation} />
            {product.whatToKnow?.length ? (
              <div className="mt-10 rounded-sm border border-gray-300 bg-white p-6">
                <div className="flex items-center gap-2">
                  <Info size={18} className="text-[#223441]" />
                  <h2 className="text-md font-semibold">What to know</h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  {product.whatToKnow.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#223441]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside className="h-fit rounded-sm shadow-xl bg-white p-6 lg:sticky lg:top-32">
            <h1 className="text-xl font-semibold">Booking Enquiry</h1>
            <div className="text-sm text-gray-600">
              Send your enquiry and we'll confirm availability and payment
              options by email.
            </div>

            {/* BOOKING FORM */}
            <form
              onSubmit={(event) => {
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

                  pricing: {
                    total,
                  },

                  customer: {
                    fullName: form.fullName,
                    email: form.email,
                  },

                  paymentStatus: "EMAIL_ENQUIRY_PENDING",
                };

                saveLastBooking(booking);

                const subject = `Booking Enquiry - ${product.title}`;

                const body = [
                  `Hello ${company.name},`,
                  ``,
                  `I would like to enquire about the following booking:`,
                  ``,
                  `Product: ${product.title}`,
                  `Dates: ${form.startDate} -> ${form.endDate}`,
                  ``,
                  `Passengers:`,
                  `- Adults: ${form.adults}`,
                  `- Children: ${form.children}`,
                  `- Infants: ${form.infants}`,
                  ``,
                  `Customer Details:`,
                  `Name: ${form.fullName}`,
                  `Email: ${form.email}`,
                  ``,
                  `Estimated Total: $${total}`,
                  ``,
                  `Please confirm availability and payment options.`,
                ]
                  .filter(Boolean)
                  .join("\n");

                const mailtoLink = `mailto:${company.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                window.location.href = mailtoLink;
              }}
              className="mt-4"
            >
              <div className="space-y-6 rounded-sm">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Participants
                  </h3>

                  <div className="space-y-3">
                    <Counter
                      label="Adults"
                      value={form.adults}
                      min={1}
                      onChange={(value) => updateField("adults", value)}
                    />

                    <Counter
                      label="Children"
                      value={form.children}
                      onChange={(value) => updateField("children", value)}
                    />

                    <Counter
                      label="Infants"
                      value={form.infants}
                      onChange={(value) => updateField("infants", value)}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Select Dates
                  </h3>

                  <DateRange
                    onChange={(item) => {
                      setDateRange([item.selection]);

                      setForm((current) => ({
                        ...current,
                        startDate: item.selection.startDate
                          .toISOString()
                          .split("T")[0],
                        endDate: item.selection.endDate
                          .toISOString()
                          .split("T")[0],
                      }));
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    minDate={new Date()}
                    rangeColors={["#223441"]}
                    showDateDisplay={false}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Enter Your Details
                  </h3>

                  <div className="space-y-3">
                    {/* NAME */}
                    <div className="relative">
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
                        placeholder="Full Name"
                        className="w-full rounded-sm border border-gray-300 bg-gray-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="relative">
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
                        placeholder="Email Address"
                        className="w-full rounded-sm border border-gray-300 bg-gray-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                      />
                    </div>
                  </div>
                </div>

                {/* SUMMARY */}
                <div className="border-t border-gray-300 pt-2 space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Adults x {form.adults}</span>
                    <span className="font-semibold">
                      ${form.adults * Number(product.priceFrom || 0)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Children x {form.children}</span>
                    <span className="font-semibold">
                      $
                      {form.children *
                        Number(
                          product.childPriceFrom || product.priceFrom * 0.5,
                        )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Infants x {form.infants}</span>
                    <span className="font-semibold">
                      ${form.infants * Number(product.infantPriceFrom || 0)}
                    </span>
                  </div>

                  <div className="border-t border-gray-300 pt-4 flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-[#223441]">
                      ${total}
                    </span>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{
                    backgroundColor: "#223441",
                    borderRadius: "2px",
                  }}
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
