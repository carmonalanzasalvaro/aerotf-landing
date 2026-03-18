import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LocationMap from "../components/LocationMap";
import CTA from "../components/CTA";

const sectors = [
  {
    number: "01",
    title: "Aviación comercial",
    text: "Suministro técnico orientado a mantenimiento, fabricación y operaciones con exigencias altas de trazabilidad y disponibilidad.",
  },
  {
    number: "02",
    title: "Defensa",
    text: "Soluciones para programas donde la fiabilidad, la consistencia y la respuesta rápida forman parte crítica del servicio.",
  },
  {
    number: "03",
    title: "Espacio",
    text: "Componentes y hardware para entornos de máxima precisión, con enfoque en calidad documental y soporte especializado.",
  },
];

const locationPoints = [
  {
    title: "Ubicación estratégica",
    text: "Base operativa en Las Rozas para coordinar atención comercial, suministro técnico y relación con clientes industriales.",
  },
  {
    title: "Cobertura global",
    text: "Una presencia local que refuerza la percepción de control, cercanía y proyección internacional.",
  },
  {
    title: "Confianza operativa",
    text: "Mostrar una sede real aporta credibilidad y equilibra el enfoque visual del producto con contexto empresarial.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="sectores" className="section-shell py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="max-w-3xl">
              <div className="kicker">Sectores</div>

              <h2 className="mid-title mt-4">
                Tornillería y componentes para operaciones exigentes.
              </h2>

              <p className="section-copy mt-6 max-w-2xl text-lg">
                La marca debe transmitir precisión, sobriedad y fiabilidad, no
                parecer una ficha de catálogo. La narrativa visual tiene que
                sentirse industrial, técnica y premium.
              </p>
            </div>

            <div className="ui-glass relative overflow-hidden rounded-[2.4rem] p-6 md:p-8">
              <div className="theme-surface-accent absolute inset-0" />
              <div className="theme-glow-core absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />

              <div className="relative flex min-h-[22rem] items-center justify-center md:min-h-[30rem]">
                <Image
                  src="/images/sections/sec1.png"
                  alt="Componentes mecanizados de precisión"
                  width={1800}
                  height={1200}
                  className="h-auto w-full max-w-[780px] object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.42)]"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector.title} className="ui-soft-card rounded-[2rem] p-7">
                <div className="ui-number text-sm">{sector.number}</div>
                <h3 className="mt-5 text-2xl font-semibold">{sector.title}</h3>
                <p className="ui-card-copy mt-4 leading-7">{sector.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ubicacion" className="section-shell py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="max-w-3xl">
              <div className="kicker">Ubicación</div>

              <h2 className="mid-title mt-4">
                Presencia local, coordinación internacional.
              </h2>

              <p className="section-copy mt-6 max-w-2xl text-lg">
                En lugar de repetir producto, esta sección aporta contexto real
                a la marca: sede, proximidad operativa y una percepción de
                suministro global apoyada en una ubicación concreta.
              </p>

              <div className="mt-10 grid gap-4">
                {locationPoints.map((item) => (
                  <div key={item.title} className="ui-soft-card rounded-[1.6rem] px-6 py-5">
                    <div className="text-lg font-semibold">{item.title}</div>
                    <p className="ui-card-copy mt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <LocationMap />
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}