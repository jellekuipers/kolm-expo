<div align="center">
  <a href="https://github.com/jellekuipers/kolm-expo">
    <img src="https://github.com/jellekuipers/kolm-start/blob/main/public/favicon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">kolm expo</h3>

  <p align="center">
    A very minimal Expo starter with API routes, tRPC, Drizzle ORM, better-auth and TailwindCSS
    <br/>
    <a href="https://github.com/jellekuipers/kolm-expo/issues/new?labels=bug">Report Bug</a>
    ·
    <a href="https://github.com/jellekuipers/kolm-expo/issues/new?labels=feature-request">Request Feature</a>
  </p>
</div>

## About The Project

A very minimal Expo starter with `tRPC`, `drizzle-orm`, `better-auth` and `tailwindcss`, using Expo's API routes.

Check out <a href="https://github.com/jellekuipers/kolm-start">kolm-start</a>, for a `@tanstack/react-start` starter with `tRPC`, `drizzle-orm`, `better-auth` and `tailwindcss`.

Or <a href="https://github.com/jellekuipers/kolm-start-admin">kolm-start-admin</a>, for a `@tanstack/react-start` + `better-auth` admin starter, with `drizzle-orm`, `tRPC`, `@radix-ui/themes`.

And <a href="https://github.com/jellekuipers/kolm-serve">kolm-serve</a> for a `hono` starter, with `better-auth`, `tRPC` and `drizzle-orm`.

## Getting Started

### Prerequisites

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo, or use the template
   ```sh
   git clone https://github.com/jellekuipers/kolm-expo.git
   ```
2. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Connect to your database in your `.env` and set base URL for `better-auth`
   ```sh
   EXPO_PUBLIC_DATABASE_URL=
   EXPO_PUBLIC_BASE_URL=
   ```
5. Initialize database

   ```sh
   npm run db:push
   ```

6. Start the dev server
   ```sh
   npx expo start
   ```

## Roadmap

See the [open issues](https://github.com/jellekuipers/kolm-expo/issues) for a full list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- [Expo](https://expo.dev/)
- [tRPC](https://trpc.io/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [better-auth](https://www.better-auth.com/)
- [TailwindCSS](https://tailwindcss.com/docs/v4-beta)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
