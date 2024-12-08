import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const faqs = [
  {
    question: "How does CodeGuardian work?",
    answer: (
      <>
        CodeGuardian uses advanced local AI through{" "}
        <a
          href="https://lmstudio.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:text-primary-300 underline"
        >
          LMStudio
        </a>{" "}
        to analyze your code in real-time. It scans for security
        vulnerabilities, suggests improvements, and provides detailed reports
        without sending your code to external servers. The extension integrates
        seamlessly with your IDE and provides instant feedback as you code.
      </>
    ),
  },
  {
    question: "Is my code secure during analysis?",
    answer:
      "Absolutely! CodeGuardian performs all analysis locally on your machine. Your code never leaves your computer, ensuring complete privacy and security. We use LMStudio for local AI processing, eliminating the need for cloud-based analysis.",
  },
  {
    question: "What programming languages does it support?",
    answer:
      "CodeGuardian supports a wide range of programming languages including Python, JavaScript, TypeScript, Java, C++, Ruby, Go, PHP, and more. Our language-specific analysis engines provide accurate, context-aware security recommendations for each supported language.",
  },
  {
    question: "How do I install CodeGuardian?",
    answer:
      'Installing CodeGuardian is simple: 1) Open VSCode 2) Go to the Extensions marketplace 3) Search for "CodeGuardian" 4) Click Install. The extension will automatically configure itself and be ready to use immediately after installation.',
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes! CodeGuardian is designed to work completely offline. Once installed, you don't need an internet connection for code analysis. All security rules, AI models, and analysis tools are available locally on your machine.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleContactSupport = () => {
    window.location.href =
      "mailto:?cc=adithyah.nair@gmail.com,gokulnpc@gmail.com&subject=CodeGuardian Support Request";
  };

  return (
    <div className="py-24 bg-dark-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-400 font-medium mb-2 block">FAQ</span>
          <h2 className="text-3xl font-bold text-dark-50 mb-4">
            Got Questions?
          </h2>
          <p className="text-lg text-dark-300">
            Find answers to common questions about CodeGuardian
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-800/50 rounded-xl border border-dark-700 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none focus:bg-dark-800/80"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-dark-100">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-400 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-dark-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-300 mb-4">Still have questions?</p>
          <button
            onClick={handleContactSupport}
            className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact our support team
          </button>
        </div>
      </div>
    </div>
  );
}
