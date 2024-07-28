/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['uk', 'uk-UA'], // order does not matter here
        defaultLocale: 'uk', // the default locale to fall back to
        localeDetection: false // Disable automatic locale detection on `/`
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'team02files.s3.eu-north-1.amazonaws.com',
            port: '',
            pathname: '/assets/**'
        }]
    },
};

export default nextConfig;
