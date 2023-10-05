/** @type {import('next').NextConfig} */

// const https = require('https');
// const fs = require('fs');

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com','randomuser.me'],
  },
  experimental:{
    reactRoot: true,
    suppressHydrationWarning: true,
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync('./SSL/localhost-key.pem'), 
  //     cert: fs.readFileSync('./SSL/localhost.pem'), 
  //   },
  // },
}

module.exports = nextConfig
