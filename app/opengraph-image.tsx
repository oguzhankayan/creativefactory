import { ImageResponse } from "next/og";

export const alt = "Creative Factory · Kurup yayına alıyorum.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0c0e13";
const BG_ELEV = "#13161c";
const FG = "#eef0f4";
const FG_DIM = "#8a8f9a";
const ACCENT = "#c8ff3d";
const ACCENT_ON = "#0a0a0a";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          display: "flex",
          position: "relative",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {/* Decorative right accent slab */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 220,
            height: "100%",
            background: ACCENT,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "56px 48px",
            color: ACCENT_ON,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              transform: "rotate(180deg)",
              writingMode: "vertical-rl",
              display: "flex",
            }}
          >
            Creative · Factory · 2026
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: -4,
              lineHeight: 0.9,
              display: "flex",
            }}
          >
            ↗
          </div>
        </div>

        {/* Left content area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            paddingRight: 260,
          }}
        >
          {/* Top: logo + kicker */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 14,
                height: 14,
                background: ACCENT,
                borderRadius: 99,
                display: "flex",
              }}
            />
            <div
              style={{
                color: FG_DIM,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              Creative Factory · Bağımsız stüdyo
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div
              style={{
                color: FG,
                fontSize: 124,
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: -5,
                display: "flex",
              }}
            >
              Sadece
            </div>
            <div
              style={{
                color: FG,
                fontSize: 124,
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: -5,
                display: "flex",
              }}
            >
              tasarlamıyorum.
            </div>
            <div
              style={{
                color: ACCENT,
                fontSize: 124,
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: -5,
                marginTop: 8,
                fontStyle: "italic",
                display: "flex",
              }}
            >
              Marka inşa.
            </div>
          </div>

          {/* Bottom strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                color: FG_DIM,
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              <div style={{ display: "flex", background: BG_ELEV, padding: "10px 16px", color: FG }}>Web</div>
              <div style={{ display: "flex", background: BG_ELEV, padding: "10px 16px", color: FG }}>Kimlik</div>
              <div style={{ display: "flex", background: BG_ELEV, padding: "10px 16px", color: FG }}>İçerik</div>
              <div style={{ display: "flex", background: BG_ELEV, padding: "10px 16px", color: FG }}>Reklam</div>
              <div style={{ display: "flex", background: BG_ELEV, padding: "10px 16px", color: FG }}>Mobil</div>
            </div>
            <div
              style={{
                color: FG,
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              creativefactory.tr
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
