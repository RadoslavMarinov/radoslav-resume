export default function myImageLoader({ src, width, quality }) {
  const basePath = process.env.BASE_PATH || ''
  return `${basePath}${src}`
}