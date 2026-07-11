import { ImageResponse } from "next/og";

export const alt = "JAG Maintenance & Cleaning — NYC street cleaning and power washing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090806",
          color: "#f2eadc",
          padding: "72px 82px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              background: "#c69a37",
            }}
          />
          <span style={{ fontSize: "25px", letterSpacing: "0.08em" }}>
            JAG MAINTENANCE & CLEANING LLC
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#c69a37",
              fontSize: "74px",
              lineHeight: 1.02,
            }}
          >
            <span>NYC streets.</span>
            <span>Cleaned with care.</span>
          </div>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "28px", color: "#c9bfae" }}>
            Street cleaning · Power washing · Window cleaning · Since 1999
          </div>
        </div>
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "22px", color: "#8f8577" }}>
          Serving Business Improvement Districts across all five boroughs
        </div>
      </div>
    ),
    size,
  );
}
