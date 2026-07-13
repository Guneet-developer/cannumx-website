"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section className="py-20 bg-black text-center">
            <h2 className="text-4xl font-bold text-accent mb-8">Get in Touch</h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto space-y-6 text-left"
            >
                <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-accent"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-accent"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-accent"
                        rows={5}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition"
                >
                    Send Message
                </button>

                {status === "loading" && (
                    <p className="text-gray-400 mt-4">Sending...</p>
                )}
                {status === "success" && (
                    <p className="text-green-400 mt-4">Message sent successfully!</p>
                )}
                {status === "error" && (
                    <p className="text-red-400 mt-4">Something went wrong. Try again.</p>
                )}
            </form>
        </section>
    );
}
