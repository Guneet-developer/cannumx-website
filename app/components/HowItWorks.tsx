"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Wrench, Rocket } from "lucide-react";

const steps = [
    {
        title: "Discovery",
        description: "We analyze your business challenges and goals.",
        icon: Search,
    },
    {
        title: "Strategy",
        description: "We design a tailored AI-driven growth plan.",
        icon: Lightbulb,
    },
    {
        title: "Implementation",
        description: "We build and deploy automation systems.",
        icon: Wrench,
    },
    {
        title: "Growth",
        description: "We optimize continuously to maximize revenue.",
        icon: Rocket,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-black text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-accent mb-12"
            >
                How It Works
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto px-6">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="p-6 rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 transition"
                    >
                        <step.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
