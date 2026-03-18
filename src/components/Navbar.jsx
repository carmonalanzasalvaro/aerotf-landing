"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Sectores", href: "#sectores" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -26, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="section-shell pt-5">
        <div className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-white" />
            <span className="text-sm font-medium tracking-[0.22em] text-white/90">
              AEROTF
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/72 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="primary-pill px-5 py-2.5 text-sm font-medium"
          >
            Solicitar información
          </a>
        </div>
      </div>
    </motion.header>
  );
}