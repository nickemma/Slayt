"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-navy ">
            We built Slayt for families <br className="hidden md:block" />
            <span className="text-blue">like ours.</span>
          </h1>
          <p className="mt-4 max-w-lg text-muted_foreground ">
            {"Because parenting shouldn\u2019t feel like a daily argument"}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-[0.5rem] bg-blue px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:scale-105">
              Start Free <ArrowRight size={16} />
            </button>
            <button className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
                <Play size={16} fill="currentColor" />
              </span>
              See How It Works
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
