"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function FutureVision() {
    return (
        <section className="py-24 bg-black text-center relative overflow-hidden">
            {/* Subtle background icon */}
            <Globe className="absolute opacity-10 w-64 h-64 text-accent top-10 left-1/2 -translate-x-1/2" />

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold text-accent mb-8 relative z-10"
            >
                The Future with CannumX
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-3xl mx-auto text-lg text-gray-300 relative z-10"
            >
                We envision a world where businesses harness the full power of AI to
                unlock limitless growth. CannumX is committed to building systems that
                not only solve today’s challenges but also prepare you for tomorrow’s
                opportunities.
            </motion.p>
        </section>
    );
}
