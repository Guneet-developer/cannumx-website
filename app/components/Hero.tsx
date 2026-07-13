"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Sparkles } from "lucide-react";

export default function Hero() {
  return <section id="home" className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden bg-[#07111d] px-5 text-center">
    <div className="absolute inset-0 grain opacity-[.07]" /><div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#c9ff4d]/10 blur-[130px]" />
    <motion.div initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8 }} className="relative z-10 max-w-6xl">
      <div className="eyebrow mb-8 inline-flex items-center gap-2 rounded-full border border-[#c9ff4d]/30 bg-[#c9ff4d]/10 px-4 py-2 text-[10px] text-[#c9ff4d]"><Sparkles size={13} /> AI systems for ambitious teams</div>
      <h1 className="display text-6xl font-extrabold text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">Build a business<br />that <span className="text-[#c9ff4d]">outgrows</span> you.</h1>
      <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">CannumX turns scattered operations into intelligent, revenue-generating systems—built around the way your company actually works.</p>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Link href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c9ff4d] px-7 py-4 font-bold text-[#07111d] transition hover:bg-white">Start a conversation <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></Link><Link href="#services" className="rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#c9ff4d] hover:text-[#c9ff4d]">Explore our work</Link></div>
    </motion.div>
    <div className="eyebrow absolute bottom-8 hidden items-center gap-3 text-xs text-white/35 md:flex"><span className="h-px w-12 bg-white/25" />Scroll to explore</div>
  </section>;
}
