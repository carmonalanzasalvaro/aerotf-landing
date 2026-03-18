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

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[90]">
      <div className="flex flex-col items-end gap-3">
        {open && (
          <div className="ui-glass min-w-[240px] rounded-[1.35rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="mb-3 px-2 text-[11px] uppercase tracking-[0.22em] switcher-label">
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
                    className={`switcher-item ${
                      active ? "switcher-item-active" : ""
                    }`}
                  >
                    <span>{item.label}</span>

                    <span className="flex items-center gap-1.5">
                      <span
                        className={`h-2.5 w-2.5 rounded-full theme-dot-${item.id}`}
                      />
                      <span
                        className={`h-2.5 w-2.5 rounded-full theme-dot-2-${item.id}`}
                      />
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
          className="ui-glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition hover:translate-y-[-1px]"
          style={{ color: "var(--foreground)" }}
        >
          DEV
        </button>
      </div>
    </div>
  );
}