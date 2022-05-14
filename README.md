<div align="center">
  <img src="./assets/sentimental.png" width="360px">
</div>

# cra-template-sentimental

This is template for [Create React App](https://github.com/facebook/create-react-app) to use [emotion](https://emotion.sh/docs/introduction) easily.

## Motivation

Let's say you want to make a light React project by using emotion.

At this time, you may want to set project with create-react-app, but you will be irritating from using css prop because you are [not free to configure Babel on create-react-app](https://emotion.sh/docs/css-prop#jsx-pragma).

***cra-template-sentimental*** will solve this issue.

Also supports lightweight features for initial project setup.

## Usage

```sh
npx create-react-app my-app --template sentimental

# or

yarn create react-app my-app --template sentimental
```

## Support

- Support full emotion functionalities.
- Support prettier. 
  - If you need to change settings, modify on `~/.vscode/settings.json`.
- Support modules as small as app can operate.
  - If you want to add more functionality like `test, SSR, ...`, you have to add related things by yourself.