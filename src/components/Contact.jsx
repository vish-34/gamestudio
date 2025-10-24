// Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-white font-bold">
            Let's Build Something Exceptional
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Have a project in mind? Want to collaborate? Drop us a message and we’ll get back to you promptly.
          </p>
        </div>

        <form className="glassmorphic p-8 md:p-12 rounded-2xl shadow-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full form-input rounded-lg py-3 px-4 text-white placeholder-gray-400 bg-gray-800/40 backdrop-blur-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full form-input rounded-lg py-3 px-4 text-white placeholder-gray-400 bg-gray-800/40 backdrop-blur-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full form-input rounded-lg py-3 px-4 text-white placeholder-gray-400 bg-gray-800/40 backdrop-blur-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Project Inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full form-input rounded-lg py-3 px-4 text-white placeholder-gray-400 bg-gray-800/40 backdrop-blur-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tell us about your idea..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white py-4 px-8 rounded-xl font-heading text-lg uppercase tracking-wider shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
