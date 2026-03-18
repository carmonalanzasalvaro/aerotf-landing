"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { id: "obsidian", label: "Obsidian" },
  { id: "titanium", label: "Titanium" },
  { id: "arctic", label: "Arctic" },
  { id: "cobalt", label: "Cobalt" },
];

export default function ThemeDevSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("obsidian");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("aerotf-theme") || "obsidian";
    document.documentElement.setAttribute("data-theme", saved);
    setTheme(saved);
  }, []);

  const applyTheme = (nextTheme) => {
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("aerotf-theme", nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted || process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-5 right-5 z-[80]">
      <div className="flex flex-col items-end gap-3">
        {open && (
          <div className="ui-glass min-w-[240px] rounded-[1.4rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="mb-3 px-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
              DEV themes
            </div>

            <div className="grid gap-2">
              {THEMES.map((item) => {
                const active = item.id === theme;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => applyTheme(item.id)}
                    className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm transition ${
                      active
                        ? "border-white/18 bg-white/10 text-white"
                        : "border-white/8 bg-white/5 text-white/70 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>

                    <span className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-full theme-dot-${item.id}`} />
                      <span className={`h-2.5 w-2.5 rounded-full theme-dot-2-${item.id}`} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="ui-glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition hover:bg-white/10"
        >
          DEV
        </button>
      </div>
    </div>
  );
}