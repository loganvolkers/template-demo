![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Template Demo

This is a proof of concept for building templated dynamic components using Stencil and `<template>` tags. It is inspired by React context and [Stencil Context](https://github.com/petermikitsh/stencil-context).


## HTML all the way down
The whole is inspired by Vue. The goal is to create templates that can render dynamically but are valid HTML.

JSX, Handlebars, Mustache, Jinja, Liquid, ICU (ReactIntl, Vue I18n), JSONata, and other languages for dynamically accessing data and building components and strings are fantastic technologies, but they fail the web component test. **They are not valid HTML**.

Why use templates based on valid HTML?
 - Tooling is easier 
    - WYSIWYG Editors (e.g. TinyMCE, GrapesJS, etc.)
    - Testing (e.g. JSDom )
    - Translation tools (e.g. [Transifex](https://docs.transifex.com/translation/html-files))
    - Linting and validation
 - Everyone already knows HTML
 - Simple toolchain
    - Just Stencil.js, can be rendered anywhere. No need for multiple layers. No need for pre-compilation.

## Why `<template>` tags?

 - Part of the HTML specification
 - `<slot>` tags don't work when you need a component rendered multiple times.
 - [Good browser support](https://caniuse.com/#feat=template)
 - [Supported Polyfills](https://github.com/webcomponents/polyfills/tree/master/packages/template)


## Getting Started

To run this example clone this repo and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our the [Stencil Documentation](https://stenciljs.com/docs/my-first-component).

## Using this component

These components have not been published, and cannot be used outside of cloning this repository.

# About Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.
