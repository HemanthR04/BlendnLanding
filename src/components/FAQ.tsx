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
        name: "Is Blend’n free for organizers?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes! Listing 1 event per month is free. You only pay for unlimited event listing and optional Pro tools like analytics, push-notifications, and branding.",
        },
      },
      {
        "@type": "Question",
        name: "Can I moderate the in-event chatroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Pro organizers can appoint chat moderators and pin messages.",
        },
      },
      {
        "@type": "Question",
        name: "Can I promote my brand or sponsors?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Absolutely. Upload stories or run featured slots with us.",
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
          FAQs for Organizers
        </h2>
        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Everything you need to know before listing your event.
        </p>

        <div className="max-w-2xl md:max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="pricing-org" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                Is Blend’n free for organizers?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Yes! Listing 1 event per month is free. You only pay for unlimited event
                  listing and optional Pro tools like analytics, push-notifications, and
                  branding.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="moderation" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                Can I moderate the in-event chatroom?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Pro organizers can appoint chat moderators and pin messages.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="branding" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                Can I promote my brand or sponsors?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Absolutely. Upload stories or run featured slots with us.
                </p>
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


