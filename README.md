# Codalong: Next.js app - Promptopia

A code along after YouTube tutorial by [JavaScript Mastery](https://www.youtube.com/watch?v=wm5gMKuwSYk&t=2733s)

## Creating a Next.js app

`cd` to Your folder and run:

```bash
npx create-next-app@latest ./
```

During the process you will be asked settings. Select

- TypeScript - No
- ESLint - No
- Tailwind CSS - Yes
- src/ directory - No
- App Router - Yes
- customize import alias? No

Additionally you'll need to install several packages:

```bash
npm install bcrypt mongodb mongoose next-auth
```

- bcrypt - for password hashing
- mongodb - for MongoDB
- mongoose - for MongoDB
- next-auth - for authentication

## Launching Dev server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


## Project Notes

### App folder

Create a folder called `app` from scratch (delete everything create-nex-app created)

Create `page.jsx` file and run `rafce` snippet in it