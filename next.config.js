/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movie/popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      },
    ]
  }
}

module.exports = nextConfig
