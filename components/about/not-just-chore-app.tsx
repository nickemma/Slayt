"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

const comparisons = [
  {
    gray: "Most chore apps track tasks.",
    teal: "Slayt builds habits.",
    icon: "clipboard",
  },
  {
    gray: "Most reward systems create entitlement.",
    teal: "Slayt links effort to growth.",
    icon: "gift",
  },
  {
    gray: "Most reminders create dependence.",
    teal: "Slayt reduces reminders over time.",
    icon: "bell",
  },
];

export default function NotJustChoreApp() {
  return (
    <section className="bg-background py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={"We\u2019re not just a chore app."}
          subtitle="Slayt focuses on three key behaviours:"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {comparisons.map((c, i) => (
            <motion.div
              key={c.teal}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-3">{c.gray}</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L2 5v6l6 4 6-4V5L8 1z" fill="white" />
                  <path
                    d="M5.5 8l2 2 3-3.5"
                    stroke="hsl(174, 100%, 35%)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-semibold text-background">
                  {c.teal}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
