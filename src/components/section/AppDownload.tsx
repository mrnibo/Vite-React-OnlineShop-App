import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { DeTitle } from "../ui/DeTitle";
import { Waves } from "../icons";

import { siteConfig } from "@/config/site";

const AppDownload: React.FC = () => {
  return (
    <section className="relative py-10">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400 relative z-10 ">
        <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl py-16 px-5 overflow-hidden shadow-md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DeTitle size="sm" className="mb-8">
              Get Our App
            </DeTitle>
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Download our app to shop for the freshest bananas on the go.
            Available on iOS and Android.
          </motion.p>
          <div className="flex justify-center items-center space-x-4">
            <motion.a
              href={siteConfig.links.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg shadow-lg z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FaApple className="text-2xl mr-2" />
              <span className="font-medium ">Download on the App Store</span>
            </motion.a>
            <span className="z-10">OR</span>
            <motion.a
              href={siteConfig.links.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg shadow-lg z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FaGooglePlay className="text-2xl mr-2" />
              <span className="font-medium">Get it on Google Play</span>
            </motion.a>
          </div>
          <div className="absolute bottom-0 left-0 w-full rounded-b-xl overflow-hidden">
            <Waves />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
