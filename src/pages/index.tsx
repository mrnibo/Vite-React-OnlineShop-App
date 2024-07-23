import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Hero from "@/components/section/Hero";
import FadeInSection from "@/components/tools/FadeInSection";
import Product from "@/components/section/Product";
import AppDownload from "@/components/section/AppDownload";
import Features from "@/components/section/Features";
import AboutUs from "@/components/section/AboutUs";
import Contact from "@/components/section/Contact";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="container">
        <FadeInSection>
          {/* Hero Section */}
          <Hero />
          {/* Features Section */}
          <Features />
          {/* Product Section */}
          <Product />
          {/* Aplication Download Section */}
          <AppDownload />
          {/* AboutUs Section */}
          <AboutUs />

          {/* Contact Section */}
          <Contact />
        </FadeInSection>
      </div>
    </DefaultLayout>
  );
}
