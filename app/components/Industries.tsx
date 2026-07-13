"use client";

import { motion } from "framer-motion";
import { Building, ShoppingCart, Banknote, Stethoscope } from "lucide-react";

const industries = [
    {
        title: "SaaS",
        description: "Helping software companies scale with AI-driven automation.",
        icon: Building,
    },
    {
        title: "E-Commerce",
        description: "Optimizing online stores with intelligent systems and growth strategies.",
        icon: ShoppingCart,
    },
    {
        title: "Finance",
        description: "Streamlining financial workflows and boosting efficiency with AI.",
        icon: Banknote,
    },
    {
        title: "Healthcare",
        description: "Improving patient care and operations with smart automation.",
        icon: Stethoscope,
    },
];

export default function Industries() {
    return (
        <section className="py-24 bg-[#0b1929] text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="display text-5xl font-bold text-white mb-4"
            >
                Industries We Serve
            </motion.h2>
            <p className="mx-auto mb-12 max-w-xl text-white/55">Growth systems tailored to the dynamics of your market.</p>

            <div className="grid gap-4 md:grid-cols-4 max-w-6xl mx-auto px-6">
                {industries.map((industry, i) => (
                    <motion.div
                        key={industry.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        whileHover={{ y: -6 }}
                        className="surface rounded-2xl p-7 transition"
                    >
                        <industry.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">{industry.title}</h3>
                        <p className="text-white/55">{industry.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
