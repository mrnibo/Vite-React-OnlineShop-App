import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="mb-4 sm:mb-0">
            <Link href="/">
              <a className="text-2xl font-bold text-white">{siteConfig.name}</a>
            </Link>
            <p className="mt-2 text-sm">{siteConfig.description}</p>
          </div>
          <div className="flex space-x-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-white hover:text-gray-300" />
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl text-white hover:text-gray-300" />
            </a>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-white hover:text-gray-300" />
            </a>
            <a
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-white hover:text-gray-300" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul>
              {siteConfig.navItems.map((item) => (
                <li key={item.label} className="mb-1">
                  <Link href={item.href}>
                    <a className="hover:underline">{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
            <ul>
              {siteConfig.navMenuItems.map((item) => (
                <li key={item.label} className="mb-1">
                  <Link href={item.href}>
                    <a className="hover:underline">{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-2">
              Contact Us
            </h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="text-sm">Phone: {siteConfig.contact.phone}</p>
            <p className="text-sm">Address: {siteConfig.contact.address}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
