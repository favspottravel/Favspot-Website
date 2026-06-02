import Layout from "../components/layout/Layout";
import React, { useMemo, useState } from "react";
import { company } from "../data/content";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailto = useMemo(() => {
    const subject = `Website enquiry: ${form.name || "Guest"}`;
    const body = [
      form.name ? `Name: ${form.name}` : null,
      form.email ? `Email: ${form.email}` : null,
      "",
      form.message || "",
    ]
      .filter((line) => line !== null)
      .join("\n");

    return `mailto:${company.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form.email, form.message, form.name]);

  function onChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="mt-3 text-sm text-gray-600">
          Tell us what you’re planning and we’ll recommend the best options.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-sm border border-gray-300 bg-white p-6">
            <h2 className="text-md font-semibold">Send a message</h2>
            <p className="mt-2 text-sm text-gray-600">
              This will open your email app with the message filled in.
            </p>

            <div className="mt-6 grid gap-5">
              <label className="text-sm">
                <div className="font-medium text-gray-900">Your name</div>
                <input
                  type="text"
                  name="name"
                  placeholder="John"
                  value={form.name}
                  onChange={onChange}
                  className="mt-2 w-full rounded-sm border bg-gray-50 border-gray-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="text-sm">
                <div className="font-medium text-gray-900">Email</div>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  value={form.email}
                  onChange={onChange}
                  className="mt-2 w-full rounded-sm border bg-gray-50 border-gray-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="text-sm">
                <div className="font-medium text-gray-900">Message</div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  className="mt-2 w-full rounded-sm border bg-gray-50 border-gray-300 px-3 py-2 text-sm"
                  placeholder="Dates, number of people, preferences, and anything you want us to handle."
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailto}
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  style={{
                    backgroundColor: "#223441",
                    borderRadius: "2px",
                    color: "#ffffff",
                  }}
                >
                  Email us
                </a>
                <a
                  href={company.contact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium border border-gray-300 text-gray-900 hover:bg-gray-50"
                  style={{ borderRadius: "2px" }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-sm border border-gray-300 bg-white p-6">
            <h2 className="text-md font-semibold">{company.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{company.tagline}</p>
            <p className="mt-4 text-sm text-gray-700 leading-7">
              {company.summary}
            </p>

            <div className="mt-6 grid gap-2 text-sm text-gray-700">
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

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900">
                Why book with us
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {company.whyUs.map((reason) => (
                  <li key={reason} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#829442]" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
