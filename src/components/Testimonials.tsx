import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CodeGuardian has transformed our development workflow. The real-time vulnerability detection has helped us catch security issues early in the development cycle.",
    name: "Gokuleshwaran Narayanan",
    role: "Computer Scientist",
    rating: 5,
    image: "assets/gokul.jpg",
  },
  {
    quote:
      "The AI-powered code analysis is incredibly accurate. It's like having a security expert reviewing your code in real-time.",
    name: "Adithyah Nair",
    role: "Computer Scientist",
    rating: 5,
    image: "assets/adithyah.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-50 mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Discover how CodeGuardian is helping developers write secure code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-900/50 rounded-xl p-8 hover:bg-dark-900 transition-colors border border-dark-700 relative group"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              <blockquote className="text-dark-200 mb-6 relative">
                <span className="text-6xl text-primary-500/20 absolute -top-6 -left-4">
                  "
                </span>
                <p className="relative z-10 leading-relaxed">
                  {testimonial.quote}
                </p>
              </blockquote>

              <div className="flex items-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-medium text-dark-100">
                    {testimonial.name}
                  </div>
                  <div className="text-dark-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full text-sm">
                  Verified User
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
