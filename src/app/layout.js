import "./globals.css";
import ThemeDevSwitcher from "../components/ThemeDevSwitcher";

export const metadata = {
  title: "AeroTF | Aerospace Fasteners & Components",
  description:
    "Landing conceptual para AeroTF, distribuidor de tornillería, herramientas y componentes aeronáuticos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="obsidian">
      <body>
        {children}
        <ThemeDevSwitcher />
      </body>
    </html>
  );
}