import React, { useEffect, useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Rahul Sharma",
    review:
      "Finding a PG used to be stressful, but PRIBHUM NEST made it so easy. The process was smooth and the property was exactly as shown!",
    location: "Delhi University",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Verma",
    review:
      "The best PG experience I’ve had! Safe, clean, and budget-friendly. Highly recommended to all working professionals.",
    location: "Noida Sector 62",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    review:
      "I moved to Gurgaon recently, and PRIBHUM NEST helped me settle in fast. Their support team is very responsive and friendly.",
    location: "Gurgaon Cyber City",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const { name, review, location, image } = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-t from-[#e0f7f5] via-white/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Hear From Our Happy Users
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Join thousands of students & professionals who trust{" "}
          <span className="text-teal-600 font-bold">PRIBHUM NEST</span> for their accommodation needs.
        </p>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl transition-all duration-700 ease-in-out max-w-xl mx-auto border border-white border-opacity-30">
            <div className="relative flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-teal-500 ring-offset-2">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <FaQuoteLeft className="text-teal-500 text-3xl mt-6 mb-4" />

              <p className="text-gray-700 italic text-lg leading-relaxed">
                “{review}”
              </p>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                <p className="text-sm text-teal-600">{location}</p>
              </div>
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex justify-center mt-10 gap-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white hover:bg-teal-100 border border-gray-200 text-teal-600 rounded-full shadow transition"
            >
              <VscChevronLeft size={22} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white hover:bg-teal-100 border border-gray-200 text-teal-600 rounded-full shadow transition"
            >
              <VscChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
