"use client";

import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Blog1 from "@/images/blog1.avif";
import Author1 from "@/images/author1.avif";
import Blog2 from "@/images/blog2.avif";
import Author2 from "@/images/author2.avif";
import Blog3 from "@/images/blog3.avif";
import Author3 from "@/images/author3.avif";
import Blog4 from "@/images/blog4.avif";
import Blog5 from "@/images/blog5.avif";
import Blog6 from "@/images/blog6.avif";
import Blog7 from "@/images/blog7.avif";
import Blog8 from "@/images/blog8.avif";

const posts = [
    {
        slug: "stop-chore-battles",
        title: "How Slayt ends daily chore battles in families",
        tag: "Parenting",
        date: "May 10, 2026",
        readTime: "5 min",
        image: Blog1,
        author: "Christiano Ronaldo",
        authorImage: Author1,
    },
    {
        slug: "habits-vs-motivation",
        title: "Why habits beat motivation every time for kids",
        tag: "Psychology",
        date: "April 18, 2026",
        readTime: "4 min",
        image: Blog2,
        author: "Sarah Chen",
        authorImage: Author2,
    },
    {
        slug: "why-we-built-slayt",
        title: "Behind the build: why Slayt exists and the story of our first family",
        tag: "Story",
        date: "March 2, 2026",
        readTime: "6 min",
        image: Blog3,
        author: "Lionel Messi",
        authorImage: Author3,
    },
    {
        slug: "reward-systems-that-work",
        title: "Reward systems that actually change behavior",
        tag: "Behavior",
        date: "March 15, 2026",
        readTime: "5 min",
        image: Blog4,
        author: "Sarah Chen",
        authorImage: Author1,
    },
    {
        slug: "morning-routines-for-kids",
        title: "Morning routines that eliminate stress before school",
        tag: "Routine",
        date: "February 10, 2026",
        readTime: "4 min",
        image: Blog5,
        author: "Vinicius Jr",
        authorImage: Author2,
    },
    {
        slug: "screen-time-without-fights",
        title: "How to manage screen time without constant arguments",
        tag: "Parenting",
        date: "February 23, 2026",
        readTime: "3 min",
        image: Blog6,
        author: "Phil Foden",
        authorImage: Author3,
    },
    {
        slug: "building-responsibility-early",
        title: "The psychology of raising responsible kids early",
        tag: "Psychology",
        date: "January 10, 2026",
        readTime: "6 min",
        image: Blog7,
        author: "Kylian Mbappe",
        authorImage: Author1,
    },
    {
        slug: "slayt-family-system",
        title: "The Slayt family system explained (simple breakdown)",
        tag: "Product",
        date: "January 12, 2026",
        readTime: "4 min",
        image: Blog8,
        author: "Martha Silva",
        authorImage: Author2,
    },
];

const tagColors: Record<string, { bg: string; text: string; dot: string }> = {
    Parenting: { bg: "bg-rose-50", text: "text-rose-600", dot: "bg-rose-400" },
    Psychology: {
        bg: "bg-violet-50",
        text: "text-violet-600",
        dot: "bg-violet-400",
    },
    Story: { bg: "bg-amber-50", text: "text-amber-600", dot: "bg-amber-400" },
    Behavior: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        dot: "bg-emerald-400",
    },
    Routine: { bg: "bg-sky-50", text: "text-sky-600", dot: "bg-sky-400" },
    Product: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        dot: "bg-indigo-400",
    },
};

const allTags = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];

