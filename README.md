# eslint-config-react

This is my preferred React code style linting rules. You'll probably hate them.

## Idea behind these

No tricks, no magic, no useless code, no complicated code. Very opinionated about all these spaces, quotes, parentheses.
A bit of sanity applied, but not too much.

## Installation

Installation steps assumes you've already configured base eslint config, ie: installed
[my base rules](https://github.com/dzek69/eslint-config-base).

```
npm i eslint-plugin-react @dzek69/eslint-config-react --save-dev
```

In your `.eslintrc` file add the rules in `extends` array:
```json
{
  "extends": [
    "@dzek69/eslint-config-react"
  ]
}
```

It will automatically enable jsx and define react plugin. You may however want to set your pragma and React version
settings - [look here](https://github.com/yannickcr/eslint-plugin-react#configuration).

Then to lint `src` and `test` directories with subdirectories run:
```
npx eslint src/**/*.js src/*.js test/**/*.js test/*.js
```

## Test files issues

Some of these rules may be annoying in tests files. Use overrides in your config:
```json
{
  "overrides": [
    {
      "files": ["test/*.js", "test/**/*.js"],
      "env": {
        "mocha": true
      },
      "rules": {
        "react/no-multi-comp": "off"
      }
    }
  ]
}
```

See [eslint config guide](https://eslint.org/docs/user-guide/configuring) for more details.

## Full config example

This is full config that I am using in one of my projects, feel free to take inspiration:

```json
{
  "extends": [
    "@dzek69/eslint-config-base",
    "@dzek69/eslint-config-react"
  ],
  "env": {
    "node": true
  },
  "overrides": [
    {
      "files": ["src/*.spec.js", "src/**/*.spec.js"],
      "env": {
        "mocha": true
      },
      "rules": {
        "global-require": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-statements": "off",
        "no-magic-numbers": "off",
        "react/no-multi-comp": "off"
      }
    }
  ]
}
```

## License

MIT
