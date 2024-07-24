import React from "react";
import { motion } from "framer-motion";
import { DeTitle } from "../ui/DeTitle";

const AboutUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DeTitle size="sm" className="mb-8">
            {" "}
            About Us
          </DeTitle>
        </motion.div>
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We are passionate about bringing you the freshest, most delicious
          bananas directly from the best farms. Our mission is to provide
          high-quality, organic bananas that are not only tasty but also promote
          a healthier lifestyle.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver the highest quality bananas to our customers while
              supporting sustainable farming practices and promoting a healthy
              lifestyle.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Quality, sustainability, and customer satisfaction are at the core
              of everything we do. We believe in ethical sourcing and supporting
              local farmers.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">Meet the Team</h3>
            <p className="text-gray-600">
              Our dedicated team works tirelessly to ensure that you get the
              freshest bananas delivered to your door. Get to know the people
              behind our success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
