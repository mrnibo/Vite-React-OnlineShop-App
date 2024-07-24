import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { DeTitle } from "../ui/DeTitle";
import FadeInSection from "../tools/FadeInSection";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "What is the shelf life of your bananas?",
    answer:
      "Our bananas typically have a shelf life of 5-7 days when stored at room temperature.",
  },
  {
    question: "Do you offer organic bananas?",
    answer:
      "Yes, we offer 100% organic bananas sourced from sustainable farms.",
  },
  {
    question: "How do I store bananas to keep them fresh longer?",
    answer:
      "To keep bananas fresh longer, store them in a cool, dry place away from direct sunlight.",
  },
  {
    question: "Can I order bananas in bulk?",
    answer:
      "Yes, we offer bulk ordering options for both individual and wholesale customers.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all our products. Please contact our support for more details.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <FadeInSection delay={0}>
          <DeTitle size="sm" className="mb-8 text-center">
            Frequently Asked Questions
          </DeTitle>
        </FadeInSection>
        <div className="bg-white rounded-xl shadow-lg p-6">
          {faqList.map((faq, index) => (
            <FadeInSection delay={0.3}>
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left text-gray-700 font-semibold p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-primary"
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div className="p-4 text-gray-600 bg-gray-100 rounded-lg mt-2">
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
