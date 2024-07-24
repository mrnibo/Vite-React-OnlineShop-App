import React from "react";
import { motion } from "framer-motion";
import { DeTitle } from "../ui/DeTitle";

import { siteConfig } from "@/config/site";

const Contact: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DeTitle size="sm" className="mb-8">
            Contact Us
          </DeTitle>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We would love to hear from you! Whether you have a question about our
          products, need assistance, or just want to give us feedback, feel free
          to reach out.
        </motion.p>
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="w-full md:w-1/2 lg:w-1/2 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="bg-white p-6 rounded-lg shadow-lg text-left mr-5">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-orange-900 font-bold px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-1/2 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {siteConfig.contact.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> {siteConfig.contact.phone}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> {siteConfig.contact.address}
              </p>
              <p className="text-gray-700">
                Follow us on social media for updates and promotions!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
