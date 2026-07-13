import Link from "next/link";

export default function ServicesPage() {
  return <main className="min-h-screen bg-[#102019] px-6 pb-20 pt-36 text-[#f3f2ec] sm:px-10"><div className="mx-auto max-w-4xl"><p className="eyebrow text-xs text-[#caff5a]">CannumX capabilities</p><h1 className="editorial-title mt-5 text-6xl tracking-[-.08em] sm:text-8xl">Growth systems,<br />built to move.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">We help businesses improve acquisition, conversion, retention, and operations through practical strategy, automation, and AI.</p><Link href="/#services" className="mt-10 inline-block rounded-full bg-[#caff5a] px-6 py-3 font-semibold text-[#102019]">Explore capabilities</Link></div></main>;
}
