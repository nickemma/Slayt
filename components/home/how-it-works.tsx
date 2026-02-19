// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import SectionHeading from "@/components/section-heading";

// import numberImg1 from "@/images/1.png";
// import numberImg2 from "@/images/2.png";
// import numberImg3 from "@/images/3.png";

// import Line1 from "@/images/Line1.png";
// import Line2 from "@/images/Line2.png";

// import phone1 from "@/images/Frame-1.png";
// import phone2 from "@/images/Ellipse-iphone.png";
// import phone3 from "@/images/iPhone.png";

// const steps = [
//   {
//     number: "1",
//     numberImg: numberImg1,
//     title: "Assign tasks once",
//     description: "Set it. Forget it. Slayt handles reminders.",
//   },
//   {
//     number: "2",
//     numberImg: numberImg2,
//     title: "Kids check tasks themselves",
//     description: "No chasing. No nagging. No shouting.",
//   },
//   {
//     number: "3",
//     numberImg: numberImg3,
//     title: "Rewards build habits",
//     description: "Responsibility becomes automatic.",
//   },
// ];

// const phoneScreens = [
//   {
//     src: phone1,
//     alt: "Set date & time for task assignment",
//   },
//   {
//     src: phone2,
//     alt: "Child marks task as complete",
//   },
//   {
//     src: phone3,
//     alt: "Streak bonus applied automatically",
//   },
// ];

// export default function HowItWorks() {
//   const [activeStep, setActiveStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % steps.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#33E4C6] py-16 px-6 border-b">
//       <SectionHeading
//         title="How Slayt turns chaos into calm"
//         subtitle="Slayt helps parents build responsibility through tasks, rewards, and consistency"
//       />
//       <div className="mx-auto max-w-5xl">
//         {/* Steps Row */}
//         <div className="mt-16 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-0">
//           {steps.map((step, i) => (
//             <div key={step.number} className="flex items-center flex-1">
//               <div>
//                 {/* Title */}
//                 <h3
//                   className={`text-base font-bold transition-colors duration-300 ${
//                     activeStep === i ? "text-[#259b48]" : "text-[#0B2E4E]/50"
//                   }`}
//                 >
//                   {step.title}
//                 </h3>
//                 {/* Description */}
//                 <p className="mt-2 max-w-[180px] text-sm text-gray-500 leading-relaxed ">
//                   {step.description}
//                 </p>
//               </div>

//               {/* Number + Circle badge */}
//               <div className="relative flex items-center justify-center mb-4">
//                 {/* Large number image */}
//                 <Image
//                   src={step.numberImg}
//                   alt={step.number}
//                   width={30}
//                   height={36}
//                   className="select-none"
//                 />
//                 {/* Teal circle with checkmark, overlaid top-left */}
//                 <div
//                   className={`absolute -top-[-5rem] -left-[7rem] flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 ${
//                     activeStep >= i ? "bg-[#af2654]" : "bg-gray-200"
//                   }`}
//                 >
//                   {activeStep >= i ? (
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                       <path
//                         d="M3 7l3 3 5-5"
//                         stroke="white"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   ) : (
//                     <div className="h-2.5 w-2.5 rounded-full bg-gray-400" />
//                   )}
//                 </div>
//               </div>

//               {/* Connector (between steps, desktop only) */}
//               {i < steps.length - 1 && (
//                 <div
//                   className="hidden md:block absolute"
//                   style={{ display: "none" }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Wavy connector lines — desktop only, between steps */}
//         <div className="hidden md:flex items-center justify-between px-[13%] -mt-[180px] mb-[120px] pointer-events-none select-none">
//           {/* Line between step 1 and 2 */}
//           <div className="flex-1 flex justify-center relative">
//             <div className="relative w-full max-w-[220px]">
//               <Image
//                 src={Line1}
//                 alt=""
//                 width={220}
//                 height={40}
//                 className="w-full opacity-60"
//               />
//               {/* Animated dot */}
//               <motion.div
//                 className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#1BBDD4]"
//                 animate={{
//                   left:
//                     activeStep === 0
//                       ? ["0%", "100%"]
//                       : activeStep > 0
//                         ? "100%"
//                         : "0%",
//                   opacity: activeStep === 0 ? [1, 1] : activeStep > 0 ? 0 : 0,
//                 }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//                 style={{ left: "0%" }}
//               />
//             </div>
//           </div>
//           {/* Spacer for step 2 */}
//           <div className="w-[80px]" />
//           {/* Line between step 2 and 3 */}
//           <div className="flex-1 flex justify-center relative">
//             <div className="relative w-full max-w-[220px]">
//               <Image
//                 src={Line2}
//                 alt=""
//                 width={220}
//                 height={40}
//                 className="w-full opacity-60"
//               />
//               <motion.div
//                 className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#1BBDD4]"
//                 animate={{
//                   left:
//                     activeStep === 1
//                       ? ["0%", "100%"]
//                       : activeStep > 1
//                         ? "100%"
//                         : "0%",
//                   opacity: activeStep === 1 ? [1, 1] : activeStep > 1 ? 0 : 0,
//                 }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//                 style={{ left: "0%" }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Phone / App UI card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mx-auto mt-8 max-w-sm"
//         >
//           {/* App content */}
//           <div className="px-4 pb-5">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeStep}
//                 initial={{ opacity: 0, y: 8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -8 }}
//                 transition={{ duration: 0.3 }}
//                 className="space-y-3"
//               >
//                 {phoneScreens.map((img, i) => {
//                   if (i === activeStep) {
//                     return (
//                       <div key={i} className="relative">
//                         <Image
//                           src={img.src}
//                           alt={img.alt}
//                           width={300}
//                           height={600}
//                           className="w-full rounded-2xl shadow-lg"
//                         />
//                         <div
//                           className="absolute inset-0"
//                           style={{ backgroundColor: "#475963", opacity: 0.45 }}
//                         />
//                       </div>
//                     );
//                   }
//                   return null;
//                 })}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";

