/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        fontLoaders: [
            { loader: "next/font/google", options: { subsets: ["latin"] } },
        ],
    },

    images: {
        domains: [
            "res.cloudinary.com",
            "i.scdn.co",
            "localhost",
            "jkdelara.com",
            "jsondelara.com",
            "images.unsplash.com",
        ],
    },
};

module.exports = nextConfig;
