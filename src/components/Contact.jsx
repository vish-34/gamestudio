// Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold px-2">
            Let's Build Something Exceptional
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mt-3 sm:mt-4 px-4 sm:px-6 md:px-0">
            Have a project in mind? Want to collaborate? Drop us a message and we'll get back to you promptly.
          </p>
        </div>

        <form 
          className="glassmorphic p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-2xl space-y-4 sm:space-y-6" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full form-input rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white placeholder-gray-400 bg-gray-800/40 backdrop-blur-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full form-input rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white placeholder-gray-400 bg-gray-800/40 backdrop-blur-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="john.doe@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full form-input rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white placeholder-gray-400 bg-gray-800/40 backdrop-blur-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="Project Inquiry"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full form-input rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white placeholder-gray-400 bg-gray-800/40 backdrop-blur-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              placeholder="Tell us about your idea..."
              required
            ></textarea>
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-heading text-base sm:text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}