import { Github, Linkedin, Shield, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://www.github.com/adithyahnair",
    target: "_blank",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/adithyahnair",
    target: "_blank",
  },
];

const contactEmails = ["adithyah.nair@gmail.com", "gokulnpc@gmail.com"];

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-primary-500 mr-3" />
            <span className="text-2xl font-bold text-dark-50">
              CodeGuardian
            </span>
          </div>
          <p className="text-dark-400 mb-6 max-w-md">
            Secure your code with advanced AI-powered analysis. Get real-time
            vulnerability detection and comprehensive security insights.
          </p>

          {/* Contact Information */}
          <div className="mb-6">
            <div className="flex flex-col items-center space-y-2">
              {contactEmails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center text-dark-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {email}
                </a>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.target}
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-dark-800 text-center">
          <p className="text-dark-400 text-sm">
            © {new Date().getFullYear()} CodeGuardian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
