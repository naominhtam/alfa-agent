// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(180deg, #0b1626 0%, #0f1c30 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 18,
              opacity: 0.75,
              letterSpacing: 0.2,
            }}
          >
            Alfa Agent • Product of Alfa Media
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            System-first
            <br />
            KOC Operation
          </div>

          <div style={{ fontSize: 24, opacity: 0.8, maxWidth: 900 }}>
            SOP • Approval • KPI Tracking • Reporting Loop
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            opacity: 0.85,
          }}
        >
          <div>alfamedia.vn</div>
          <div style={{ color: "#E6C882" }}>Luxury Navy • Gold Accent</div>
        </div>

        {/* gold glow */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(230,200,130,0.25) 0%, rgba(230,200,130,0) 70%)",
          }}
        />
      </div>
    ),
    size
  );
}