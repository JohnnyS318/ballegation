# ballegation - web
This is the frontend of the ballegation project. It uses the svelte-kit framework and is powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

Start by installing all neccessary packagages with the follwing command (yes you need the [yarn package manager](https://yarnpkg.com/)):

```bash
yarn
```

Then start the development server with:

```bash
yarn dev 

#or

yarn run dev
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then run:

```bash
yarn build 

#or 

yarn run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
