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
      {/* Hero Section */}
      <FadeInSection delay={0}>
        <Hero />
      </FadeInSection>
      {/* Features Section */}
      <FadeInSection delay={0.2}>
        <Features />
      </FadeInSection>
      {/* Product Section */}
      <FadeInSection delay={0.3}>
        <Product />
      </FadeInSection>
      {/* Aplication Download Section */}
      <FadeInSection delay={0.4}>
        <AppDownload />
      </FadeInSection>
      {/* AboutUs Section */}
      <FadeInSection delay={0.5}>
        <AboutUs />
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection delay={0.6}>
        <Contact />
      </FadeInSection>
    </DefaultLayout>
  );
}
