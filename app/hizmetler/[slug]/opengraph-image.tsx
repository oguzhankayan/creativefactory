import { ImageResponse } from "next/og";
import { SERVICES } from "@/lib/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function OG({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const title = service?.title ?? "Hizmet";
  const tagline = service?.tagline ?? "";

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
              width: 32,
              height: 32,
              gap: 4,
            }}
          >
            <div style={{ width: 14, height: 14, background: "#c8ff3d", borderRadius: 2 }} />
            <div style={{ width: 14, height: 14, background: "#c8ff3d", borderRadius: 2 }} />
            <div style={{ width: 14, height: 14, background: "#eef0f4", borderRadius: 2 }} />
            <div style={{ width: 14, height: 14, background: "#c8ff3d", borderRadius: 2 }} />
          </div>
          <div
            style={{
              display: "flex",
              color: "#8a8f9a",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Creative Factory · Hizmet {service?.n ?? ""}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              color: "#eef0f4",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2.5,
            }}
          >
            {title}
          </div>
          {tagline ? (
            <div
              style={{
                color: "#c8ff3d",
                fontSize: 30,
                fontWeight: 500,
                letterSpacing: -0.5,
              }}
            >
              {tagline}
            </div>
          ) : null}
        </div>

        <div
          style={{
            color: "#8a8f9a",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          creativefactory.tr
        </div>
      </div>
    ),
    size
  );
}
