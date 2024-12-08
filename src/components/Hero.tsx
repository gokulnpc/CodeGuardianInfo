import { Shield, ArrowRight } from "lucide-react";
import CodePreview from "./CodePreview";

export default function Hero() {
  return (
    <div
      id="hero-section"
      className="bg-gradient-to-b from-dark-950 to-dark-900 text-dark-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 text-primary-500 mr-4" />
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                CodeGuardian
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight leading-tight">
              Uncover Code Vulnerabilities{" "}
              <span className="text-primary-400">Instantly!</span>
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl leading-relaxed">
              CodeGuardian is your trusted companion for secure coding, powered
              by advanced local AI. Get real-time security insights and
              comprehensive code protection without compromising performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=gokulnpc.codeguardian"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                Download Now
              </a>
              <a
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-dark-400 hover:border-primary-500 hover:text-primary-400 text-dark-300 px-8 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                Watch Tutorial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg blur opacity-30"></div>
              <CodePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
