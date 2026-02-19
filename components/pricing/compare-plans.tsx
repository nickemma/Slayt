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
    <section className="bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Compare Future-Proof"
          subtitle="Slayt focuses on three key behaviours:"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 flex justify-center items-stretched"
        >
          {/* LEFT — Features Column */}
          <div className="bg-muted/30 px-12 py-14">
            <h3 className="text-xl font-bold text-navy mb-12 h-20">Features</h3>

            <div className="space-y-12">
              {rows.map((row) => (
                <p key={row.feature} className="text-xl text-muted-foreground">
                  {row.feature}
                </p>
              ))}
            </div>
          </div>

          {/* MIDDLE — Free Plan (Highlighted) */}
          <div className="relative bg-white px-12 py-14 shadow-lg">
            <div className="absolute top-0 left-0 h-1 w-full bg-blue" />

            <div className="text-center mb-14">
              <h3 className="text-xl font-bold text-navy">Free plan</h3>
              <p className="mt-3 text-xl font-bold text-navy">$0 / forever</p>
            </div>

            <div className="space-y-12 flex flex-col items-center">
              {rows.map((row) =>
                row.free ? (
                  <Check key={row.feature} size={26} className="text-blue" />
                ) : (
                  <X key={row.feature} size={26} className="text-destructive" />
                ),
              )}
            </div>
          </div>

          {/* RIGHT — Pro Plan */}
          <div className="bg-muted/20 px-12 py-14">
            <div className="text-center mb-12">
              <h3 className="text-xl font-bold text-navy">Pro plan</h3>
              <div className="bg-teal px-8 py-2 text-xl font-bold text-navy">
                Coming soon
              </div>
            </div>

            <div className="space-y-12 flex flex-col items-center">
              {rows.map((row) =>
                row.pro ? (
                  <Check key={row.feature} size={26} className="text-blue" />
                ) : (
                  <X key={row.feature} size={26} className="text-destructive" />
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
