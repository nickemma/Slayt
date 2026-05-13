"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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

export const posts = [
    {
        title: "How Slayt helps families stop daily chore battles",
        tag: "Parenting",
        date: "May 20, 2026",
        readTime: "5 min read",
        slug: "stop-chore-battles",
        image: Blog1,
        author: "Joshua Wood",
        authorImage: Author1,
        content: `
            <p>
                Parenting culture has changed dramatically over the years.
                Conversations around leadership, gender roles, family structure, and responsibility
                have become deeply emotional topics inside many homes.
            </p>

            <p>
                In 2007, a controversial documentary called
                <strong> The Monstrous Regiment of Women </strong>
                reignited debates about feminism, authority, and motherhood inside conservative circles.
            </p>

            <blockquote>
                “When fear enters parenting conversations, empathy usually disappears.”
            </blockquote>

            <h2>Why this still matters today</h2>

            <p>
                Even years later, many families still wrestle with the same tension:
                how do we raise confident children while preserving healthy structure at home?
            </p>

            <p>
                The documentary argued that women in leadership represented cultural decline.
                Feminism was portrayed as destructive to families, while traditional authority structures
                were presented as the only stable path forward.
            </p>

            <p>
                But modern parenting research paints a more nuanced picture.
            </p>

            <h2>Structure without fear</h2>

            <p>
                Children thrive with consistency, responsibility, and accountability —
                but they also thrive with emotional safety.
            </p>

            <p>
                That balance is where many families struggle.
            </p>

            <p>
                Too much control creates rebellion.
                Too little structure creates chaos.
            </p>

            <blockquote>
                Healthy homes are not built on domination.
                They are built on clarity, consistency, and trust.
            </blockquote>

            <h2>The problem with fear-based parenting</h2>

            <p>
                Across decades, many parenting systems have relied heavily on fear:
                fear of disobedience,
                fear of losing authority,
                fear of cultural change,
                and fear of children becoming “out of control.”
            </p>

            <p>
                But fear rarely produces lasting habits.
            </p>

            <p>
                What actually changes behavior long term are systems children can repeat daily:
                routines,
                encouragement,
                visible progress,
                and accountability.
            </p>

            <h2>What families actually need</h2>

            <p>
                Most parents are not looking for political arguments.
            </p>

            <p>
                They simply want calmer mornings,
                fewer reminders,
                less yelling,
                and children who grow into responsible adults.
            </p>

            <p>
                That’s exactly why tools like Slayt exist:
                to reduce friction inside the home and turn responsibility into something children can understand and follow consistently.
            </p>

            <blockquote>
                Better habits create calmer homes.
            </blockquote>

            <p>
                Parenting should never feel like a constant power struggle.
            </p>

            <p>
                The goal is not control.
                The goal is growth.
            </p>
        `,
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
        content: `
            <p>
                Parenting culture has changed dramatically over the years.
                Conversations around leadership, gender roles, family structure, and responsibility
                have become deeply emotional topics inside many homes.
            </p>

            <p>
                In 2007, a controversial documentary called
                <strong> The Monstrous Regiment of Women </strong>
                reignited debates about feminism, authority, and motherhood inside conservative circles.
            </p>

            <blockquote>
                “When fear enters parenting conversations, empathy usually disappears.”
            </blockquote>

            <h2>Why this still matters today</h2>

            <p>
                Even years later, many families still wrestle with the same tension:
                how do we raise confident children while preserving healthy structure at home?
            </p>

            <p>
                The documentary argued that women in leadership represented cultural decline.
                Feminism was portrayed as destructive to families, while traditional authority structures
                were presented as the only stable path forward.
            </p>

            <p>
                But modern parenting research paints a more nuanced picture.
            </p>

            <h2>Structure without fear</h2>

            <p>
                Children thrive with consistency, responsibility, and accountability —
                but they also thrive with emotional safety.
            </p>

            <p>
                That balance is where many families struggle.
            </p>

            <p>
                Too much control creates rebellion.
                Too little structure creates chaos.
            </p>

            <blockquote>
                Healthy homes are not built on domination.
                They are built on clarity, consistency, and trust.
            </blockquote>

            <h2>The problem with fear-based parenting</h2>

            <p>
                Across decades, many parenting systems have relied heavily on fear:
                fear of disobedience,
                fear of losing authority,
                fear of cultural change,
                and fear of children becoming “out of control.”
            </p>

            <p>
                But fear rarely produces lasting habits.
            </p>

            <p>
                What actually changes behavior long term are systems children can repeat daily:
                routines,
                encouragement,
                visible progress,
                and accountability.
            </p>

            <h2>What families actually need</h2>

            <p>
                Most parents are not looking for political arguments.
            </p>

            <p>
                They simply want calmer mornings,
                fewer reminders,
                less yelling,
                and children who grow into responsible adults.
            </p>

            <p>
                That’s exactly why tools like Slayt exist:
                to reduce friction inside the home and turn responsibility into something children can understand and follow consistently.
            </p>

            <blockquote>
                Better habits create calmer homes.
            </blockquote>

            <p>
                Parenting should never feel like a constant power struggle.
            </p>

            <p>
                The goal is not control.
                The goal is growth.
            </p>
        `,
    },
    {
        title: "Behind the build: why Slayt exists and the story of our first family",
        tag: "Story",
        date: "March 2, 2026",
        readTime: "6 min read",
        slug: "why-we-built-slayt",
        image: Blog3,
        author: "Lionel Messi",
        authorImage: Author3,
        content: `
                <p>Slayt wasn't built in a vacuum...</p>
            `,
    },
    {
        title: "Reward systems that actually change behavior",
        tag: "Behavior",
        date: "March 15, 2026",
        readTime: "5 min read",
        slug: "reward-systems-that-work",
        image: Blog4,
        author: "Sarah Chen",
        authorImage: Author1,
        content: `<p>Most reward systems fail because...</p>`,
    },
    {
        title: "Morning routines that eliminate stress before school",
        tag: "Routine",
        date: "February 10, 2026",
        readTime: "4 min read",
        slug: "morning-routines-for-kids",
        image: Blog5,
        author: "Vinicius Jr",
        authorImage: Author2,
        content: `<p>A calm morning sets the tone for the entire day...</p>`,
    },
    {
        title: "How to manage screen time without constant arguments",
        tag: "Parenting",
        date: "February 23, 2026",
        readTime: "3 min read",
        slug: "screen-time-without-fights",
        image: Blog6,
        author: "Phil Foden",
        authorImage: Author3,
        content: `<p>Screen time doesn't have to be a battlefield...</p>`,
    },
    {
        title: "The psychology of raising responsible kids early",
        tag: "Psychology",
        date: "January 10, 2026",
        readTime: "6 min read",
        slug: "building-responsibility-early",
        image: Blog7,
        author: "Kylian Mbappe",
        authorImage: Author1,
        content: `<p>Responsibility is built through repetition...</p>`,
    },
    {
        title: "The Slayt family system explained (simple breakdown)",
        tag: "Product",
        date: "January 12, 2026",
        readTime: "4 min read",
        slug: "slayt-family-system",
        image: Blog8,
        author: "Martha Silva",
        authorImage: Author2,
        content: `<p>Here's how the complete Slayt system works...</p>`,
    },
];

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) return notFound();

    return (
        <main className="relative overflow-hidden">
            <Navbar />

            <div className="max-w-screen-md mx-auto px-6 pt-12 pb-24">
                {/* Category */}
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full bg-rose-50 text-rose-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        {post.tag}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-center text-5xl leading-tight mt-6 mb-10 font-bold text-navy text-balance">
                    {post.title}
                </h1>

                {/* Author Info */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <Image
                                src={post.authorImage || Author1}
                                alt={post.author || "Author"}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-balance text-muted_foreground">
                                {post.author}
                            </p>
                            <p className="text-sm text-muted_foreground">
                                {post.date} • {post.readTime}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative h-[260px] sm:h-[320px] md:h-[520px] w-screen max-w-[70rem] left-1/2 right-1/2 -translate-x-1/2 overflow-hidden mb-16 md:rounded-3xl">
                    {" "}
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Article Content */}
                <article
                    className="pb-5 text-muted_foreground [&>p]:mb-6
                            [&>p]:leading-8

                            [&>h2]:mt-12
                            [&>h2]:mb-5
                            [&>h2]:text-2xl
                            [&>h2]:font-bold
                            [&>h2]:text-navy

                            [&>blockquote]:my-8
                            [&>blockquote]:border-l-4
                            [&>blockquote]:border-navy
                            [&>blockquote]:bg-navy/5
                            [&>blockquote]:px-5
                            [&>blockquote]:py-4
                            [&>blockquote]:italic
                            [&>blockquote]:rounded-r-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* View All Posts */}
                <div className="mt-16 flex justify-center">
                    <Link href="/blog">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 text-navy hover:text-blue font-medium transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                            View all stories
                        </motion.div>
                    </Link>
                </div>

                {/* Author Bio */}
                <div className="mt-20 bg-[#fafafa] rounded-2xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-20 h-20 overflow-hidden flex-shrink-0 rounded-full">
                            <Image
                                src={post.authorImage || Author1}
                                alt={post.author || "Author"}
                                width={80}
                                height={80}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-2">
                                About {post.author || "Joshua Wood"}
                            </h3>
                            <p className="text-muted_foreground leading-relaxed">
                                Passionate about helping families build better
                                systems and habits. Writer, parent, and product
                                thinker behind Slayt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
