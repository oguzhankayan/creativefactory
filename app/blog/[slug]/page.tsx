import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PostJsonLd from "@/components/PostJsonLd";
import { POSTS, getPost, getOtherPosts } from "@/lib/posts";
import { getPostBody } from "@/lib/posts-content";

const SITE_URL = "https://creativefactory.tr";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} · Insights`,
    description: post.seoDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      url,
      type: "article",
      locale: "tr_TR",
      siteName: "Creative Factory",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.seoDescription,
    },
  };
}

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", DATE_FORMAT);
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const body = getPostBody(slug);
  const others = getOtherPosts(slug, 3);

  return (
    <>
      <PostJsonLd post={post} />
      <Nav />
      <main id="main" className="post" key={post.slug}>
        <div className="sd__topbar">
          <Link href="/blog" className="sd__back">
            <span className="sd__back-arrow" aria-hidden="true">←</span>
            <span>Tüm yazılar</span>
          </Link>
          <span className="sd__crumbs">
            <span className="dim">Insights</span>
            <span className="sd__crumb-sep" aria-hidden="true">/</span>
            <span>{post.title}</span>
          </span>
        </div>

        <section className="post__hero">
          <Reveal as="div">
            <span className="kicker">
              {formatDate(post.date)} · {post.readMinutes} dk okuma
            </span>
          </Reveal>
          <Reveal as="h1" delay={100} className="post__title">
            {post.title}
          </Reveal>
          <Reveal as="p" delay={200} className="post__excerpt">
            {post.excerpt}
          </Reveal>
          <Reveal delay={280} className="post__meta">
            <span>Yazar · {post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.tags.join(" · ")}</span>
          </Reveal>
          {post.heroImage && (
            <Reveal delay={360} className="post__hero-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.heroImage}
                alt=""
                width={1600}
                height={896}
                loading="eager"
                decoding="async"
                className="post__hero-img"
              />
            </Reveal>
          )}
        </section>

        <article className="prose-cf">
          {body ?? <p>Bu yazının içeriği henüz yüklenmedi.</p>}
        </article>

        <section className="post__others">
          <div className="section-head section-head--split">
            <div>
              <Reveal as="div">
                <span className="kicker">Devam et</span>
              </Reveal>
              <Reveal as="h2" delay={100} className="section-h">
                Diğer yazılar.
              </Reveal>
            </div>
          </div>
          <ul className="sd__others-list">
            {others.map((o, i) => (
              <Reveal as="li" key={o.slug} delay={i * 60}>
                <Link href={`/blog/${o.slug}`} className="sd__other">
                  <span className="sd__other-n">
                    {String(POSTS.indexOf(o) + 1).padStart(2, "0")}
                  </span>
                  <span className="sd__other-title">{o.title}</span>
                  <span className="sd__other-tags">{o.tags.join(" · ")}</span>
                  <span className="sd__other-arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
