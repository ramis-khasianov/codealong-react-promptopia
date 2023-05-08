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

Create `page.jsx` file and run `rafce` snippet in it - it will be out homepage

Create `layout.jsx` file and run `rafce` snippet in it - it will be layout holding app-wide styles and metadata in it


## Setting up Google auth

Go to [Google Developers Console](https://console.developers.google.com/) and create a new project (top left-ish corner)

Select it and go to APIs & Services > OAuth consent screen. Fill out app name and contact info for support and developer

Then go to Credentials and create a new OAuth client ID

Select Web application and fill out the form with your app's URL (http://localhost:3000) and authorized redirect URI (http://localhost:3000/api/auth/callback/google)

Then insert them in `.env` file in root folder just like in `.env.example` file


## Setting up MongoDB Database

Go to [MongoDB](https://www.mongodb.com/atlas) and register. Create a new free tier cluster

Next you go to Database Access and create new user, giving him acces to read and write to any database

Nex you need to go to Network Access and add your IP address to whitelist (or just press "Allow access from anywhere")

Then go to Database > Connect > Connect your application and copy the connection string

Then insert it in `.env` file in root folder just like in `.env.example` file