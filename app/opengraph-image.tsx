import { ImageResponse } from "next/og";

export const alt = "Creative Factory · Marka inşa ediyoruz.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#13161c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: 36,
              height: 36,
              gap: 4,
            }}
          >
            <div style={{ width: 16, height: 16, background: "#c8ff3d", borderRadius: 2 }} />
            <div style={{ width: 16, height: 16, background: "#c8ff3d", borderRadius: 2 }} />
            <div style={{ width: 16, height: 16, background: "#eef0f4", borderRadius: 2 }} />
            <div style={{ width: 16, height: 16, background: "#c8ff3d", borderRadius: 2 }} />
          </div>
          <div style={{ display: "flex", color: "#eef0f4", fontSize: 24, fontWeight: 600, letterSpacing: -0.5 }}>
            Creative Factory
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div
            style={{
              color: "#eef0f4",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: -3,
            }}
          >
            Sadece tasarlamıyoruz.
          </div>
          <div
            style={{
              color: "#c8ff3d",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: -3,
            }}
          >
            Marka inşa ediyoruz.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#8a8f9a",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          <div>Web · Kimlik · İçerik · Reklam · Mobil</div>
          <div>creativefactory.tr</div>
        </div>
      </div>
    ),
    size
  );
}
