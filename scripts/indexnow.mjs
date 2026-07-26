// Pings IndexNow (Bing, Yandex, Seznam) with all canonical URLs after deploy.
// Reads service slugs from lib/services.ts so it stays in sync automatically.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const HOST = "creativefactory.tr";
const KEY = "27b440b3be5fe7d9af1821a147277aa2";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const STATIC_PATHS = [
  "/",
  "/isler",
  "/ajanslar-icin",
  "/hakkimizda",
  "/blog",
  "/en",
  "/en/about",
  "/en/contact",
  "/kvkk",
  "/cerez-politikasi",
  "/kullanim-kosullari",
];

function extractSlugs(file) {
  const src = readFileSync(join(ROOT, file), "utf8");
  const slugs = [];
  const rx = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = rx.exec(src))) slugs.push(m[1]);
  return slugs;
}

async function main() {
  const serviceSlugs = extractSlugs("lib/services.ts");
  const postSlugs = extractSlugs("lib/posts.ts");
  const urlList = [
    ...STATIC_PATHS.map((p) => `https://${HOST}${p}`),
    ...serviceSlugs.map((s) => `https://${HOST}/hizmetler/${s}`),
    ...postSlugs.map((s) => `https://${HOST}/blog/${s}`),
  ];

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`[indexnow] Pinging ${urlList.length} URLs…`);

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  const text = await res.text().catch(() => "");

  if (res.status === 200 || res.status === 202) {
    console.log(`[indexnow] ✓ ${res.status} ${res.statusText}`);
  } else {
    console.warn(`[indexnow] ✗ ${res.status} ${res.statusText}`);
    if (text) console.warn(`[indexnow] body: ${text}`);
    // Non-fatal: don't fail the deploy
    process.exitCode = 0;
  }
}

main().catch((err) => {
  console.warn(`[indexnow] error (non-fatal): ${err.message}`);
});
