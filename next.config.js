/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        localeDetection: false,
        locales: ["de"],
        defaultLocale: "de",
    },

    reactStrictMode: true,
};

module.exports = nextConfig;
