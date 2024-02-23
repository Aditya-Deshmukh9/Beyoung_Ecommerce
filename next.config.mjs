/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.beyoung.in",
      },
    ],
  },
};

export default nextConfig;
