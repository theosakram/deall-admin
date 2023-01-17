/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products?page=1",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
