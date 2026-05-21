"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function UltraHeroSection() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      nav: ["Platform", "Solutions", "Projects", "About"],
      title1: "Pro Coding builds the future",
      title2: "of digital systems & smart experiences",
      desc: `
At Pro Coding Digital Systems, founded by Eng. Belal Hesham,
we engineer modern digital ecosystems, powerful platforms,
intelligent applications, and cinematic user experiences
designed to help businesses grow faster and smarter.
      `,
      button1: "Explore Platform",
      button2: "Watch Demo",
      start: "Start Project",
    },

    ar: {
      nav: ["المنصة", "الحلول", "المشاريع", "من نحن"],
      title1: "برو كودنج تبني مستقبل",
      title2: "الأنظمة الرقمية والتجارب الذكية",
      desc: `
نحن في Pro Coding للأنظمة الرقمية بقيادة المهندس بلال هشام
نقوم بتطوير منصات رقمية حديثة وتطبيقات ذكية وتجارب سينمائية
باحترافية عالية تساعد الشركات على النمو بشكل أسرع وأقوى.
      `,
      button1: "استكشف المنصة",
      button2: "شاهد العرض",
      start: "ابدأ مشروعك",
    },
  };

  // بيانات الخيوط العصبية للربط بين الكارتين
  const fiberPaths = [
    { id: 1, startY: 150, endY: 120, d: "M 0 150 C 120 150, 180 250, 250 250 C 320 250, 380 120, 500 120", color: "url(#fiberGlow1)", width: 1.5, opacity: "opacity-70", dur: 3, delay: 0, dotColor: "#00f2fe" },
    { id: 2, startY: 130, endY: 180, d: "M 0 130 C 100 130, 200 230, 250 230 C 300 230, 400 180, 500 180", color: "#00f2fe", width: 1, opacity: "opacity-40", dur: 4, delay: 1, dotColor: "#ffffff" },
    { id: 3, startY: 170, endY: 140, d: "M 0 170 C 150 170, 220 280, 250 280 C 280 280, 350 140, 500 140", color: "#a855f7", width: 1.5, opacity: "opacity-60", dur: 2.5, delay: 0.5, dotColor: "#c084fc" },
    { id: 4, startY: 140, endY: 160, d: "M 0 140 C 160 140, 210 260, 250 260 C 290 260, 340 160, 500 160", color: "#34d399", width: 1.2, opacity: "opacity-80", dur: 3.5, delay: 1.5, dotColor: "#6ee7b7" },
    { id: 5, startY: 160, endY: 150, d: "M 0 160 C 130 160, 190 210, 250 210 C 310 210, 370 150, 500 150", color: "#ec4899", width: 1, opacity: "opacity-50", dur: 4.5, delay: 0.2, dotColor: "#f472b6" },
    { id: 6, startY: 120, endY: 130, d: "M 0 120 C 140 120, 170 190, 250 190 C 330 190, 360 130, 500 130", color: "url(#fiberGlow2)", width: 2, opacity: "opacity-70", dur: 3.2, delay: 0.8, dotColor: "#60a5fa" },
    { id: 7, startY: 180, endY: 170, d: "M 0 180 C 110 180, 230 270, 250 270 C 270 270, 390 170, 500 170", color: "#eab308", width: 1, opacity: "opacity-40", dur: 5, delay: 2, dotColor: "#fde047" },
    { id: 8, startY: 145, endY: 135, d: "M 0 145 C 150 145, 200 240, 250 240 C 300 240, 350 135, 500 135", color: "#6366f1", width: 1.5, opacity: "opacity-60", dur: 2.8, delay: 1.2, dotColor: "#818cf8" },
    { id: 9, startY: 155, endY: 145, d: "M 0 155 C 140 155, 180 200, 250 200 C 320 200, 360 145, 500 145", color: "#2dd4bf", width: 1.2, opacity: "opacity-50", dur: 3.7, delay: 0.4, dotColor: "#5eead4" },
    { id: 10, startY: 165, endY: 165, d: "M 0 165 C 120 165, 210 245, 250 245 C 290 245, 380 165, 500 165", color: "url(#fiberGlow1)", width: 1.8, opacity: "opacity-65", dur: 4.2, delay: 1.8, dotColor: "#ffffff" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#18204a_0%,#070b1f_45%,#050816_100%)]" />

      {/* ========================================= */}
      {/* CINEMATIC ENERGY STREAMS */}
      {/* ========================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Glow */}
        <div className="absolute left-1/2 top-[-600px] h-[1600px] w-[1600px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[260px]" />

        {/* MAIN LIGHT */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-350px] h-[1900px] w-[7px] -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0), #00e5ff, rgba(255,255,255,0))",
            boxShadow: `
              0 0 50px rgba(0,229,255,0.9),
              0 0 120px rgba(0,229,255,0.5)
            `,
            filter: "blur(1px)",
          }}
        />

        {/* FLOWING STREAMS */}
        <div className="absolute left-1/2 top-[-500px] -translate-x-1/2">
          {[...Array(70)].map((_, i) => {
            const spread = (i - 35) * 22;

            return (
              <motion.div
                key={i}
                initial={{
                  y: -200,
                  opacity: 0,
                }}
                animate={{
                  y: [-200, 1400],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 5 + (i % 10) * 0.25,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.05,
                }}
                className="absolute rounded-full"
                style={{
                  width: `${2 + (i % 3)}px`,
                  height: `${1400 + i * 10}px`,
                  left: `${spread}px`,
                  transform: `rotate(${spread * 0.03}deg)`,
                  transformOrigin: "top center",
                  background:
                    i % 2 === 0
                      ? "linear-gradient(to bottom, transparent, #00e5ff, transparent)"
                      : "linear-gradient(to bottom, transparent, #7c3aed, transparent)",
                  boxShadow:
                    i % 2 === 0
                      ? "0 0 25px rgba(0,229,255,0.9)"
                      : "0 0 25px rgba(124,58,237,0.9)",
                  filter: "blur(0.5px)",
                }}
              />
            );
          })}
        </div>

        {/* PARTICLES */}
        {[...Array(140)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: [0, 1500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${50 + (Math.random() - 0.5) * 60}%`,
              top: "-100px",
              background:
                Math.random() > 0.5
                  ? "linear-gradient(to bottom, #00e5ff, transparent)"
                  : "linear-gradient(to bottom, #7c3aed, transparent)",
              boxShadow:
                Math.random() > 0.5
                  ? "0 0 20px #00e5ff"
                  : "0 0 20px #7c3aed",
            }}
          />
        ))}
      </div>

      {/* ========================================= */}
      {/* NAVBAR */}
      {/* ========================================= */}
      <header
        className="
          fixed top-6 left-1/2 -translate-x-1/2
          z-50
          w-[94%] max-w-7xl
        "
      >
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.01,
            y: -2,
          }}
          className="
            flex items-center justify-between
            rounded-[38px]
            border border-white/10
            px-12 py-7
          "
          style={{
            backdropFilter: "blur(45px)",
            WebkitBackdropFilter: "blur(45px)",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
            boxShadow: "0 10px 80px rgba(0,0,0,0.45)",
          }}
        >
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-12 w-12 rounded-full bg-cyan-400/30 blur-2xl" />
              <div className="relative h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_30px_#22d3ee]" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-2xl font-semibold tracking-wide text-white">
                Pro Coding
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.35em] text-cyan-300/70">
                Digital Systems
              </span>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-16">
            {content[lang].nav.map((item, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{
                  y: -3,
                }}
                className="
                  group
                  relative
                  text-[15px]
                  font-medium
                  tracking-wide
                  text-zinc-300
                  transition
                  hover:text-white
                "
              >
                {item}
                <div
                  className="
                    absolute
                    -bottom-3
                    h-[2px]
                    w-0
                    bg-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* LANGUAGE BUTTON */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5 py-3
                text-sm
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/10
              "
            >
              {lang === "en" ? "العربية" : "English"}
            </button>

            {/* START BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                relative overflow-hidden
                rounded-2xl
                bg-white
                px-7 py-3
                text-sm font-semibold
                text-black
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-white opacity-40" />
              <span className="relative z-10 flex items-center gap-2">
                {content[lang].start}
                <ArrowUpRight size={16} />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* ========================================= */}
      {/* HERO SECTION 1 */}
      {/* ========================================= */}
      <section
        className="
          relative z-20
          flex min-h-screen
          flex-col items-center justify-center
          px-6
          text-center
          pt-40
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-6xl"
        >
          <h1
            className="
              text-5xl
              font-semibold
              leading-[1.1]
              tracking-tight
              text-white
              md:text-7xl
            "
          >
            {content[lang].title1}
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
              {content[lang].title2}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-[2]
              text-zinc-300
            "
          >
            {content[lang].desc}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              className="
                group
                flex items-center gap-2
                rounded-2xl
                bg-cyan-400
                px-8 py-4
                text-sm font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              {content[lang].button1}
              <ArrowUpRight
                size={18}
                className="
                  transition
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>

            <button
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                px-8 py-4
                text-sm font-medium
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/10
              "
            >
              {content[lang].button2}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================= */}
      {/* DATA CORE / AI ASSEMBLY SECTION */}
      {/* تم التعديل هنا ليكون الانتقال متصل وشفاف */}
      {/* ========================================= */}
      <section className="relative min-h-screen w-full bg-transparent flex flex-col items-center justify-center overflow-hidden text-white font-sans pt-20 pb-20 z-20">
        {/* 🌟 الشبكة الخلفية المضيئة (Background Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        {/* ==========================================
          القسم العلوي: البطاقات والخطوط المركزية
          ========================================== */}
        <div className="relative w-full max-w-[1300px] px-4 flex flex-col lg:flex-row justify-between items-center lg:items-stretch h-auto lg:h-[380px] z-10 gap-6 lg:gap-0">

          {/* 📊 1. البطاقة اليسرى: DATA FLOW ANALYSIS */}
          <div className="w-full lg:w-[420px] shrink-0 rounded-2xl border border-white/10 bg-[#0a0e17]/80 backdrop-blur-xl p-6 flex flex-col relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-[11px] font-semibold text-zinc-300 mb-1 tracking-wider uppercase">
              Data Flow Analysis
            </h3>
            <p className="text-[9px] text-zinc-500 mb-6 tracking-widest uppercase">
              Daily Data Throughput
            </p>

            <div className="relative flex-1 flex mt-2">
              <div className="flex flex-col justify-between h-full text-[9px] text-zinc-500 font-mono pr-3 pb-6 relative z-10">
                <span>2500</span>
                <span>2000</span>
                <span>1500</span>
                <span>1000</span>
                <span>500</span>
                <span>0</span>
              </div>

              <div className="flex-1 relative flex items-end justify-between h-[calc(100%-24px)] pb-1">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-white/[0.04]" />
                  ))}
                </div>

                {[
                  { height: "45%", label: "SITE\nSENSORS" },
                  { height: "35%", label: "CAD\nMODELS" },
                  { height: "55%", label: "RALYSTIC\nNODES" },
                  { height: "70%", label: "SITE\nSENSORS" },
                  { height: "95%", label: "LOGISTICS", glowing: true },
                  { height: "50%", label: "ERP" },
                  { height: "65%", label: "SAFETY" },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center justify-end h-full w-[10%] group z-10"
                  >
                    <div
                      className={`w-full rounded-t-sm transition-all duration-500 ${bar.glowing
                        ? "bg-gradient-to-t from-cyan-400 to-green-300 shadow-[0_0_20px_rgba(74,222,128,0.6)]"
                        : "bg-gradient-to-t from-blue-600 to-cyan-400 opacity-80"
                        }`}
                      style={{ height: bar.height }}
                    />
                    <span className="absolute -bottom-6 text-[7px] text-zinc-500 font-medium text-center leading-tight uppercase whitespace-pre-wrap w-[40px]">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🔌 2. الخطوط المركزية والبيانات المتحركة */}
          <div className="hidden lg:flex flex-1 relative z-10 -mx-8 pointer-events-none items-center justify-center overflow-visible">
            <svg
              className="w-[120%] h-[200%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
              viewBox="0 0 500 300"
              fill="none"
            >
              <defs>
                <linearGradient id="fiberGlow1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="fiberGlow2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* رسم المسارات وبيانات الحركة المتدفقة */}
              {fiberPaths.map((path) => (
                <g key={path.id}>
                  {/* الخيط نفسه */}
                  <path
                    d={path.d}
                    stroke={path.color}
                    strokeWidth={path.width}
                    className={path.opacity}
                    fill="none"
                  />
                  {/* الدائرة المضيئة الأولى (Data Packet 1) */}
                  <circle r="3" fill={path.dotColor} style={{ filter: `drop-shadow(0 0 6px ${path.dotColor})` }}>
                    <animateMotion
                      dur={`${path.dur}s`}
                      begin={`${path.delay}s`}
                      repeatCount="indefinite"
                      path={path.d}
                    />
                  </circle>
                  {/* الدائرة المضيئة الثانية (Data Packet 2 - تتأخر قليلاً) */}
                  <circle r="1.5" fill="#ffffff" style={{ filter: "drop-shadow(0 0 3px #ffffff)" }}>
                    <animateMotion
                      dur={`${path.dur}s`}
                      begin={`${path.delay + path.dur / 2}s`}
                      repeatCount="indefinite"
                      path={path.d}
                    />
                  </circle>

                  {/* عقدة البداية (يسار) */}
                  <circle cx="0" cy={path.startY} r="2.5" fill={path.dotColor} className="opacity-70 animate-pulse" />
                  {/* عقدة النهاية (يمين) */}
                  <circle cx="500" cy={path.endY} r="2.5" fill={path.dotColor} className="opacity-70 animate-pulse" />
                </g>
              ))}
            </svg>
          </div>

          {/* 🕸️ 3. البطاقة اليمنى: CONNECTED SYSTEM TOPOLOGY */}
          <div className="w-full lg:w-[420px] shrink-0 rounded-2xl border border-white/10 bg-[#0a0e17]/80 backdrop-blur-xl p-6 flex flex-col relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-[11px] font-semibold text-zinc-300 mb-6 tracking-wider uppercase">
              Connected System Topology
            </h3>

            <div className="flex-1 relative flex items-center justify-center w-full h-[200px]">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 300 200"
              >
                <path d="M 150 100 Q 60 50 60 80" stroke="#3b82f6" strokeWidth="1" fill="none" className="opacity-50" />
                <path d="M 150 100 Q 150 30 150 30" stroke="#2dd4bf" strokeWidth="1" fill="none" className="opacity-50" />
                <path d="M 150 100 Q 240 50 240 80" stroke="#34d399" strokeWidth="1" fill="none" className="opacity-50" />
                <path d="M 150 100 Q 240 150 240 120" stroke="#a855f7" strokeWidth="1" fill="none" className="opacity-50" />
                <path d="M 150 100 Q 150 170 150 170" stroke="#818cf8" strokeWidth="1" fill="none" className="opacity-50" />
                <path d="M 150 100 Q 60 150 60 120" stroke="#c084fc" strokeWidth="1" fill="none" className="opacity-50" />

                <path d="M 60 80 Q 100 20 150 30" stroke="#ffffff" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="opacity-20" />
                <path d="M 150 30 Q 200 20 240 80" stroke="#ffffff" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="opacity-20" />
                <path d="M 240 80 Q 260 100 240 120" stroke="#ffffff" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="opacity-20" />
                <path d="M 240 120 Q 200 180 150 170" stroke="#ffffff" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="opacity-20" />
                <path d="M 150 170 Q 100 180 60 120" stroke="#ffffff" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="opacity-20" />
                <path d="M 60 120 Q 40 100 60 80" stroke="#ffffff" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="opacity-20" />
              </svg>

              <div className="absolute w-[80px] h-[80px] rounded-full border border-pink-500/40 bg-[#0a0e17] flex flex-col items-center justify-center z-10 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_4s_linear_infinite] border-t-cyan-400" />
                <span className="text-xl font-bold text-white">13</span>
                <span className="text-[6px] text-zinc-400 font-medium uppercase text-center mt-1">
                  Active<br />Connections
                </span>
              </div>

              {[
                { top: "10%", left: "15%", label: "CAD", color: "text-blue-400", dot: "bg-blue-500" },
                { top: "0%", left: "50%", label: "SENSORS", color: "text-teal-400", dot: "bg-teal-500", transform: "-translate-x-1/2" },
                { top: "10%", right: "15%", label: "LOGISTICS", color: "text-green-400", dot: "bg-green-500" },
                { bottom: "10%", right: "15%", label: "QC", color: "text-purple-400", dot: "bg-purple-500" },
                { bottom: "0%", left: "50%", label: "ERP", color: "text-indigo-400", dot: "bg-indigo-500", transform: "-translate-x-1/2" },
                { bottom: "10%", left: "15%", label: "LOGISTICS", color: "text-fuchsia-400", dot: "bg-fuchsia-500" },
              ].map((node, i) => (
                <div
                  key={i}
                  className={`absolute flex flex-col items-center gap-1 ${node.transform || ""}`}
                  style={{ top: node.top, bottom: node.bottom, left: node.left, right: node.right }}
                >
                  <div
                    className={`w-6 h-6 rounded-full border border-white/10 bg-black/50 flex items-center justify-center relative shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${node.dot} shadow-[0_0_8px_currentColor]`}
                    />
                  </div>
                  <span className={`text-[8px] font-medium tracking-wider uppercase ${node.color}`}>
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================
          القسم السفلي: النصوص الرئيسية
          ========================================== */}
        <div className="relative z-20 text-center mt-16 md:mt-24 px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-zinc-100">
            THE INTELLIGENT PLATFORM THAT MAKES YOUR<br className="hidden md:block" />
            <span className="text-white"> CONSTRUCTION DATA FLOW AND CONNECT</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
            Connecting your systems with visible logic. We weave complexity<br className="hidden sm:block" />
            into an intelligent, animated web for faster decision-making.
          </p>
        </div>
      </section>
      {/* ========================================= */}
      {/* CLEAN CRM + APP BUILD SECTION (IMPROVED) */}
      {/* ========================================= */}

      <section className="relative min-h-screen px-6 py-32 flex flex-col items-center justify-center overflow-hidden text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0b1228_0%,#050816_60%)]" />

        {/* soft glow */}
        <div className="absolute w-[700px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl z-10"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            We Build
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {" "}Applications & CRM Systems
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 text-sm md:text-base leading-relaxed">
            We don’t just design websites — we build full digital products:
            CRM systems, dashboards, automation tools, and scalable web applications
            that behave like real software platforms.
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* CARDS SECTION */}
        {/* ========================================= */}
        <div className="relative mt-20 grid md:grid-cols-3 gap-6 w-full max-w-6xl z-10">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition"
          >
            <h3 className="text-lg font-semibold mb-3">Web Applications</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Modern responsive web apps with high performance and cinematic UI systems.
            </p>

            {/* animated dot */}
            <div className="mt-6 flex gap-2 items-center">
              <div className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-xs text-zinc-500">Live Systems</span>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition"
          >
            <h3 className="text-lg font-semibold mb-3">CRM Platforms</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Full CRM dashboards for managing clients, sales, analytics, and automation.
            </p>

            <div className="mt-6 flex gap-2 items-center">
              <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-xs text-zinc-500">Business Systems</span>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition"
          >
            <h3 className="text-lg font-semibold mb-3">Mobile Apps</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Cross-platform mobile apps with smooth UX and real-time data syncing.
            </p>

            <div className="mt-6 flex gap-2 items-center">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-zinc-500">Smart Apps</span>
            </div>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* FLOATING TECH ICONS (SIMPLE MOTION) */}
        {/* ========================================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: [-50, -600],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute text-xs text-cyan-400/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: "100%",
              }}
            >
              {["CRM", "API", "WEB", "APP", "AI"][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        {/* ========================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center max-w-3xl z-10"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Turning Ideas Into Real Digital Products
          </h3>

          <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
            Every system we build is designed to scale — from startup websites
            to enterprise-level CRM platforms that power real businesses.
          </p>
        </motion.div>
      </section>
      {/* ========================================= */}
      {/* INTERACTIVE BUILD FLOW SECTION */}
      {/* ========================================= */}

      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0b1228_0%,#050816_70%)]" />

        {/* GLOW CORE */}
        <div className="absolute w-[700px] h-[700px] bg-purple-500/10 blur-[180px] rounded-full" />

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl z-10"
        >
          <h2 className="text-4xl md:text-6xl font-semibold">
            How We
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {" "}Build Your System
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 text-sm md:text-base">
            From idea to deployment — every project passes through an intelligent automated pipeline
            that turns concepts into real digital products.
          </p>
        </motion.div>

        {/* FLOW LINE */}
        <div className="relative mt-20 w-full max-w-5xl z-10">

          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-white/10" />

          {/* STEP CARDS */}
          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                title: "Idea",
                desc: "We analyze your business and define the system structure.",
                color: "bg-cyan-400",
              },
              {
                title: "Design",
                desc: "We create UI/UX with cinematic modern experience.",
                color: "bg-purple-400",
              },
              {
                title: "Build",
                desc: "We develop web, CRM, and mobile applications.",
                color: "bg-green-400",
              },
              {
                title: "Deploy",
                desc: "We launch and scale your system globally.",
                color: "bg-pink-400",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                transition={{ delay: i * 0.15 }}
                className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer"
              >
                {/* DOT */}
                <div className={`h-3 w-3 rounded-full ${step.color} mb-4 shadow-[0_0_20px_currentColor]`} />

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>

                {/* CONNECT LINE ANIMATION */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/30 animate-pulse" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* FLOATING TAGS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["WEB", "CRM", "APP", "AI", "API"].map((t, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: [-100, -800],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.7,
              }}
              className="absolute text-xs text-cyan-400/30 font-mono"
              style={{
                left: `${20 + i * 15}%`,
                top: "100%",
              }}
            >
              {t}
            </motion.div>
          ))}
        </div>

      </section>
      {/* ========================================= */}
      {/* 3D TECH SHOWCASE SECTION */}
      {/* ========================================= */}

      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0b1228_0%,#050816_70%)]" />

        {/* BIG GLOW */}
        <div className="absolute w-[800px] h-[800px] bg-cyan-500/10 blur-[200px] rounded-full" />

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-20 text-center z-10"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white">
            Next-Gen
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {" "}Technology Systems
            </span>
          </h2>
        </motion.div>

        {/* ========================================= */}
        {/* 3D CENTER PANEL */}
        {/* ========================================= */}
        <motion.div
          whileHover={{
            rotateX: 12,
            rotateY: -18,
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative w-[360px] h-[520px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >

          {/* HEADER */}
          <div className="h-12 flex items-center justify-between px-4 border-b border-white/10">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-zinc-400">SYSTEM CORE</span>
          </div>

          {/* CONTENT */}
          <div className="p-6 space-y-6">

            {/* CORE STATUS */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="p-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/5"
            >
              <p className="text-xs text-zinc-400">SYSTEM STATUS</p>
              <h3 className="text-lg font-semibold text-cyan-300 mt-1">
                ACTIVE & OPTIMIZED
              </h3>
            </motion.div>

            {/* METRICS */}
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Latency", "12ms"],
                ["Uptime", "99.9%"],
                ["Nodes", "48"],
                ["AI Load", "Stable"],
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-xs text-zinc-400">{item[0]}</div>
                  <div className="text-sm text-white font-semibold">{item[1]}</div>
                </motion.div>
              ))}
            </div>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["AI", "CRM", "WEB", "APP", "CLOUD"].map((t, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-[10px] rounded-full border border-white/10 bg-white/5 text-cyan-300"
                >
                  {t}
                </motion.span>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ========================================= */}
        {/* FLOATING 3D OBJECTS */}
        {/* ========================================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-100, -900],
                rotate: 360,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute w-10 h-10 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl"
              style={{
                left: `${10 + i * 9}%`,
                top: "100%",
              }}
            />
          ))}

        </div>

      </section>
      {/* ========================================= */}
      {/* TECH STACK WALL (FULL NOISE SHOWCASE) */}
      {/* ========================================= */}

      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0b1228_0%,#050816_75%)]" />

        {/* GLOW */}
        <div className="absolute w-[900px] h-[500px] bg-purple-500/10 blur-[200px] rounded-full" />

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-16 text-center z-10"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white">
            Our
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {" "}Tech Stack
            </span>
          </h2>
          <p className="text-zinc-400 mt-4 text-sm md:text-base">
            We build systems using modern technologies across all layers.
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* FLOATING TECH ITEMS */}
        {/* ========================================= */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">

          {[
            { name: "Angular", color: "text-red-500", icon: "🅰️" },
            { name: ".NET Core", color: "text-purple-400", icon: "💠" },
            { name: "SQL Server", color: "text-blue-400", icon: "🗄️" },
            { name: "Python", color: "text-yellow-400", icon: "🐍" },
            { name: "Java", color: "text-orange-400", icon: "☕" },
            { name: "HTML5", color: "text-orange-500", icon: "🌐" },
            { name: "CSS3", color: "text-blue-300", icon: "🎨" },
            { name: "Node.js", color: "text-green-400", icon: "🟢" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                rotate: [0, 2, -2, 0],
              }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer"
            >
              {/* ICON */}
              <div className="text-3xl mb-3">{tech.icon}</div>

              {/* NAME */}
              <h3 className={`text-lg font-semibold ${tech.color}`}>
                {tech.name}
              </h3>

              {/* FAKE STATUS DOT */}
              <div className="flex items-center gap-2 mt-4">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs text-zinc-400">Active in Projects</span>
              </div>

              {/* GLOW HOVER */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
            </motion.div>
          ))}
        </div>

        {/* ========================================= */}
        {/* FLOATING NOISE ELEMENTS */}
        {/* ========================================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {["API", "CLOUD", "CRM", "WEB", "AI", "DATA", "SERVER"].map((t, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-100, -900],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              className="absolute text-xs text-cyan-400/20 font-mono"
              style={{
                left: `${10 + i * 12}%`,
                top: "100%",
              }}
            >
              {t}
            </motion.div>
          ))}

        </div>

      </section>
      {/* ========================================= */}
      {/* SOCIAL MEDIA FINAL FOOTER */}
      {/* ========================================= */}

      <footer className="relative z-30 w-full px-6 py-20 border-t border-white/10 bg-[#050816]">

        {/* GLOW */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 bg-cyan-500/10 blur-[160px]" />
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">

          {/* BRAND */}
          <h2 className="text-2xl font-semibold text-white">Pro Coding</h2>
          <p className="text-xs text-zinc-400 mt-1 tracking-widest">
            DIGITAL SYSTEMS
          </p>

          {/* CONTACT INFO */}
          <div className="mt-6 text-sm text-zinc-400 space-y-1">
            <p>📍 Nasr City - Abbas El Akkad, Cairo</p>
            <p>📞 01039182172</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-8">

            {/* Instagram */}
            <a href="#" className="group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition group-hover:scale-110 group-hover:bg-pink-500/10">
                <span className="text-xl">📸</span>
              </div>
            </a>

            {/* Facebook */}
            <a href="#" className="group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition group-hover:scale-110 group-hover:bg-blue-500/10">
                <span className="text-xl">📘</span>
              </div>
            </a>

            {/* GitHub */}
            <a href="#" className="group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition group-hover:scale-110 group-hover:bg-gray-500/10">
                <span className="text-xl">💻</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/201039182172" className="group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition group-hover:scale-110 group-hover:bg-green-500/10">
                <span className="text-xl">💬</span>
              </div>
            </a>

          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold cursor-pointer"
          >
            Start Your Project 🚀
          </motion.div>

          {/* COPYRIGHT */}
          <p className="text-xs text-zinc-500 mt-8">
            © {new Date().getFullYear()} Pro Coding Digital Systems. All rights reserved.
          </p>

        </div>
      </footer>

    </main>

  );
}