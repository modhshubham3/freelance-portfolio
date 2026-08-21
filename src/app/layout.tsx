import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

const description =
  "Freelance .NET & full-stack developer. Web applications, REST APIs, dashboards, and real-time systems built with ASP.NET Core, Angular, and PostgreSQL — with production discipline from running live fleet-tracking platforms.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shubham-builds-eight.vercel.app"),
  title: "Shubham Modh — Freelance .NET Developer",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shubham Modh — Freelance .NET Developer",
    description,
    type: "website",
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Shubham Modh — Freelance .NET Developer",
    description,
  },
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#0d1526",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} ${plexMono.variable}`}
    >
      <body className="bg-bg font-sans text-[17px] leading-[1.6] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
