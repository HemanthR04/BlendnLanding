import React from "react";

const rows = [
  { feature: "Event Listing", free: "✅ (1 per month)", pro: "✅ (Unlimited)" },
  { feature: "Attendee Check-In", free: "✅", pro: "✅" },
  { feature: "Swipe Matchmaking Access", free: "✅", pro: "✅" },
  { feature: "Story Posting (Org only)", free: "✅", pro: "✅" },
  { feature: "Full Story Analytics", free: "❌", pro: "✅" },
  { feature: "Chatroom Moderator Access", free: "❌", pro: "✅" },
  { feature: "Custom Branding", free: "❌", pro: "✅" },
  { feature: "Featured Listing / City Rank", free: "❌", pro: "✅" },
];

const OrganizerPricing = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12">
          <div className="pulse-chip mx-auto mb-3"><span>What You Get</span></div>
          <h2 className="section-title">Simple tiers, clear value</h2>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border">
          <table className="min-w-full text-left">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-gray-600 font-medium">Feature</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Free Tier</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Pro Organizer Tier</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-900">{r.feature}</td>
                  <td className="px-4 py-3">{r.free}</td>
                  <td className="px-4 py-3">{r.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrganizerPricing;


