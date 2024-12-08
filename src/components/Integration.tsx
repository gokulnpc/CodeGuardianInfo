import { Code2 } from "lucide-react";

const integrations = [
  {
    name: "Visual Studio Code",
    description: "Primary IDE support with full feature integration",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    status: "Available Now",
    downloadLink: "https://code.visualstudio.com/download",
  },
];

export default function Integration() {
  return (
    <div className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-50 mb-4">
            IDE Integration
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Seamlessly integrate CodeGuardian with your development environment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Available Integration */}
          <div className="bg-gradient-to-br from-dark-800/50 to-dark-800/30 backdrop-blur rounded-xl p-8 border border-dark-700 relative group hover:border-primary-500/50 transition-colors">
            <div className="absolute top-0 right-0 bg-primary-500/10 text-primary-400 px-4 py-1 text-sm font-medium rounded-bl-lg">
              Available Now
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 relative">
                <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-xl"></div>
                <img
                  src={integrations[0].logo}
                  alt={integrations[0].name}
                  className="w-full h-full relative z-10"
                />
              </div>
              <h3 className="text-2xl font-semibold text-dark-50 mb-3">
                {integrations[0].name}
              </h3>
              <p className="text-dark-300 leading-relaxed">
                {integrations[0].description}
              </p>
              <a
                href={integrations[0].downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Download VS Code
              </a>
            </div>
          </div>

          {/* Future Integration */}
          <div className="bg-dark-800/10 backdrop-blur rounded-xl p-8 border border-dark-800/30 relative group">
            <div className="absolute top-0 right-0 bg-dark-700/20 text-dark-400 px-4 py-1 text-sm font-medium rounded-bl-lg">
              In Development
            </div>
            <div className="flex flex-col items-center text-center opacity-70">
              <div className="w-32 h-32 mb-6 bg-dark-800/30 rounded-full flex items-center justify-center">
                <Code2 className="w-16 h-16 text-dark-600" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-400 mb-3">
                Coming Soon
              </h3>
              <p className="text-dark-500 leading-relaxed">
                Support for additional IDEs and editors planned
              </p>
              <button
                className="mt-6 bg-dark-700/50 text-dark-400 px-6 py-2 rounded-lg font-medium cursor-not-allowed"
                disabled
              >
                Stay Tuned
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
