"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesPreview } from "./heading";
import { motion } from "framer-motion";

// import { AnimatedBeamDemo } from "./clients";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] relative w-full bg-black  flex flex-col antialiased">
      <div className="  p-4 ">
        <h1 className="relative z-10 text-lg md:text-7xl   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <SparklesPreview heading="About Us" />
        </h1>
        {/* <p
      className="text-4xl font-bold text-white"
      text="Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered."
    /> */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center mt-20 px-4"
        >
          <p className="text-neutral-500 max-w-2xl mx-auto  text-2xl text-center relative z-10">
          At OSS Consulting, we believe everyone deserves a novel digital
            workspace to present their stories. And we&apos;re here for just
            that. 
          </p>
          <p className="text-neutral-500 max-w-2xl mx-auto  text-2xl text-center relative z-10">
            So whether it&apos;s showing the world your longstanding work,
            or setting your first footprints in the digital space, OSS is here
            to lead you through it all. So how do we do it? Let&apos;s take a
            look at our services.
          </p>
        </motion.div>
      </div>
      {/* <AnimatedBeamDemo/> */}
      <BackgroundBeams />
    </div>
  );
}
