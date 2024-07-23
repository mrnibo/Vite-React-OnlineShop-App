import React from "react";
import { FaShippingFast, FaDollarSign, FaLeaf } from "react-icons/fa";
import FeatureItem from "../ui/FeaturesItem";
import { DeTitle } from "../ui/DeTitle";

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Fast Shipping",
      description:
        "Get your bananas delivered within 24 hours anywhere in the city.",
    },
    {
      icon: <FaDollarSign />,
      title: "Best Prices",
      description: "We offer competitive pricing on all our fresh bananas.",
    },
    {
      icon: <FaLeaf />,
      title: "Organic Produce",
      description:
        "Our bananas are 100% organic and sourced from sustainable farms.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container mx-auto px-4 text-center">
        <DeTitle size="sm" className="mb-8">
          Why Shop With Us?
        </DeTitle>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
