# TODO

## The Plan

> I will use storybook to develop components using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles

- ### [] Development Environment

  - [x] NextJS
    - configure typescript
    - configure sass
  - [x] Storybook
    - configure to work with sass
    - install @storybook/addon-a11y to follow accessibility standards
  - [x] ESLint
    - airbnb style guide
  - [x] Stylelint
    - lint sass
  - [x] Prettier
    - should play nice with ESLint
  - [] Testing
    - [x] jest
    - [x] testing-library/react
    - [x] testing-library/react-hooks
      - testing custom hooks
    - [x] testing-library/user-event
      - offers more advance event simulations than 'fireEvent'
      - simulate <input type="file" multiple />
    - accessibility
      - [x] [jest-axe](https://github.com/nickcolley/jest-axe#readme)
      - [x] [axe-core](https://www.npmjs.com/package/jest-axe)
    - [] Cypress
      - typescript setup
  - [x] Husky && lint-staging
    - should pass testing and linting
