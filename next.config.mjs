/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['uk', 'uk-UA'], // order does not matter here
        defaultLocale: 'uk', // the default locale to fall back to
        localeDetection: false // Disable automatic locale detection on `/`
    },
};

export default nextConfig;
