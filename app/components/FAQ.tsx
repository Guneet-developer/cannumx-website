"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What industries does CannumX specialize in?",
        answer: "We work with SaaS, e-commerce, finance, and healthcare companies, helping them scale revenue with AI-driven solutions.",
    },
    {
        question: "How long does it take to see results?",
        answer: "Most clients begin seeing measurable improvements within 3–6 months, depending on the complexity of their systems.",
    },
    {
        question: "Do you build custom solutions?",
        answer: "Yes, every system we design is tailored to the unique needs of your business.",
    },
    {
        question: "Is CannumX suitable for startups?",
        answer: "Absolutely. We help startups establish scalable systems early, ensuring sustainable growth as they expand.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-900">
            <h2 className="text-4xl font-bold text-accent text-center mb-12">
                Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, i) => (
                    <div
                        key={faq.question}
                        className="border border-gray-700 rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex justify-between items-center px-6 py-4 bg-gray-800 hover:bg-gray-700 transition"
                        >
                            <span className="text-lg font-medium text-white">{faq.question}</span>
                            <ChevronDown
                                className={`w-5 h-5 text-accent transition-transform ${openIndex === i ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 py-4 bg-gray-700 text-gray-300"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
