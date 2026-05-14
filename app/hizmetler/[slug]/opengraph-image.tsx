import { ImageResponse } from "next/og";
import { SERVICES } from "@/lib/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

const BG = "#0c0e13";
const BG_ELEV = "#13161c";
const FG = "#eef0f4";
const FG_DIM = "#8a8f9a";
const ACCENT = "#c8ff3d";
const ACCENT_ON = "#0a0a0a";

type Props = { params: Promise<{ slug: string }> };

export default async function OG({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const title = service?.title ?? "Hizmet";
  const tagline = service?.tagline ?? "";
  const num = service?.n ?? "00";
  const tags = service?.tags ?? [];

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
        {/* Oversized number watermark */}
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -80,
            color: BG_ELEV,
            fontSize: 720,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -40,
            display: "flex",
          }}
        >
          {num}
        </div>

        {/* Accent bar across top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: ACCENT,
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "76px 72px 64px",
          }}
        >
          {/* Top: kicker */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 14, height: 14, background: ACCENT, borderRadius: 99, display: "flex" }} />
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
              Creative Factory · Hizmet {num} / 06
            </div>
          </div>

          {/* Title + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                color: FG,
                fontSize: 112,
                fontWeight: 900,
                lineHeight: 0.94,
                letterSpacing: -4,
                maxWidth: 920,
                display: "flex",
              }}
            >
              {title}
            </div>
            {tagline ? (
              <div
                style={{
                  color: ACCENT,
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: -0.8,
                  fontStyle: "italic",
                  display: "flex",
                  maxWidth: 720,
                }}
              >
                {tagline}
              </div>
            ) : null}
          </div>

          {/* Bottom */}
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
                color: FG,
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              {tags.slice(0, 3).map((t) => (
                <div key={t} style={{ display: "flex", background: BG_ELEV, padding: "10px 16px" }}>{t}</div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: FG,
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              <div style={{ display: "flex" }}>creativefactory.tr</div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: ACCENT,
                  color: ACCENT_ON,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 900,
                }}
              >
                ↗
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
