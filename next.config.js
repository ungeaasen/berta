/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.sanity.io']
	},
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["no"],
    defaultLocale: "no",
  },
}

module.exports = nextConfig
