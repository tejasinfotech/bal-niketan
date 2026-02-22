// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,

  // 🔥 VERY IMPORTANT
  disable: process.env.NODE_ENV === "development",

  buildExcludes: [/middleware-manifest.json$/],
});

export default withPWA(nextConfig);