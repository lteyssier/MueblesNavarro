## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over relevant code/assets from your current app to the new project that's pre-configured for your target server.

Most importantly, this means everything in the `app/` directory, but if you've further customized your current application outside of there it may also include:

- Any assets you've added/updated in `public/`
- Any updated versions of root files such as `.eslintrc.js`, etc.

### How does it work.

From Strapi backend, is capable to storage info about the product. interface designed to easily fill the data
<img width="1100" alt="Captura de pantalla 2023-10-07 a la(s) 19 58 46" src="https://github.com/lteyssier/MueblesNavarro/assets/6034865/929bcd27-776b-4feb-887c-0e828b6b4263">

Automatically upload the new data to main menu.
<img width="1100" alt="Captura de pantalla 2023-10-07 a la(s) 19 37 33" src="https://github.com/lteyssier/MueblesNavarro/assets/6034865/db571192-4244-48bd-898a-a97596eea4fe">

And each item has it's own page (react remix function)
<img width="1000" alt="Captura de pantalla 2023-10-14 a la(s) 15 41 42" src="https://github.com/lteyssier/MueblesNavarro/assets/6034865/222f9f71-5225-4566-950e-6b2baef32a7a">



