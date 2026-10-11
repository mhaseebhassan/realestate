import type { NextConfig } from "next";
import path from "path";
import fs from "fs";

// In local development on Windows, if node_modules is a junction/symlink to a sibling folder,
// Turbopack needs the common ancestor root to resolve dependencies outside the project directory.
// On Vercel and CI Linux environments, node_modules is standard, so root must not be set.
let turbopackRoot: string | undefined;
if (!process.env.VERCEL && !process.env.CI) {
  try {
    const nmPath = path.join(process.cwd(), "node_modules");
    if (fs.existsSync(nmPath) && fs.lstatSync(nmPath).isSymbolicLink()) {
      const realNm = fs.realpathSync(nmPath);
      if (!realNm.startsWith(process.cwd())) {
        turbopackRoot = path.dirname(process.cwd());
      }
    }
  } catch {
    // Ignore in environments without local symlinks
  }
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    ...(turbopackRoot ? { root: turbopackRoot } : {}),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
