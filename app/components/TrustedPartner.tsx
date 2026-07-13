"use client";

import { motion } from "framer-motion";

export default function TrustedPartner() {
    return (
        <section className="py-20 bg-gray-900 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-accent mb-6"
            >
                Your Trusted Growth Partner
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-3xl mx-auto text-lg text-gray-300"
            >
                At CannumX, we don’t just build systems — we build confidence.
                Our AI-driven solutions are designed to help businesses scale
                revenue, streamline operations, and stay ahead in a competitive world.
            </motion.p>
        </section>
    );
}
