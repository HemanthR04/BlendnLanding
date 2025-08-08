import WaitlistDialog from "@/components/WaitlistDialog";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Blend’n and how is it different from dating apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Blend’n is an event discovery and real-life matching app. No bios, no endless swipes — just IRL vibes. You can check in at events, see who’s around anonymously, and match when it’s mutual.",
        },
      },
      {
        "@type": "Question",
        name: "How does Blend’n keep me safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Profiles are blurred by default and you choose when to reveal. One-tap reporting gets fast action, and events have active moderation to keep things safe and chill.",
        },
      },
      {
        "@type": "Question",
        name: "How does anonymous matching work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Your profile stays blurred until there’s a mutual match. You control when to reveal and who can see you. Switch between intents like dating, friends, networking, or collab.",
        },
      },
      {
        "@type": "Question",
        name: "What is Ghost Mode?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ghost Mode lets you browse events and people without appearing in the lineup. Tap in when you’re ready to be seen, tap out when you want to stay low‑key.",
        },
      },
      {
        "@type": "Question",
        name: "Is Blend’n on iOS and Android?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We’re launching on both iOS and Android. Join the waitlist to get the drop link the minute it’s live.",
        },
      },
      {
        "@type": "Question",
        name: "Is Blend’n free?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, the core experience is free at launch. We’re exploring optional premium perks for power users and hosts.",
        },
      },
    ],
  } as const;

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white relative">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="pulse-chip">
            <span>FAQ</span>
          </div>
        </div>

        <h2 className="text-5xl font-display font-bold mb-6 text-center">
          Questions? We got you.
        </h2>
        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Quick hits on safety, who it’s for, and when you can get it.
        </p>

        <div className="max-w-2xl md:max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="trust-safety" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                How does Blend’n keep me safe?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Profiles are blurred by default and you choose when to reveal. One-tap
                  reporting gets fast action, and events have active moderation to keep
                  things safe and chill.
                </p>
              </AccordionContent>
            </AccordionItem>

            

            <AccordionItem value="what-different" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                What is Blend’n and how is it different from dating apps?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Blend’n is an event discovery and IRL matching app. No bios, no endless
                  swipes — just real-time vibes. Check in at events, see who’s around
                  anonymously, and reveal only when there’s a mutual match.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pricing" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                Is Blend’n free?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Yes, the core experience is free at launch. We may add optional premium
                  perks for power users and event hosts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="anon-matching" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                How does anonymous matching work?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Your profile stays blurred until there’s a mutual match. You control when
                  to reveal and who can see you. Choose your intent: dating, friends,
                  networking, or collab.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ghost-mode" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                What is Ghost Mode?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Want to stay low‑key? Ghost Mode lets you browse events and people without
                  appearing in the lineup. Tap in when you’re ready to be seen, tap out when
                  you’re not.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="platforms" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                Is Blend’n on iOS and Android?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  We’re launching on both iOS and Android. Join the waitlist to get the drop
                  the minute it’s live.
                </p>
                <div className="mt-4 flex justify-center">
                  <WaitlistDialog>
                    <button
                      className="inline-flex items-center justify-center group text-center"
                      style={{
                        backgroundColor: "#FE5C02",
                        borderRadius: "1440px",
                        boxSizing: "border-box",
                        color: "#FFFFFF",
                        cursor: "pointer",
                        fontSize: "14px",
                        lineHeight: "20px",
                        padding: "10px 16px",
                        border: "1px solid white",
                      }}
                    >
                      Join the waitlist
                    </button>
                  </WaitlistDialog>
                </div>
              </AccordionContent>
            </AccordionItem>
            
          </Accordion>
        </div>
      </div>
      {/* SEO: FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default FAQ;


