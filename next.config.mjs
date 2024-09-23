/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignora los errores de tipo en el build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignorar los errores de ESLint durante el build
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

export default nextConfig;