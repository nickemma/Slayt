"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const rows = [
  { feature: "Unlimited Tasks", free: true, pro: true },
  { feature: "Habit Score", free: true, pro: true },
  { feature: "Advanced Analytics", free: false, pro: true },
  { feature: "Multi-family View", free: false, pro: true },
  { feature: "Custom Streak Rewards", free: false, pro: true },
];

export default function ComparePlans() {
  return (
    <section className="bg-background py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Compare Future-Proof"
          subtitle="Slayt focuses on three key behaviours:"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-lg overflow-hidden rounded-2xl bg-background shadow-md"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4">
            <span className="text-sm font-bold text-navy">Features</span>
            <div className="text-center">
              <p className="text-sm font-bold text-navy">Free plan</p>
              <p className="text-xs text-muted-foreground">$0 / forever</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-navy">Pro plan</p>
              <span className="inline-block rounded-[0.5rem] bg-teal px-3 py-0.5 text-xs font-semibold text-navy">
                Coming soon
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 gap-4 px-6 py-4 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="text-sm text-muted-foreground">
                {row.feature}
              </span>
              <span className="flex justify-center">
                {row.free ? (
                  <Check size={18} className="text-blue" />
                ) : (
                  <X size={18} className="text-destructive" />
                )}
              </span>
              <span className="flex justify-center">
                <Check size={18} className="text-blue" />
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
