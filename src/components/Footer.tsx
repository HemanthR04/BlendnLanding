
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          Built by{" "}
          <a href="https://unbothered.studio" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            Studio Unbothered
          </a>{" "}
          |{" "}
          <a href="mailto:contact@unbothered.studio" className="text-pulse-500 hover:underline">
            contact@unbothered.studio
          </a>
        </p>
      </div>
    </footer>;
};
export default Footer;
