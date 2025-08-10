import React from "react";

type EventTypeCard = {
  title: string;
  desc: string;
  image: string;
};

const types: EventTypeCard[] = [
  {
    title: "Live Music & Fests",
    desc:
      "From soundcheck to afterglow — hype it, clip it, keep the energy alive.",
    image:
      "/events/concert.webp",
  },
  {
    title: "Campus Fests & Hackathons",
    desc:
      "Find your crew, ship builds, and showcase wins. Organizers run it clean.",
    image:
      "/events/collegefest.webp",
  },
  {
    title: "Runs, Rides & Fitness",
    desc:
      "Team up, track streaks, and hit PRs together — from warm-up to cool-down.",
    image:
      "/events/fitnessclub.webp",
  },
  {
    title: "Conferences, Summits & Expos",
    desc:
      "Skip the small talk. Match with the right people and keep momentum post-event.",
    image:
      "/events/expo.webp",
  },
  {
    title: "House Parties & Private Events",
    desc:
      "Invite-only energy. Custom access, private chats, tight circles — your rules.",
    image:
      "/events/privateevents.webp",
  },
];

const OrganizerEventTypes = () => {
  return (
    <section id="events" className="min-h-screen w-full bg-transparent py-4 sm:py-6">
      <div className="h-full w-full">
        <div className="h-full w-full bg-neutral-950 p-4 sm:p-8 md:p-10 flex flex-col">
          <div className="text-center mb-8 sm:mb-10 shrink-0 px-2">
            <div className="mx-auto mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Built for all kinds of events
            </div>
            <h2 className="section-title text-white max-w-3xl mx-auto bg-gradient-to-r from-white via-white/70 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              From fests to forums
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 items-stretch">
          {types.map((t, index) => (
            <article
              key={t.title}
              className="group relative overflow-hidden rounded-none bg-black h-96 sm:h-[26rem] md:h-[30rem] lg:h-[34rem] xl:h-[36rem] opacity-0 translate-y-3 will-change-transform will-change-opacity animate-on-scroll ring-1 ring-white/10 hover:ring-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300"
              style={{ animationDelay: `${index * 60}ms` }}
              aria-label={t.title}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${t.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-white text-base sm:text-lg font-semibold transition-all duration-300 translate-y-1 group-hover:translate-y-0 drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]">
                  {t.title}
                </h3>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerEventTypes;


