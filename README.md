# Kata Base Repo
====================================

This is a starter repo for constructing a code kata in JavaScript, using the newest features of the language.

Provides:
- Jest testing tool
- NPM scripts to run Jest in watch mode or watch with Coverage
- ESLint support via NPM scripts
- `.editorconfig` to match the linting rules

## Exercise Description

In this kata, you will be given a grid of letters. You can assume the x and y dimensions are consistent, and that every character is a letter between A-Z.
You will be asked to return an array containing the start and end coordinates of the longest match of the samel etter in a row, column or diagnol.


## Implementation

Serving suggestion:
1. Fork (or clone) this repo and edit the `kata.js`, `kata.spec.js`, and `README.md` files for the problem you intend to kata-fy.  Feel free to change the names of course, as suits your problem space.  Don't forget to update your import statements, etc!
2. Create a NEW BRANCH to work on, so the you can keep a clean copy of your starting exercise repo for future use.

## Requirements

You should use [NodeJS v8](https://nodejs.org/en/download/) or above.

Install assignment dependencies:

```bash
npm install
```

## Linting your code

Check your code for style issues:

```bash
npm run lint
```

## Making the test suite pass

Run Jest in watch mode, with coverage info like this:

```bash
npm run watch:cover
```

In the test suite all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by
changing `xtest` to `test`.
