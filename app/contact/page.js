"use client"; // Ensure this file runs as a client component

import { useState } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_t8k4ea4", // Replace with your EmailJS service ID
        "template_1oeh7u6", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "iOibMqK03nJ5Bwkzi" // Replace with your EmailJS user ID
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="bg-gradient-to-br from-purple-500 to-purple-700 text-white py-12 relative">
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Contact Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 px-6">
          <div className="md:w-1/2 text-center md:text-left p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-wide">
              Let’s Connect
            </h2>
            <p className="text-lg mb-6 text-gray-200 leading-relaxed">
              I’d love to hear from you! Whether it’s a project inquiry or just
              a friendly hello, feel free to drop me a message.
            </p>

            <div className="mb-4 flex items-center text-lg text-gray-100">
              <i className="fas fa-envelope mr-3 text-xl text-blue-200"></i>
              <strong className="text-gray-300">Email:</strong>
              <a
                href="mailto:saleemahmadmir18@gmail.com"
                className="ml-2 text-blue-200 hover:text-purple-300 transition-colors font-medium relative group"
              >
                Saleemahmadmir18@gmail.com
                {/* Tooltip */}
                <span className="absolute bottom-0 left-0 mb-8 ml-2 hidden group-hover:block text-sm text-white bg-gray-700 rounded-md px-2 py-1">
                  Drop a message or mail for projects
                </span>
              </a>
            </div>

            <div className="mb-4 flex items-center text-lg text-gray-100">
              <i className="fas fa-map-marker-alt mr-3 text-xl text-blue-200"></i>
              <strong className="text-gray-300">Location:</strong>
              <span className="ml-2 text-gray-300">
                Jammu and Kashmir, India
              </span>
            </div>

            <div className="flex items-center text-lg text-gray-100">
              <i className="fas fa-phone-alt mr-3 text-xl text-blue-200"></i>
              <strong className="text-gray-300">Contact:</strong>
              <a
                href="tel:+6006798656"
                className="ml-2 text-blue-200 hover:text-purple-300 transition-colors font-medium"
              >
                +91-6006798656
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <div
              className="bg-white bg-opacity-30 text-purple-700 p-8 rounded-xl shadow-xl"
              style={{
                backdropFilter: "blur(10px)", // Applies the blur effect
                WebkitBackdropFilter: "blur(10px)", // Ensures compatibility with Safari"
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-purple-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-purple-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-purple-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 resize-none"
                  rows={5}
                ></textarea>
                <button
                  type="submit"
                  className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </form>
              {status && (
                <p className="text-center text-purple-600 mt-4">{status}</p>
              )}
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="w-full bg-purple-50 py-12 rounded-lg shadow-lg">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center text-purple-700 mb-8">
              Why Choose Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/Expertise.png"
                  alt="Expertise Icon"
                  className="w-16 mb-4"
                />
                <h4 className="text-xl text-gray-600 font-bold">Expertise</h4>
                <p className="text-gray-600">
                  Skilled in web development with a passion for building sleek,
                  responsive, and modern websites.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/support.png"
                  alt="Support Icon"
                  className="w-16 mb-4"
                />
                <h4 className="text-xl text-gray-600  font-bold">
                  24/7 Support
                </h4>
                <p className="text-gray-600">
                  Always here to assist you with your website and development
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/innovation.png"
                  alt="Innovation Icon"
                  className="w-16 mb-4"
                />
                <h4 className="text-xl text-gray-600  font-bold">Innovation</h4>
                <p className="text-gray-600">
                  Leveraging cutting-edge technologies to bring your ideas to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-purple-500 text-white py-12 rounded-lg shadow-lg">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-8">
              Testimonials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white text-purple-700 p-6 rounded-lg shadow-lg">
                <p className="text-lg italic">
                  "Mohammad salim's work exceeded my expectations. The website
                  was modern, responsive, and delivered on time. Highly
                  recommend!"
                </p>
                <p className="mt-4 font-bold text-right">- Khan Jafar</p>
              </div>
              <div className="bg-white text-purple-700 p-6 rounded-lg shadow-lg">
                <p className="text-lg italic">
                  "Truly a pleasure to work with. Mohammad Salim is professional
                  and attentive to details."
                </p>
                <p className="mt-4 font-bold text-right">
                  - Bca Department Of GDC Baramulla
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
