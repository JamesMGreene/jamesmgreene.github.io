import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    SITE_NAME: 'James M. Greene',
  },
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH
}

export default nextConfig
