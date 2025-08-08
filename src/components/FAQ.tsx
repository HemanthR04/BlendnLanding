import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ = () => {
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

            <AccordionItem value="who-for" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                Who is Blend’n for?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Anyone meeting IRL: daters at fests, builders at meetups, creators & fans,
                  runners and gym pals, students on campus. Set your mode dating, networking, friendship, or business and match your vibe.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="when-download" className="border-gray-200">
              <AccordionTrigger className="text-left text-lg">
                When can I download Blend’n?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Dropping soon. Join the waitlist to get first access.
                </p>
                <div className="mt-4 flex justify-center">
                  <a
                    href="#newsletter"
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
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


