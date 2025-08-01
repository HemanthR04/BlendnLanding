import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleJoinWaitlist = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for joining the waitlist!",
        description: "You'll receive updates about Blendn soon."
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return <section id="newsletter" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Waitlist</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left">Join the waitlist</h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            Be first to hear about Blendn's launch and get early access to the app.
          </p>
          
          <div className="flex justify-start">
            <button 
              onClick={handleJoinWaitlist}
              disabled={isSubmitting}
              className="flex items-center justify-center group text-center"
              style={{
                backgroundColor: '#FE5C02',
                borderRadius: '1440px',
                boxSizing: 'border-box',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '14px',
                lineHeight: '20px',
                padding: '16px 24px',
                border: '1px solid white',
              }}
            >
              {isSubmitting ? "Submitting..." : "Join the waitlist"}
              {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </button>
          </div>
        </div>
      </div>
    </section>;
};

export default Newsletter;