"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, TrendingUp } from "lucide-react";

const services = [
    {
        title: "AI Automation",
        description: "Streamline workflows and reduce manual effort with intelligent automation.",
        icon: Zap,
    },
    {
        title: "Custom Systems",
        description: "Tailored solutions built to fit your business needs and scale with growth.",
        icon: Cpu,
    },
    {
        title: "Revenue Growth",
        description: "Data-driven strategies to maximize efficiency and accelerate revenue.",
        icon: TrendingUp,
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-[#07111d] text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="display text-5xl font-bold text-white mb-4"
            >
                Our Services
            </motion.h2>
            <p className="mx-auto mb-12 max-w-xl text-white/55">Focused systems that create more capacity, clarity, and revenue.</p>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
                {services.map((service, i) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        whileHover={{ y: -8 }}
                        className="surface group rounded-2xl p-8 text-left transition"
                    >
                        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9ff4d] text-[#07111d]"><service.icon className="w-6 h-6" /></div>
                        <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                        <p className="leading-7 text-white/55">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
