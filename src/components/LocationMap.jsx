"use client";

export default function LocationMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  const address =
    "P.I. EUROPOLIS, Bristol 14B, 28232 Las Rozas, Madrid, Spain";

  const mapSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
        address
      )}&zoom=14`
    : null;

  return (
    <div className="ui-glass relative overflow-hidden rounded-[2.25rem] p-6 md:p-8">
      <div className="theme-surface-accent absolute inset-0" />
      <div className="theme-glow-core absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="relative mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="kicker">Headquartered in Spain</div>
          <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
            Base operativa en Las Rozas, alcance internacional.
          </h3>
        </div>

        <div className="theme-status-dot mt-1 h-3 w-3 rounded-full" />
      </div>

      <div className="map-shell relative overflow-hidden rounded-[1.6rem] border" style={{ borderColor: "var(--line)" }}>
        {mapSrc ? (
          <iframe
            title="Mapa de AeroTF"
            src={mapSrc}
            width="100%"
            height="430"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
            style={{ border: 0, filter: "grayscale(1) saturate(0.85) contrast(1.05)" }}
            allowFullScreen
          />
        ) : (
          <div className="relative min-h-[430px] overflow-hidden">
            <svg
              viewBox="0 0 1000 620"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <rect width="1000" height="620" fill="var(--map-bg)" />

              <path d="M-20 125 C180 120, 280 185, 500 168 S820 120, 1040 160" className="map-street" strokeWidth="10" />
              <path d="M-10 320 C180 290, 280 360, 500 340 S820 280, 1030 330" className="map-street" strokeWidth="12" />
              <path d="M120 -20 C130 140, 170 180, 170 320 S150 540, 210 660" className="map-street" strokeWidth="10" />
              <path d="M430 -20 C430 110, 470 170, 470 310 S430 510, 470 660" className="map-street" strokeWidth="8" />
              <path d="M760 -20 C760 120, 720 170, 740 300 S780 520, 730 660" className="map-street" strokeWidth="10" />

              <path d="M30 220 C150 210, 220 250, 350 235 S550 220, 690 250 S890 290, 1010 260" className="map-street-soft" strokeWidth="5" />
              <path d="M40 430 C180 400, 260 455, 390 435 S610 395, 760 425 S930 470, 1040 440" className="map-street-soft" strokeWidth="5" />
              <path d="M280 -20 C300 90, 320 160, 320 260 S300 430, 320 660" className="map-street-soft" strokeWidth="4" />
              <path d="M610 -20 C620 120, 650 180, 640 290 S620 500, 650 660" className="map-street-soft" strokeWidth="4" />

              <circle cx="655" cy="275" r="92" fill="rgba(255,255,255,0.025)" />
              <circle cx="655" cy="275" r="152" fill="rgba(255,255,255,0.015)" />
            </svg>

            <div className="absolute left-[58%] top-[44%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/8 blur-2xl" />
              <div className="map-chip relative flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-md shadow-[0_0_35px_rgba(255,255,255,0.12)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="currentColor"
                  style={{ color: "rgb(var(--accent-2-rgb))" }}
                >
                  <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9.5A2.5 2.5 0 1 1 12 7a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </div>
            </div>

            <div className="map-chip absolute right-6 top-6 rounded-2xl px-4 py-3 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--kicker)" }}>
                AeroTF HQ
              </div>
              <div className="mt-1 text-sm font-medium">
                Las Rozas, Madrid
              </div>
            </div>

            <div className="map-chip absolute bottom-6 left-6 max-w-[18rem] rounded-2xl px-4 py-4 backdrop-blur-md">
              <div className="text-sm font-semibold">P.I. EUROPOLIS</div>
              <div className="section-copy mt-2 text-sm leading-6">
                Bristol, 14B
                <br />
                28232 Las Rozas
                <br />
                Madrid · Spain
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-3">
        {["Worldwide shipping", "Las Rozas HQ", "Reliable supply"].map((item) => (
          <div key={item} className="ui-tag px-4 py-2 text-sm">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}