import numberImg1 from "@/images/1.png";
import numberImg2 from "@/images/2.png";
import numberImg3 from "@/images/3.png";
import phone1 from "@/images/Frame-1.png";
import phone2 from "@/images/Ellipse-iphone.png";
import phone3 from "@/images/iPhone.png";

const phoneScreens = [
  { src: phone1, alt: "Set date & time for task assignment" },
  { src: phone2, alt: "Child marks task as complete" },
  { src: phone3, alt: "Streak bonus applied automatically" },
];

// The wave SVG viewBox is 1000 x 260
// Path: starts bottom-left, arcs UP to top-center, arcs back DOWN to bottom-right
// M 80 210  C 200 210, 350 50, 500 50  C 650 50, 800 210, 920 210
const WAVE_PATH =
  "M 80 210 C 200 210, 350 50, 500 50 C 650 50, 800 210, 920 210";

// Badge positions in SVG coordinate space (out of 1000 x 260 viewBox)
// Step1: x=80, y=210 (bottom-left)
// Step2: x=500, y=50 (top-center)
// Step3: x=920, y=210 (bottom-right)

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const badgeClass = (stepIndex: number) =>
    `flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all duration-500 ${
      activeStep >= stepIndex ? "bg-[#1BBDD4]" : "bg-gray-200"
    }`;

  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 8l3 3 6-6"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const DotIcon = () => <div className="h-3 w-3 rounded-full bg-gray-400" />;

  return (
    <section className="bg-white py-16 px-6 border-b">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="How Slayt turns chaos into calm"
          subtitle="Slayt helps parents build responsibility through tasks, rewards, and consistency"
        />

        {/* ─── Desktop Wave Layout ─── */}
        <div className="hidden md:block mt-10">
          {/*
            Container is position:relative. 
            SVG sits on top, then we absolutely position each step's badge + text
            to align with the SVG badge coordinates.
            
            SVG viewBox = "0 0 1000 260", rendered at full container width.
            Badge SVG coords → CSS %:
              Step1: x=80/1000=8%,   y=210/260=80.8%
              Step2: x=500/1000=50%, y=50/260=19.2%
              Step3: x=920/1000=92%, y=210/260=80.8%
          */}
          <div className="relative w-full" style={{ height: "340px" }}>
            {/* ─── Wave SVG ─── */}
            <svg
              className="absolute inset-0 w-full"
              style={{ height: "260px" }}
              viewBox="0 0 1000 260"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Dashed wave */}
              <path
                d={WAVE_PATH}
                stroke="#1BBDD4"
                strokeWidth="2.5"
                strokeDasharray="9 6"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Travelling dot step 0→1 */}
              {activeStep === 0 && (
                <motion.circle
                  r="7"
                  fill="#1BBDD4"
                  // initial={{ offsetDistance: "2%" } as any}
                  // animate={{ offsetDistance: "50%" } as any}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  style={
                    {
                      offsetPath: `path('${WAVE_PATH}')`,
                    } as any
                  }
                />
              )}

              {/* Travelling dot step 1→2 */}
              {activeStep === 1 && (
                <motion.circle
                  r="7"
                  fill="#1BBDD4"
                  // initial={{ offsetDistance: "50%" } as any}
                  // animate={{ offsetDistance: "98%" } as any}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  style={
                    {
                      offsetPath: `path('${WAVE_PATH}')`,
                    } as any
                  }
                />
              )}
            </svg>

            {/* ─── Step 1 badge + text: bottom-left ─── */}
            {/* Badge center at 8%, 80.8% of SVG height (260px) = ~210px from top */}
            {/* SVG is 260px tall, container is 340px, so badge top = 210 - 20 = 190px */}
            <div className="absolute" style={{ left: "5%", top: "155px" }}>
              {/* Badge */}
              <div className={badgeClass(0)}>
                <CheckIcon />
              </div>
              {/* Text + number below badge */}
              <div className="mt-3 flex items-start gap-2">
                <div>
                  <h3
                    className={`text-sm font-bold leading-snug transition-colors duration-300 whitespace-nowrap ${activeStep === 0 ? "text-[#0B2E4E]" : "text-[#0B2E4E]/40"}`}
                  >
                    Assign tasks once
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 leading-relaxed max-w-[150px]">
                    Set it. Forget it. Slayt handles reminders.
                  </p>
                </div>
                {/* Big faded number to the right */}
                <Image
                  src={numberImg1}
                  alt="1"
                  width={50}
                  height={65}
                  className={`select-none flex-shrink-0 -mt-1 transition-opacity duration-500 ${activeStep === 0 ? "opacity-100" : "opacity-25"}`}
                />
              </div>
            </div>

            {/* ─── Step 2 badge + text: top-center ─── */}
            {/* Badge center at 50%, y=50px from top → top = 50 - 20 = 30px */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: "10px",
                transform: "translateX(-50%)",
              }}
            >
              {/* Badge */}
              <div className={`${badgeClass(1)} mx-auto`}>
                {activeStep >= 1 ? <CheckIcon /> : <DotIcon />}
              </div>
              {/* Text + number below */}
              <div className="mt-3 flex items-start gap-2">
                <div>
                  <h3
                    className={`text-sm font-bold leading-snug transition-colors duration-300 ${activeStep === 1 ? "text-[#0B2E4E]" : "text-[#0B2E4E]/40"}`}
                  >
                    Kids check tasks themselves
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 leading-relaxed max-w-[160px]">
                    No chasing. No nagging. No shouting.
                  </p>
                </div>
                <Image
                  src={numberImg2}
                  alt="2"
                  width={50}
                  height={65}
                  className={`select-none flex-shrink-0 -mt-1 transition-opacity duration-500 ${activeStep === 1 ? "opacity-100" : "opacity-25"}`}
                />
              </div>
            </div>

            {/* ─── Step 3 badge + text: bottom-right ─── */}
            {/* Badge center at 92%, y=210px → top = 190px */}
            <div className="absolute" style={{ right: "3%", top: "155px" }}>
              <div className={badgeClass(2)}>
                {activeStep >= 2 ? <CheckIcon /> : <DotIcon />}
              </div>
              <div className="mt-3 flex items-start gap-2">
                <div>
                  <h3
                    className={`text-sm font-bold leading-snug transition-colors duration-300 whitespace-nowrap ${activeStep === 2 ? "text-[#0B2E4E]" : "text-[#0B2E4E]/40"}`}
                  >
                    Rewards build habits
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 leading-relaxed max-w-[150px]">
                    Responsibility becomes automatic.
                  </p>
                </div>
                <Image
                  src={numberImg3}
                  alt="3"
                  width={50}
                  height={65}
                  className={`select-none flex-shrink-0 -mt-1 transition-opacity duration-500 ${activeStep === 2 ? "opacity-100" : "opacity-25"}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Mobile: stacked ─── */}
        <div className="flex flex-col gap-8 mt-10 md:hidden">
          {[
            {
              img: numberImg1,
              title: "Assign tasks once",
              desc: "Set it. Forget it. Slayt handles reminders.",
              step: 0,
            },
            {
              img: numberImg2,
              title: "Kids check tasks themselves",
              desc: "No chasing. No nagging. No shouting.",
              step: 1,
            },
            {
              img: numberImg3,
              title: "Rewards build habits",
              desc: "Responsibility becomes automatic.",
              step: 2,
            },
          ].map(({ img, title, desc, step }) => (
            <div key={step} className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full shadow flex-shrink-0 transition-all duration-500 ${activeStep >= step ? "bg-[#1BBDD4]" : "bg-gray-200"}`}
              >
                {activeStep >= step ? (
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M3 6.5l2.5 2.5 4.5-4.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <div className="h-2 w-2 rounded-full bg-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <h3
                  className={`text-sm font-bold transition-colors duration-300 ${activeStep === step ? "text-[#0B2E4E]" : "text-[#0B2E4E]/40"}`}
                >
                  {title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </div>
              <Image
                src={img}
                alt={`${step + 1}`}
                width={40}
                height={50}
                className={`select-none transition-opacity duration-500 ${activeStep === step ? "opacity-100" : "opacity-25"}`}
              />
            </div>
          ))}
        </div>

        {/* ─── Phone image ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-4 max-w-xs"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src={phoneScreens[activeStep].src}
                alt={phoneScreens[activeStep].alt}
                width={320}
                height={640}
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
