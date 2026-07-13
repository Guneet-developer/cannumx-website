"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
    "AI-first approach with proven ROI",
    "Tailored systems built for your business",
    "Automation that scales with growth",
    "Dedicated support and continuous optimization",
];

export default function WhyCannumX() {
    return (
        <section className="py-20 bg-gray-900 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-accent mb-12"
            >
                Why Choose CannumX?
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto px-6 text-left">
                {reasons.map((reason, i) => (
                    <motion.div
                        key={reason}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="flex items-start gap-3"
                    >
                        <CheckCircle className="w-6 h-6 text-accent mt-1" />
                        <p className="text-lg text-gray-300">{reason}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
