<h1 align="center"><strong>Libraries.io Graphql API - WIP</strong></h1>

<br />

<div align="center"><img src="https://imgur.com/1MfnLVl.png" /></div>

<div align="center"><strong>🚀 Query your favorite open source projects within seconds</strong></div>
<div align="center">GraphQL API for Libraries.io - based on best practices from the GraphQL community.</div>

## Features

- **Scalable GraphQL server:** The server uses [`graphql-yoga`](https://github.com/prisma/graphql-yoga) which is based on Apollo Server & Express
- **Static type generation**: TypeScript types for GraphQL queries & mutations are generated in a build step
- **Authentication**: Signup and login workflows are ready to use for your users
- **GraphQL database:** Includes GraphQL database binding to [Prisma](https://www.prismagraphql.com) (running on MySQL)
- **Tooling**: Out-of-the-box support for [GraphQL Playground](https://github.com/prisma/graphql-playground) & [query performance tracing](https://github.com/apollographql/apollo-tracing)
- **Extensible**: Simple and flexible [data model](./database/datamodel.graphql) – easy to adjust and extend
- **No configuration overhead**: Preconfigured [`graphql-config`](https://github.com/prisma/graphql-config) setup
- **Realtime updates**: Support for GraphQL subscriptions

Read more about the idea behind GraphQL boilerplates [here](https://blog.graph.cool/graphql-boilerplates-graphql-create-how-to-setup-a-graphql-project-6428be2f3a5).

## Getting started

```sh
# 1. Clone this repo
git clone https://github.com/Novvum/librariesio-graphql-api.git

# 2. Navigate to the new project
cd librariesio-graphql-api

# 3 Install Dependencies
yarn
# ---- or ----
npm i

# 4. Start server (runs on http://localhost:4000) and open GraphQL Playground
yarn dev
# ---- or ----
npm run dev
```

![](https://imgur.com/hElq68i.png)

## Documentation

- WIP

### Commands

- `yarn start` starts GraphQL server on `http://localhost:4000`
- `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
- `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
- `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

> **Note**: We recommend that you're using `yarn dev` during development as it will give you access to the GraphQL API or your server (defined by the [application schema](./src/schema.graphql)) as well as to the Prisma API directly (defined by the [Prisma database schema](./generated/prisma.graphql)). If you're starting the server with `yarn start`, you'll only be able to access the API of the application schema.

### Project structure

## Contributing

This library is being maintained by the GraphQL community, with official support from the [Novvum](https://www.novvum.io) team.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, feel free to reach out to us!
