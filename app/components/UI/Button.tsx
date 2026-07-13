"use client";

import { motion } from "framer-motion";

export default function Button({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-light text-white font-semibold shadow-lg hover:shadow-accent-light/50 transition"
        >
            {children}
        </motion.a>
    );
}
