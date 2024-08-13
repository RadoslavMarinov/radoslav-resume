/** @type {import('next').NextConfig} */

const basePath = process.env.BASE_PATH ?? ''
console.log(`👉 BASE PATH  = `, basePath); 
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  // images:{
  //   loader: "custom",
  //   loaderFile: './tools/custom-image-loader.js',
  //   path: '/pages'
  // }
};

export default nextConfig;
