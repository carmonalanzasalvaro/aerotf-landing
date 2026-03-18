"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IndustrialBanner() {
  return (
    <section className="section-shell py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2.5rem] border"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/banners/bolt-banner.png"
            alt="Tornillería industrial AeroTF"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, rgba(2,6,23,0.18) 0%, rgba(2,6,23,0.42) 30%, rgba(2,6,23,0.82) 62%, rgba(2,6,23,0.94) 100%),
              linear-gradient(180deg, rgba(2,6,23,0.08) 0%, rgba(2,6,23,0.34) 100%)
            `,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 32%, rgba(var(--accent-rgb), 0.12), transparent 22%)",
          }}
        />

        <div className="relative z-10 grid min-h-[26rem] items-end p-8 md:min-h-[34rem] md:p-14 lg:grid-cols-[1fr_0.95fr]">
          <div />

          <div className="max-w-2xl justify-self-end">
            <div className="ui-tag inline-flex px-4 py-2 text-xs uppercase tracking-[0.22em]">
              Engineered reliability
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[0.96]">
              Hardware técnico con una presencia visual más sólida.
            </h2>

            <p className="section-copy mt-6 max-w-xl text-base md:text-lg">
              Un banner editorial como este ayuda a reforzar precisión,
              consistencia y robustez sin convertir la landing en un catálogo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="primary-pill px-7 py-3 text-sm font-semibold"
              >
                Solicitar información
              </a>

              <a
                href="#sectores"
                className="secondary-pill px-7 py-3 text-sm font-semibold"
              >
                Ver sectores
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}