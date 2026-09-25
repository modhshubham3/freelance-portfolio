import { ImageResponse } from "next/og";

// Required for `output: "export"` — renders the card once at build time.
export const dynamic = "force-static";
export const alt = "Shubham Modh — Freelance .NET & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const services = ["Web applications", "REST APIs", "Real-time & GPS/IoT"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d1526",
          padding: "66px 72px",
          position: "relative",
        }}
      >
        {/* soft cobalt glow, lower left */}
        <div
          style={{
            position: "absolute",
            bottom: -300,
            left: -240,
            width: 820,
            height: 820,
            background:
              "radial-gradient(circle, rgba(41,70,230,0.38) 0%, rgba(41,70,230,0.12) 30%, rgba(41,70,230,0) 50%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#93a8ff",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#9fb2c8",
              textTransform: "uppercase",
            }}
          >
            Available for freelance projects
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 40, color: "#93a8ff", lineHeight: 1.2 }}>
            Freelance .NET &amp; full-stack developer
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#edf1f7",
              lineHeight: 1.05,
              marginTop: 10,
            }}
          >
            Shubham Modh
          </div>
          <div style={{ fontSize: 30, color: "#9fb2c8", marginTop: 16, lineHeight: 1.35 }}>
            Built with the discipline of running live production systems.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {services.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  fontSize: 21,
                  color: "#edf1f7",
                  border: "1px solid #243450",
                  borderRadius: 999,
                  padding: "9px 20px",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div
            style={{ fontSize: 22, color: "#9fb2c8", display: "flex", flexShrink: 0, whiteSpace: "nowrap", marginLeft: 24 }}
          >
            shubham-builds-eight.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
