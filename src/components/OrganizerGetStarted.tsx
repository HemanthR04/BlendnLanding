import React, { useState } from "react";

const OrganizerGetStarted = () => {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    eventTypes: "",
    city: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/organizer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          organization: form.organization,
          email: form.email,
          eventTypes: form.eventTypes,
          city: form.city,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="get-started" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="section-title mb-2">You’re in!</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Thanks for reaching out. Our team will contact you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12">
          <div className="pulse-chip mx-auto mb-3"><span>Let’s Get You Started</span></div>
          <h2 className="section-title">Ready to host smarter events?</h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="Organization"
            value={form.organization}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
          />
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="Type of Events Hosted"
            value={form.eventTypes}
            onChange={(e) => setForm({ ...form, eventTypes: e.target.value })}
          />
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="City"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <button
              type="submit"
              className="flex-1 bg-pulse-600 hover:bg-pulse-700 text-white rounded-full px-6 py-3"
            >
              List My Event
            </button>
            <button
              type="submit"
              className="flex-1 bg-gray-900 hover:bg-black text-white rounded-full px-6 py-3"
            >
              Request Demo
            </button>
          </div>
          {status === "error" && (
            <p className="text-sm text-red-600 mt-2">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default OrganizerGetStarted;