function TagPill({
    tag,
    active,
    onClick,
}: {
    tag: string;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                active
                    ? "bg-[#1a1a2e] text-white border-[#1a1a2e] shadow-lg"
                    : "bg-white text-[#5a5a7a] border-[#e8e4f0] hover:border-[#1a1a2e]/30"
            }`}
        >
            {active && (
                <motion.span
                    layoutId="activeTag"
                    className="absolute inset-0 rounded-full bg-[#1a1a2e]"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
            {tag}
        </motion.button>
    );
}

function PostCard({ post, index }: { post: (typeof posts)[0]; index: number }) {
    const colors = tagColors[post.tag] || {
        bg: "bg-gray-50",
        text: "text-gray-600",
        dot: "bg-gray-400",
    };

    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            layout
        >
            <Link href={`/blog/${post.slug}`}>
                <motion.div
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                        {post.image ? (
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span className="text-muted_foreground">
                                    No image
                                </span>
                            </div>
                        )}

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

                        {/* Top Bar: Tag + Read Time */}
                        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                            <span
                                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1 rounded-full ${colors.bg} ${colors.text} backdrop-blur-md shadow-sm`}
                            >
                                <span
                                    className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                                />
                                {post.tag}
                            </span>

                            <span className="text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                                {post.readTime} read
                            </span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="my-8 flex-1 flex flex-col">
                        {/* Title with underline animation */}
                        <div className="relative mb-6">
                            <h3 className="font-bold text-navy text-[22px] leading-tight group-hover:text-blue transition-colors duration-300">
                                {post.title}
                            </h3>
                            {/* Highlight line that animates behind the text on hover */}
                            <motion.span
                                animate={{ scaleX: hovered ? 1 : 0 }}
                                initial={{ scaleX: 0 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                                className="absolute -bottom-1 left-0 h-[14px] bg-[#c4b5fd]/35 rounded origin-left -z-10"
                                style={{ width: "68%" }}
                            />
                        </div>

                        {/* Author + Date */}
                        <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <Image
                                        src={post.authorImage || Author1}
                                        alt={post.author || "Author"}
                                        width={36}
                                        height={36}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-navy">
                                        {post.author}
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-muted_foreground font-medium">
                                {post.date}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

function FeaturedPost({ post }: { post: typeof posts }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentPost = posts[currentIndex];

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

    // Auto-rotate every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % posts.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [posts.length]);

    return (
        <Link href={`/blog/${currentPost.slug}`}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.015 }}
                className="group relative overflow-hidden rounded-3xl bg-[#1a1a2e] p-10 md:p-14 shadow-2xl cursor-pointer"
                onHoverStart={() => {
                    /* optional: pause rotation on hover */
                }}
            >
                {/* Animated orbs */}
                <motion.div
                    style={{ y }}
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#4f46e5]/20 blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-[#a78bfa]/20 blur-3xl pointer-events-none"
                />

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Featured Story
                    </motion.div>

                    <motion.h2
                        key={`title-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl group-hover:text-[#c4b5fd] transition-colors duration-500"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        {currentPost.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-5 text-white/60 max-w-xl text-base leading-relaxed"
                    >
                        A deep dive into how structure and systems reduce daily
                        friction and improve parenting outcomes for real
                        families.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-8 inline-flex items-center gap-3 bg-white text-[#1a1a2e] font-bold text-sm px-6 py-3 rounded-full group-hover:bg-[#c4b5fd] transition-colors duration-300"
                    >
                        Read full story
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.div>
                </div>

                {/* Decorative number */}
                <motion.div
                    key={`num-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-8 right-10 text-[120px] font-black text-white/[0.04] leading-none pointer-events-none select-none"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    {(currentIndex + 1).toString().padStart(2, "0")}
                </motion.div>
            </motion.div>
        </Link>
    );
}

export default function BlogPage() {
    const featured = posts[0];
    const [activeTag, setActiveTag] = useState("All");
    const filtered =
        activeTag === "All" ? posts : posts.filter((p) => p.tag === activeTag);

    return (
        <main
            className="relative overflow-hidden"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
            `}</style>

            <Navbar />

            {/* HERO */}
            <section className="relative overflow-hidden px-6 pt-24 pb-16">
                {/* Subtle grid bg */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, #d4d0e8 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                        opacity: 0.4,
                    }}
                />

                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-blue bg-[#fafafa] px-4 py-2 rounded-full mb-6 border border-[#e0e7ff]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                        Slayt Journal
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="text-5xl md:text-7xl font-black text-navy leading-[1.05] max-w-4xl"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Stories that change{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-blue">
                                how you parent
                            </span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.9,
                                    ease: "easeOut",
                                }}
                                className="absolute bottom-1 left-0 right-0 h-3 bg-navy/40 -z-0 origin-left rounded"
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 text-muted_foreground text-lg max-w-xl leading-relaxed"
                    >
                        Ideas, research, and honest stories for families
                        building better habits — one day at a time.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex gap-8"
                    >
                        {[
                            ["8", "Articles"],
                            ["5", "Topics"],
                            ["2026", "Since"],
                        ].map(([num, label]) => (
                            <div key={label}>
                                <div
                                    className="text-2xl font-black text-[#1a1a2e]"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                    }}
                                >
                                    {num}
                                </div>
                                <div className="text-xs text-muted_foreground mt-0.5">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FEATURED */}
            <section className="px-6 py-8">
                <div className="mx-auto max-w-6xl">
                    <FeaturedPost post={featured} />
                </div>
            </section>

            {/* FILTER + GRID */}
            <section className="px-6 py-12 pb-24">
                <div className="mx-auto max-w-6xl">
                    {/* Filter pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-2 mb-10"
                    >
                        {allTags.map((tag) => (
                            <TagPill
                                key={tag}
                                tag={tag}
                                active={activeTag === tag}
                                onClick={() => setActiveTag(tag)}
                            />
                        ))}
                    </motion.div>

                    {/* Section label */}
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-xs font-bold tracking-widest uppercase text-muted_foreground">
                            {activeTag === "All" ? "All stories" : activeTag}
                        </span>
                        <div className="flex-1 h-px bg-[#ede9f6]" />
                        <motion.span
                            key={filtered.length}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-xs text-muted_foreground"
                        >
                            {filtered.length} articles
                        </motion.span>
                    </div>

                    {/* Grid */}
                    <motion.div layout className="grid md:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((post, i) => (
                                <PostCard
                                    key={post.slug}
                                    post={post}
                                    index={i}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty state */}
                    <AnimatePresence>
                        {filtered.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-20 text-[#9a96b0]"
                            >
                                No articles in this category yet.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </main>
    );
}
