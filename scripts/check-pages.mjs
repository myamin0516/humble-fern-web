import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const requiredPages = ["index.html", "404.html"];
const groveOrigin = "https://grove-waitlist-silk.vercel.app";

const mustContain = ["Humble Fern LLC", "hello@humblefern.com"];
const mustNotContain = [
  "grove.notes.app@gmail.com",
  "myamin0516@gmail.com",
  "PostHog",
  "posthog",
];

let failed = false;

for (const page of requiredPages) {
  const path = join(root, page);
  let html;
  try {
    html = readFileSync(path, "utf8");
  } catch {
    console.error(`MISSING ${page}`);
    failed = true;
    continue;
  }

  for (const needle of mustContain) {
    if (!html.includes(needle)) {
      console.error(`FAIL ${page}: missing "${needle}"`);
      failed = true;
    }
  }

  for (const needle of mustNotContain) {
    if (html.includes(needle)) {
      console.error(`FAIL ${page}: still contains "${needle}"`);
      failed = true;
    }
  }
}

const vercel = readFileSync(join(root, "vercel.json"), "utf8");
for (const path of ["/privacy", "/terms", "/support"]) {
  if (!vercel.includes(`${groveOrigin}${path}`)) {
    console.error(`FAIL vercel.json: missing redirect to ${groveOrigin}${path}`);
    failed = true;
  }
}

if (failed) {
  console.error("check-pages failed");
  process.exit(1);
}

console.log(
  "check-pages ok: company pages name Humble Fern LLC; Grove legal URLs redirect to the app site"
);
