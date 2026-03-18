"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contacto" className="section-shell py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
        className="ui-glass overflow-hidden rounded-[2.4rem] px-8 py-12 md:px-14 md:py-16"
      >
        <div className="max-w-4xl">
          <div className="kicker">Contacto</div>

          <h2 className="mid-title mt-4">
            Un socio técnico para un suministro más fiable.
          </h2>

          <p className="section-copy mt-6 max-w-2xl text-lg">
            Esta propuesta puede evolucionar hacia una web corporativa completa,
            con más narrativa visual, sectores, marcas y contacto comercial,
            manteniendo una línea elegante y técnica.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@aerotf.com"
              className="primary-pill px-7 py-3 text-sm font-semibold"
            >
              info@aerotf.com
            </a>

            <a
              href="tel:+34910000000"
              className="secondary-pill px-7 py-3 text-sm font-semibold"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}