import { Shield, Search, Lock, Code2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Instant Vulnerability Detection",
    description:
      "Quickly identify security flaws, bugs, and potential vulnerabilities in your code as you type, with real-time feedback and suggestions.",
    highlight: "Detects issues in milliseconds",
  },
  {
    icon: Search,
    title: "Comprehensive Code Insights",
    description:
      "Get detailed reports with actionable recommendations to improve code security, performance, and maintainability.",
    highlight: "In-depth analysis",
  },
  {
    icon: Lock,
    title: "Secure and Local Analysis",
    description: (
      <>
        All code analysis runs locally using{" "}
        <a
          href="https://lmstudio.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:text-primary-300 underline"
        >
          LMStudio
        </a>
        , ensuring your code never leaves your machine and maintaining complete
        privacy.
      </>
    ),
    highlight: "100% Private",
  },
  {
    icon: Code2,
    title: "Multi-Language Support",
    description:
      "Seamlessly works with Python, JavaScript, TypeScript, and more, providing language-specific security insights.",
    highlight: "10+ Languages",
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-50 mb-4">
            Advanced Security Features
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Protect your code with powerful security features powered by
            advanced AI technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-800/50 rounded-xl p-8 hover:bg-dark-800 transition-colors border border-dark-700 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-primary-500/10 text-primary-400 px-4 py-1 text-sm font-medium rounded-bl-lg">
                {feature.highlight}
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-dark-50 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
