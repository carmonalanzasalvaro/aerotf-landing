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
    <section className="relative overflow-hidden pb-14 pt-24 md:pb-20">
      <div className="theme-glow-main absolute left-1/2 top-20 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full" />
      <div className="theme-glow-side absolute right-[-8rem] top-24 h-[22rem] w-[22rem] rounded-full" />

      <div className="section-shell relative z-10">
        <div className="hero-bleed-wrap">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="hero-banner-shell"
          >
            {/* DESKTOP */}
            <div className="absolute inset-0 hidden lg:block">
              <Image
                src="/images/banners/bolt-hero-banner.png"
                alt="Tornillería y fijaciones industriales AeroTF"
                fill
                priority
                className="hero-banner-image object-cover object-left"
                sizes="100vw"
              />
            </div>

            <div className="hero-banner-veil hidden lg:block" />

            <div className="relative z-10 hidden min-h-[43rem] items-center lg:grid lg:grid-cols-[1fr_0.96fr]">
              <div />

              <div className="hero-banner-copy px-10 py-14 xl:px-14">
                <div className="ui-tag inline-flex px-4 py-2 text-xs uppercase tracking-[0.22em]">
                  Aerospace Fasteners · Tools · Components
                </div>

                <h1 className="section-title mt-6">
                  Precisión industrial para aviación, defensa y espacio.
                </h1>

                <p className="section-copy mt-6 max-w-[34rem] text-lg md:text-[1.25rem]">
                  AeroTF conecta fabricantes y operadores con tornillería,
                  herramientas y componentes aeronáuticos de alta exigencia, con
                  una presencia de marca más sólida, técnica y creíble.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#sectores"
                    className="primary-pill px-7 py-3 text-sm font-semibold"
                  >
                    Explorar sectores
                  </a>

                  <a
                    href="#contacto"
                    className="secondary-pill px-7 py-3 text-sm font-semibold"
                  >
                    Contactar con AeroTF
                  </a>
                </div>
              </div>
            </div>

            {/* MOBILE / TABLET */}
            <div className="lg:hidden">
              <div className="relative h-[22rem] sm:h-[26rem]">
                <Image
                  src="/images/banners/bolt-hero-banner.png"
                  alt="Tornillería y fijaciones industriales AeroTF"
                  fill
                  priority
                  className="hero-banner-image object-cover object-left"
                  sizes="100vw"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(var(--accent-2-rgb),0.08) 38%, var(--bg-mid) 100%)",
                  }}
                />
              </div>

              <div className="px-6 py-7 sm:px-8 sm:py-8">
                <div className="ui-tag inline-flex px-4 py-2 text-xs uppercase tracking-[0.22em]">
                  Aerospace Fasteners · Tools · Components
                </div>

                <h1 className="section-title mt-6">
                  Precisión industrial para aviación, defensa y espacio.
                </h1>

                <p className="section-copy mt-6 max-w-[34rem] text-lg">
                  AeroTF conecta fabricantes y operadores con tornillería,
                  herramientas y componentes aeronáuticos de alta exigencia, con
                  una presencia de marca más sólida, técnica y creíble.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#sectores"
                    className="primary-pill px-7 py-3 text-sm font-semibold"
                  >
                    Explorar sectores
                  </a>

                  <a
                    href="#contacto"
                    className="secondary-pill px-7 py-3 text-sm font-semibold"
                  >
                    Contactar con AeroTF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="mt-5 grid gap-4 sm:grid-cols-3"
        >
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="ui-soft-card rounded-[1.55rem] px-5 py-5"
            >
              <div className="text-[2rem] font-semibold tracking-tight">
                {value}
              </div>
              <div className="ui-card-copy mt-1 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
