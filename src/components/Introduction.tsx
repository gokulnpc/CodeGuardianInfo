import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Introduction() {
  const [showContent, setShowContent] = useState(true);

  const handleDiscoverClick = () => {
    setShowContent(false);
    // Smooth scroll to the Hero section
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-dark-950 transition-opacity duration-700 ${
        showContent ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-dark-950/90 backdrop-blur-sm" />

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Building Your Dream Product?
            <br />
            <span className="text-primary-400">
              Don't Let Security Be an Afterthought
            </span>
          </h2>

          <p className="text-lg text-dark-300 mb-8 leading-relaxed">
            As a developer focused on bringing your innovative startup idea to
            life, you're perfecting every feature and ensuring flawless
            functionality. But in the rush to build, critical security
            vulnerabilities like hardcoded APIs, SQL injections, and cross-site
            scripting often go unnoticed—putting your entire product at risk.
          </p>

          <button
            onClick={handleDiscoverClick}
            className="group inline-flex items-center text-primary-400 hover:text-primary-300 font-medium bg-dark-800/50 px-6 py-3 rounded-lg backdrop-blur-sm hover:bg-dark-800 transition-all"
          >
            Discover How We Can Help
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
