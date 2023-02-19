/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "i.scdn.co",
            "localhost",
            "jkdelara.com",
            "jsondelara.com",
        ],
    },
};

module.exports = nextConfig;
