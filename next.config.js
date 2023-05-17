const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
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
// module.exports = nextConfig;

module.exports = withContentlayer(nextConfig);
