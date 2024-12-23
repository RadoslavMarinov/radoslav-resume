
## Development

First, run the development server:

```bash
npm run dev
```

### ❗️Important: Images:
  - USE `StaticImage` component for images❗️ Next Image component does not work for staticly generated sites. Therefore the native `<img>` tag shoult be used instead. The path to the image though should be prefixed with the Site base path (which is pages) [see more](https://nextjs.org/docs/pages/api-reference/next-config-js/basePath). Therefore a new `StaticImage` component is made to prefix the image src with the site base path


## Environemnt variables:
- `BASE_PATH` - the site base path following the domain [see more](https://nextjs.org/docs/pages/api-reference/next-config-js/basePath)
- `NEXT_PUBLIC_BASE_PATH` - the same as `BASE_PATH` but for the frontend

## Locally test production build
1) Go to `cd src/pages`
2) Run `npm run build`. An `out` directory should appear
3) Go to `cd ./out`
4) Find `index.html` and serve via **Live Server** extension

## Deployment
### [GithubPages](./docs/GithubPages/GitHubPages.md)
### [CloudFlare](./docs/CloudFlare/CloudFlare.md)
### [Domain name registrar - Namecheap](./docs/DomainNameRegistrar/NameCheap.md)