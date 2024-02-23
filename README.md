# react-emulatorjs repository

Repository for developing `react-emulatorjs` library

<div align = center>

![Static Badge](https://img.shields.io/badge/demo-playground?style=for-the-badge&logo=githubpages&labelColor=%23C21292&color=%239195F6&link=https%3A%2F%2Fdimitrikarpov.github.io%2Freact-emulatorjs)
![Static Badge](https://img.shields.io/badge/npm-react--emulatorjs?style=for-the-badge&logo=npm&color=%239195F6&labelColor=FF6969&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-emulatorjs)
![Static Badge](https://img.shields.io/badge/github-777?style=for-the-badge&logo=github&labelColor=%2300A9FF&color=%23D0A2F7&link=https%3A%2F%2Fgithub.com%2Fdimitrikarpov%2Freact-emulatorjs)
![Static Badge](https://img.shields.io/badge/api-api?style=for-the-badge&logo=docsdotrs&labelColor=blue&color=%239195F6&link=https%3A%2F%2Fdimitrikarpov.github.io%2Freact-emulatorjs)

</div>

## What's inside?

This repository includes the following packages/apps:

### Apps and Packages

- `examples/playground`: a playground app [online demo](https://dimitrikarpov.github.io/react-emulatorjs/)
- `packages/react-emulatorjs`: the library itself [npm](https://www.npmjs.com/package/react-emulatorjs)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
npm build
```

### Develop

To develop all apps and packages, run the following command:

```
npm dev
```

### Deploying library

To update library version, run the following command:

```
npx changeset
```

Select `packages/react-emulatorjs` library and add new changelog lines.

To publish updated package to NPM, run the following command:

```
npm run publish-packages
```
