# Typesafe GQL gRPC client
## Motivation
This is a proof of concept monorepo for exploring the viability of consuming a gRPC service in a GQL service whilst enforcing E2E type security with TS

## Getting started

### Install dependencies
I have provided a yarn lock file, so recommend using yarn to install dependencies

```sh
yarn
```

### Building
To perform the codegen and TS transpilation run the `build` script

```sh
yarn build
```

### Running service
To start both the gRPC and GQL services run the `start` script

```sh
yarn start
```

You can now visit the GQL Playground at http://localhost:4001/


## Code tours
This repo has code tours for:
- Building a typesafe gRPC server
- Building a typesafe GQL server as a gRPC client