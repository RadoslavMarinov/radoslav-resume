## Hello Riko

* ## [NextJS App Readme](./src/pages/README.md)

### Prepare for github pages
To prepare the build output of the NextJS static site, we need to copy it over to docs folder in the root 
[Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#about-publishing-sources).
Once the site is exported `npm run build` then the output form the `src/pages/out` directory need to be moved over to `docs` directory



###  !ADD `.nojekyll` file in the docs root (docs dir)  in order to bypass jekyll. Jekyll disregards _next dir asesets: see [Assets not working next static site on github pages](https://stackoverflow.com/questions/61450307/js-and-css-not-loading-when-hosting-next-application-on-github-pages)

### Next Config
[Next config file](./src/pages/next.config.mjs): 
*  `output: "export" ` for static pages export [docs](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#configuration) 
* `basePath: '/radoslav-pages'` the root path of the github url.
  ```javascript
    const nextConfig = {
      reactStrictMode: true,
      output: "export",
      basePath: '/pages'
    }
  ```