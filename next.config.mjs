const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'res.cloudinary.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
