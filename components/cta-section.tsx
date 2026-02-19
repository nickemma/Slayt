"use client";

import { motion } from "framer-motion";

interface CTASectionProps {
  heading: string;
  subtitle: string;
  note?: string;
}

export default function CTASection({
  heading,
  subtitle,
  note = "Cancel anytime. No pressure. Just peace.",
}: CTASectionProps) {
  return (
    <section className="bg-teal py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-navy text-balance">{heading}</h2>
        <p className="mt-4 text-sm font-medium text-navy/80">{subtitle}</p>
        <button className="mt-4 rounded-[0.5rem] bg-background px-10 py-3 text-sm font-semibold text-navy shadow-lg transition-transform hover:scale-105">
          Start Free
        </button>
        <p className="mt-4 text-xs text-navy/70">{note}</p>
      </motion.div>
    </section>
  );
}
