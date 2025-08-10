import React from "react";
import { Eye, MapPin, Megaphone, Users2, Share2, BarChart3 } from "lucide-react";

const OrganizerWhatIs = () => {
  return (
    <section id="what" className="py-12 sm:py-16 md:py-20 bg-white animate-on-scroll">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12">
          <div className="pulse-chip mx-auto mb-3">
            <span>What is Blend’n?</span>
          </div>
          <h2 className="section-title">Built for Organizers</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Blend’n is a location-aware social discovery app that lets users discover events and connect anonymously. For organizers, it’s your tool for real-time visibility, in-event engagement, and actionable insights.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[170px] gap-4 sm:gap-6">
          {/* A. Real-time audience visibility (Large) */}
          <div className="group relative col-span-1 md:col-span-3 md:row-span-2 rounded-3xl border bg-white p-6 sm:p-8 shadow-elegant transition-all hover:shadow-elegant-hover overflow-hidden">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-pulse-100 blur-3xl opacity-60" />
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-pulse-100 text-pulse-600 flex items-center justify-center">
                <Eye className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-pulse-700">Visibility</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900">
              Real-time audience visibility
            </h3>
            <p className="mt-3 text-gray-600 max-w-[38ch]">
              See who’s nearby, who’s in-venue, and how they’re engaging — live.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["Nearby", "In venue", "Engaged"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-xl border bg-white/70 p-3 text-center"
                >
                  <div className="mx-auto mb-1 h-6 w-6 rounded-lg bg-pulse-50 text-pulse-600 flex items-center justify-center">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* B. Event-level marketing (Medium) */}
          <div className="group relative col-span-1 md:col-span-3 md:row-span-1 rounded-3xl border bg-gradient-to-br from-pulse-50 to-white p-6 shadow-elegant hover:shadow-elegant-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-white text-pulse-600 border flex items-center justify-center">
                <Megaphone className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-pulse-700">Marketing</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900">
              Event-level marketing
            </h3>
            <p className="mt-2 text-gray-600">
              Reach the right people at the right time with context-aware promos.
            </p>
          </div>

          {/* C. Anonymous networking + matchmaking (Medium) */}
          <div className="group relative col-span-1 md:col-span-3 md:row-span-1 rounded-3xl border bg-white p-6 shadow-elegant hover:shadow-elegant-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-pulse-100 text-pulse-600 flex items-center justify-center">
                <Users2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-pulse-700">Connections</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900">
              Anonymous networking + matchmaking
            </h3>
            <p className="mt-2 text-gray-600">
              Spark safe, interest-based intros without revealing identities.
            </p>
            <div className="mt-4 flex -space-x-2">
              {["A", "B", "C", "D"].map((x) => (
                <div
                  key={x}
                  className="h-8 w-8 rounded-full border bg-pulse-50 text-[10px] text-pulse-700 flex items-center justify-center"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>

          {/* D. Story sharing & content virality (Wide) */}
          <div className="group relative col-span-1 md:col-span-4 md:row-span-1 rounded-3xl border bg-white p-6 shadow-elegant hover:shadow-elegant-hover overflow-hidden">
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-pulse-100 blur-3xl opacity-60" />
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-pulse-100 text-pulse-600 flex items-center justify-center">
                <Share2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-pulse-700">Content</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900">
              Story sharing & content virality
            </h3>
            <p className="mt-2 text-gray-600 max-w-[55ch]">
              Attendees post ephemeral stories tied to your event, amplifying reach beyond the venue.
            </p>
          </div>

          {/* E. In-event analytics & sentiment (Narrow) */}
          <div className="group relative col-span-1 md:col-span-2 md:row-span-1 rounded-3xl border bg-gradient-to-br from-white to-pulse-50 p-6 shadow-elegant hover:shadow-elegant-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-white text-pulse-600 border flex items-center justify-center">
                <BarChart3 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-pulse-700">Insights</span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-semibold text-gray-900">
              In-event analytics & sentiment
            </h3>
            <p className="mt-1.5 text-gray-600">
              Heatmaps, dwell time, and mood signals in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerWhatIs;


