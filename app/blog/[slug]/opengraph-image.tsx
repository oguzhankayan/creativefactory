import { ImageResponse } from "next/og";
import { POSTS, getPost } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
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
  const post = getPost(slug);
  const title = post?.title ?? "Insights";
  const tag = post?.tags?.[0] ?? "Insights";
  const date = post?.date ?? "";

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
        {/* Top accent stripe */}
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

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "76px 72px 64px",
          }}
        >
          {/* Top: kicker */}
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
              Creative Factory · Insights · {tag}
            </div>
          </div>

          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                color: FG,
                fontSize: 72,
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: -2.5,
                maxWidth: 1020,
                display: "flex",
              }}
            >
              {title}
            </div>
            <div
              style={{
                color: ACCENT,
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: 0.5,
                fontStyle: "italic",
                display: "flex",
              }}
            >
              {date ? `Yayın · ${date}` : "Insights"}
            </div>
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
                background: BG_ELEV,
                padding: "12px 20px",
                color: FG,
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              creativefactory.tr/blog
            </div>
            <div
              style={{
                width: 56,
                height: 56,
                background: ACCENT,
                color: ACCENT_ON,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 900,
              }}
            >
              ↗
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
