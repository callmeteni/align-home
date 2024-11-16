/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export mode
  basePath: '/<repository-name>', // Replace with your GitHub repository name
  trailingSlash: true, // Ensures proper routing for static export
};

export default nextConfig;
