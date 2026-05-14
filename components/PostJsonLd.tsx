import type { Post } from "@/lib/posts";

const SITE_URL = "https://creativefactory.tr";

export default function PostJsonLd({ post }: { post: Post }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.seoDescription,
    image: post.heroImage ? `${SITE_URL}${post.heroImage}` : undefined,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Creative Factory",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(", "),
    inLanguage: "tr-TR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
