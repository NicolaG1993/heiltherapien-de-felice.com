/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        localeDetection: false,
        locales: ["de"],
        defaultLocale: "de",
    },

    env: {
        REACT_AWS_KEY: process.env.REACT_AWS_KEY,
        REACT_AWS_SECRET: process.env.REACT_AWS_SECRET,
        RECAPTCHA_PUBLIC_KEY: process.env.RECAPTCHA_PUBLIC_KEY,
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    },

    reactStrictMode: true,
};

module.exports = nextConfig;
