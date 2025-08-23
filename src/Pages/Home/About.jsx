import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-100 px-6 py-16 text-gray-800 mt-15">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-teal-700 mb-6 border-b-4 border-teal-400 inline-block">
          About Pribhum Nest
        </h1>

        <p className="mb-6 text-lg leading-relaxed">
          <strong>Pribhum Nest</strong> is an online mutual support network for students and working professionals looking for PGs and Hostels across India. With years of experience and a deep understanding of tenant needs, we help you find accommodation that perfectly fits your lifestyle and budget.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          We operate directly with property owners and tenants to simplify the process of <strong>searching, visiting, negotiating, renting, and managing</strong> PG/Hostel spaces. Whether you're a student, traveler, or a working professional, our team is dedicated to helping you find the ideal place quickly and stress-free.
        </p>

        <div className="bg-teal-100 rounded-xl p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-800 mb-3">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Saving Time:</strong> Quick and easy rental process.</li>
            <li><strong>Saving Money:</strong> Affordable and transparent pricing.</li>
            <li><strong>Building Relationships:</strong> Long-term support and connections.</li>
          </ul>
        </div>

        <p className="mb-6 text-lg leading-relaxed">
          Since 2019, we’ve been helping people in the tourism and service industry across India with rental and lease needs — from short stays to long-term accommodations. Our platform is trusted by students, corporate professionals, business travelers, and more.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Whether you're looking to <strong>rent a room</strong> or <strong>list your property</strong>, Pribhum Nest is here to support you with efficient service and a user-friendly experience.
        </p>

        <div className="mt-10 text-center">
          <p className="text-xl font-semibold text-gray-700">Join our community and simplify your rental journey today!</p>
          <p className="text-sm text-gray-500 mt-2">For more info, contact us at: <a href="mailto:info@pgchoice.com" className="text-teal-600 font-medium">support@Pribhumnest.in</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
