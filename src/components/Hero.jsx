"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  ["20+", "años de experiencia"],
  ["24/7", "agilidad comercial"],
  ["B2B", "suministro técnico"],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="theme-glow-main absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full" />
      <div className="theme-glow-side absolute right-[-8rem] top-28 h-[24rem] w-[24rem] rounded-full" />

      <div className="section-shell relative z-10 grid min-h-[90vh] items-center gap-16 py-16 lg:grid-cols-[1fr_1fr]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 inline-flex rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em]"
            style={{ borderColor: "var(--line)", background: "var(--tag-bg)", color: "var(--tag-text)" }}
          >
            Aerospace Fasteners · Tools · Components
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="section-title text-gradient"
          >
            Precisión industrial para aviación, defensa y espacio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="section-copy mt-8 max-w-2xl text-lg md:text-[1.34rem]"
          >
            AeroTF conecta fabricantes y operadores con tornillería,
            herramientas y componentes aeronáuticos de alta exigencia, con una
            presencia de marca sobria, técnica y preparada para transmitir
            confianza desde el primer vistazo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#sectores" className="primary-pill px-7 py-3 text-sm font-semibold">
              Explorar sectores
            </a>

            <a href="#contacto" className="secondary-pill px-7 py-3 text-sm font-semibold">
              Contactar con AeroTF
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28 }}
            className="mt-14 grid max-w-2xl gap-4 sm:grid-cols-3"
          >
            {stats.map(([value, label]) => (
              <div key={label} className="ui-soft-card rounded-[1.65rem] px-5 py-5">
                <div className="text-[2rem] font-semibold tracking-tight">{value}</div>
                <div className="mt-1 text-sm ui-card-copy">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[680px]"
        >
          <div className="ui-glass relative overflow-hidden rounded-[2.4rem] p-6 md:p-8">
            <div className="theme-surface-accent absolute inset-0" />
            <div className="theme-glow-core absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />

            <div className="relative flex items-start justify-between gap-5">
              <div className="max-w-sm">
                <div className="kicker">AeroTF Supply Network</div>
                <div className="mt-4 text-[1.8rem] font-semibold leading-tight md:text-[2.15rem]">
                  Fasteners engineered for critical environments
                </div>
              </div>

              <div className="theme-status-dot mt-1 h-3 w-3 rounded-full" />
            </div>

            <div className="relative mt-8 h-[25rem] md:h-[29rem]">
              <div className="hero-orbit h-[22rem] w-[22rem]" />
              <div className="hero-orbit h-[17rem] w-[17rem]" />
              <div className="hero-orbit h-[12rem] w-[12rem]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="hero-orbit h-[22rem] w-[22rem] border-dashed"
              />

              <motion.div
                animate={{ y: [0, -6, 0], rotate: [-2, 0, -2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center px-8 md:px-10"
              >
                <Image
                  src="/images/products/pro1.webp"
                  alt="Fasteners aeronáuticos AeroTF"
                  width={1200}
                  height={900}
                  priority
                  className="h-auto w-full max-w-[560px] object-contain drop-shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            </div>

            <div className="relative mt-2 flex flex-wrap gap-3">
              {["Structural fasteners", "Critical hardware", "Precision supply"].map(
                (item) => (
                  <div key={item} className="ui-tag px-4 py-2 text-sm">
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}