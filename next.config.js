// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["placeholder.co"]
//     }
// }

// module.exports = nextConfig

module.exports = {
    output: 'standalone',
    headers: {
        'Access-Control-Allow-Origin': ['https://buerdel.dev']
    }
};
